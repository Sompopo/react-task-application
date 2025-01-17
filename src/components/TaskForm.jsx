import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const [nombre, setNombre] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            nombre,
            description
        })
        setNombre('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
            <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                className="bg-slate-300 p-3 w-full mb-2"
                autoFocus
            />
            <textarea
                placeholder="Escribe la descripcion"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-slate-300 p-3 w-full mb-2"
                value={description}
            ></textarea>
            <button 
            className="bg-indigo-500 px-3 py-1 text-white"
            >Agregar</button>
        </form>
        </div>
    );
}

export default TaskForm
