/** 2.24 Creating a TODO List */

// alert('Hello World! -- From TODO List');

import TodoList from "./TodoList.js";
$('#wd-todo').append(`<div class="container">
                          <h1>Todo example</h1>
                          ${TodoList()}
                      </div>`);