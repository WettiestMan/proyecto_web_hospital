import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { getCarouselImages } from '@/services/postService'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const SimpleSlider = () => {
  const [imgs, setImgs] = useState([])

  const getAllImagenes = async () => {
    const { imagenes } = await getCarouselImages()
    setImgs(imagenes)
  }

  useEffect(() => {
    getAllImagenes()
  }, [])

  return(
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={30}
        loop={true}
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
            <SwiperSlide className="bg-slate-900">
              <img src={`http://localhost:8000/storage/${img.imagen}`} alt={img.alt} className="h-96 mx-auto"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default SimpleSlider