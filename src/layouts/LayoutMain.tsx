
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const LayoutMain = () => {
    return (
        <>
            <div>
                <Header />
                <hr className="text-gray-500" />

                <Outlet />

                <hr className="text-gray-500 mt-20" />
                <Footer />
            </div>
        </>
    )
}
