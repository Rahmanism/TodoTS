System.register(["//code.jquery.com/jquery-3.4.1.min.js"], function (exports_1, context_1) {
    "use strict";
    var TodoListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            TodoListComponent = /** @class */ (function () {
                function TodoListComponent(el) {
                    // this.$el = $(el);
                    this.$el = document.getElementById(el.id);
                }
                TodoListComponent.prototype.render = function (todos) {
                    var _this = this;
                    this.$el.innerHTML = '';
                    if (!todos.length) {
                        this.$el.innerHTML =
                            '<div class="list-group-item text-center tetx-giant">' +
                                '  <strong>You\'ve completed everything you needed to do!</strong>' +
                                '</div>';
                        return;
                    }
                    todos.forEach(function (todo) {
                        // this.renderTodo(todo).appendTo(this.$el);
                        _this.$el.appendChild(_this.renderTodo(todo));
                    });
                };
                TodoListComponent.prototype.renderTodo = function (todo) {
                    var item = document.createElement('<div class="todo-item list-group-item ' +
                        (todo.state == 2 ? 'completed' : '') + '">' +
                        '<div class="row">' +
                        '   <div class="col-md-2 text-center">' +
                        '       <i class="incomplete glyphicon glyphicon-unchecked text-muted text-giant"></i>' +
                        '       <i class="completed-indicator completed glyphicon glyphicon-ok text-giant"></i>' +
                        '   </div>' +
                        '   <div class="col-md-10">' +
                        '       <span class="incomplete text-giant">' + todo.name + '</span>' +
                        '       <span class="completed text-strikethrough text-muted text-giant">' + todo.name + '</span>' +
                        '   </div>' +
                        '</div>' +
                        '</div>');
                    item.addEventListener('click', function () {
                        var event = document.createEvent('CustomEvent');
                        event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
                        this.dispatchEvent(event);
                    });
                    return item;
                };
                return TodoListComponent;
            }());
            exports_1("default", TodoListComponent);
        }
    };
});
