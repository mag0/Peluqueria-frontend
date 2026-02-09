import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    return (
        <section className="w-full flex justify-center items-center py-20">
            <div className="bg-(--color-card) p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="cursor-pointer mb-4 flex items-center gap-2 text-sm text-gray-300 hover:text-(--color-button) transition-colors"
                >
                    <i className="fas fa-arrow-left"></i>
                    Volver
                </button>

                <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>

                <form className="flex flex-col gap-4">
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
                        Entrar
                    </button>
                </form>

                <p className="text-sm text-center mt-4 text-gray-400">
                    ¿No tenés cuenta? <a href="/register" className="text-(--color-button)">Registrate</a>
                </p>
            </div>
        </section>
    )
}
