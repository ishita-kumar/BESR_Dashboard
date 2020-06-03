import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Employed', Male_Indiana: 4000, Female_Indiana: 2400, Male_Monroe: 2400,Female_Monroe:2400,
  },
  {
    name: 'Unemployed', Male_Indiana: 4000, Female_Indiana: 2400, Male_Monroe: 2400,Female_Monroe:2400,
  },
  
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

  render() {
    return (
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
        <Tooltip />
        <Legend />
        <Bar dataKey="Male_Indiana" stackId="a" fill="#8884d8" />
        <Bar dataKey="Female_Indiana" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Male_Monroe" stackId="b" fill="#8884d8" />
        <Bar dataKey="Female_Monroe" stackId="b" fill="#82ca9d" />
      </BarChart>
    );
  }
}
