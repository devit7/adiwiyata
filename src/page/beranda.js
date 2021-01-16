import React from "react"
import './css/beranda.css'
import hmm from './image/Adiwiyata.png'
class beranda extends React.Component{
    render(){
        return(
            <div>
                <div class="title" >
                        <h6 class="card-title">ADIWIYATA</h6>
                        <h8 class="card-subtitle text-muted">Adiwiyata memiliki pengertian atau makna sebagai salah satu tempat yang baik dan juga ideal yang diperoleh segala ilmu pengetahuan dan beragai norma serta etika yang menjadi dasar manusia menuju terciptanya kesejahteraan hidup kita untuk menuju kepada cita-cita pembangunan berkelanjutan. </h8>
                </div>
                <img src={hmm}></img>
            </div>
        )
    }
}
export default beranda;