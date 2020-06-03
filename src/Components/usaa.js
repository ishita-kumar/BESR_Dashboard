import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

export default class UsaMap extends React.Component {
    render() {
        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    chartType="GeoChart"
                    data={[
                        ['Country', 'COVID'],
                        ['US-AL', 200],
                        ['US-AZ', 300],
                        ['US-CO', 400],
                        ['US-CT', 500],
                        ['US-DC', 600],
                        ['US_FM', 700],
                      ]}
  
                    options={{

                        region: "US",
                        resolution: "provinces",
                        colorAxis: { colors: ['#F9EBEA', '#E6B0AA', '#EC7063', '#CD5C5C', '#C0392B'] },
                        backgroundColor: 'black',
                        defaultColor: 'black',
                        tooltip: { isHtml: true },
                    }}>

                    </Chart>
            </div>
        );
    }
}
