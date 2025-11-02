let todos = JSON.parse(localStorage.getItem('todos')) || [];

        function renderTodos() {
            const list = document.getElementById('todoList');
            list.innerHTML = '';
            todos.forEach((todo, index) => {
                const li = document.createElement('li');
                li.className = 'todo-item' + (todo.completed ? ' completed' : '');
                li.innerHTML = `
                    <span class="todo-text" onclick="toggleTodo(${index})">${todo.text}</span>
                    <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
                `;
                list.appendChild(li);
            });
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            if (input.value.trim()) {
                todos.push({ text: input.value, completed: false });
                localStorage.setItem('todos', JSON.stringify(todos));
                input.value = '';
                renderTodos();
            }
        }

        function toggleTodo(index) {
            todos[index].completed = !todos[index].completed;
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }

        function deleteTodo(index) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }

        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });

        renderTodos();
