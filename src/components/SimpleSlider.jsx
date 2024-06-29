import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { getPublicaciones } from '@/services/postService'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const SimpleSlider = () => {
  const [publis, setPublis] = useState([])

  const getAllPublicaciones = async () => {
    const { publicaciones } = await getPublicaciones();
    setPublis(publicaciones);
  }

  useEffect(() => {
    getAllPublicaciones()
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
          publis.map(publi => (
            <SwiperSlide className="bg-slate-900">
              <img src={`http://localhost:8000/storage/${publi.imagen}`} alt={publi.imagen} className="h-96 mx-auto"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default SimpleSlider

// import { useEffect, useState } from "react"
// import { register } from 'swiper/element/bundle';
// import { getPublicaciones } from '@/services/postService'

// register();

// const SimpleSlider = () => {
//   const [publis, setPublis] = useState([])

//   const getAllPublicaciones = async () => {
//     const { publicaciones } = await getPublicaciones();
//     setPublis(publicaciones);
//   }

//   useEffect(() => {
//     getAllPublicaciones()
//   }, [])

//   return (
//     <swiper-container
//       slides-per-view="1"
//       navigation="true"
//       pagination="true"
//       loop="true"
//       class='h-96'
//     >
//       {
//           publis.map(publi => (
//             <swiper-slide>
//               <img src={`http://localhost:8000/storage/${publi.imagen}`} alt={publi.imagen}/>
//             </swiper-slide>
//           ))
//       }
//     </swiper-container>
//   )
// }

// export default SimpleSlider