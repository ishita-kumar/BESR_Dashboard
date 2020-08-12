import React, { Component } from 'react';
import RaceData from "./Racedata"
import Agedata from "./agepeople"
import Employment from "./employmentdata"
import WorkExperience from "./workexperience"
import Education from "./Education"
import Median from "./medianstuff"
import Pdf from "react-to-pdf";
import Gender from "./genderdata"
import mediandata from '../../assets/medianhousehold'
import gender from "../../assets/censustracts_gender"
import data from '../../assets/censustract_education'
import age from '../../assets/censustract_age'

const ref = React.createRef();

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
    gender: [
      { name: 'Male', value: gender.output[0].Male[0], Mo: 13766 },
      { name: 'Female', value: gender.output[0].Female[0], Mo: 15079 },
    ],
    medianval: [
      {
        value1: mediandata.output[0].Median_Home_Value,
        value2: mediandata.output[0].Median_Household_Income,
        value3: mediandata.output[0].Median_Family_Income,

      }
    ],
    age: [
      {
        name: 'under_5_years', Tract: age.output[1].under_5_years,
      },
      {
        name: 'from5_to_17', Tract:  age.output[1].from5_to_17,
      },
      {
        name: 'from18_to_24', Tract: age.output[1].from18_to_24,
      },
      {
        name: 'from25_to_44', Tract: age.output[1].from25_to_44,
      },
      {
        name: 'from45_to_64', Tract: age.output[1].from45_to_64,
      },
      {
        name: 'from65_to_74', Tract: age.output[1].from65_to_74,
      },
      {
        name: 'from75_older', Tract: age.output[1].from75_older,
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
        var median_home_value = {
          value1: item.Median_Home_Value,
          value2: item.Median_Household_Income,
          value3: item.Median_Family_Income,
        }

        median_Data.push(median_home_value)

        console.log("ssh", median_Data)
      }
    })
    let age_data=[]
    age.output.forEach(item => {
      if (item.census == target.value){
        var under5= {
          name:'Under 5 Years',
          Tract:item.under_5_years
        }
        var from5_to_17= {
          name:'5 to 17 Years',
          Tract:item.from5_to_17
        }
        var from18_to_24= {
          name:'18 to 14 Years',
          Tract:item.from18_to_24
        }
        var from25_to_44= {
          name:'25 to 44 Years',
          Tract:item.from25_to_44
        }
        var from45_to_64= {
          name:'45 to 64 Years',
          Tract:item.from45_to_64
        }
        var from65_to_74= {
          name:'65 to 74 Years',
          Tract:item.from65_to_74
        }
        var from75_older= {
          name:'75 and Older',
          Tract:item.from75_older
        }
        age_data.push(under5)
        age_data.push(from5_to_17)
        age_data.push(from18_to_24)
        age_data.push(from25_to_44)
        age_data.push(from45_to_64)
        age_data.push(from65_to_74)
        age_data.push(from75_older)
      }
    })
    let gender_data = []
    gender.output.forEach(item => {
      if (item.census == target.value) {
        var male = {
          name: 'Male',
          value: item.Male[0],
        }
        var Female = {
          name: 'Female',
          value: item.Female[0],
        }
        gender_data.push(male)
        gender_data.push(Female)

      }
    }
   
    )
    this.setState({
      selectedOption: newData,
      medianval: median_Data,
      gender: gender_data,
      age:age_data

    });
    console.log("hah", gender.male)

  }
  render() {
    return (
      <div id="contents">
      
        <div class="welcome">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="content">
                  <p>Find your Census Tract: <a href="https://www.census.gov/geographies/reference-maps/2010/geo/2010-census-tract-maps.html">here</a></p>
                 
                  <div class="form-group"> 

{/* <label for="exampleFormControlSelect1">Select Census</label> */}
<h2>Pick A Census Tract</h2>
<select class="btn btn-secondary btn-lg dropdown-toggle" id="exampleFormControlSelect1" style={{ "padding": "10px", "margin": "15px" }}
  value={this.state.censusName}
  onChange={this.handleChange}
>
  {data.output.map(({ census }, index) => <option value={census} >{census}</option>)}
</select>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref}>  </div>
        <section class='statis text-center'>
          <Median selectedmedian={this.state.medianval}></Median>
        </section>

        <section className="charts" style={{ "color": "black" }}>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  {/* <h2 style={{ textAlign: "center" }}>By Gender</h2> */}
                  {/* <Gender></Gender> */}
                  <h2 style={{ textAlign: "center" }}>Age Statistsics</h2>
                  <Agedata agestuff={this.state.age}></Agedata>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Gender Data</h2>
                  <Gender selectgender={this.state.gender}></Gender>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="container-fluid">

            <br />
            <br />
            <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
              <div className="col-md-9">
                <div className="chart-container" style={{ "color": "black" }}>
                  <h2 style={{ textAlign: "center" }}>Education Data</h2>
                  <Education selectedCensus={this.state.selectedOption}></Education>

                  <div>

                  </div>

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
