import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { AboutPage } from "../pages/AboutPage"
import { HomePage } from "../pages/HomePage"

export const DashboardRoute = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='home' element={<HomePage />} />
            <Route path='acerca' element={<AboutPage />} />
        </Routes>
        </>
        
    )
}