import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewAll = () => {
      const [studdata, changeData] = useState([])

      const fetchData = ()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
        .then( (response)=>{
            changeData(response.data)
        } ).catch((err) => {
    console.log(err);
})
      }  

      useEffect(
        ()=>{
            fetchData()
        },[]
      )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {studdata.map(
                                (value, index) => {
                                    return(
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>

                                        <div className="card">
    
                                            <div className="card-body">
                                                <h6 className="card-title">Reg ID: {value.regNo}</h6>
                                                <h6 className="card-title">FullName: {value.fullName}</h6>
                                                <h6 className="card-title">SSLC Mark: {value.sslcMark}</h6>
                                                <h6 className="card-title">Plus Two Mark: {value.plusTwoMark}</h6>
                                                <h6 className="card-title">UG Mark: {value.ugMark}</h6>
                                                <h6 className="card-title">PG Mark: {value.pgMark}</h6>
                                                <a href="#" class="btn btn-success">View</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>


        </div>
)}

export default ViewAll