import { useState, useEffect, useRef } from 'react'
import { addCarouselImage } from '../services/postService'
const CarruselForm = ({getAllImagenes}) => {
    const formRef = useRef()
    const [imagen, setImagen] = useState(null)
    const [alt, setAlt] = useState('')

    useEffect(() => {
        setImagen(null)
        setAlt('')
    }, [])

    const handleOpenModal = () => {
        formRef.current.showModal()
        setImagen(null)
        setAlt('')
    }

    const handleCloseModal = () => {
        setImagen(null)
        setAlt('')
        formRef.current.close()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('imagen',imagen)
        formData.append('alt', alt)
        await addCarouselImage(formData)
        getAllImagenes()
        handleCloseModal()
    }

    return(
        <>
        <button onClick={handleOpenModal} className='text-[#003449] p-3 rounded-xl bg-[#acf1bd]'>Agregar una imagen al carrusel</button>
        <dialog ref={formRef} className='bg-white p-5 rounded-lg backdrop:backdrop-blur-sm w-[600px]'>
            <button
                onClick={handleCloseModal}
                className="top-7 right-7 fixed bg-black rounded-full p-2 bg-opacity-30">
                <img src="/img/icons/close.svg" alt="Icono de cerrar modal"/>
            </button>
            <form onSubmit={handleSubmit} className='w-full p-4 border rounded'>
                <div className='mb-4'>
                    <label htmlFor="imagen" className='block text-sm font-medium text-gray-700'>Nueva Imagen</label>
                    <input
                        onChange={(e) => setImagen(e.target.files[0])}
                        type="file"
                        name="imagen"
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="alt" className='block text-sm font-medium text-gray-700'>Texto alternativo</label>
                    <input
                        onChange={(e) => setAlt(e.target.value)}
                        type="text"
                        name="alt"
                        value={alt}
                        className="mt-1 block w-full p-2 border rounded"
                        required/>
                </div>
                <button type="submit" className='px-4 py-2 bg-blue-600 text-white rounded'>Agregar Imagen</button>
            </form>
        </dialog>
        </>
    )
}

export default CarruselForm