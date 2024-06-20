import ModalReact from './ModalReact';
import { getPublicaciones, deletePublicacion } from '@/services/postService';
import { useState, useEffect } from 'react';

const Publicaciones = () => {
    const [publis, setPublis] = useState([]);
    const [selectedPubli, setSelectedPubli] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getAllPublicaciones = async () => {
        const { publicaciones } = await getPublicaciones();
        setPublis(publicaciones);
    }

    useEffect(() => {
        getAllPublicaciones()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar esta publicacion?")) {
            await deletePublicacion(id);
            getAllPublicaciones();
        }
    }

    const handleEdit = (publi) => {
        setSelectedPubli(publi);
        setIsModalOpen(true);
    }

    const handleModalOpen = () => {
        setSelectedPubli(null);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setSelectedPubli(null);
        setIsModalOpen(false);
    }

    return (
        <>
        <div className="relative flex py-4 items-center">
            <h2 className="absolute left-1/2 transform -translate-x-1/2 text-center font-black text-2xl uppercase">Administrador de publicaciones</h2>
            <div className="ml-auto">
                <button onClick={handleModalOpen} className="mt-5 md:mt-0 lg:p-4 p-3 rounded-2xl hover:scale-105 lg:hover:scale-110 ease-in-out duration-300 text-[#003449] text-sm lg:text-base bg-[#d5eef1] hover:bg-[#acf1bd] active:bg-[#d5eef1]">
                    Crear nueva publicación
                </button>
                <ModalReact
                    getAllPublicaciones={getAllPublicaciones}
                    selectedPubli={selectedPubli}
                    isModalOpen={isModalOpen}
                    handleModalClose={handleModalClose}
                />
            </div>
        </div>
        <main className='grid grid-cols-2 gap-3'>
            {
                publis.map(publi => (
                    <article key={publi.id} className='bg-slate-600 p-2 rounded'>
                        <div>
                            <h3>{publi.titulo}</h3>
                            <div>
                                <button onClick={() => handleEdit(publi)}>Editar</button>
                                <button onClick={() => handleDelete(publi.id)}>Eliminar</button>
                            </div>
                        </div>
                        <p>{publi.contenido}</p>
                        <img src={`http://localhost:8000/storage/${publi.imagen}`} alt={publi.imagen} />
                    </article>
                ))
            }
        </main>
        </>
    )
}

export default Publicaciones;
