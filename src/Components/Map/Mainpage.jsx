import React, { Component } from 'react';
// import UsaMap from "../Components/UsaMap";
import MyMapComponent from "./UsaMap";
import Chart from "../Chart";
import Tabu from "../tabs"
import DynamicSelect from '../DynamicSelect';
import { Link } from 'react-router-dom';
class Mainpage extends Component {

  render() {
    return (
      <div className="">

        <div id="contents">

          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">

                <a class="navbar-brand" href="#"><h3 className="color">Unemployment Data within each tract in Monroe County</h3></a>
              </div>
              <div style={{ position: "fixed", zIndex: 1000, width: "100%", display: "flex", justifyContent: "center" }}>

              </div>

            </div>
          </nav>
          <div class="welcome">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="content">
                    <h2>Monroe County Tracts  </h2>
                    <p>Check the Census tract you live in: <a href="https://www.census.gov/geographies/reference-maps/2010/geo/2010-census-tract-maps.html">here</a></p>
                    <p>

                    </p>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="charts">
            <div className="container-fluid">
              <MyMapComponent ></MyMapComponent>

            </div>
          </section>

          {/* <section className="charts">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                    <h3>Monroe County Data</h3>
                    <div className="mapbox-container">
                      <MyMapComponent ></MyMapComponent>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}


        </div>
      </div>
    );
  }
}

export default Mainpage;