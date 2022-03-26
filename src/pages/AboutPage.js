import gil from './img/gil.jpg';
import tobi from './img/tobi.jpg';
import edu from './img/edu.jpg';
import agua from './img/agua.jpg';
import './css/aboutPage.css';

export const AboutPage = () => {
    return (
        <div className='container-fluid backgroundAbout'>
            <div className="card-group">
                <div className="card">
                    <img src={edu}  className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><center>Carlos Eduardo Chávez Díaz</center></h5>
                        <p className="card-text" >Estudiante de la universidad Utselva, cursando la carrera de Desarrollo de Software Multiplataforma.</p>
                        <p className="card-text"><small className="text-muted">Contacto: 919 116 1370</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={tobi} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><center>Jairo Hernández Gómez</center></h5>
                        <p className="card-text" >Estudiante de la universidad Utselva, cursando la carrera de Desarrollo de Software Multiplataforma.</p>
                        <p className="card-text"><small className="text-muted">Contacto: 919 193 0865</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={gil} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><center>Gilberto Yosemir González Méndez</center></h5>
                        <p className="card-text" >Estudiante de la universidad Utselva, cursando la carrera de Desarrollo de Software Multiplataforma.</p>
                        <p className="card-text"><small className="text-muted">Contacto: 919 135 9014</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={agua} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><center>Daniel de Jesus Nal Hernandez</center></h5>
                        <p className="card-text" >Estudiante de la universidad Utselva, cursando la carrera de Desarrollo de Software Multiplataforma.</p>
                        <p className="card-text"><small className="text-muted">Contacto: 919 150 7340</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}