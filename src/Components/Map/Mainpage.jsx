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
          <section className="charts">
            <div className="container" style={{width:"relative"}}>
              <MyMapComponent ></MyMapComponent>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Mainpage;