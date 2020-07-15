import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector,ResponsiveContainer } from 'recharts';
// const data = [
//   { name: 'Male', value: 11.7, value2 :21.5, In:373394, Mo:13766},
//   { name: 'Female', value: 14.5, value2 :22.3, In:479.244,Mo:15079},

// ];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,value2,In,Mo
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Total: ${value}`}</text>
     
    </g>
  );
};


export default class GenderData extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div style={{ width: '100%', height: 400 , overflow: "hidden"}}>
       <h3>Total Male/ Female Population</h3>
          <p>
          Indiana State: 3,180,841 / 3,308,420</p>
        <p>
         Monroe County: 64,007 / 67,503
        </p>
      <ResponsiveContainer>
      
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.props.selectgender}
          cx={280}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="url(#colorUv)"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
