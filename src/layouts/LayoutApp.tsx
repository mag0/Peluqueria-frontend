
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const LayoutApp = () => {
    return (
        <div className="imagen-home relative min-h-screen flex flex-col">

            <div className="absolute inset-0 bg-[#181411]/70 z-0"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <hr className="text-gray-500" />
                <main className="flex-1 flex items-center">
                    <Outlet />
                </main>
                <hr className="text-gray-500" />
                <footer className="flex justify-center items-center p-4 text-white bg-(--color-primary-opacity)">
                    <p>&copy; 2025 Barbería Moderna. Todos los derechos reservados.</p>
                </footer>
            </div>

        </div>
    )
}

