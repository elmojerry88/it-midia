import styles from './HeroSection.module.css';
import Navbar2 from './NavBar2';

export default function HeroSection(){
    return (
        <div className='overflow-hidden'>
            <section className={styles.backgroundImage}>
                <Navbar2/>
                <h1 className='text-white font-[family-name:var(--font-lexend-giga-black)] text-left text-3xl mt-2 px-2 md:text-left md:text-6xl lg:text-left lg:text-8xl lg:px-10 lg:mt-10 '>OBTENHA <br /> ENGENHARIA <br /> DE SOFTWARE <br /> ESPECIALIZADA </h1>
                <h3 className='text-white font-[family-name:var(--font-lexend-deca-black)] text-left text-lg mt-2 px-2 md:text-left md:text-xl md:px-5 lg:text-xl lg:px-11 '>Combinamos agilidade, inovação e uma abordagem centrada <br /> no cliente para garantir que cada projeto entregue supere suas expectativas. <br />
                    Da concepção ao lançamento, estamos com você em cada etapa, garantindo <br /> que seu produto digital se destaque no mercado competitivo de hoje.
                </h3>
                <button className='rounded-3xl bg-purple-900 bg-opacity-55 text-white font-[family-name:var(--font-lexend-giga-black)] mx-28 mt-10 text-xl p-0 h-10 w-44 md:mx-80 lg:mx-96 '>começar</button>
            </section>
            <section className={styles.backgroundImage2}>
            </section>
        </div>
    )
}