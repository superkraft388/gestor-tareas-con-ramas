const apiUrl = 'http://localhost:3000/tareas';

async function crearTarea() {
    const descripcion = document.getElementById('descripcion').value;
    const prioridad = document.getElementById('prioridad').value;
    const nuevaTarea = { descripcion, prioridad };
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaTarea)
    });
    if (response.ok) {
        cargarTareas();
    }
}

async function cargarTareas() {
    const response = await fetch(apiUrl);
    const tareas = await response.json();
    const listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = `${tarea.descripcion} (Prioridad: ${tarea.prioridad})`;
        listaTareas.appendChild(li);
    });
}

window.onload = cargarTareas;