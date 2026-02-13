import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { Link } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-(--color-primary-opacity) text-white px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <i className="fas fa-cut text-2xl text-(--color-text)"></i>
                    <h1 className="text-xl font-bold">BARBERIA MODERNA</h1>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="hover:text-(--color-button)">Home</Link>
                    <Link to="/services" className="hover:text-(--color-button)">Services</Link>
                    <Link to="/about" className="hover:text-(--color-button)">About</Link>
                    <Button onClick={() => navigate("/login")} title="Iniciar Sesión">
                        <i className="fas fa-sign-in-alt"></i>
                    </Button>
                </nav>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </div>

            {open && (
                <div className="md:hidden mt-4 flex flex-col gap-4 bg-(--color-card) p-4 rounded-xl">
                    <Link to="/" className="hover:text-(--color-button)">Home</Link>
                    <Link to="/services" className="hover:text-(--color-button)">Services</Link>
                    <Link to="/about" className="hover:text-(--color-button)">About</Link>
                    <Button onClick={() => navigate("/login")} title="Iniciar Sesión">
                        <i className="fas fa-sign-in-alt"></i>
                    </Button>
                </div>
            )}
        </header>
    )
}
