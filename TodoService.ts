import { Todo, TodoState } from "./Model.js";

export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}

let _lastId = 0;
function generateTodoId(): number {
    return _lastId += 1;
}

function clone<T>(src: T): T {
    let clone = JSON.stringify(src);
    return JSON.parse(clone);
}

export default class TodoService implements ITodoService {
    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if (todos) {
            todos.forEach(todo => this.add(todo));
        }
    }

    add(todo: Todo): Todo;
    add(todo: string): Todo;
    add(input: any): Todo {
        let todo: Todo = {
            id: generateTodoId(),
            name: null,
            state: TodoState.Active
        };

        if (typeof input === 'string') {
            todo.name = input
        // } else if (input instanceof Todo) {
        } else if (typeof input.name === "string") {
            todo.name = input.name;
        } else {
            throw 'Invalid Todo name.';
        }

        this.todos.push(todo);

        return todo;
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(
            x => x.state == TodoState.Active);
    }

    getAll(): Todo[] {
        return clone(this.todos);
    }

    getById(todoId: number): Todo {
        let todo = this._find(todoId);
        return clone(todo);
    }

    private _find(todoId: number): Todo {
        let filtered = this.todos.filter(
            x => x.id == todoId
        );
        if (filtered.length) {
            return filtered[0];
        }

        return null;
    }

    toggle(todoId: number): void {
        let todo = this._find(todoId);
        if (!todo) return;

        switch (todo.state) {
            case TodoState.Active: {
                todo.state = TodoState.Completed;
                break;
            }
            case TodoState.Completed: {
                todo.state = TodoState.Active;
                break;
            }
        }
    }
}