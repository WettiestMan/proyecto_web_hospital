import { useState, useEffect } from 'react';
import { addPublicacion, updatePublicacion } from '../services/postService';

const FormPublicaciones = ({selectedPubli, fetchPublicaciones}) => {
  const [titulo, setTitulo] = useState('');
  const [text, setText] = useState('');
  const [media, setMedia] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedPubli) {
      setTitulo(selectedPubli.titulo)
      setText(selectedPubli.text)
      setMedia(selectedPubli.media)
      setIsEditing(true);
    }
  }, [selectedPubli]);

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
    fetchPublicaciones();
  };

  const handleCancel = () => {
    setTitulo('');
    setText('');
    setMedia('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded">
      <div className="mb-4">
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          name='titulo'
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Texto</label>
        <textarea
          id="text"
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="mt-1 block w-full p-2 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="media" className="block text-sm font-medium text-gray-700">Media</label>
        <input
          id="media"
          name='media'
          value={media}
          onChange={(e) => setMedia(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {isEditing ? 'Editar Publicación' : 'Agregar Publicación'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-600 text-white rounded">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default FormPublicaciones;