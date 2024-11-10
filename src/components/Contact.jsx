import { motion } from 'framer-motion';
import React from 'react'
import { toast } from 'react-toastify';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7dc132c9-7003-421c-bb57-b909fae1fc78");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult();
        }
    };
    return (
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div>
            <div className='container text-center mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
                <p className='text-gray-500 max-w-800 text-center mb-8'>Ready To Make A Move? Let's Build Your Future Together</p>

            </div>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' placeholder='Your Name' type="text" required />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' placeholder='Your Email' type="email" required />
                    </div>

                </div>
                <div className='mt-3'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
                </div>
                <button className="text-white bg-blue-600 py-2 px-12 mb-10 rounded mx-auto">{result ? result : "Send Message "}</button>
            </form>   
        </div>
        </motion.div>
    )
}

export default Contact
