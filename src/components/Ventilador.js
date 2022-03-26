import { useSelector } from 'react-redux';
import './css/ventilador.css';
import {db} from "../firebase/firebaseConfig"

export const Ventilador = ({habitacion, estado}) => {
    const {uid} =useSelector(state => state.auth);
    const onChange = (ev) =>{
        console.log(ev.target.checked);

        db.doc(`/${uid}/${habitacion}`)
        .update({
            Ventilador:ev.target.checked
        })
        /*/firebase.database()
        .ref(`/${uid}/${habitacion}/Ventilador`)
        .set(ev.target.checked)*/
    }
    return (
        <div>
            <div className='estado'><center>{estado}</center></div>
        </div>

    )
}