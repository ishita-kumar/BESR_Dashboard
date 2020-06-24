import React, { Component } from 'react';

class medianstuff extends Component {
    render() {
        return (
            <div>
                 <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div class="box " style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-eye"></i>
              <h3 style={{"color":"#d9534f"}}>$ {this.props.selectedmedian[0].value1}</h3>
              <p class="lead" style={{"color":"#000000"}}>Median Home Value</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box" style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-user-o"></i>
              <h3 style={{"color":"#5cb85c"}}>$ {this.props.selectedmedian[0].value2}</h3>
              <p class="lead" style={{"color":"#000000"}}>Median Household Income</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box warning" style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-shopping-cart"></i>
              <h3 style={{"color":"#5bc0de"}}>$ {this.props.selectedmedian[0].value3}</h3>
              <p class="lead" style={{"color":"#000000"}}>Median Family Income</p>
            </div>
          </div>
        
        </div>
      </div>
            </div>
        );
    }
}

export default medianstuff;