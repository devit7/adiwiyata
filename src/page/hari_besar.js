import React from "react"
import "./css/hari_besar.css"
class hari_besar extends React.Component{
    render(){
        return(
            <div className="kotak">
                <table class="table table-sm table-borderless table-secondary table-striped shadow p-3 mb-5 bg-white rounded">
                <thead>
                    <tr>
                    <th scope="col">NO</th>
                    <th scope="col">TANGGAL</th>
                    <th scope="col">KEGIATAN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>10 JANUARI</td>
                        <td>Hari Perencanaan Gerakan 1 Juta Pohon</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>2 FEBRUARI</td>
                        <td>Hari lahan basah Se Dunia </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>21 FEBRUARI</td>
                        <td>Hari Peduli Sampah nasional  </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>6 MARET</td>
                        <td>Hari Strategi konservasi Se Dunia </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>16 MARET</td>
                        <td>Hari Bhakti Rimbawan</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>20 MARET</td>
                        <td>Hari Kehutanan Sedunia</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>21 MARET</td>
                        <td>Hari Hutan Internasional</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>22 MARET</td>
                        <td>Hari Air Se Dunia</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>22 APRIL</td>
                        <td>Hari Bumi</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>21 MEI</td>
                        <td>Hari Keanekaragaman Hayati</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>5 JUNI</td>
                        <td>Hari Lingkungan Hidup Sedunia</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>16 SEPTEMBER</td>
                        <td>Hari Ozon Internasional </td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>5 NOVEMBER</td>
                        <td>hari Cinta Puspa dan Satwa Nasional</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
export default hari_besar;