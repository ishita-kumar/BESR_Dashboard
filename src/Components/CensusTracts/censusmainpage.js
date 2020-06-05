import React, { Component } from 'react';
import RaceData from "./Racedata"
import Agedata from "./agepeople"
import Employment from "./employmentdata"
import WorkExperience from "./workexperience"
import Education from "./Education"
import Median from "./medianstuff"

import Gender from "./genderdata"
import mediandata from '../../assets/medianhousehold'

import data from '../../assets/censustract_education'

class povertyMainpage extends Component {
  state = {
    censusName: '',
    selectedOption: [
      {
        name: 'Less than high school', Tract: data.output[0].less_high_school,
      },
      {
        name: 'High school graduate', Tract: data.output[0].high_school,
      },
      {
        name: 'Associates degree', Tract: data.output[0].associate_degree,
      },
      {
        name: 'Bachelors degree or higher', Tract: data.output[0].bachelor,
      }
    ],
    medianval: [
      {
        value1: mediandata.output[0].Median_Home_Value,
        value2: mediandata.output[0].Median_Household_Income,
        value3: mediandata.output[0].Median_Family_Income,

      }


    ]
  }


  handleChange = ({ target }) => {

    this.state.censusName = target.value

    let newData = []

    data.output.forEach(item => {

      if (item.census == target.value) {
        var less_high_school = {
          name: 'Less than high school',
          Tract: item.less_high_school
        }

        var high_school = {
          name: 'High school graduate',
          Tract: item.high_school
        }

        var associate_degree = {
          name: 'Associates degree',
          Tract: item.associate_degree
        }

        var bachelor = {
          name: 'Bachelors degree or higher',
          Tract: item.bachelor
        }
        newData.push(less_high_school)
        newData.push(high_school)
        newData.push(associate_degree)
        newData.push(bachelor)
      }
    })
    let median_Data = []
    mediandata.output.forEach(item => {

      if (item.tractfips == target.value) {
        // console.log("haha",item.Median_Home_Value,)
        var median_home_value = {
          value1: item.Median_Home_Value,
          value2: item.Median_Household_Income,
          value3: item.Median_Family_Income,
        }
        // var Median_Household_Income = {

        // }
        // var Median_Family_Income = {

        // }
        median_Data.push(median_home_value)
        // median_Data.push(Median_Household_Income)
        // median_Data.push(Median_Family_Income)

        console.log("ssh", median_Data)
      }
    })
    this.setState({
      selectedOption: newData,
      medianval: median_Data
    });
    console.log("dh", this.state.medianval[0].value)

  }
  render() {
    return (
      <div id="contents">
        <div className="">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">

                <a class="navbar-brand" href="#"><span className="color">Census Tracts Data</span></a>
              </div>
              <div style={{ position: "fixed", zIndex: 1000, width: "100%", display: "flex", justifyContent: "center" }}>
                <div class="form-group w-25">

                  {/* <label for="exampleFormControlSelect1">Select Census</label> */}
                  <select class="btn btn-secondary btn-lg dropdown-toggle" id="exampleFormControlSelect1" style={{"padding":"10px", "margin":"15px"}}
                    value={this.state.censusName}
                    onChange={this.handleChange}
                  >
                    {data.output.map(({ census }, index) => <option value={census} >{census}</option>)}
                  </select>
                </div>
              </div>

            </div>
          </nav>
        </div>
        <section class='statis text-center'>
          <Median selectedmedian={this.state.medianval}></Median>
        </section>

        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  {/* <h2 style={{ textAlign: "center" }}>By Gender</h2> */}
                  {/* <Gender></Gender> */}
                  <h2 style={{ textAlign: "center" }}>Age Statistsics</h2>
                  <Agedata></Agedata>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Male Education Data</h2>
                  <Gender></Gender>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="container-fluid">

            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Education Data</h2>
                  <Education selectedCensus={this.state.selectedOption}></Education>

                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">

                  <h2 style={{ textAlign: "center" }}>Work Experience</h2>
                  <WorkExperience></WorkExperience>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>By Gender</h2>

                  {/* <Employment></Employment> */}
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>By Race</h2>
                  <RaceData></RaceData>
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
