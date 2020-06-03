import Chart from "react-google-charts";

import React, { Component } from 'react';

class graphval extends Component {
    render() {
        return (
            <div>
                <Chart
 height="100%"
 width="100%"
  chartType="Table"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', label: 'County' },
      { type: 'number', label: 'Number_Claims' },
      { type: 'boolean', label: 'Number_Claimants' },
    ],
    ['Monroe', { v: 10000, f: '$10,000' }, true],
    ['Morris', { v: 8000, f: '$8,000' }, false],
    ['X', { v: 12500, f: '$12,500' }, true],
    ['Y', { v: 7000, f: '$7,000' }, true],
  ]}
  options={{
    showRowNumber: true,
   
  }}
  rootProps={{ 'data-testid': '1' }}
/>
            </div>
        );
    }
}

export default graphval;