import React, { Component } from 'react'
import AnimatedNumber from "animated-number-react";

export default class aninumber extends Component {
    state = {
        value: 150,
      };
   
      formatValue = (value) => value.toFixed(1);
      render() {
        return (
          <div>
                  <section class='statis text-center'>
          
      
          <div class="container-fluid">
         <div class="row" style={{padding:"40px"}}>
             <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#d9534f"}}>
              <i class="fa fa-eye"></i>
              
              <h3 style={{"color":"#ffffff"}}>Hello</h3>
              <p class="lead" style={{"color":"#ffffff"}}>
              <AnimatedNumber
              value={this.state.value}
              formatValue={this.formatValue}
            />
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

