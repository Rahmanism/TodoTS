import { Todo } from "./Model.js";
export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
export default class TodoService implements ITodoService {
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    private _find;
    toggle(todoId: number): void;
}
