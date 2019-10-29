System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TodoListComponent = class TodoListComponent {
                constructor(el) {
                    this.$el = el;
                }
                render(todos) {
                    this.$el.innerHTML = '';
                    if (!todos.length) {
                        this.$el.innerHTML =
                            '<div class="list-group-item text-center tetx-giant">' +
                                '  <strong>You\'ve completed everything you needed to do!</strong>' +
                                '</div>';
                        return;
                    }
                    todos.forEach(todo => {
                        let i = this.renderTodo(todo);
                        this.$el.appendChild(i);
                    });
                }
                renderTodo(todo) {
                    let item = document.createElement('div');
                    item.innerHTML = '<div class="todo-item list-group-item ' +
                        (todo.state == 2 ? 'completed' : '') + '">' +
                        '<div class="row">' +
                        '   <div class="col-md-2 text-center">' +
                        '       <i class="incomplete far fa-square text-muted text-giant"></i>' +
                        '       <i class="completed-indicator completed far fa-check-square text-giant"></i>' +
                        '   </div>' +
                        '   <div class="col-md-10">' +
                        '       <span class="incomplete text-giant">' + todo.name + '</span>' +
                        '       <span class="completed text-strikethrough text-muted text-giant">' + todo.name + '</span>' +
                        '   </div>' +
                        '</div>';
                    item.addEventListener('click', function () {
                        let event = document.createEvent('CustomEvent');
                        event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
                        this.dispatchEvent(event);
                    });
                    return item;
                }
            };
            exports_1("default", TodoListComponent);
        }
    };
});
