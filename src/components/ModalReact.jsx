import { useState, useEffect, useRef, Children } from 'react';
import { addPublicacion } from '../services/postService';

const ModalReact = ({getAllPublicaciones}) => {
    const formRef = useRef()

    const handleOpenModal = () => {
        formRef.current.showModal()
    }

    const handleCloseModal = () => {
        formRef.current.close()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        await addPublicacion(formData);
        getAllPublicaciones();
        formRef.current.close()
      };

    return(
        <>
        <button onClick={handleOpenModal} className="mt-5 md:mt-0 lg:p-4 p-3 rounded-2xl hover:scale-105 lg:hover:scale-110 ease-in-out duration-300 text-[#003449] text-sm lg:text-base bg-[#d5eef1] hover:bg-[#acf1bd] active:bg-[#d5eef1]">
            Crear nueva publicación
        </button>
        <dialog ref={formRef} className='bg-white p-5 rounded-lg backdrop:backdrop-blur-sm w-[1000px] h-auto'>
            <button onClick={handleCloseModal} className="top-7 right-7 fixed bg-black rounded-full p-2 bg-opacity-30">
                <img src="/img/icons/close.svg" alt=""/>
            </button>
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
                <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>Crear publicacion</button>
            </form>
        </dialog>
        </>
    )
}

export default ModalReact;