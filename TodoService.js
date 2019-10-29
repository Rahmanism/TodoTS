System.register(["./Model.js"], function (exports_1, context_1) {
    "use strict";
    var Model_js_1, _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return _lastId += 1;
    }
    function clone(src) {
        let clone = JSON.stringify(src);
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
            TodoService = class TodoService {
                constructor(todos) {
                    this.todos = [];
                    if (todos) {
                        todos.forEach(todo => this.add(todo));
                    }
                }
                add(input) {
                    let todo = {
                        id: generateTodoId(),
                        name: null,
                        state: Model_js_1.TodoState.Active
                    };
                    if (typeof input === 'string') {
                        todo.name = input;
                        // } else if (input instanceof Todo) {
                    }
                    else if (typeof input.name === "string") {
                        todo.name = input.name;
                    }
                    else {
                        throw 'Invalid Todo name.';
                    }
                    this.todos.push(todo);
                    return todo;
                }
                clearCompleted() {
                    this.todos = this.todos.filter(x => x.state == Model_js_1.TodoState.Active);
                }
                getAll() {
                    return clone(this.todos);
                }
                getById(todoId) {
                    let todo = this._find(todoId);
                    return clone(todo);
                }
                _find(todoId) {
                    let filtered = this.todos.filter(x => x.id == todoId);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                toggle(todoId) {
                    let todo = this._find(todoId);
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
                }
            };
            exports_1("default", TodoService);
        }
    };
});
