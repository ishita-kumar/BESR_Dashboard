import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'White', Tract: 18.5, 
    },
    {
        name: 'African American', Tract: 18.5, 
    },
    {
        name: 'American Indian', Tract: 18.5, 
    },
    {
        name: 'Asian', Tract: 18.5, 
    },
    {
        name: 'Other', Tract: 18.5, 
    },
    {
        name: 'Hispanic Latino', Tract: 18.5, 
    },
    {
      name: 'White Alone(Not Hispanic or Latino)', Tract: 18.5, 
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
          <p className="label" style={{color:"white"}}>Race Group: {label}</p>
          <p className="label" style={{color:"white"}}> Monroe County: {payload[0].value} %</p>
          <p className="intro" style={{color:"white"}}>{getIntroOfPage(label)}</p>
       
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
        <Tooltip  wrapperStyle={{ backgroundColor: "#21262F", borderRadius:"10px"}}
       
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
