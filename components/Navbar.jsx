export default function Navbar(){
    return (
        <nav className="flex justify-center ">
            <li className=" flex justify-between space-x-10 mt-10 border-4 border-cream rounded-3xl h-12 w-auto">
                <ul className="sm:text-xs md:text-sm text-md text-white font-[family-name:var(--font-lexend-deca-regular)] p-2 ">PÁGINA INICIAL</ul>
                <ul className="sm:text-xs md:text-sm text-md  text-white font-[family-name:var(--font-lexend-deca-regular)] p-2  ">SERVIÇOS</ul>
                <ul className="sm:text-xs md:text-sm text-md  text-white font-[family-name:var(--font-lexend-deca-regular)] p-2  ">PRODUTOS</ul>
                <ul className="sm:text-xs md:text-sm text-md  text-white font-[family-name:var(--font-lexend-deca-regular)] p-2 ">SOBRE NÓS</ul>
            </li>
        </nav>
    )
}