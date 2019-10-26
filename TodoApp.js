System.register(["./TodoService.js"], function (exports_1, context_1) {
    "use strict";
    var TodoService_js_1, TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TodoService_js_1_1) {
                TodoService_js_1 = TodoService_js_1_1;
            }
        ],
        execute: function () {
            TodoApp = /** @class */ (function () {
                function TodoApp(el, todos) {
                    this.todoService = new TodoService_js_1.default(todos);
                }
                TodoApp.prototype.addTodo = function (todoName) {
                    this.todoService.add(todoName);
                    this.renderTodos();
                };
                TodoApp.prototype.clearCompleted = function () {
                    this.todoService.clearCompleted();
                    this.renderTodos();
                };
                TodoApp.prototype.toggleTodoState = function (todoId) {
                    this.todoService.toggle(todoId);
                    this.renderTodos();
                };
                TodoApp.prototype.renderTodos = function () {
                    var todos = this.todoService.getAll();
                    this.todoList.render(todos);
                };
                TodoApp.prototype.initialize = function (el) {
                    var _this = this;
                    var addTodoFormEl = el.getElementsByClassName('add-todo')[0], addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0], todoListEl = el.getElementsByClassName('todo-list')[0], clearCompletedEl = el.getElementsByClassName('clear-completed')[0];
                    addTodoFormEl.addEventListener('submit', function (evt) {
                        _this.addTodo(addTodoNameEl.value);
                        addTodoNameEl.value = '';
                        evt.preventDefault();
                    });
                    todoListEl.addEventListener('todo-toggle', function (evt) {
                        var todoId = evt.details.todoId;
                        _this.todoService.toggle(todoId);
                        _this.renderTodos();
                    });
                    clearCompletedEl.addEventListener('click', function () {
                        _this.clearCompleted();
                    });
                };
                return TodoApp;
            }());
            exports_1("TodoApp", TodoApp);
        }
    };
});
