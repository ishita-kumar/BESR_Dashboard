import React, { Component } from 'react'
import AnimatedNumber from "animated-number-react";

export default class aninumber extends Component {
    state = {
        value: 4022,
        value1:5.8,
        value2:7.8,
        value3:  24.7

      };
   
      formatValue = (value) => value.toFixed(1);
      render() {
        return (
          <div>
                  <section class='statis text-center'>
          
      
          <div class="container-fluid">
         <div class="row" style={{padding:"40px"}}>
         <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#84C444"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}>May 2020 Unemployment Rate</h3>
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
              
              <h3 style={{"color":"#ffffff"}}> Unemployment change since 2019</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
             + <AnimatedNumber
              value={this.state.value}
              formatValue={this.formatValue} 
            />
            
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#44C4C4"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}>Percent change in Unemployment</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
              <AnimatedNumber
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
              
              <h3 style={{"color":"#ffffff"}}> Poverty Rate change since 2019</h3>
              <p class="lead" style={{"color":"#ffffff"}} > 
              <AnimatedNumber
              value={this.state.value3}
              formatValue={this.formatValue}
            />%
            &#8593;  {"  "}
          
              </p>
            </div>
          </div>
          </div>
          </div>
          </section>
         
          </div>
        );
      }
}

