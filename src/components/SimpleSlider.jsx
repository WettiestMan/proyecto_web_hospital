import { getCarouselImages } from '@/services/postService'
import { register } from 'swiper/element/bundle'
import { useEffect, useState } from "react"

register()

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
		<swiper-container class="h-[27rem]" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" slides-per-view="auto" centered-slides="true" space-between="30" loop="true" autoplay-delay="10000" autoplay-disable-on-interaction="false">
			<swiper-slide class="text-center flex justify-center items-center w-fit">
				<img className='h-[27rem]' src="/img/Inicio/slide1.jpg" alt="slide1" />
			</swiper-slide>
			<swiper-slide class="text-center flex justify-center items-center w-fit">
				<img className='h-[27rem]' src="/img/Inicio/slide2.jpg" alt="slide2" />
			</swiper-slide>
			<swiper-slide class="text-center flex justify-center items-center w-fit">
				<img className='h-[27rem]' src="/img/Inicio/slide3.jpg" alt="slide3" />
			</swiper-slide>
			<swiper-slide class="text-center flex justify-center items-center w-fit">
				<img className='h-[27rem]' src="/img/Inicio/slide4.jpg" alt="slide4" />
			</swiper-slide>
			{
				imgs.map(img => (
					<swiper-slide class="text-center flex justify-center items-center w-fit relative">
						<img src={`http://localhost:8000/storage/${img.imagen}`} alt={img.alt} className="h-[27rem]"/>
					</swiper-slide>
				))
			}
		</swiper-container>
	)
}

export default SimpleSlider