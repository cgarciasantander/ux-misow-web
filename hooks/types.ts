export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dependents: Dependent[]
};

export type Dependent = {
    name: string
}