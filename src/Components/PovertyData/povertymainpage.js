import React, { Component } from 'react';
import RaceData from "./Racedata"
import Agedata from "./agepeople"
import Employment from "./employmentdata"
import WorkExperience from "./workexperience"
import Education from "./Education"
import Gender from "./genderdata"

class povertyMainpage extends Component {
  render() {
    return (
      <div id="contents">
        <div className="">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">

                <a class="navbar-brand" href="#"><span className="color">Poverty Data for Indiana State and Monroe County</span></a>
              </div>
              <div style={{ position: "fixed", zIndex: 1000, width: "100%", display: "flex", justifyContent: "center" }}>
                <div class="form-group w-25">


                </div>
              </div>

            </div>
          </nav>
        </div>
        <div class="welcome">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="content">
                  <h2>Poverty Data of Indiana State vs Monroe County</h2>
     
                  <p>

                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="charts" style={{"color":"black"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container" >
                  <h2 style={{ textAlign: "center" }}>Age Data</h2>
                  <Agedata></Agedata>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container " style={{"color":"black"}}>

                  <h2 style={{ textAlign: "center" }}>Work Experience</h2>
                  <WorkExperience></WorkExperience>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="container-fluid" style={{"color":"black"}}>
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>By Gender</h2>
                  <Gender></Gender>
                  {/* <Employment></Employment> */}
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>By Race</h2>
                  <RaceData></RaceData>
                </div>
              </div>



            </div>
          </div>
        </section>
        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>Employment By Gender</h2>
                  {/* <Gender></Gender> */}
                  <Employment></Employment>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>Education Data</h2>
                  <Education></Education>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default povertyMainpage;

{/* <div className="col-md-3">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>Education</h2>
                 <Education></Education>
                </div>
              </div> */}