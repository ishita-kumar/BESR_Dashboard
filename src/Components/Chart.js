import React from 'react';
import { Bar } from 'react-chartjs-2';
import DynamicSelect from './DynamicSelect';
import tract from "../data/tract"
const arrayOfData = [
    {
        id: '1 - Jerry',
        name: '2020-04-18'
    },
    {
        id: '2 - Elaine',
        name: '2020-03-18'
    },
    {
        id: '3 - Kramer',
        name: '2020-03-21'
    },
    {
        id: '4 - George',
        name: '2020-03-14'
    },
];

console.log("hte", tract[0].tract_name);
const state = {
    labels: ["Census Tract 1",
        "Census Tract 10.01",
        "Census Tract 10.02",
        "Census Tract 11.01",
        "Census Tract 11.02",
        "Census Tract 11.03",
        "Census Tract 12",
        "Census Tract 13.01",
        "Census Tract 13.03",
        "Census Tract 13.04",
        "Census Tract 13.05",
        "Census Tract 14.01",
        "Census Tract 14.02",
        "Census Tract 15.01",
        "Census Tract 15.02",
        "Census Tract 16",
        "Census Tract 2.02",
        "Census Tract 3.01",
        "Census Tract 3.02",
        "Census Tract 4.01",
        "Census Tract 4.02",
        "Census Tract 5.01",
        "Census Tract 5.02",
        "Census Tract 6.01",
        "Census Tract 6.02",
        "Census Tract 7",
        "Census Tract 8",
        "Census Tract 9.01",
        "Census Tract 9.03",
        "Census Tract 9.04",
        "N/A"],
    datasets: [
        {
            label: 'Claimants',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [
                "64",
                "52",
                "79",
                "125",
                "93",
                "50",
                "114",
                "90",
                "72",
                "69",
                "28",
                "",
                "93",
                "79",
                "42",
                "64",
                "",
                "97",
                "41",
                "94",
                "94",
                "79",
                "70",
                "125",
                "100",
                "46",
                "79",
                "33",
                "87",
                "43",
                "166"
            ]
        }
    ]
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: 'Nothing selected'
        }
    }
    handleSelectChange = (selectedValue) => {
        this.setState({
            selectedValue: selectedValue
        });
    }
    render() {
        return (
            <div>

                <DynamicSelect arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />
                TimeFrame: {this.state.selectedValue}
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Unemployment Rate by Timeframe',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}