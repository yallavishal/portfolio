import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import webinar1 from '../assets/webinar1.jpeg'
import webinar2 from '../assets/webinar2.jpeg'
import webinar3 from '../assets/webinar3.jpeg'
import dsa1 from '../assets/dsa1.png'
import dsa2 from '../assets/dsa2.png'
import volunteer1 from '../assets/volunteer1.jpeg'
import volunteer2 from '../assets/volunteer2.jpeg'

const extracurriculars = [
   
    {
        title: 'Volunteering at Spandana Cheyutha Foundation (NGO)',
        description:
            'Supported disabled and mentally challenged children in Visakhapatnam through active volunteering.',
        images: [volunteer1, volunteer2],
        tag: 'Volunteering',
    },
]

const Extracurriculars = () => {
    return (
        <section id="extracurriculars" className="py-16 px-4 sm:px-6 bg-gray-0 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    Extracurriculars
                </h2>
                <div className="justify-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
                    {extracurriculars.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <Swiper
                                modules={[Navigation,Pagination]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="w-full h-64 sm:h-72 md:h-80 rounded-t-2xl overflow-hidden"
                            >
                                {item.images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                                            <img
                                                src={img}
                                                alt={`Extracurricular ${index + 1} - Slide ${idx + 1}`}
                                                className="w-full h-full object-contain p-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="p-6 flex flex-col gap-3 flex-grow">
                                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 w-fit">
                                    {item.tag}
                                </span>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Extracurriculars