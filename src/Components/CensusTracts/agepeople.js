import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';

// return (
//     <div><p>Indiana State: 81,505,</p>
//     <p>Monroe County: 6,033</p>
//     </div>
// )

const getIntroOfPage = (label) => {
  if (label === '>5') {
    return "Indiana State: 81,505,Monroe County: 1,119"

      ;
  } if (label === '5-17') {
    return " Total: 1,891";
  } if (label === '18-34') {
    return "Indiana State: 2,43,548, Monroe County: 19,975";
  } if (label === '35-64') {
    return 'Indiana State: 2,53,544, Monroe County: 5,134';
  } if (label === '<64') {
    return 'Indiana State: 1,22,380, Monroe County: 2,399';
  } if (label === '65+') {
    return 'Indiana State: 80,176, Monroe County: 726';
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{ borderRadius: "10px" }}>
     

      </div>
    );
  }

  return null;
};
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div>

        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={this.props.agestuff}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip wrapperStyle={{ backgroundColor: "#21262F", borderRadius: "10px" }}

                content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Tract" fill="#8884d8" />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    );
  }
}
