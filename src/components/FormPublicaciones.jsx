import { useState, useEffect } from 'react';
import { addPublicacion, updatePublicacion } from '../services/postService';

const FormPublicaciones = ({selectedPubli}) => {
  const [titulo, setTitulo] = useState('');
  const [text, setText] = useState('');
  const [media, setMedia] = useState('');

  useEffect(() => {
    if (selectedPubli) {
      setTitulo(selectedPubli.titulo)
      setText(selectedPubli.text)
      setMedia(selectedPubli.media)
    }
  }, [selectedPubli]);

  const handleEdit = async(e) => {
    //Falta funcionalidad de editar publicacion, no funca si hago lo mismo que con handleSubmit, ¿porq? ni idea :v
    //Error -> el formData aparentemente llega vacia a la API :'v
    //selectedPubli.id -> esta perfect
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('text', text);
    formData.append('media', media);
    console.log(formData)
    console.log(selectedPubli.id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('text', text);
    formData.append('media', media);
    try {
      console.log(formData)
      await addPublicacion(formData);
      setTitulo('');
      setText('');
      setMedia('');
      alert('Publicación agregada con éxito');
    } catch (error) {
      console.error('Error al agregar la publicación:', error);
      alert('Hubo un error al agregar la publicación');
    }
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
      <div className=''>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Agregar Publicación</button>
        <button onClick={handleEdit} type='button' className="px-4 py-2 bg-blue-600 text-white rounded">Editar Publicación</button>
      </div>
    </form>
  );
};

export default FormPublicaciones;