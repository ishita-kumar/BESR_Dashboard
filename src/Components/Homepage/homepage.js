import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class homepage extends Component {
  render() {
    return (
      <div id="contents">
        <div class="welcome">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="content">
                  <h2>Welcome to the BESR Dashboard</h2>
                  <p></p>
                  <p>
                  </p>
                </div>
                <div class="content">
                  <div className="row">

                    <div className="col-4">
                      <div class="card" style={{ "width": "18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title  text-dark"><svg class="bi bi-map" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z" />
                          </svg>  GeoMaps for Census
                        <Link to="/Map">  <svg class="bi bi-box-arrow-in-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.5 3A1.5 1.5 0 0 0 13 1.5H3A1.5 1.5 0 0 0 1.5 3v5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9a.5.5 0 0 0 0 1h4a1.5 1.5 0 0 0 1.5-1.5V3z" />
                              <path fill-rule="evenodd" d="M4.5 6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6.5H5a.5.5 0 0 1-.5-.5z" />
                              <path fill-rule="evenodd" d="M10.354 5.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z" />
                            </svg></Link></h5>
                          <h6 class="card-subtitle mb-2 text-muted">Area Map for Monroe County</h6>
                          <p class="card-text">Get Information for each census Tracts</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="card" style={{ "width": "18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title  text-dark"><svg class="bi bi-bullseye" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>  Data Overhead
                        <Link to="/PovertyData">  <svg class="bi bi-box-arrow-in-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.5 3A1.5 1.5 0 0 0 13 1.5H3A1.5 1.5 0 0 0 1.5 3v5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9a.5.5 0 0 0 0 1h4a1.5 1.5 0 0 0 1.5-1.5V3z" />
                              <path fill-rule="evenodd" d="M4.5 6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6.5H5a.5.5 0 0 1-.5-.5z" />
                              <path fill-rule="evenodd" d="M10.354 5.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z" />
                            </svg></Link></h5>
                          <h6 class="card-subtitle mb-2 text-muted">Compare Monroe county Data with Indiana State</h6>
                          <p class="card-text">Get Information </p>

                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="card" style={{ "width": "18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title  text-dark"><svg class="bi bi-bar-chart" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                          </svg>  Census Data
                        <Link to="/CensusTracts">  <svg class="bi bi-box-arrow-in-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.5 3A1.5 1.5 0 0 0 13 1.5H3A1.5 1.5 0 0 0 1.5 3v5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9a.5.5 0 0 0 0 1h4a1.5 1.5 0 0 0 1.5-1.5V3z" />
                              <path fill-rule="evenodd" d="M4.5 6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6.5H5a.5.5 0 0 1-.5-.5z" />
                              <path fill-rule="evenodd" d="M10.354 5.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z" />
                            </svg></Link></h5>
                          <h6 class="card-subtitle mb-2 text-muted">Statistics for Monroe County</h6>
                          <p class="card-text">Get Information for each census Tracts</p>

                        </div>
                      </div>
                    </div>




                  </div>



                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default homepage;

