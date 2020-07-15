import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'White', Indiana: 10.9, Monroe: 19.7, amt: 1400,
    },
    {
        name: 'African American', Indiana: 26.8, Monroe: 0, amt: 1506,
    },
    {
        name: 'American Indian', Indiana: 15.7, Monroe: 0, amt: 989,
    },
    {
        name: 'Asian', Indiana:17.9, Monroe: 41.9, amt: 1228,
    },
    {
        name: 'Other', Indiana: 22, Monroe: 0, amt: 1100,
    },
    {
        name: 'Hispanic Latino', Indiana: 21.1, Monroe: 31.5, amt: 1100,
    },
    {
      name: 'White Alone(Not Hispanic or Latino)', Indiana: 10.4, Monroe: 18.2, amt: 1100,
    },
];
// return (
//     <div><p>Indiana State: 81,505,</p>
//     <p>Monroe County: 6,033</p>
//     </div>
// )

const getIntroOfPage = (label) => {
    if (label === 'White') {
      return "Indiana State: 584,877,Monroe County: 22,376"   
      ;
    } if (label === 'African American') {
      return "Indiana State: 162,583, Monroe County: NO DATA";
    } if (label === 'American Indian') {
      return "Indiana State: 2,005, Monroe County: NO DATA";
    } if (label === 'Asian') {
      return 'Indiana State: 25,918, Monroe County: 3,437';
    } if (label === 'Other') {
      return 'Indiana State: 35,203, Monroe County: NO DATA';
      
    } if (label === 'Hispanic Latino') {
      return 'Indiana State: 97,226, Monroe County: 1,414';
    }
    if (label === 'White Alone(Not Hispanic or Latino)') {
      return 'Indiana State: 531,604, Monroe County: 21,199';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{borderRadius:"10px"}}>
          <p className="label" >Race Group: {label}</p>
          <p className="label" > Indiana State: {payload[1].value} %</p>
          <p className="label" > Monroe County: {payload[0].value} %</p>
          <p className="intro" >{getIntroOfPage(label)}</p>
       
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
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
          
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ backgroundColor: "#DCDCDC", opacity: "0.5",borderRadius:"10px"}}
       
        content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Monroe" fill="#8884d8" />
        <Bar dataKey="Indiana" fill="#82ca9d" />
      </BarChart>
          </ResponsiveContainer>
          </div>
     </div>
     
    
      
    );
  }
}
