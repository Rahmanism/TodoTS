import TodoService, { ITodoService } from './TodoService.js';
import TodoListComponent from './TodoListComponent.js';

export class TodoApp {
    private todoService: ITodoService;
    private todoList: TodoListComponent;

    constructor(el, todos: string[]) {
        this.todoList = new TodoListComponent(el);
        this.todoService = new TodoService(todos);
        this.initialize(el);
    }

    addTodo(todoName) {
        this.todoService.add(todoName);
        this.renderTodos();
    }

    clearCompleted() {
        this.todoService.clearCompleted();
        this.renderTodos();
    }

    toggleTodoState(todoId) {
        this.todoService.toggle(todoId);
        this.renderTodos();
    }

    renderTodos() {
        let todos = this.todoService.getAll();
        this.todoList.render(todos);
    }

    initialize(el) {
        let _this = this;
        let addTodoFormEl = el.getElementsByClassName('add-todo')[0],
            addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0],
            todoListEl = el.getElementsByClassName('todo-list')[0],
            clearCompletedEl = el.getElementsByClassName('clear-completed')[0];

        addTodoFormEl.addEventListener('submit', function (evt) {
            _this.addTodo(addTodoNameEl.value);
            addTodoNameEl.value = '';
            evt.preventDefault();
        });

        todoListEl.addEventListener('todo-toggle', function (evt) {
            let todoId = evt.detail.todoId;
            _this.todoService.toggle(todoId);
            _this.renderTodos();
        }, false);

        clearCompletedEl.addEventListener('click', function () {
            _this.clearCompleted();
        });

        this.todoList = new TodoListComponent(todoListEl);

        this.renderTodos();
    }
} 
