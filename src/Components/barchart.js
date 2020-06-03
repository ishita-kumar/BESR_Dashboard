import Chart from "react-google-charts";
import React, { Component } from 'react';

class Barchart extends Component {
    render() {
        return (
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['County', 'Number_Claimants', 'Number Claims'],
                        ['Monroe', 8175000, 8008000],
                        ['Adams', 3792000, 3694000],
                        ['XYZ', 2695000, 2896000],
                        ['XYZ', 2099000, 1953000],
                        ['XYZ', 1526000, 1517000],
                    ]}
                    options={{
                        title: 'Population of Largest U.S. Cities',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default Barchart;