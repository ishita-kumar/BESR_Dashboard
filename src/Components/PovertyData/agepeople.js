import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: '>5', Indiana: 20, Monroe: 18.5, amt: 1400,
    },
    {
        name: '5-17', Indiana: 17.3, Monroe: 11.5, amt: 1506,
    },
    {
        name: '18-34', Indiana: 17, Monroe: 42.6, amt: 989,
    },
    {
        name: '35-64', Indiana: 10.1, Monroe: 11.7, amt: 1228,
    },
    {
        name: '<64', Indiana: 8.5, Monroe: 9.1, amt: 1100,
    },
    {
        name: '<65+', Indiana: 7.8, Monroe: 3.9, amt: 1100,
    },
];
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
      return "Indiana State: 1,93,865, Monroe County: 1,891";
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
        <div className="custom-tooltip" style={{borderRadius:"10px"}}>
          <p className="label" style={{color:"white"}}>Age Group: {label}</p>
          <p className="label" style={{color:"white"}}> Indiana State: {payload[1].value} %</p>
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
        <Bar dataKey="Monroe" fill="#8884d8" />
        <Bar dataKey="Indiana" fill="#82ca9d" />
      </BarChart>
          </ResponsiveContainer>
          </div>
     </div>
     
    
      
    );
  }
}
