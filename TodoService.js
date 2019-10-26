System.register(["./Model.js"], function (exports_1, context_1) {
    "use strict";
    var Model_js_1, _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return _lastId += 1;
    }
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    return {
        setters: [
            function (Model_js_1_1) {
                Model_js_1 = Model_js_1_1;
            }
        ],
        execute: function () {
            _lastId = 0;
            TodoService = /** @class */ (function () {
                function TodoService(todos) {
                    var _this = this;
                    this.todos = [];
                    if (todos) {
                        todos.forEach(function (todo) { return _this.add(todo); });
                    }
                }
                TodoService.prototype.add = function (input) {
                    var todo = {
                        id: generateTodoId(),
                        name: null,
                        state: Model_js_1.TodoState.Active
                    };
                    if (typeof input === 'string') {
                        todo.name = input;
                    }
                    else if (input instanceof Model_js_1.Todo) {
                        todo.name = input.name;
                    }
                    else {
                        throw 'Invalid Todo name.';
                    }
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.clearCompleted = function () {
                    this.todos = this.todos.filter(function (x) { return x.state == Model_js_1.TodoState.Active; });
                };
                TodoService.prototype.getAll = function () {
                    return clone(this.todos);
                };
                TodoService.prototype.getById = function (todoId) {
                    var todo = this._find(todoId);
                    return clone(todo);
                };
                TodoService.prototype._find = function (todoId) {
                    var filtered = this.todos.filter(function (x) { return x.id == todoId; });
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                };
                TodoService.prototype.toggle = function (todoId) {
                    var todo = this._find(todoId);
                    if (!todo)
                        return;
                    switch (todo.state) {
                        case Model_js_1.TodoState.Active: {
                            todo.state = Model_js_1.TodoState.Completed;
                            break;
                        }
                        case Model_js_1.TodoState.Completed: {
                            todo.state = Model_js_1.TodoState.Active;
                            break;
                        }
                    }
                };
                return TodoService;
            }());
            exports_1("default", TodoService);
        }
    };
});
