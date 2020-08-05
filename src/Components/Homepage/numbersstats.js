import React, { Component } from 'react'
import AnimatedNumber from "animated-number-react";

export default class aninumber extends Component {
    state = {
        value: 591,
        value1:0.9,
        value2:9.0,
        value3:  151.55

      };
   
      formatValue = (value) => value.toFixed(1);
      render() {
        return (
          <div>
                  <section class=' text-center'>     
          <div class="container-fluid">

          <div class="container" style={{padding:"40px"}}>
		<div class="row">

			<div class="col-lg-3 stats">
				<i class="fa fa-code" aria-hidden="true"></i>
			  <AnimatedNumber
              value={this.state.value2}
              formatValue={this.formatValue}
            /> %
           &#8593;  {"  "}
           <hr></hr>
				<h5>June 2020 Unemployment Rate</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-check" aria-hidden="true"></i>
     
        - <AnimatedNumber
              value={this.state.value}
              formatValue={this.formatValue} 
            />
        <hr></hr>
				<h5> Employment change from 2019</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-user" aria-hidden="true"></i>
        -<AnimatedNumber
              value={this.state.value1}
              formatValue={this.formatValue}
            />%
            &#8593;  {"  "}
            <hr></hr>
				<h5>Percent Employment change from 2019</h5>
			</div>
   
			<div class="col-lg-3 stats">
				<i class="fa fa-coffee" aria-hidden="true"></i>
			  <AnimatedNumber
              value={this.state.value3}
              formatValue={this.formatValue}
            />%
            &#8593;  {"  "}
            <hr></hr>
          
				<h5>Percent Unemployment Change from 2019</h5>
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

