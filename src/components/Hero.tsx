export const Hero = () => {
    return (
        <section className="m-4 md:m-8 rounded imagen-services min-h-[60vh] 
      flex flex-col justify-center gap-4 md:gap-6 items-center text-white 
      px-4 py-20 md:py-40 text-center">

            <span className="text-(--color-button) text-sm md:text-lg tracking-widest">
                PREMIUM GROOMING
            </span>

            <h1 className="text-4xl md:text-7xl font-bold">NUESTROS SERVICIOS</h1>

            <p className="text-base md:text-xl max-w-xl text-gray-200">
                Precisión y estilo. Experimentá el arte moderno.
                <br />Cada visita es una experiencia de lujo.
            </p>
        </section>
    )
}
