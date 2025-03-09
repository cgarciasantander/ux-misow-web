"use client";
import {
  useReducer,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { User } from "./types";

type UserDispatch =
  | { type: "TOGGLE_LOADING" }
  | { type: "SET_USER"; user: User }
  | { type: "SET_USERS"; users: Map<string, User> }
  | { type: "RESTORE_SESSION"; state: UserState };

type UserActions = {
  login: (email: string, password: string) => Promise<boolean>;
  createUser: (
    user: Pick<User, "email" | "firstName" | "lastName" | "password">
  ) => Promise<User>;
};

type UserState = {
  loading: boolean;
  user?: User;
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
        password: "example",
        dependents: [],
      },
    ],
  ]),
};

export function useUser() {
  const [state, dispatch] = useReducer(UserReducer, defaultState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("users");
    
      if (stored) {
        const users: User[] = JSON.parse(stored);
  
        dispatch({
          type: "SET_USERS",
          users: new Map(users.map((user) => [user.email, user])),
        });
      }
    } catch {
      localStorage.clear();
      location.reload();
    }
  }, []);

  useEffect(() => {
    const onbeforeunloadFn = () => {
      localStorage.setItem("users", JSON.stringify([...state.users.values()]));
    };

    window.addEventListener("beforeunload", onbeforeunloadFn);
    return () => {
      window.removeEventListener("beforeunload", onbeforeunloadFn);
    };
  }, [state.users]);

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
        }, 2500);
      });
    },
    createUser: async (payload): Promise<User> => {
      return new Promise((resolve, reject) => {
        dispatch({ type: "TOGGLE_LOADING" });

        const registered = state.users.has(payload.email);

        setTimeout(() => {
          dispatch({ type: "TOGGLE_LOADING" });

          if (registered) {
            return reject(new Error("El usuario ya está registrado"));
          }

          const user = {
            ...payload,
            dependents: [],
          };

          const users = state.users.set(user.email, user);
          dispatch({ type: "SET_USERS", users });

          resolve(user);
        }, 2500);
      });
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
