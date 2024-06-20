import { useState, useEffect } from 'react';
import { addPublicacion } from '../services/postService';

const FormPublicaciones = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (isEditing) {
          await updatePublicacion(formData, selectedPubli.id);
          setIsEditing(false);
        } else {
          await addPublicacion(formData);
        }
    
        setTitulo('');
        setText('');
        setMedia('');
      };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded">
            <div className="mb-4">
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                    type="text"
                    name='titulo'
                    required
                    className="mt-1 block w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Texto</label>
                <textarea
                    name='text'
                    required
                    className="mt-1 block w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="media" className="block text-sm font-medium text-gray-700">Media</label>
                <input
                    name='media'
                    className="mt-1 block w-full p-2 border rounded"
                />
            </div>
            <div>
                <button>Crear publicacion</button>
            </div>
        </form>
    )
}

export default FormPublicaciones;