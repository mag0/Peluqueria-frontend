export const About = () => {
    return (
        <section className="w-full px-12 py-24 text-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Texto */}
                <div className="flex-1">
                    <span className="text-(--color-button) text-sm tracking-widest">QUIÉNES SOMOS</span>
                    <h1 className="text-5xl font-bold mt-4 mb-6">Barbería Moderna</h1>
                    <p className="text-white/80 leading-relaxed mb-6">
                        En Barbería Moderna combinamos tradición y estilo urbano para ofrecer una experiencia
                        de grooming premium. Cada detalle está pensado para que te sientas cómodo, seguro y con
                        un look impecable.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        Nuestro equipo está formado por barberos profesionales apasionados por su arte.
                        Creemos que un buen corte no es solo estética, es identidad.
                    </p>
                </div>

                {/* Imagen */}
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?q=80&w=1600&auto=format&fit=crop"
                        alt="Equipo de Barbería Moderna"
                        className="rounded-xl shadow-lg object-cover w-full h-[420px]"
                    />
                </div>

            </div>
        </section>
    );
};
