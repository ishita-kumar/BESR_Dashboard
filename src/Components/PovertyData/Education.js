import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
   
    {
        name: 'Less than high school graduate', Indiana: 23.9, Monroe: 20.4, amt: 1506,
    },
    {
        name: 'High school graduate', Indiana: 11.6, Monroe: 11.4, amt: 989,
    },
    {
        name: 'Associates degree', Indiana: 9.2, Monroe: 11.8, amt: 1228,
    },
    {
      name: 'Bachelors degree or higher', Indiana: 4.1, Monroe: 8.4, amt: 1228,
  }
   
];


const getIntroOfPage = (label) => {
    if (label === 'Less than high school graduate') {
      return "Indiana State: 112,591,Monroe County: 953"
         
      ;
    } if (label === 'High school graduate') {
      return "Indiana State: 167,276, Monroe County: 1,923";
    } if (label === 'Associates degree') {
      return "Indiana State: 116,983, Monroe County: 2,535";
    } 
    if (label === 'Bachelors degree or higher') {
      return "Indiana State: 48,819, Monroe County: 3,347";
    } 
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{borderRadius:"10px"}}>
          <p className="label" style={{color:"white"}}>Education Group: {label}</p>
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
