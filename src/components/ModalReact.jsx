// import { useState, useEffect, useRef, Children } from 'react';
// import { addPublicacion } from '../services/postService';

// const ModalReact = ({getAllPublicaciones}) => {
//     const [titulo, setTitulo] = useState('');
//     const [contenido, setContenido] = useState('');
//     const [imagen, setImagen] = useState('');
//     const formRef = useRef()

//     const handleOpenModal = () => {
//         formRef.current.showModal()
//     }

//     const handleCloseModal = () => {
//         formRef.current.close()
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         // const formData = new FormData(e.target)
//         const formData = new FormData()
//         formData.append('titulo', titulo)
//         formData.append('contenido', contenido)
//         formData.append('imagen', imagen)
//         await addPublicacion(formData);
//         getAllPublicaciones();
//         formRef.current.close()
//       };

//     return(
//         <>
//         <button onClick={handleOpenModal} className="mt-5 md:mt-0 lg:p-4 p-3 rounded-2xl hover:scale-105 lg:hover:scale-110 ease-in-out duration-300 text-[#003449] text-sm lg:text-base bg-[#d5eef1] hover:bg-[#acf1bd] active:bg-[#d5eef1]">
//             Crear nueva publicación
//         </button>
//         <dialog ref={formRef} className='bg-white p-5 rounded-lg backdrop:backdrop-blur-sm w-[1000px] h-auto'>
//             <button onClick={handleCloseModal} className="top-7 right-7 fixed bg-black rounded-full p-2 bg-opacity-30">
//                 <img src="/img/icons/close.svg" alt=""/>
//             </button>
//             <form onSubmit={handleSubmit} className="w-full p-4 border rounded">
//                 <div className="mb-4">
//                     <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
//                     <input
//                         onChange={(e) => setTitulo(e.target.value)}
//                         type="text"
//                         name='titulo'
//                         required
//                         className="mt-1 block w-full p-2 border rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">Contenido</label>
//                     <textarea
//                         onChange={(e) => setContenido(e.target.value)}
//                         name='contenido'
//                         required
//                         className="mt-1 block w-full h-72 p-2 border rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen</label>
//                     <input
//                         onChange={(e) => setImagen(e.target.files[0])}
//                         type='file'
//                         name='imagen'
//                         className="mt-1 block w-full p-2 border rounded"
//                     />
//                 </div>
//                 <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>Crear publicacion</button>
//             </form>
//         </dialog>
//         </>
//     )
// }

// export default ModalReact;

import { useState, useEffect, useRef } from 'react';
import { addPublicacion, updatePublicacion } from '../services/postService';

const ModalReact = ({ getAllPublicaciones, selectedPubli, isModalOpen, handleModalClose }) => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState(null);
    const formRef = useRef();

    useEffect(() => {
        if (selectedPubli) {
            setTitulo(selectedPubli.titulo);
            setContenido(selectedPubli.contenido);
            setImagen(null);
        } else {
            setTitulo('');
            setContenido('');
            setImagen(null);
        }
    }, [selectedPubli]);

    useEffect(() => {
        if (isModalOpen) {
            formRef.current.showModal();
        } else {
            formRef.current.close();
        }
    }, [isModalOpen]);

    const handleCloseButton = () => {
        setTitulo('');
        setContenido('');
        setImagen(null);
        handleModalClose();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        if (imagen) formData.append('imagen', imagen);

        if (selectedPubli) {
            formData.append('_method', 'PUT')
            await updatePublicacion(formData, selectedPubli.id);
        } else {
            await addPublicacion(formData);
        }
        setTitulo('');
        setContenido('');
        setImagen(null);
        getAllPublicaciones();
        handleModalClose();
    };

    return (
        <dialog ref={formRef} className='bg-white p-5 rounded-lg backdrop:backdrop-blur-sm w-[1000px] h-auto'>
            <button onClick={handleCloseButton} className="top-7 right-7 fixed bg-black rounded-full p-2 bg-opacity-30">
                <img src="/img/icons/close.svg" alt=""/>
            </button>
            <form onSubmit={handleSubmit} className="w-full p-4 border rounded">
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
                    <input
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        name='titulo'
                        value={titulo}
                        required
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">Contenido</label>
                    <textarea
                        onChange={(e) => setContenido(e.target.value)}
                        name='contenido'
                        value={contenido}
                        required
                        className="mt-1 block w-full h-72 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen</label>
                    <input
                        onChange={(e) => setImagen(e.target.files[0])}
                        type='file'
                        name='imagen'
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>{selectedPubli ? 'Actualizar publicacion' : 'Crear publicacion'}</button>
            </form>
        </dialog>
    );
}

export default ModalReact;
