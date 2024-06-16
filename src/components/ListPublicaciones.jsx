import { useState, useEffect } from 'react';
import { getPublicaciones, deletePublicacion } from '../services/postService';
import FormPublicaciones from './FormPublicaciones';

const ListPublicaciones = () => {
  const [selectedPubli, setSelectedPubli] = useState(null);
  const [publis, setPublis] = useState([]);

  const fetchPublicaciones = async () => {
    const data = await getPublicaciones();
    setPublis(data);
  };

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estas seguro de eliminar esta publicacion?")) {
      await deletePublicacion(id);
      fetchPublicaciones();
    }
  }
  const handleEdit = async (publi) => {
    console.log(publi)
    setSelectedPubli(publi)
  }
  return (
    <>
    <FormPublicaciones selectedPubli={selectedPubli} fetchPublicaciones={fetchPublicaciones}/>
    <section className="grid grid-cols-2 gap-2">
      {
        publis.map(publi => (
          <article key={publi.id} className="bg-slate-800 p-3 rounded text-white relative">
            <section className='absolute right-4 flex gap-4'>
              <button onClick={() => handleEdit(publi)} href='#form' className='bg-blue-600 py-1 px-2 rounded-lg'>Editar</button>
              <button onClick={() => handleDelete(publi.id)} className='bg-red-600 p-1 rounded-lg'>Eliminiar</button>
            </section>
            <h3 key={publi.id}>{publi.titulo}</h3>
            <span>Publicacion: {publi.id}</span>
            <p>{publi.text}</p>
            <img src={`/img/${publi.media}`} alt={publi.media}/>
          </article>
        ))
      }
    </section>
    </>
  );
};

export default ListPublicaciones;