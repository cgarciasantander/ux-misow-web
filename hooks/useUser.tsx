"use client";
import {
  useReducer,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";
import { Dependent, User } from "./types";

type UserDispatch =
  | { type: "TOGGLE_LOADING" }
  | { type: "SET_USER"; user: User | null }
  | { type: "SET_USERS"; users: Map<string, User> }
  | { type: "RESTORE_SESSION"; state: UserState };

type UserActions = {
  login: (email: string, password: string) => Promise<boolean>;
  createUser: (
    user: Pick<User, "email" | "firstName" | "lastName" | "password">
  ) => Promise<User>;
  createDependent: (dependent: Dependent) => Promise<Dependent>;
  logout: () => void;
};

type UserState = {
  loading: boolean;
  user?: User | null;
  users: Map<string, User>;
};

function UserReducer(state: UserState, action: UserDispatch): UserState {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
}

const defaultState: UserState = {
  loading: false,
  users: new Map([
    [
      "john@example.com",
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "12345",
        dependents: [],
      },
    ],
  ]),
};

export function useUser() {
  const [state, dispatch] = useReducer(UserReducer, defaultState);

  const actions: UserActions = {
    login: async (email: string, password: string): Promise<boolean> => {
      return new Promise((resolve) => {
        dispatch({ type: "TOGGLE_LOADING" });

        const user = state.users.get(email);
        const valid = user?.password === password;

        setTimeout(() => {
          if (valid) {
            dispatch({ type: "SET_USER", user });
          }

          dispatch({ type: "TOGGLE_LOADING" });
          resolve(valid);
        }, 1000);
      });
    },
    createUser: async (payload): Promise<User> => {
      return new Promise((resolve, reject) => {
        dispatch({ type: "TOGGLE_LOADING" });

        setTimeout(() => {
          const registered = state.users.has(payload.email);

          if (registered) {
            reject(new Error("El usuario ya está registrado"));
            return;
          }

          const user = {
            ...payload,
            dependents: [],
          };

          const users = state.users.set(user.email, user);
          dispatch({ type: "SET_USERS", users });
          dispatch({ type: "TOGGLE_LOADING" });

          resolve(user);
        }, 1000);
      });
    },
    createDependent: (dependent: Dependent): Promise<Dependent> => {
      return new Promise((resolve, reject) => {
        dispatch({ type: "TOGGLE_LOADING" });

        setTimeout(() => {
          if (!state.user) {
            reject(new Error("El usuario no ha iniciado sesion."));
            return;
          }

          if (
            state.user.dependents.some(
              (d) =>
                d.name === dependent.name && d.birthDate === dependent.birthDate
            )
          ) {
            reject(new Error("Ya existe un dependiente con el mismo nombre y fecha de nacimiento."));
            return;
          }

          const user = {
            ...state.user,
            dependents: [...state.user.dependents, dependent],
          };

          const users = state.users.set(user.email, user);

          dispatch({ type: "SET_USER", user });
          dispatch({ type: "SET_USERS", users });
          dispatch({ type: "TOGGLE_LOADING" });

          resolve(dependent);
        }, 1000);
      });
    },
    logout: async () => {
      dispatch({ type: "SET_USER", user: null });
    },
  };

  return { state, actions };
}

const UserContext = createContext<{
  state?: UserState;
  actions?: UserActions;
}>({});

export const UserProvider = (props: PropsWithChildren) => {
  const { state, actions } = useUser();

  return (
    <UserContext.Provider value={{ state, actions }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
