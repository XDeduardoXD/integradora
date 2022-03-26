import './css/temperature.css'

export const Temperature = ({ room, value }) => {
    if (value <= 80) {
        return (
            <div>
                <div>
                    <p className='texto'><center>Cantidad restante de alimento</center></p>
                    <div className='recomendar'><center>{value} gr</center></div>
                    <p className='recomendar'><center>Se recomienda llenar el recipiente de alimento</center></p>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <p className='texto'><center>Cantidad restante de alimento</center></p>
                    <div className='texto'><center>{value} gr</center></div>
                </div>
            </div>
        )
    }
}