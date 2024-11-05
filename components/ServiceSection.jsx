import styles from './HeroSection.module.css';

export default function ServiceSection(){
    return (
        <div className={styles.backgroundImage2}>
                <div className="overflow-hidden flex-col justify-items-center">
                    <div className="mt-2 m-2 p-2 flex flex-col bg-purple-950 bg-opacity-20 rounded-3xl justify-items-center md:w-auto md:flex-row md:m-8 md:p-4 md:mt-16 lg:mt-16 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                        <div className="">
                            <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl'>DESENVOLVIMENTO <br /> WEB</h1>
                            <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-3xl lg:mt-3'>FRONTEND & BACKEND</h2>
                        </div>
                        <div className="">
                            <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Criação de websites e aplicações web personalizados, garantindo uma experiência fluida e responsiva.
                             Do design ao código, oferecemos soluções completas e integradas, otimizadas para desempenho e escalabilidade.</h1>
                        </div>
                    </div>
                    <div className="mt-2 m-2 p-2 flex flex-col bg-lilac-100 bg-opacity-20 rounded-3xl justify-items-center md:w-auto md:flex-row md:m-8 md:p-4 md:mt-2 lg:mt-0 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                        <div className="">
                            <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl uppercase'>Treinamento de <br />Modelos de IA</h1>
                            <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-3xl lg:mt-3 uppercase'>IA Adaptada <br /> para o Seu Negócio</h2>
                        </div>
                        <div className="">
                            <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Desenvolvemos e treinamos modelos de IA <br /> personalizados para atender às necessidades <br />
                              específicas da sua empresa, melhorando a <br /> precisão e os resultados de suas operações.</h1>
                        </div>
                    </div>
                    <div className="mt-2 m-2 p-2 flex flex-col bg-lilac-200 bg-opacity-20 rounded-3xl justify-items-center md:w-auto md:flex-row md:m-8 md:p-4 md:mt-2 lg:mt-0 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                        <div className="">
                            <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl uppercase'>Automação com IA</h1>
                            <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-2xl lg:mt-3 uppercase'>Otimização Inteligente de Processos</h2>                        </div>
                        <div className="">
                            <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Automatize tarefas repetitivas e otimize seus processos empresariais 
                                com soluções de inteligência artificial, trazendo mais eficiência e produtividade para o seu negócio.</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}