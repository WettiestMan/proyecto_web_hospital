import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { getCarouselImages } from '@/services/postService'
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
            slidesPerView={1}
            effect={'fade'}
            spaceBetween={30}
            // loop={true}  --> Da una advertencia :v
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="rounded-xl h-96"
        >
        {
            imgs.map(img => (
                <SwiperSlide key={img.id} className="bg-slate-900">
                    <img src={`http://localhost:8000/storage/${img.imagen}`} alt={img.alt} className="h-96 mx-auto"/>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </>
    )
}

export default CarruselAdmin