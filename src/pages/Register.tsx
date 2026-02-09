export const Register = () => {
    return (
        <section className="w-full flex justify-center items-center py-20">
            <div className="bg-(--color-card) p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Crear Cuenta</h2>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-(--color-button) hover:bg-orange-700 transition-colors p-3 rounded font-semibold"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="text-sm text-center mt-4 text-gray-400">
                    ¿Ya tenés cuenta? <a href="/login" className="text-(--color-button)">Iniciá sesión</a>
                </p>
            </div>
        </section>
    )
}
