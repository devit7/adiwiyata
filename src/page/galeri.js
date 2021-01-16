import React from "react"
import "./css/galeri.css"
import ke1 from "./image/ke1.jpg"
import ke2 from "./image/ke2.jpg"
class galeri extends React.Component{
    render(){
        return(
            <div>
                <img src={ke1} class="rounded shadow-sm p-3 mb-5 bg-white dc" alt="..."></img>
                <img src={ke2} class="rounded shadow-sm p-3 mb-5 bg-white dc" alt="..."></img>
            </div>
        );
    }
}
export default galeri;