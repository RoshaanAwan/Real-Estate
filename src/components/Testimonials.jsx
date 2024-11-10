import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'


const Testimonials = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className='container text-center mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
            <p className='text-gray-500 max-w-800 text-center mb-8'>Real Stories From Those Who Found home With Us</p>

            <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
                        <img
                            src={testimonial.image}
                            alt={`${testimonial.name}'s portrait`}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-center">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 text-center italic">{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="Star" className="w-5 h-5" />
                            ))}
                        </div>

                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>



        </div>
        </motion.div>
    )
}

export default Testimonials
