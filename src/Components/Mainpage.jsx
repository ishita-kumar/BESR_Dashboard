import React, { Component } from 'react';
// import UsaMap from "../Components/UsaMap";
import MyMapComponent from "../Mappage/UsaMap";
import Chart from "../Components/Chart";
import Tabu from "../Components/tabs"
import DynamicSelect from './DynamicSelect';
class Mainpage extends Component {

  render() {
    return (
      <div className="statistics">
        <div id="contents">


          <section className="charts">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                    <h3>Monroe County Data</h3>
                    <div className="leaflet-container">
                    <MyMapComponent ></MyMapComponent>
                    </div>
                   
                    <div>
                     
                    </div>


                    <canvas id="myChart"></canvas>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="chart-container">
                    <h3>Counties in Indiana</h3>

                    <Tabu></Tabu>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          <section className="chrt3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                  

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