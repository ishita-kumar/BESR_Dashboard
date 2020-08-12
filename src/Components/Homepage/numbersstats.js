import React, { Component } from "react";
import AnimatedNumber from "animated-number-react";

export default class aninumber extends Component {
  state = {
    value: 591,
    value1: 0.9,
    value2: 9.0,
    value3: 151.55,
  };

  formatValue = (value) => value.toFixed(1);
  render() {
    return (
      <div>
        <section class=" text-center">
          <div class="container-fluid">
            <div class="container" style={{ padding: "40px" }}>
              <div class="row" style={{ backgroundColor: "white" }}>
                <div
                  class="col-lg-3 stats "
                  style={{ border: " 1px solid #D9D9D9" }}
                >
                
                  <h5 className="indicators">Rate of Unemployment</h5>
                  <h5 className="indicators-next">in June 2020</h5>
                  <hr className="hrred"></hr>
                  <h3 className="indicatornumber">
                  <h6 className="indicators-next">From May 2020 to June 2020</h6>
                    <AnimatedNumber
                      value={this.state.value2}
                      formatValue={this.formatValue}
                    /> %
                    <span style={{color:"red"}}> &#8593;</span>
                  
                  </h3>
                </div>

                <div
                  class="col-lg-3 stats"
                  style={{ border: " 1px solid #D9D9D9" }}
                >
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <h5 className="indicators">Employment Change</h5>
                   <h5 className="indicators-next">from June 2019 to 2020</h5>
                  <hr className="hrgreen"></hr>
                  <h6 className="indicators-next">June 2020 witnesses increase since the last June</h6>
                  <h3 className="indicatornumber">
                    -
                    <AnimatedNumber
                      value={this.state.value}
                      formatValue={this.formatValue}
                    />
                  </h3>
                </div>

                <div
                  class="col-lg-3 stats"
                  style={{ border: " 1px solid #D9D9D9" }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>

                  <h5 className="indicators">
                    Percent Employment
                  </h5>
                  <h5 className="indicators-next">Change from 2019</h5>
                  <hr className="hryellow"></hr>
                  <h3 className="indicatornumber">
                    -
                    <AnimatedNumber
                      value={this.state.value1}
                      formatValue={this.formatValue}
                      className="indicatornumber"
                    />
                    %  <span style={{color:"red"}}> &#8593;</span>
                  </h3>
                </div>

                <div
                  class="col-lg-3 stats"
                  style={{ border: " 1px solid #D9D9D9" }}
                >
                  <i class="fa fa-coffee" aria-hidden="true"></i>
                  <h5 className="indicators">
                    Percent Unemployment
                  </h5>
                  <h5 className="indicators-next">Change from 2019
                  </h5>
                  <hr className="hrpurple"></hr>
                  <h3 className="indicatornumber">
                    
                    <AnimatedNumber
                      value={this.state.value3}
                      formatValue={this.formatValue}
                      className="indicatornumber"
                    />
                    %  <span style={{color:"red"}}> &#8593;</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* <div class="row">
         <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#84C444"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}>June 2020 Unemployment Rate</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
              <AnimatedNumber
              value={this.state.value2}
              formatValue={this.formatValue}
            /> %
           &#8593;  {"  "}
              </p>
            </div>
          </div> 
             <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#C44444"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}> Employment change from 2019</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
             - <AnimatedNumber
              value={this.state.value}
              formatValue={this.formatValue} 
            />
            
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#44C4C4"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}>Percent Employment change from 2019</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
              -<AnimatedNumber
              value={this.state.value1}
              formatValue={this.formatValue}
            />%
            &#8593;  {"  "}
            
              </p>
            </div>
          </div>
      
          <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#C48444"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}> Percent Unemployment Change from 2019</h3>
              <p class="lead" style={{"color":"#ffffff"}} > 
              <AnimatedNumber
              value={this.state.value3}
              formatValue={this.formatValue}
            />%
            &#8593;  {"  "}
          
              </p>
            </div>
          </div>
          </div> */}
          </div>
        </section>
      </div>
    );
  }
}
