import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
   
    {
        name: 'Full-Time', Indiana: 2.5, Monroe: 2.4, amt: 1506,
    },
    {
        name: 'Part-Time', Indiana: 17.5, Monroe: 45, amt: 989,
    },
    {
        name: 'No-Work Experience', Indiana: 21, Monroe: 26.4, amt: 1228,
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
          <p className="label" >Employment Group: {label}</p>
          <p className="label"> Indiana State: {payload[1].value} %</p>
          <p className="label" > Monroe County: {payload[0].value} %</p>
          <p className="intro">{getIntroOfPage(label)}</p>
       
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
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#516395" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#614385" stopOpacity={0.8}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#868F96 " stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#596164" stopOpacity={0.8}/>
    </linearGradient>
  </defs>
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ backgroundColor: "#DCDCDC", opacity: "0.5",borderRadius:"10px"}}
       
        content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Monroe" fill="url(#colorUv)" />
        <Bar dataKey="Indiana" fill="url(#colorPv)" />
      </BarChart>
          </ResponsiveContainer>
          </div>
     </div>
     
    
      
    );
  }
}
