import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export const Home = () => {
    const navigate = useNavigate()

    return (
        <section className="w-full px-6 md:px-20 py-12 flex flex-col justify-center gap-6 text-white">

            <div className="flex items-center gap-4">
                <div className="bg-(--color-button) h-px w-10"></div>
                <span className="text-(--color-button) text-base md:text-lg">2025</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                Estilo <br /> que se nota
            </h1>

            <div className="border-l-4 border-(--color-button) pl-4 max-w-xl">
                <p className="text-base md:text-xl text-gray-200">
                    Técnicas tradicionales, ejecución moderna.
                    <br /> Experimentá el mejor aseo personal de la ciudad
                    <br /> en un ambiente exclusivo y relajante.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                    onClick={() => navigate("/reserve")}
                    title="Reservá tu cita"
                    styles="py-3 px-6 bg-(--color-button)"
                >
                    <i className="fas fa-calendar-week"></i>
                </Button>

                <Button
                    onClick={() => navigate("/services")}
                    title="Ver Servicios"
                    styles="py-3 px-6 border border-white/40"
                >
                    <i className="fas fa-arrow-right"></i>
                </Button>
            </div>
        </section>
    )
}
