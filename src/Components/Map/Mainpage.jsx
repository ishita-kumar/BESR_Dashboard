import React, { Component } from 'react';
// import UsaMap from "../Components/UsaMap";
import MyMapComponent from "./UsaMap";
import Chart from "../Chart";
import Tabu from "../tabs"
import DynamicSelect from '../DynamicSelect';
class Mainpage extends Component {

  render() {
    return (
      <div className="">

        <div id="contents">

          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">

                <a class="navbar-brand" href="#"><span className="color">Census Tracts Data</span></a>
              </div>
              <div style={{ position: "fixed", zIndex: 1000, width: "100%", display: "flex", justifyContent: "center" }}>

              </div>

            </div>
          </nav>
          <section className="charts">
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
          </section>


        </div>
      </div>
    );
  }
}

export default Mainpage;