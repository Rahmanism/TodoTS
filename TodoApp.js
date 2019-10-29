System.register(["./TodoService.js", "./TodoListComponent.js"], function (exports_1, context_1) {
    "use strict";
    var TodoService_js_1, TodoListComponent_js_1, TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TodoService_js_1_1) {
                TodoService_js_1 = TodoService_js_1_1;
            },
            function (TodoListComponent_js_1_1) {
                TodoListComponent_js_1 = TodoListComponent_js_1_1;
            }
        ],
        execute: function () {
            TodoApp = class TodoApp {
                constructor(el, todos) {
                    this.todoList = new TodoListComponent_js_1.default(el);
                    this.todoService = new TodoService_js_1.default(todos);
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
                    let addTodoFormEl = el.getElementsByClassName('add-todo')[0], addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0], todoListEl = el.getElementsByClassName('todo-list')[0], clearCompletedEl = el.getElementsByClassName('clear-completed')[0];
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
                    this.todoList = new TodoListComponent_js_1.default(todoListEl);
                    this.renderTodos();
                }
            };
            exports_1("TodoApp", TodoApp);
        }
    };
});
