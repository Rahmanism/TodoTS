System.register([], function (exports_1, context_1) {
    "use strict";
    var Todo, TodoState;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Todo = class Todo {
            };
            exports_1("Todo", Todo);
            (function (TodoState) {
                TodoState[TodoState["Active"] = 1] = "Active";
                TodoState[TodoState["Completed"] = 2] = "Completed";
                TodoState[TodoState["Deleted"] = 3] = "Deleted";
            })(TodoState || (TodoState = {}));
            exports_1("TodoState", TodoState);
        }
    };
});
