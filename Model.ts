export class Todo {
    id: number;
    name: string;
    state: TodoState;
}

export enum TodoState {
    Active = 1,
    Completed = 2,
    Deleted = 3
}
