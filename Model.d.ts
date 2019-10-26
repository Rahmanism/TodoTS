export declare class Todo {
    id: number;
    name: string;
    state: TodoState;
}
export declare enum TodoState {
    Active = 1,
    Completed = 2,
    Deleted = 3
}
