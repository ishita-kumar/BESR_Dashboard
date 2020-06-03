import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
   
    {
        name: 'Full-Time',  Tract: 18.5, 
    },
    {
        name: 'Part-Time', Tract: 18.5, 
    },
    {
        name: 'No-Work Experience',  Tract: 18.5, 
    },
   
];


const getIntroOfPage = (label) => {
    if (label === 'Full-Time') {
      return "Indiana State: 59,011,Monroe County: 1,047"
         
      ;
    } if (label === 'Part-Time') {
      return "Indiana State: 207,158, Monroe County: 17,483";
    } if (label === 'No-Work Experience') {
      return "Indiana State: 342,873, Monroe County: 7,643";
    } 
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{borderRadius:"10px"}}>
          <p className="label" style={{color:"white"}}>Employment Group: {label}</p>
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
