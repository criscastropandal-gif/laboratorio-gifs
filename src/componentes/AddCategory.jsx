import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
    const [newCategory, setNewCategory] = useState("");

    const envioDatos = (event) => {
        event.preventDefault();

        if (newCategory.trim().length <= 1) return;

        onAddCategory(newCategory);
        setNewCategory("");
    };

    return (
        <form onSubmit={envioDatos}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={newCategory} 
                onChange={(evento) => setNewCategory(evento.target.value)}
            />
        </form>
    );
};

export default AddCategory;