import styles from './HeroSection.module.css';
import Navbar from './NavBar';

export default function HeroSection(){
    return (
        <div className='overflow-hidden'>
            <div className={styles.backgroundImage}>
                <Navbar/>
                <h1 className='text-white font-[family-name:var(--font-lexend-giga-black)] text-left text-3xl px-2 md:text-left md:text-6xl md:mt-32 lg:text-left lg:text-8xl lg:px-10 lg:mt-32 '>OBTENHA <br /> ENGENHARIA <br /> DE SOFTWARE <br /> ESPECIALIZADA </h1>
                <h3 className='text-white font-[family-name:var(--font-lexend-deca-black)] text-left text-lg mt-2 px-2 md:text-left md:text-xl md:px-5 lg:text-xl lg:px-11 '>Combinamos agilidade, inovação e uma abordagem centrada <br /> no cliente para garantir que cada projeto entregue supere suas expectativas. <br />
                    Da concepção ao lançamento, estamos com você em cada etapa, garantindo <br /> que seu produto digital se destaque no mercado competitivo de hoje.
                </h3>
                <div className="flex justify-center md:justify-normal lg:justify-normal">
                    <button className='rounded-3xl bg-purple-900 bg-opacity-45 text-white font-[family-name:var(--font-lexend-giga-black)] mt-10 text-xl px-2 h-10 md:w-44 md:mx-80 md:p-0 md:justify-normal lg:justify-normal lg:mx-96 lg:w-44 lg-p-0'>começar</button>
                </div>
            </div>
        </div>
    )
}