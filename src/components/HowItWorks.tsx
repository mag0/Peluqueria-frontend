
export const HowItWorks = () => {
    return (
        <section className="px-8 py-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                ¿Cómo funciona?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-(--color-card) p-6 rounded-2xl text-center shadow-md">
                    <i className="fas fa-scissors text-4xl text-(--color-button) mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Elegí tu servicio</h3>
                    <p className="text-gray-400">
                        Explorá nuestros estilos y seleccioná el que más va con vos.
                    </p>
                </div>

                <div className="bg-(--color-card) p-6 rounded-2xl text-center shadow-md">
                    <i className="fas fa-calendar-check text-4xl text-(--color-button) mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Reservá online</h3>
                    <p className="text-gray-400">
                        Elegí día y horario disponible en segundos, sin llamadas.
                    </p>
                </div>

                <div className="bg-(--color-card) p-6 rounded-2xl text-center shadow-md">
                    <i className="fas fa-chair text-4xl text-(--color-button) mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Disfrutá la experiencia</h3>
                    <p className="text-gray-400">
                        Venís, te atendemos y salís con un look impecable.
                    </p>
                </div>
            </div>
        </section>

    )
}
