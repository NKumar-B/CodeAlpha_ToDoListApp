document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Updated LocalStorage key to FocusForge
    let tasks = JSON.parse(localStorage.getItem('focusForgeTasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="btn-complete" onclick="toggleComplete(${index})">
                        ${task.completed ? 'Undo' : 'Done'}
                    </button>
                    <button class="btn-edit" onclick="editTask(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
        saveTasks();
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text: text, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    window.toggleComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    window.editTask = (index) => {
        const newText = prompt("Edit your task:", tasks[index].text);
        if (newText !== null && newText.trim() !== "") {
            tasks[index].text = newText.trim();
            renderTasks();
        }
    };

    function saveTasks() {
        localStorage.setItem('focusForgeTasks', JSON.stringify(tasks));
    }

    renderTasks();
});