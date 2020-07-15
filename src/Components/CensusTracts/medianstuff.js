import React, { Component } from 'react';

class medianstuff extends Component {
    render() {
        return (
            <div>
                 <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div class="box " style={{"backgroundColor":"#84C444"}}>
              <i class="fa fa-eye"></i>
              <h3 >$ {this.props.selectedmedian[0].value1}</h3>
              <p class="lead">Median Home Value</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box" style={{"backgroundColor":"#C44444"}}>
              <i class="fa fa-user-o"></i>
              <h3 >$ {this.props.selectedmedian[0].value2}</h3>
              <p class="lead" >Median Household Income</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box warning" style={{"backgroundColor":"#44C4C4"}}>
              <i class="fa fa-shopping-cart"></i>
              <h3 >$ {this.props.selectedmedian[0].value3}</h3>
              <p class="lead" >Median Family Income</p>
            </div>
          </div>
        
        </div>
      </div>
            </div>
        );
    }
}

export default medianstuff;