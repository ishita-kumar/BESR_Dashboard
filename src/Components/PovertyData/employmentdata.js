import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Employed', Male_Indiana: 4.7, Female_Indiana: 7.8, Male_Monroe: 12.5,Female_Monroe:20.02,
  },
  {
    name: 'Unemployed', Male_Indiana: 26.9, Female_Indiana: 36.8, Male_Monroe: 36.8,Female_Monroe:36.2,
  },
  
];

const getIntroOfPage = (label) => {
  if (label === 'Employed') {
    return ( <div><p>Indiana State, Male:78,897, Female:118,105 </p>
          <p>Monroe County, Male: 4,446, Female:7097</p>
          </div>)
       
    ;
  } if (label === 'Unemployed') {
    return ( <div><p>Indiana State, Male:20,792, Female:25,473 </p>
      <p>Monroe County, Male: 530, Female:404</p>
      </div>);
  } 
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{borderRadius:"10px"}}>
        <p className="label" style={{color:"white"}}>Employment Group: {label}</p>
        <p className="label" style={{color:"white"}}> Indiana State: {payload[1].value} %</p>
        <p className="label" style={{color:"white"}}> Monroe County: {payload[0].value} %</p>
        <p className="intro" style={{color:"white"}}>{getIntroOfPage(label)}</p>
     
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

  render() {
    return (
      <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip  wrapperStyle={{ backgroundColor: "#21262F", borderRadius:"10px"}}
       
       content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Male_Indiana" stackId="a" fill="#8884d8" />
        <Bar dataKey="Female_Indiana" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Male_Monroe" stackId="b" fill="#8884d8" />
        <Bar dataKey="Female_Monroe" stackId="b" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
        </div>
    );
  }
}
