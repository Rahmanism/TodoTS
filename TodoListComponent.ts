import { Todo, TodoState } from "./Model.js";
import "//code.jquery.com/jquery-3.4.1.min.js";

export default class TodoListComponent {
    private $el: any; // jQuery;

    constructor(el: HTMLElement) {
        // this.$el = $(el);
        this.$el = document.getElementById(el.id);
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
            // this.renderTodo(todo).appendTo(this.$el);
            this.$el.appendChild(this.renderTodo(todo));
        });
    }

    private renderTodo(todo: Todo) {
        let item = document.createElement('<div class="todo-item list-group-item ' +
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
        item.addEventListener('click', function() {
            let event = document.createEvent('CustomEvent');
            event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
            this.dispatchEvent(event);
        });

        return item;
    }
}