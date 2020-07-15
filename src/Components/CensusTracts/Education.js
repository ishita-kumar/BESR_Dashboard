import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LabelList,defs
} from 'recharts';
import educationData from '../../assets/censustract_education'
const getIntroOfPage = (label) => {
  if (label === 'Less than high school graduate') {
    return "Indiana State: 112,591,Monroe County: 953";
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
      <div className="custom-tooltip" style={{ borderRadius: "10px" }}>
        <p className="label" style={{ color: "white" }}>Education Group: {label}</p>
        <p className="label" style={{ color: "white" }}> Monroe County: {payload[0].value} </p>
        <p className="intro" style={{ color: "white" }}>{getIntroOfPage(label)}</p>

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
              data={this.props.selectedCensus}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0652C5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#D4418E" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" tick={{ fill: 'black' }} />
              <YAxis tick={{ fill: 'black' }} />
              <Tooltip wrapperStyle={{ backgroundColor: "#21262F", borderRadius: "10px" }}

                content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Tract" fill="url(#colorUv)" />
              <LabelList content={this.props.selectedCensus}  position="top" />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>



    );
  }
}
