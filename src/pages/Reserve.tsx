import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

const booked = [
    { date: "2026-02-10", time: "10:00" },
    { date: "2026-02-10", time: "11:00" },
    { date: "2026-02-12", time: "15:00" },
    { date: "2026-02-14", time: "09:00" },
]

const allTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export const Reserve = () => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const navigate = useNavigate()

    const getAvailableTimes = (selectedDate: string) => {
        const reserved = booked.filter(b => b.date === selectedDate).map(b => b.time)
        return allTimes.filter(t => !reserved.includes(t))
    }

    const availableTimes = date ? getAvailableTimes(date) : []

    return (
        <section className="w-full flex justify-center items-start py-10 px-4">
            <div className="bg-(--color-card) p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-2xl text-white">

                {/* Volver */}
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mb-4 flex items-center gap-2 text-sm text-gray-300 hover:text-(--color-button) transition-colors"
                >
                    <i className="fas fa-arrow-left"></i>
                    Volver
                </button>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Reservar Cita</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

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
                        type="date"
                        value={date}
                        onChange={e => {
                            setDate(e.target.value)
                            setTime("")
                        }}
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <select
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        disabled={!date}
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button) disabled:opacity-50"
                    >
                        <option value="">Seleccionar horario</option>
                        {availableTimes.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                    <select className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)">
                        <option value="">Seleccionar servicio</option>
                        <option>The Classic Cut</option>
                        <option>Corte Moderno</option>
                        <option>Corte de Diseño</option>
                    </select>

                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <textarea
                        placeholder="Comentario adicional (opcional)"
                        rows={3}
                        className="md:col-span-2 p-3 rounded bg-[#2a241e] text-white focus:outline-none focus:ring-2 focus:ring-(--color-button)"
                    />

                    <div className="md:col-span-2 flex justify-end">
                        <Button title="Confirmar Reserva">
                            <i className="fas fa-check"></i>
                        </Button>
                    </div>

                </form>
            </div>
        </section>
    )
}
