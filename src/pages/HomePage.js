import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import './css/home.css';
import { Temperature } from "../components/Temperature"
import { Ventilador } from "../components/Ventilador"
import { db } from "../firebase/firebaseConfig"

export const HomePage = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const { uid } = useSelector(state => state.auth);

    const getHabitaciones = async (uid) => {
        const habitaciones = await db.collection(uid).get()
        let datos = [];
        habitaciones.forEach(item => {
            datos.push({
                key: item.id,
                value: item.data()
            })
        })
        return datos;
    }

    let datos = [];

    useEffect(async () => {
        let datos = await getHabitaciones(uid)
        setHabitaciones(datos)
    }, [datos]);
    return (
        <div className="backgroundHome">
            <div className="container">
                <>
                    {
                        habitaciones.map((habitacion) => (
                            <div className="container">
                                <div className="row" key={habitacion.key} >
                                    <div className="col">
                                        <div class="container mt-5 d-flex justify-content-center">
                                            <div class="my-card"> <img class="my-card-img" src="https://www.ecestaticos.com/imagestatic/clipping/644/1d7/6441d7ac7362a43943ae0e4d99df1ada/por-que-los-gatos-no-son-leales-y-los-perros-no-saben-vivir-sin-su-dueno.jpg?mtime=1622860221" />
                                                <div class="my-card-body trainer-card-body">
                                                    <p><Ventilador estado={habitacion.value.proximidad ? "Su mascota esta comiendo" : "Su mascota no esta comiendo"} /></p>
                                                    <p><Temperature value={habitacion.value.peso} /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            </div>
        </div>
    )
}