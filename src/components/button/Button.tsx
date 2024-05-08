import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

interface ButtonProps{
    buttonText?:string;
    buttonClassName:string;
    arrowIcon?:boolean;
    buttonSize?: "big" | "md" | "sm";
    dataAos?: string;
    dataAosDelay?: string; 
}

const Button = ({buttonText="Get Started",buttonClassName,arrowIcon=true,buttonSize="big",dataAos,dataAosDelay}:ButtonProps) => {
  return (
    

    <button data-aos={dataAos} data-aos-delay={dataAosDelay} className={` ${buttonClassName} ${buttonSize=="sm" && "px-4 py-[6px]"} flex  items-center spacing-3 gap-3 btn px-6 py-2 rounded-md my-3 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700`}>
        {buttonText} {arrowIcon ? <FaArrowRightLong size={`${buttonSize=="sm" && 18 || buttonSize=="md" && 20 || buttonSize=="big" && 24   }`} className='text-white' /> : ""}
    </button>
  
  )
}

export default Button