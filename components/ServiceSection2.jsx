import styles from './HeroSection.module.css';

export default function ServiceSection2() {
    return (
        <div className={styles.backgroundImage3}>
            <div className="overflow-hidden flex-col justify-items-center">
                <div className="mt-2 m-2 p-2 flex flex-col bg-purple-950 bg-opacity-20 rounded-3xl justify-items-center  md:w-auto md:flex-row md:m-8 md:p-4 md:mt-16 lg:mt-16 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                    <div className="">
                        <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl'>DESIGN GRÁFICO</h1>
                        <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-3xl lg:mt-3'>IDENTIDADE VISUAL E UI/UX</h2>
                    </div>
                    <div className="">
                        <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Transforme suas ideias em arte visual. 
                         <br /> Criamos logotipos, panfletos, flyers <br /> e interfaces centradas na experiência <br /> do usuário, sempre focando na estética e na <br /> funcionalidade para fortalecer sua marca.</h1>
                    </div>
                </div>
                <div className="mt-2 m-2 p-2 flex flex-col bg-lilac-100 bg-opacity-20 rounded-3xl justify-items-center md:w-auto md:flex-row md:m-8 md:p-4 md:mt-2 lg:mt-0 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                    <div className="">
                        <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl uppercase'>DESENVOLVIMENTO MOBILE</h1>
                        <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-3xl lg:mt-3'>Aplicativos para iOS e Android</h2>
                    </div>
                    <div className="">
                        <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Desenvolvimento de aplicativos móveis <br /> modernos e funcionais, que conectam 
                            o seu público-alvo às soluções da sua empresa, com interfaces intuitivas e desempenho otimizado para diversas plataformas.</h1>
                    </div>
                </div>
                <div className="mt-2 m-2 p-2 flex flex-col bg-lilac-200 bg-opacity-20 rounded-3xl justify-items-center md:w-auto md:flex-row md:m-8 md:p-4 md:mt-2 lg:mt-0 lg:justify-between lg:w-auto lg:flex-row lg:m-8 lg:p-4">
                    <div className="">
                        <h1 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-lg text-center lg:text-left lg:text-5xl uppercase'>Análise de dados</h1>
                        <h2 className='font-[family-name:var(--font-lexend-giga-black)] text-white text-sm text-center lg:text-left lg:text-2xl lg:mt-3'>Resultados Através de Insights </h2>                        </div>
                    <div className="">
                        <h1 className='text-center mt-2 text-xs md:mt-0 md:text-right md:text-xl lg:mt-0 lg:text-right lg:text-2xl text-white font-[family-name:var(--font-lexend-giga-black)]'>Utilize o poder dos dados para tomar decisões 
                          estratégicas. <br /> Nossa análise de dados é focada em gerar insights práticos <br /> e impactantes, direcionados a maximizar o crescimento e os resultados positivos para o seu negócio.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}