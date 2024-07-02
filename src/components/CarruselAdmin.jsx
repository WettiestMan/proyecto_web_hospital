import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { getCarouselImages, deleteCarouselImage } from '@/services/postService'
import CarruselForm from "./CarruselForm"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const CarruselAdmin = () => {
    const [imgs, setImgs] = useState([])

    const getAllImagenes = async () => {
        const { imagenes } = await getCarouselImages()
        setImgs(imagenes)
    }

    const handleDelete = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar esta imagen?")) {
            await deleteCarouselImage(id)
            getAllImagenes()
        }
    }

    useEffect(() => {
        getAllImagenes()
    }, [])
    
    return(
        <>
        <div className="relative flex py-4 items-center">
            <h2 className="absolute left-1/2 transform -translate-x-1/2 text-center font-black text-2xl uppercase">Administrador de Imagenes del Carrusel</h2>
            <div className="ml-auto">
                <CarruselForm getAllImagenes={getAllImagenes}/>
            </div>
        </div>
        <Swiper
            slidesPerView={3}  //Slides visibles
            spaceBetween={30}
            // effect="fade"
            // loop={true}  --> Da una advertencia :v
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="rounded-xl h-96"
        >
            {/* Slides permanentes aqui */}
            <SwiperSlide className="bg-slate-900">
                <img src="/img/Inicio/slide1.jpg" alt="slide1" className="h-96 mx-auto"/>
            </SwiperSlide>
            <SwiperSlide className="bg-slate-900">
                <img src="/img/Inicio/slide2.jpg" alt="slide2" className="h-96 mx-auto"/>
            </SwiperSlide>
            <SwiperSlide className="bg-slate-900">
                <img src="/img/Inicio/slide3.jpg" alt="slide3" className="h-96 mx-auto"/>
            </SwiperSlide>
            <SwiperSlide className="bg-slate-900">
                <img src="/img/Inicio/slide4.jpg" alt="slide4" className="h-96 mx-auto"/>
            </SwiperSlide>
        {
            // Slides Dinamicos aqui 
            // onClick={handleDelete(img.id)} --> en el boton de eliminar
            imgs.map(img => (
                <SwiperSlide key={img.id} className="bg-slate-900 relative">
                    <button className="absolute top-0 right-0 bg-red-500 py-1 px-2 text-white">Eliminar</button>
                    <img src={`http://localhost:8000/storage/${img.imagen}`} alt={img.alt} className="h-96 mx-auto"/>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </>
    )
}

export default CarruselAdmin