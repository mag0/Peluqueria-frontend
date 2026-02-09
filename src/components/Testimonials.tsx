
export const Testimonials = () => {
    return (
        <section className="px-8 py-20 bg-black/30 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Lo que dicen nuestros clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-(--color-card) p-6 rounded-2xl shadow-md">
                    <p className="text-gray-300 italic mb-4">
                        “El mejor corte que me hice en años. Atención de primera.”
                    </p>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-user-circle text-2xl text-(--color-button)"></i>
                        <span className="font-semibold">Juan Pérez</span>
                    </div>
                </div>

                <div className="bg-(--color-card) p-6 rounded-2xl shadow-md">
                    <p className="text-gray-300 italic mb-4">
                        “Turnos rápidos, ambiente cómodo y barberos muy profesionales.”
                    </p>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-user-circle text-2xl text-(--color-button)"></i>
                        <span className="font-semibold">Martín López</span>
                    </div>
                </div>

                <div className="bg-(--color-card) p-6 rounded-2xl shadow-md">
                    <p className="text-gray-300 italic mb-4">
                        “Desde que vengo acá, no cambio más de barbería.”
                    </p>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-user-circle text-2xl text-(--color-button)"></i>
                        <span className="font-semibold">Santiago Gómez</span>
                    </div>
                </div>
            </div>
        </section>

    )
}
