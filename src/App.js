import React from "react"
import {Switch, Route} from "react-router-dom"
import Nav from"./component/nav"
// import semua halaman yang ditampilkan
import Beranda from "./page/beranda"
import Galeri from "./page/galeri"
import Hari_besar from "./page/hari_besar"

class App extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Beranda} />

                    <Route path="/galeri" component={Galeri} />
                    <Route path="/hari_besar" component={Hari_besar} />
                </Switch>
            </div>
        )
    }
}
export default App;