import styles from './HeroSection.module.css';
import Navbar from './Navbar';

export default function HeroSection(){
    return (
        <div className={styles.backgroundImage}>
            <Navbar/>
            <h1 className='text-white font-[family-name:var(--font-lexend-giga-black)] text-8xl mt-52 mx-10'>OBTENHA <br /> ENGENHARIA <br /> DE SOFTWARE <br /> ESPECIALIZADA </h1>
        </div>
    )
}