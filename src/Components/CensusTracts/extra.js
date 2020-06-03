import React, { Component } from 'react';
import RaceData from "./Racedata"
import Agedata from "./agepeople"
import Employment from "./employmentdata"
import WorkExperience from "./workexperience"
import Education from "./Education"
import Gender from "./genderdata"
import Median from "./medianstuff"
import data from '../../assets/censustract_education'
import mediandata from '../../assets/medianhousehold'

class povertyMainpage extends Component {
  state = {
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
    medianval:[
      {
        value:mediandata.output[0].Median_Home_Value
      }
    

    ]
  }

  handleChange = ({ target }) => {

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
        console.log("haha",item.Median_Home_Value,)
        var median_values = {
          value:item.Median_Home_Value,
         
        }
        median_Data.push(median_values)
      }
     
      
    })

    this.setState({
      selectedOption: newData,
      medianval: median_Data
    });
  console.log("haha",this.state.medianval)

  }

  render() {
    return (
      <div id="contents">
        <section className="charts">
          <div className="container-fluid">
            <div style={{ position: "fixed", zIndex: 1000, width: "100%", display: "flex", justifyContent: "center"}}>
              <div class="form-group w-25">

                {/* <label for="exampleFormControlSelect1">Select Census</label> */}
                <select class="form-control" id="exampleFormControlSelect1"
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                >
                  {data.output.map(({ census }, index) => <option value={census} >{census}</option>)}
                </select>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Age Data</h2>
                  <Agedata></Agedata>
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
        <section class='statis text-center'>
     <Median selectedmedian={this.state.medianval}></Median>
     
    </section>
        <section className="charts">
          <div className="container-fluid">
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
                <div className="chart-container">
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
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>By Gender</h2>
                  {/* <Gender></Gender> */}
                  <Employment></Employment>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Male Employment Data</h2>
                  <Education selectedCensus={this.state.selectedOption}></Education>
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