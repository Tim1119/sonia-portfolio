import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../button/Button"



const Hero = () => {
  return (
    <div className=" w-full  h-[90vh] md:h-[90vh] min-h-fit bg-black font-serif grid place-items-center" >
        <div className='containerize grid grid-cols-1 lg:grid-cols-2 gap-4 h-full'>
            <div className='grid place-items-center md:justify-items-start' >
                <div className='gap-5 lg:text-left text-center  h-full xl:h-fit flex flex-col justify-center w-full'  >
                    <h1 data-aos="fade-up" className='text-4xl xl:text-[42px]  uppercase font-bold text-white leading-[56px]' >Elevate your business <br /> with Executive Zen </h1>
                    <p className='text-lg xl:text-xl text-white font-semibold' data-aos="fade-up" data-aos-delay="400" >
                        Your virtual assitant offering seamless support for acheiving executive success
                    </p>
                    <Button dataAos={"fade-up" } dataAosDelay={"600"} arrowIcon buttonClassName={"flex w-fit lg:mx-0 mx-auto items-center spacing-3 gap-3 btn px-6 py-2 rounded-md my-3 text-white bg-lemon hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"} />
                </div>
            </div>
            <div className='hidden lg:grid place-items-end h-full' data-aos="zoom-out" data-aos-delay="200" >
                <Image src="/sonia/banner-image.png" width={510} height={500} className='object-contain lg:h-[90%] h-[60%] my-0 p-0' alt="Sonia-Hero-Image" />
            </div>
        </div>
    </div>
  )
}

export default Hero