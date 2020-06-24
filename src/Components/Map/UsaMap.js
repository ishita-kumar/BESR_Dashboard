import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './map.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoa3VtYXIiLCJhIjoiY2thN3Fucm10MDZycTJwbzVsZGhkZDZkYyJ9.ZMMsGounuGq3S56MEsEFmw';
var COLORS =
    //  ['#8c510a', '#d8b365', '#f6e8c3', '#c7eae5', '#5ab4ac', '#01665e'],
    // ['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b'],
    // ['#f7fcfd','#e0ecf4','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b'],
    // ['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#0868ac','#084081'],
    ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    // ['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704'],
    BREAKS = [0, 30, 60, 70, 80, 90, 100, 110, 120],

    FILTERUSE;
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -86.45,
            lat: 39.130,
            zoom: 10
        };
    }
    // mapbox://styles/ishkumar/ckaebnm1r1a5o1imrha754k6l
    // mapbox://styles/ishkumar/ckarq6o2g00vm1jpkbnp3z3ec
    //   mapbox://styles/ishkumar/ckb178t671hkh1ilnx3fdvre8
    // mapbox://styles/ishkumar/ckaebnm1r1a5o1imrha754k6l //original
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/ishkumar/ckb1fru32066h1inzo2csph4e',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        var nav = new mapboxgl.NavigationControl({
            showCompass: false,
            showZoom: true
        });

        map.addControl(nav, "top-right");
        map.on('load', function () {
            map.addSource('dc', {
                type: "geojson",
                data:
                {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000100",
                                "AFFGEOID": "1400000US18105000100",
                                "GEOID": "18105000100",
                                "NAME": "1",
                                "LSAD": "CT",
                                "ALAND": 1251296,
                                "AWATER": 0,
                                "POPULATION": 4827,
                                "CLAIMANTS": 64,
                                "PERCENTAGEVAL": 133,
                                "PERCENTAGE": 1.33,
                                "MEDIAN_HOUSEHOLD": 10452,
                                "MEDIAN_HOME": 0,
                                "MEDIAN_FAMILY": 233700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.534815,
                                            39.173273
                                        ],
                                        [
                                            -86.533595,
                                            39.172527
                                        ],
                                        [
                                            -86.528287,
                                            39.172571
                                        ],
                                        [
                                            -86.526967,
                                            39.172562
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.528213,
                                            39.164342
                                        ],
                                        [
                                            -86.528397,
                                            39.161354
                                        ],
                                        [
                                            -86.531267,
                                            39.161364
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000100",
                                "AFFGEOID": "1400000US18105000100",
                                "GEOID": "18105000100",
                                "NAME": "1",
                                "LSAD": "CT",
                                "ALAND": 1251296,
                                "AWATER": 0,
                                "POPULATION": 4827,
                                "CLAIMANTS": 64,
                                "PERCENTAGEVAL": 133,
                                "PERCENTAGE": 1.33,
                                "MEDIAN_HOUSEHOLD": 10452,
                                "MEDIAN_HOME": 0,
                                "MEDIAN_FAMILY": 233700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.534815,
                                            39.173273
                                        ],
                                        [
                                            -86.533595,
                                            39.172527
                                        ],
                                        [
                                            -86.528287,
                                            39.172571
                                        ],
                                        [
                                            -86.526967,
                                            39.172562
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.528213,
                                            39.164342
                                        ],
                                        [
                                            -86.528397,
                                            39.161354
                                        ],
                                        [
                                            -86.531267,
                                            39.161364
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000201",
                                "AFFGEOID": "1400000US18105000201",
                                "GEOID": "18105000201",
                                "NAME": "2.01",
                                "LSAD": "CT",
                                "ALAND": 2206743,
                                "AWATER": 0,
                                "POPULATION": 6639,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 19464,
                                "MEDIAN_HOME": 20156,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.520933,
                                            39.186138
                                        ],
                                        [
                                            -86.514853,
                                            39.184719
                                        ],
                                        [
                                            -86.511389,
                                            39.183083
                                        ],
                                        [
                                            -86.507252,
                                            39.179774
                                        ],
                                        [
                                            -86.505797,
                                            39.177956
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.515547,
                                            39.173083
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.521096,
                                            39.179023
                                        ],
                                        [
                                            -86.528326,
                                            39.179009
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000201",
                                "AFFGEOID": "1400000US18105000201",
                                "GEOID": "18105000201",
                                "NAME": "2.01",
                                "LSAD": "CT",
                                "ALAND": 2206743,
                                "AWATER": 0,
                                "POPULATION": 6639,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 19464,
                                "MEDIAN_HOME": 20156,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.520933,
                                            39.186138
                                        ],
                                        [
                                            -86.514853,
                                            39.184719
                                        ],
                                        [
                                            -86.511389,
                                            39.183083
                                        ],
                                        [
                                            -86.507252,
                                            39.179774
                                        ],
                                        [
                                            -86.505797,
                                            39.177956
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.515547,
                                            39.173083
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.521096,
                                            39.179023
                                        ],
                                        [
                                            -86.528326,
                                            39.179009
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000202",
                                "AFFGEOID": "1400000US18105000202",
                                "GEOID": "18105000202",
                                "NAME": "2.02",
                                "LSAD": "CT",
                                "ALAND": 1370125,
                                "AWATER": 0,
                                "POPULATION": 6427,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 0,
                                "MEDIAN_HOME": 0,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.523484,
                                            39.168482
                                        ],
                                        [
                                            -86.523503,
                                            39.171636
                                        ],
                                        [
                                            -86.520994,
                                            39.171617
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.515547,
                                            39.173083
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.507171,
                                            39.168214
                                        ],
                                        [
                                            -86.509462,
                                            39.168096
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.516412,
                                            39.164272
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.525872,
                                            39.16428
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000202",
                                "AFFGEOID": "1400000US18105000202",
                                "GEOID": "18105000202",
                                "NAME": "2.02",
                                "LSAD": "CT",
                                "ALAND": 1370125,
                                "AWATER": 0,
                                "POPULATION": 6427,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 0,
                                "MEDIAN_HOME": 0,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.523484,
                                            39.168482
                                        ],
                                        [
                                            -86.523503,
                                            39.171636
                                        ],
                                        [
                                            -86.520994,
                                            39.171617
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.515547,
                                            39.173083
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.507171,
                                            39.168214
                                        ],
                                        [
                                            -86.509462,
                                            39.168096
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.516412,
                                            39.164272
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.525872,
                                            39.16428
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000301",
                                "AFFGEOID": "1400000US18105000301",
                                "GEOID": "18105000301",
                                "NAME": "3.01",
                                "LSAD": "CT",
                                "ALAND": 1831675,
                                "AWATER": 0,
                                "POPULATION": 4141,
                                "CLAIMANTS": 97,
                                "PERCENTAGEVAL": 234,
                                "PERCENTAGE": 2.34,
                                "MEDIAN_HOUSEHOLD": 30912,
                                "MEDIAN_HOME": 81071,
                                "MEDIAN_FAMILY": 184600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538669,
                                            39.159421
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.531267,
                                            39.161364
                                        ],
                                        [
                                            -86.528397,
                                            39.161354
                                        ],
                                        [
                                            -86.528213,
                                            39.164342
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.525872,
                                            39.16428
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.522636,
                                            39.159306
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.526944,
                                            39.150548
                                        ],
                                        [
                                            -86.532519,
                                            39.150525
                                        ],
                                        [
                                            -86.535231,
                                            39.150537
                                        ],
                                        [
                                            -86.534724,
                                            39.148681
                                        ],
                                        [
                                            -86.53628,
                                            39.150651
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.538669,
                                            39.159421
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000301",
                                "AFFGEOID": "1400000US18105000301",
                                "GEOID": "18105000301",
                                "NAME": "3.01",
                                "LSAD": "CT",
                                "ALAND": 1831675,
                                "AWATER": 0,
                                "POPULATION": 4141,
                                "CLAIMANTS": 97,
                                "PERCENTAGEVAL": 234,
                                "PERCENTAGE": 2.34,
                                "MEDIAN_HOUSEHOLD": 30912,
                                "MEDIAN_HOME": 81071,
                                "MEDIAN_FAMILY": 184600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538669,
                                            39.159421
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.531267,
                                            39.161364
                                        ],
                                        [
                                            -86.528397,
                                            39.161354
                                        ],
                                        [
                                            -86.528213,
                                            39.164342
                                        ],
                                        [
                                            -86.526905,
                                            39.164307
                                        ],
                                        [
                                            -86.525872,
                                            39.16428
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.522636,
                                            39.159306
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.526944,
                                            39.150548
                                        ],
                                        [
                                            -86.532519,
                                            39.150525
                                        ],
                                        [
                                            -86.535231,
                                            39.150537
                                        ],
                                        [
                                            -86.534724,
                                            39.148681
                                        ],
                                        [
                                            -86.53628,
                                            39.150651
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.538669,
                                            39.159421
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000302",
                                "AFFGEOID": "1400000US18105000302",
                                "GEOID": "18105000302",
                                "NAME": "3.02",
                                "LSAD": "CT",
                                "ALAND": 1868389,
                                "AWATER": 0,
                                "POPULATION": 3109,
                                "CLAIMANTS": 41,
                                "PERCENTAGEVAL": 132,
                                "PERCENTAGE": 1.32,
                                "MEDIAN_HOUSEHOLD": 75179,
                                "MEDIAN_HOME": 127163,
                                "MEDIAN_FAMILY": 327700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.516412,
                                            39.164272
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.508477,
                                            39.164266
                                        ],
                                        [
                                            -86.508464,
                                            39.157781
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.50876,
                                            39.150492
                                        ],
                                        [
                                            -86.512542,
                                            39.150511
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.522636,
                                            39.159306
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000302",
                                "AFFGEOID": "1400000US18105000302",
                                "GEOID": "18105000302",
                                "NAME": "3.02",
                                "LSAD": "CT",
                                "ALAND": 1868389,
                                "AWATER": 0,
                                "POPULATION": 3109,
                                "CLAIMANTS": 41,
                                "PERCENTAGEVAL": 132,
                                "PERCENTAGE": 1.32,
                                "MEDIAN_HOUSEHOLD": 75179,
                                "MEDIAN_HOME": 127163,
                                "MEDIAN_FAMILY": 327700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.522628,
                                            39.164254
                                        ],
                                        [
                                            -86.516412,
                                            39.164272
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.508477,
                                            39.164266
                                        ],
                                        [
                                            -86.508464,
                                            39.157781
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.50876,
                                            39.150492
                                        ],
                                        [
                                            -86.512542,
                                            39.150511
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.522636,
                                            39.159306
                                        ],
                                        [
                                            -86.522628,
                                            39.164254
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000401",
                                "AFFGEOID": "1400000US18105000401",
                                "GEOID": "18105000401",
                                "NAME": "4.01",
                                "LSAD": "CT",
                                "ALAND": 3469269,
                                "AWATER": 0,
                                "POPULATION": 4182,
                                "CLAIMANTS": 94,
                                "PERCENTAGEVAL": 225,
                                "PERCENTAGE": 2.25,
                                "MEDIAN_HOUSEHOLD": 40057,
                                "MEDIAN_HOME": 53375,
                                "MEDIAN_FAMILY": 127900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.563027,
                                            39.164487
                                        ],
                                        [
                                            -86.560136,
                                            39.164467
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.538669,
                                            39.159421
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.540158,
                                            39.150429
                                        ],
                                        [
                                            -86.541125,
                                            39.153159
                                        ],
                                        [
                                            -86.543306,
                                            39.155627
                                        ],
                                        [
                                            -86.550555,
                                            39.155849
                                        ],
                                        [
                                            -86.561282,
                                            39.156079
                                        ],
                                        [
                                            -86.561408,
                                            39.156133
                                        ],
                                        [
                                            -86.56428,
                                            39.154265
                                        ],
                                        [
                                            -86.566519,
                                            39.15279
                                        ],
                                        [
                                            -86.567265,
                                            39.151954
                                        ],
                                        [
                                            -86.568126,
                                            39.150557
                                        ],
                                        [
                                            -86.568778,
                                            39.149913
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000401",
                                "AFFGEOID": "1400000US18105000401",
                                "GEOID": "18105000401",
                                "NAME": "4.01",
                                "LSAD": "CT",
                                "ALAND": 3469269,
                                "AWATER": 0,
                                "POPULATION": 4182,
                                "CLAIMANTS": 94,
                                "PERCENTAGEVAL": 225,
                                "PERCENTAGE": 2.25,
                                "MEDIAN_HOUSEHOLD": 40057,
                                "MEDIAN_HOME": 53375,
                                "MEDIAN_FAMILY": 127900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.563027,
                                            39.164487
                                        ],
                                        [
                                            -86.560136,
                                            39.164467
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.538699,
                                            39.161396
                                        ],
                                        [
                                            -86.538669,
                                            39.159421
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.540158,
                                            39.150429
                                        ],
                                        [
                                            -86.541125,
                                            39.153159
                                        ],
                                        [
                                            -86.543306,
                                            39.155627
                                        ],
                                        [
                                            -86.550555,
                                            39.155849
                                        ],
                                        [
                                            -86.561282,
                                            39.156079
                                        ],
                                        [
                                            -86.561408,
                                            39.156133
                                        ],
                                        [
                                            -86.56428,
                                            39.154265
                                        ],
                                        [
                                            -86.566519,
                                            39.15279
                                        ],
                                        [
                                            -86.567265,
                                            39.151954
                                        ],
                                        [
                                            -86.568126,
                                            39.150557
                                        ],
                                        [
                                            -86.568778,
                                            39.149913
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000402",
                                "AFFGEOID": "1400000US18105000402",
                                "GEOID": "18105000402",
                                "NAME": "4.02",
                                "LSAD": "CT",
                                "ALAND": 5285864,
                                "AWATER": 13178,
                                "POPULATION": 5024,
                                "CLAIMANTS": 94,
                                "PERCENTAGEVAL": 187,
                                "PERCENTAGE": 1.87,
                                "MEDIAN_HOUSEHOLD": 45596,
                                "MEDIAN_HOME": 55250,
                                "MEDIAN_FAMILY": 138800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.568778,
                                            39.149913
                                        ],
                                        [
                                            -86.568126,
                                            39.150557
                                        ],
                                        [
                                            -86.567265,
                                            39.151954
                                        ],
                                        [
                                            -86.566519,
                                            39.15279
                                        ],
                                        [
                                            -86.56428,
                                            39.154265
                                        ],
                                        [
                                            -86.561408,
                                            39.156133
                                        ],
                                        [
                                            -86.561282,
                                            39.156079
                                        ],
                                        [
                                            -86.550555,
                                            39.155849
                                        ],
                                        [
                                            -86.543306,
                                            39.155627
                                        ],
                                        [
                                            -86.541125,
                                            39.153159
                                        ],
                                        [
                                            -86.540158,
                                            39.150429
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.53887,
                                            39.146355
                                        ],
                                        [
                                            -86.538876,
                                            39.146074
                                        ],
                                        [
                                            -86.544789,
                                            39.140256
                                        ],
                                        [
                                            -86.54507,
                                            39.140018
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.561849,
                                            39.136521
                                        ],
                                        [
                                            -86.561983,
                                            39.13652
                                        ],
                                        [
                                            -86.57158,
                                            39.13675
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.573215,
                                            39.141834
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000402",
                                "AFFGEOID": "1400000US18105000402",
                                "GEOID": "18105000402",
                                "NAME": "4.02",
                                "LSAD": "CT",
                                "ALAND": 5285864,
                                "AWATER": 13178,
                                "POPULATION": 5024,
                                "CLAIMANTS": 94,
                                "PERCENTAGEVAL": 187,
                                "PERCENTAGE": 1.87,
                                "MEDIAN_HOUSEHOLD": 45596,
                                "MEDIAN_HOME": 55250,
                                "MEDIAN_FAMILY": 138800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.568778,
                                            39.149913
                                        ],
                                        [
                                            -86.568126,
                                            39.150557
                                        ],
                                        [
                                            -86.567265,
                                            39.151954
                                        ],
                                        [
                                            -86.566519,
                                            39.15279
                                        ],
                                        [
                                            -86.56428,
                                            39.154265
                                        ],
                                        [
                                            -86.561408,
                                            39.156133
                                        ],
                                        [
                                            -86.561282,
                                            39.156079
                                        ],
                                        [
                                            -86.550555,
                                            39.155849
                                        ],
                                        [
                                            -86.543306,
                                            39.155627
                                        ],
                                        [
                                            -86.541125,
                                            39.153159
                                        ],
                                        [
                                            -86.540158,
                                            39.150429
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.53887,
                                            39.146355
                                        ],
                                        [
                                            -86.538876,
                                            39.146074
                                        ],
                                        [
                                            -86.544789,
                                            39.140256
                                        ],
                                        [
                                            -86.54507,
                                            39.140018
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.561849,
                                            39.136521
                                        ],
                                        [
                                            -86.561983,
                                            39.13652
                                        ],
                                        [
                                            -86.57158,
                                            39.13675
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.573215,
                                            39.141834
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000501",
                                "AFFGEOID": "1400000US18105000501",
                                "GEOID": "18105000501",
                                "NAME": "5.01",
                                "LSAD": "CT",
                                "ALAND": 9631042,
                                "AWATER": 0,
                                "POPULATION": 4927,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 160,
                                "PERCENTAGE": 1.6,
                                "MEDIAN_HOUSEHOLD": 51250,
                                "MEDIAN_HOME": 66343,
                                "MEDIAN_FAMILY": 136200
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.588435,
                                            39.164688
                                        ],
                                        [
                                            -86.585873,
                                            39.164666
                                        ],
                                        [
                                            -86.582927,
                                            39.164652
                                        ],
                                        [
                                            -86.573543,
                                            39.164567
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.573215,
                                            39.141834
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.575373,
                                            39.136792
                                        ],
                                        [
                                            -86.582519,
                                            39.136801
                                        ],
                                        [
                                            -86.582615,
                                            39.136802
                                        ],
                                        [
                                            -86.582608,
                                            39.142028
                                        ],
                                        [
                                            -86.589341,
                                            39.139546
                                        ],
                                        [
                                            -86.594412,
                                            39.136402
                                        ],
                                        [
                                            -86.595081,
                                            39.13669
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.610257,
                                            39.136821
                                        ],
                                        [
                                            -86.610251,
                                            39.139975
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000501",
                                "AFFGEOID": "1400000US18105000501",
                                "GEOID": "18105000501",
                                "NAME": "5.01",
                                "LSAD": "CT",
                                "ALAND": 9631042,
                                "AWATER": 0,
                                "POPULATION": 4927,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 160,
                                "PERCENTAGE": 1.6,
                                "MEDIAN_HOUSEHOLD": 51250,
                                "MEDIAN_HOME": 66343,
                                "MEDIAN_FAMILY": 136200
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.588435,
                                            39.164688
                                        ],
                                        [
                                            -86.585873,
                                            39.164666
                                        ],
                                        [
                                            -86.582927,
                                            39.164652
                                        ],
                                        [
                                            -86.573543,
                                            39.164567
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.573246,
                                            39.147485
                                        ],
                                        [
                                            -86.573215,
                                            39.141834
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.575373,
                                            39.136792
                                        ],
                                        [
                                            -86.582519,
                                            39.136801
                                        ],
                                        [
                                            -86.582615,
                                            39.136802
                                        ],
                                        [
                                            -86.582608,
                                            39.142028
                                        ],
                                        [
                                            -86.589341,
                                            39.139546
                                        ],
                                        [
                                            -86.594412,
                                            39.136402
                                        ],
                                        [
                                            -86.595081,
                                            39.13669
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.610257,
                                            39.136821
                                        ],
                                        [
                                            -86.610251,
                                            39.139975
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000502",
                                "AFFGEOID": "1400000US18105000502",
                                "GEOID": "18105000502",
                                "NAME": "5.02",
                                "LSAD": "CT",
                                "ALAND": 4796805,
                                "AWATER": 0,
                                "POPULATION": 3332,
                                "CLAIMANTS": 70,
                                "PERCENTAGEVAL": 210,
                                "PERCENTAGE": 2.1,
                                "MEDIAN_HOUSEHOLD": 46074,
                                "MEDIAN_HOME": 51711,
                                "MEDIAN_FAMILY": 107300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.606523,
                                            39.127884
                                        ],
                                        [
                                            -86.604291,
                                            39.129249
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.595081,
                                            39.13669
                                        ],
                                        [
                                            -86.594412,
                                            39.136402
                                        ],
                                        [
                                            -86.589341,
                                            39.139546
                                        ],
                                        [
                                            -86.582608,
                                            39.142028
                                        ],
                                        [
                                            -86.582615,
                                            39.136802
                                        ],
                                        [
                                            -86.582519,
                                            39.136801
                                        ],
                                        [
                                            -86.575373,
                                            39.136792
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.573184,
                                            39.133811
                                        ],
                                        [
                                            -86.573027,
                                            39.126991
                                        ],
                                        [
                                            -86.572394,
                                            39.124391
                                        ],
                                        [
                                            -86.571425,
                                            39.122307
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.57527,
                                            39.121818
                                        ],
                                        [
                                            -86.577653,
                                            39.12296
                                        ],
                                        [
                                            -86.582543,
                                            39.123396
                                        ],
                                        [
                                            -86.582543,
                                            39.123366
                                        ],
                                        [
                                            -86.583994,
                                            39.122439
                                        ],
                                        [
                                            -86.584866,
                                            39.122294
                                        ],
                                        [
                                            -86.60571,
                                            39.122305
                                        ],
                                        [
                                            -86.605747,
                                            39.127054
                                        ],
                                        [
                                            -86.606523,
                                            39.127884
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000502",
                                "AFFGEOID": "1400000US18105000502",
                                "GEOID": "18105000502",
                                "NAME": "5.02",
                                "LSAD": "CT",
                                "ALAND": 4796805,
                                "AWATER": 0,
                                "POPULATION": 3332,
                                "CLAIMANTS": 70,
                                "PERCENTAGEVAL": 210,
                                "PERCENTAGE": 2.1,
                                "MEDIAN_HOUSEHOLD": 46074,
                                "MEDIAN_HOME": 51711,
                                "MEDIAN_FAMILY": 107300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.606523,
                                            39.127884
                                        ],
                                        [
                                            -86.604291,
                                            39.129249
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.595081,
                                            39.13669
                                        ],
                                        [
                                            -86.594412,
                                            39.136402
                                        ],
                                        [
                                            -86.589341,
                                            39.139546
                                        ],
                                        [
                                            -86.582608,
                                            39.142028
                                        ],
                                        [
                                            -86.582615,
                                            39.136802
                                        ],
                                        [
                                            -86.582519,
                                            39.136801
                                        ],
                                        [
                                            -86.575373,
                                            39.136792
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.573184,
                                            39.133811
                                        ],
                                        [
                                            -86.573027,
                                            39.126991
                                        ],
                                        [
                                            -86.572394,
                                            39.124391
                                        ],
                                        [
                                            -86.571425,
                                            39.122307
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.57527,
                                            39.121818
                                        ],
                                        [
                                            -86.577653,
                                            39.12296
                                        ],
                                        [
                                            -86.582543,
                                            39.123396
                                        ],
                                        [
                                            -86.582543,
                                            39.123366
                                        ],
                                        [
                                            -86.583994,
                                            39.122439
                                        ],
                                        [
                                            -86.584866,
                                            39.122294
                                        ],
                                        [
                                            -86.60571,
                                            39.122305
                                        ],
                                        [
                                            -86.605747,
                                            39.127054
                                        ],
                                        [
                                            -86.606523,
                                            39.127884
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000601",
                                "AFFGEOID": "1400000US18105000601",
                                "GEOID": "18105000601",
                                "NAME": "6.01",
                                "LSAD": "CT",
                                "ALAND": 3139872,
                                "AWATER": 0,
                                "POPULATION": 3946,
                                "CLAIMANTS": 125,
                                "PERCENTAGEVAL": 317,
                                "PERCENTAGE": 3.17,
                                "MEDIAN_HOUSEHOLD": 27125,
                                "MEDIAN_HOME": 19122,
                                "MEDIAN_FAMILY": 111500
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.565001,
                                            39.169783
                                        ],
                                        [
                                            -86.564988,
                                            39.172481
                                        ],
                                        [
                                            -86.55887,
                                            39.172014
                                        ],
                                        [
                                            -86.553537,
                                            39.170676
                                        ],
                                        [
                                            -86.551468,
                                            39.17071
                                        ],
                                        [
                                            -86.554818,
                                            39.172886
                                        ],
                                        [
                                            -86.55648,
                                            39.174918
                                        ],
                                        [
                                            -86.556397,
                                            39.179124
                                        ],
                                        [
                                            -86.547084,
                                            39.179213
                                        ],
                                        [
                                            -86.546028,
                                            39.179044
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.536,
                                            39.175965
                                        ],
                                        [
                                            -86.538506,
                                            39.17661
                                        ],
                                        [
                                            -86.538103,
                                            39.174844
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.560136,
                                            39.164467
                                        ],
                                        [
                                            -86.563027,
                                            39.164487
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.563574,
                                            39.165201
                                        ],
                                        [
                                            -86.564711,
                                            39.165409
                                        ],
                                        [
                                            -86.56499,
                                            39.165223
                                        ],
                                        [
                                            -86.564996,
                                            39.168061
                                        ],
                                        [
                                            -86.565001,
                                            39.169783
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000601",
                                "AFFGEOID": "1400000US18105000601",
                                "GEOID": "18105000601",
                                "NAME": "6.01",
                                "LSAD": "CT",
                                "ALAND": 3139872,
                                "AWATER": 0,
                                "POPULATION": 3946,
                                "CLAIMANTS": 125,
                                "PERCENTAGEVAL": 317,
                                "PERCENTAGE": 3.17,
                                "MEDIAN_HOUSEHOLD": 27125,
                                "MEDIAN_HOME": 19122,
                                "MEDIAN_FAMILY": 111500
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.565001,
                                            39.169783
                                        ],
                                        [
                                            -86.564988,
                                            39.172481
                                        ],
                                        [
                                            -86.55887,
                                            39.172014
                                        ],
                                        [
                                            -86.553537,
                                            39.170676
                                        ],
                                        [
                                            -86.551468,
                                            39.17071
                                        ],
                                        [
                                            -86.554818,
                                            39.172886
                                        ],
                                        [
                                            -86.55648,
                                            39.174918
                                        ],
                                        [
                                            -86.556397,
                                            39.179124
                                        ],
                                        [
                                            -86.547084,
                                            39.179213
                                        ],
                                        [
                                            -86.546028,
                                            39.179044
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.536,
                                            39.175965
                                        ],
                                        [
                                            -86.538506,
                                            39.17661
                                        ],
                                        [
                                            -86.538103,
                                            39.174844
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.538656,
                                            39.164292
                                        ],
                                        [
                                            -86.560136,
                                            39.164467
                                        ],
                                        [
                                            -86.563027,
                                            39.164487
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.563574,
                                            39.165201
                                        ],
                                        [
                                            -86.564711,
                                            39.165409
                                        ],
                                        [
                                            -86.56499,
                                            39.165223
                                        ],
                                        [
                                            -86.564996,
                                            39.168061
                                        ],
                                        [
                                            -86.565001,
                                            39.169783
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000602",
                                "AFFGEOID": "1400000US18105000602",
                                "GEOID": "18105000602",
                                "NAME": "6.02",
                                "LSAD": "CT",
                                "ALAND": 2736526,
                                "AWATER": 0,
                                "POPULATION": 3687,
                                "CLAIMANTS": 100,
                                "PERCENTAGEVAL": 271,
                                "PERCENTAGE": 2.71,
                                "MEDIAN_HOUSEHOLD": 27813,
                                "MEDIAN_HOME": 34958,
                                "MEDIAN_FAMILY": 60800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.572811,
                                            39.167861
                                        ],
                                        [
                                            -86.5719,
                                            39.169372
                                        ],
                                        [
                                            -86.570253,
                                            39.171007
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.558652,
                                            39.179537
                                        ],
                                        [
                                            -86.557554,
                                            39.180863
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.5514,
                                            39.187066
                                        ],
                                        [
                                            -86.541339,
                                            39.18676
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.534698,
                                            39.178992
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.546028,
                                            39.179044
                                        ],
                                        [
                                            -86.547084,
                                            39.179213
                                        ],
                                        [
                                            -86.556397,
                                            39.179124
                                        ],
                                        [
                                            -86.55648,
                                            39.174918
                                        ],
                                        [
                                            -86.554818,
                                            39.172886
                                        ],
                                        [
                                            -86.551468,
                                            39.17071
                                        ],
                                        [
                                            -86.553537,
                                            39.170676
                                        ],
                                        [
                                            -86.55887,
                                            39.172014
                                        ],
                                        [
                                            -86.564988,
                                            39.172481
                                        ],
                                        [
                                            -86.565001,
                                            39.169783
                                        ],
                                        [
                                            -86.564996,
                                            39.168061
                                        ],
                                        [
                                            -86.56499,
                                            39.165223
                                        ],
                                        [
                                            -86.564711,
                                            39.165409
                                        ],
                                        [
                                            -86.563574,
                                            39.165201
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.572811,
                                            39.167861
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000602",
                                "AFFGEOID": "1400000US18105000602",
                                "GEOID": "18105000602",
                                "NAME": "6.02",
                                "LSAD": "CT",
                                "ALAND": 2736526,
                                "AWATER": 0,
                                "POPULATION": 3687,
                                "CLAIMANTS": 100,
                                "PERCENTAGEVAL": 271,
                                "PERCENTAGE": 2.71,
                                "MEDIAN_HOUSEHOLD": 27813,
                                "MEDIAN_HOME": 34958,
                                "MEDIAN_FAMILY": 60800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.572811,
                                            39.167861
                                        ],
                                        [
                                            -86.5719,
                                            39.169372
                                        ],
                                        [
                                            -86.570253,
                                            39.171007
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.558652,
                                            39.179537
                                        ],
                                        [
                                            -86.557554,
                                            39.180863
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.5514,
                                            39.187066
                                        ],
                                        [
                                            -86.541339,
                                            39.18676
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.534698,
                                            39.178992
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.546028,
                                            39.179044
                                        ],
                                        [
                                            -86.547084,
                                            39.179213
                                        ],
                                        [
                                            -86.556397,
                                            39.179124
                                        ],
                                        [
                                            -86.55648,
                                            39.174918
                                        ],
                                        [
                                            -86.554818,
                                            39.172886
                                        ],
                                        [
                                            -86.551468,
                                            39.17071
                                        ],
                                        [
                                            -86.553537,
                                            39.170676
                                        ],
                                        [
                                            -86.55887,
                                            39.172014
                                        ],
                                        [
                                            -86.564988,
                                            39.172481
                                        ],
                                        [
                                            -86.565001,
                                            39.169783
                                        ],
                                        [
                                            -86.564996,
                                            39.168061
                                        ],
                                        [
                                            -86.56499,
                                            39.165223
                                        ],
                                        [
                                            -86.564711,
                                            39.165409
                                        ],
                                        [
                                            -86.563574,
                                            39.165201
                                        ],
                                        [
                                            -86.563601,
                                            39.164493
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.572811,
                                            39.167861
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000700",
                                "AFFGEOID": "1400000US18105000700",
                                "GEOID": "18105000700",
                                "NAME": "7",
                                "LSAD": "CT",
                                "ALAND": 49795643,
                                "AWATER": 134961,
                                "POPULATION": 3051,
                                "CLAIMANTS": 46,
                                "PERCENTAGEVAL": 151,
                                "PERCENTAGE": 1.51,
                                "MEDIAN_HOUSEHOLD": 65063,
                                "MEDIAN_HOME": 85893,
                                "MEDIAN_FAMILY": 177900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.571475,
                                            39.27671
                                        ],
                                        [
                                            -86.56934,
                                            39.274277
                                        ],
                                        [
                                            -86.567644,
                                            39.275315
                                        ],
                                        [
                                            -86.567177,
                                            39.272151
                                        ],
                                        [
                                            -86.568584,
                                            39.270635
                                        ],
                                        [
                                            -86.569212,
                                            39.266279
                                        ],
                                        [
                                            -86.566718,
                                            39.266614
                                        ],
                                        [
                                            -86.565707,
                                            39.267509
                                        ],
                                        [
                                            -86.565057,
                                            39.269734
                                        ],
                                        [
                                            -86.563517,
                                            39.26958
                                        ],
                                        [
                                            -86.564669,
                                            39.26869
                                        ],
                                        [
                                            -86.56435,
                                            39.266669
                                        ],
                                        [
                                            -86.562859,
                                            39.266026
                                        ],
                                        [
                                            -86.562852,
                                            39.267465
                                        ],
                                        [
                                            -86.560499,
                                            39.268438
                                        ],
                                        [
                                            -86.557404,
                                            39.268536
                                        ],
                                        [
                                            -86.557072,
                                            39.266625
                                        ],
                                        [
                                            -86.559051,
                                            39.264785
                                        ],
                                        [
                                            -86.557553,
                                            39.263988
                                        ],
                                        [
                                            -86.557729,
                                            39.262714
                                        ],
                                        [
                                            -86.555801,
                                            39.260994
                                        ],
                                        [
                                            -86.552826,
                                            39.2605
                                        ],
                                        [
                                            -86.552112,
                                            39.259709
                                        ],
                                        [
                                            -86.553257,
                                            39.25878
                                        ],
                                        [
                                            -86.555582,
                                            39.260072
                                        ],
                                        [
                                            -86.556762,
                                            39.25944
                                        ],
                                        [
                                            -86.557363,
                                            39.255441
                                        ],
                                        [
                                            -86.554706,
                                            39.255007
                                        ],
                                        [
                                            -86.55631,
                                            39.253919
                                        ],
                                        [
                                            -86.555582,
                                            39.253007
                                        ],
                                        [
                                            -86.553435,
                                            39.252485
                                        ],
                                        [
                                            -86.554859,
                                            39.251576
                                        ],
                                        [
                                            -86.529648,
                                            39.251352
                                        ],
                                        [
                                            -86.501039,
                                            39.251638
                                        ],
                                        [
                                            -86.497245,
                                            39.251447
                                        ],
                                        [
                                            -86.477166,
                                            39.251188
                                        ],
                                        [
                                            -86.472341,
                                            39.250926
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.46416,
                                            39.24928
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.468314,
                                            39.214887
                                        ],
                                        [
                                            -86.477632,
                                            39.21483
                                        ],
                                        [
                                            -86.478515,
                                            39.21421
                                        ],
                                        [
                                            -86.484409,
                                            39.214137
                                        ],
                                        [
                                            -86.487252,
                                            39.212923
                                        ],
                                        [
                                            -86.491745,
                                            39.212882
                                        ],
                                        [
                                            -86.494482,
                                            39.212088
                                        ],
                                        [
                                            -86.49877,
                                            39.211696
                                        ],
                                        [
                                            -86.502754,
                                            39.211743
                                        ],
                                        [
                                            -86.505409,
                                            39.212798
                                        ],
                                        [
                                            -86.50549,
                                            39.208177
                                        ],
                                        [
                                            -86.506886,
                                            39.204921
                                        ],
                                        [
                                            -86.508313,
                                            39.204376
                                        ],
                                        [
                                            -86.509916,
                                            39.203539
                                        ],
                                        [
                                            -86.510438,
                                            39.203347
                                        ],
                                        [
                                            -86.510646,
                                            39.203079
                                        ],
                                        [
                                            -86.510934,
                                            39.202366
                                        ],
                                        [
                                            -86.511308,
                                            39.201686
                                        ],
                                        [
                                            -86.511886,
                                            39.201295
                                        ],
                                        [
                                            -86.513228,
                                            39.20082
                                        ],
                                        [
                                            -86.514519,
                                            39.20073
                                        ],
                                        [
                                            -86.514738,
                                            39.200317
                                        ],
                                        [
                                            -86.51322,
                                            39.196778
                                        ],
                                        [
                                            -86.515526,
                                            39.199622
                                        ],
                                        [
                                            -86.521037,
                                            39.202639
                                        ],
                                        [
                                            -86.522637,
                                            39.204455
                                        ],
                                        [
                                            -86.528667,
                                            39.206076
                                        ],
                                        [
                                            -86.528724,
                                            39.208019
                                        ],
                                        [
                                            -86.528812,
                                            39.208054
                                        ],
                                        [
                                            -86.528855,
                                            39.208067
                                        ],
                                        [
                                            -86.528979,
                                            39.208107
                                        ],
                                        [
                                            -86.529062,
                                            39.208125
                                        ],
                                        [
                                            -86.529181,
                                            39.208145
                                        ],
                                        [
                                            -86.53094,
                                            39.208164
                                        ],
                                        [
                                            -86.531466,
                                            39.208106
                                        ],
                                        [
                                            -86.534849,
                                            39.207108
                                        ],
                                        [
                                            -86.534964,
                                            39.208204
                                        ],
                                        [
                                            -86.535435,
                                            39.210231
                                        ],
                                        [
                                            -86.540085,
                                            39.225595
                                        ],
                                        [
                                            -86.54076,
                                            39.228534
                                        ],
                                        [
                                            -86.540703,
                                            39.232235
                                        ],
                                        [
                                            -86.540777,
                                            39.233027
                                        ],
                                        [
                                            -86.541371,
                                            39.234121
                                        ],
                                        [
                                            -86.553172,
                                            39.216456
                                        ],
                                        [
                                            -86.553963,
                                            39.214333
                                        ],
                                        [
                                            -86.554181,
                                            39.212299
                                        ],
                                        [
                                            -86.553946,
                                            39.20525
                                        ],
                                        [
                                            -86.554681,
                                            39.193792
                                        ],
                                        [
                                            -86.555063,
                                            39.18811
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.557554,
                                            39.180863
                                        ],
                                        [
                                            -86.558652,
                                            39.179537
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.561731,
                                            39.177649
                                        ],
                                        [
                                            -86.561421,
                                            39.178051
                                        ],
                                        [
                                            -86.563968,
                                            39.179243
                                        ],
                                        [
                                            -86.569328,
                                            39.182965
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000700",
                                "AFFGEOID": "1400000US18105000700",
                                "GEOID": "18105000700",
                                "NAME": "7",
                                "LSAD": "CT",
                                "ALAND": 49795643,
                                "AWATER": 134961,
                                "POPULATION": 3051,
                                "CLAIMANTS": 46,
                                "PERCENTAGEVAL": 151,
                                "PERCENTAGE": 1.51,
                                "MEDIAN_HOUSEHOLD": 65063,
                                "MEDIAN_HOME": 85893,
                                "MEDIAN_FAMILY": 177900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.571475,
                                            39.27671
                                        ],
                                        [
                                            -86.56934,
                                            39.274277
                                        ],
                                        [
                                            -86.567644,
                                            39.275315
                                        ],
                                        [
                                            -86.567177,
                                            39.272151
                                        ],
                                        [
                                            -86.568584,
                                            39.270635
                                        ],
                                        [
                                            -86.569212,
                                            39.266279
                                        ],
                                        [
                                            -86.566718,
                                            39.266614
                                        ],
                                        [
                                            -86.565707,
                                            39.267509
                                        ],
                                        [
                                            -86.565057,
                                            39.269734
                                        ],
                                        [
                                            -86.563517,
                                            39.26958
                                        ],
                                        [
                                            -86.564669,
                                            39.26869
                                        ],
                                        [
                                            -86.56435,
                                            39.266669
                                        ],
                                        [
                                            -86.562859,
                                            39.266026
                                        ],
                                        [
                                            -86.562852,
                                            39.267465
                                        ],
                                        [
                                            -86.560499,
                                            39.268438
                                        ],
                                        [
                                            -86.557404,
                                            39.268536
                                        ],
                                        [
                                            -86.557072,
                                            39.266625
                                        ],
                                        [
                                            -86.559051,
                                            39.264785
                                        ],
                                        [
                                            -86.557553,
                                            39.263988
                                        ],
                                        [
                                            -86.557729,
                                            39.262714
                                        ],
                                        [
                                            -86.555801,
                                            39.260994
                                        ],
                                        [
                                            -86.552826,
                                            39.2605
                                        ],
                                        [
                                            -86.552112,
                                            39.259709
                                        ],
                                        [
                                            -86.553257,
                                            39.25878
                                        ],
                                        [
                                            -86.555582,
                                            39.260072
                                        ],
                                        [
                                            -86.556762,
                                            39.25944
                                        ],
                                        [
                                            -86.557363,
                                            39.255441
                                        ],
                                        [
                                            -86.554706,
                                            39.255007
                                        ],
                                        [
                                            -86.55631,
                                            39.253919
                                        ],
                                        [
                                            -86.555582,
                                            39.253007
                                        ],
                                        [
                                            -86.553435,
                                            39.252485
                                        ],
                                        [
                                            -86.554859,
                                            39.251576
                                        ],
                                        [
                                            -86.529648,
                                            39.251352
                                        ],
                                        [
                                            -86.501039,
                                            39.251638
                                        ],
                                        [
                                            -86.497245,
                                            39.251447
                                        ],
                                        [
                                            -86.477166,
                                            39.251188
                                        ],
                                        [
                                            -86.472341,
                                            39.250926
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.46416,
                                            39.24928
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.468314,
                                            39.214887
                                        ],
                                        [
                                            -86.477632,
                                            39.21483
                                        ],
                                        [
                                            -86.478515,
                                            39.21421
                                        ],
                                        [
                                            -86.484409,
                                            39.214137
                                        ],
                                        [
                                            -86.487252,
                                            39.212923
                                        ],
                                        [
                                            -86.491745,
                                            39.212882
                                        ],
                                        [
                                            -86.494482,
                                            39.212088
                                        ],
                                        [
                                            -86.49877,
                                            39.211696
                                        ],
                                        [
                                            -86.502754,
                                            39.211743
                                        ],
                                        [
                                            -86.505409,
                                            39.212798
                                        ],
                                        [
                                            -86.50549,
                                            39.208177
                                        ],
                                        [
                                            -86.506886,
                                            39.204921
                                        ],
                                        [
                                            -86.508313,
                                            39.204376
                                        ],
                                        [
                                            -86.509916,
                                            39.203539
                                        ],
                                        [
                                            -86.510438,
                                            39.203347
                                        ],
                                        [
                                            -86.510646,
                                            39.203079
                                        ],
                                        [
                                            -86.510934,
                                            39.202366
                                        ],
                                        [
                                            -86.511308,
                                            39.201686
                                        ],
                                        [
                                            -86.511886,
                                            39.201295
                                        ],
                                        [
                                            -86.513228,
                                            39.20082
                                        ],
                                        [
                                            -86.514519,
                                            39.20073
                                        ],
                                        [
                                            -86.514738,
                                            39.200317
                                        ],
                                        [
                                            -86.51322,
                                            39.196778
                                        ],
                                        [
                                            -86.515526,
                                            39.199622
                                        ],
                                        [
                                            -86.521037,
                                            39.202639
                                        ],
                                        [
                                            -86.522637,
                                            39.204455
                                        ],
                                        [
                                            -86.528667,
                                            39.206076
                                        ],
                                        [
                                            -86.528724,
                                            39.208019
                                        ],
                                        [
                                            -86.528812,
                                            39.208054
                                        ],
                                        [
                                            -86.528855,
                                            39.208067
                                        ],
                                        [
                                            -86.528979,
                                            39.208107
                                        ],
                                        [
                                            -86.529062,
                                            39.208125
                                        ],
                                        [
                                            -86.529181,
                                            39.208145
                                        ],
                                        [
                                            -86.53094,
                                            39.208164
                                        ],
                                        [
                                            -86.531466,
                                            39.208106
                                        ],
                                        [
                                            -86.534849,
                                            39.207108
                                        ],
                                        [
                                            -86.534964,
                                            39.208204
                                        ],
                                        [
                                            -86.535435,
                                            39.210231
                                        ],
                                        [
                                            -86.540085,
                                            39.225595
                                        ],
                                        [
                                            -86.54076,
                                            39.228534
                                        ],
                                        [
                                            -86.540703,
                                            39.232235
                                        ],
                                        [
                                            -86.540777,
                                            39.233027
                                        ],
                                        [
                                            -86.541371,
                                            39.234121
                                        ],
                                        [
                                            -86.553172,
                                            39.216456
                                        ],
                                        [
                                            -86.553963,
                                            39.214333
                                        ],
                                        [
                                            -86.554181,
                                            39.212299
                                        ],
                                        [
                                            -86.553946,
                                            39.20525
                                        ],
                                        [
                                            -86.554681,
                                            39.193792
                                        ],
                                        [
                                            -86.555063,
                                            39.18811
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.557554,
                                            39.180863
                                        ],
                                        [
                                            -86.558652,
                                            39.179537
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.561731,
                                            39.177649
                                        ],
                                        [
                                            -86.561421,
                                            39.178051
                                        ],
                                        [
                                            -86.563968,
                                            39.179243
                                        ],
                                        [
                                            -86.569328,
                                            39.182965
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000800",
                                "AFFGEOID": "1400000US18105000800",
                                "GEOID": "18105000800",
                                "NAME": "8",
                                "LSAD": "CT",
                                "ALAND": 26113924,
                                "AWATER": 355298,
                                "POPULATION": 5806,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 136,
                                "PERCENTAGE": 1.36,
                                "MEDIAN_HOUSEHOLD": 46042,
                                "MEDIAN_HOME": 83281,
                                "MEDIAN_FAMILY": 201000
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.555063,
                                            39.18811
                                        ],
                                        [
                                            -86.554681,
                                            39.193792
                                        ],
                                        [
                                            -86.553946,
                                            39.20525
                                        ],
                                        [
                                            -86.554181,
                                            39.212299
                                        ],
                                        [
                                            -86.553963,
                                            39.214333
                                        ],
                                        [
                                            -86.553172,
                                            39.216456
                                        ],
                                        [
                                            -86.541371,
                                            39.234121
                                        ],
                                        [
                                            -86.540777,
                                            39.233027
                                        ],
                                        [
                                            -86.540703,
                                            39.232235
                                        ],
                                        [
                                            -86.54076,
                                            39.228534
                                        ],
                                        [
                                            -86.540085,
                                            39.225595
                                        ],
                                        [
                                            -86.535435,
                                            39.210231
                                        ],
                                        [
                                            -86.534964,
                                            39.208204
                                        ],
                                        [
                                            -86.534849,
                                            39.207108
                                        ],
                                        [
                                            -86.531466,
                                            39.208106
                                        ],
                                        [
                                            -86.53094,
                                            39.208164
                                        ],
                                        [
                                            -86.529181,
                                            39.208145
                                        ],
                                        [
                                            -86.529062,
                                            39.208125
                                        ],
                                        [
                                            -86.528979,
                                            39.208107
                                        ],
                                        [
                                            -86.528855,
                                            39.208067
                                        ],
                                        [
                                            -86.528812,
                                            39.208054
                                        ],
                                        [
                                            -86.528724,
                                            39.208019
                                        ],
                                        [
                                            -86.528667,
                                            39.206076
                                        ],
                                        [
                                            -86.522637,
                                            39.204455
                                        ],
                                        [
                                            -86.521037,
                                            39.202639
                                        ],
                                        [
                                            -86.515526,
                                            39.199622
                                        ],
                                        [
                                            -86.51322,
                                            39.196778
                                        ],
                                        [
                                            -86.514738,
                                            39.200317
                                        ],
                                        [
                                            -86.514519,
                                            39.20073
                                        ],
                                        [
                                            -86.513228,
                                            39.20082
                                        ],
                                        [
                                            -86.511886,
                                            39.201295
                                        ],
                                        [
                                            -86.511308,
                                            39.201686
                                        ],
                                        [
                                            -86.510934,
                                            39.202366
                                        ],
                                        [
                                            -86.510646,
                                            39.203079
                                        ],
                                        [
                                            -86.510438,
                                            39.203347
                                        ],
                                        [
                                            -86.509916,
                                            39.203539
                                        ],
                                        [
                                            -86.508313,
                                            39.204376
                                        ],
                                        [
                                            -86.506886,
                                            39.204921
                                        ],
                                        [
                                            -86.50549,
                                            39.208177
                                        ],
                                        [
                                            -86.505409,
                                            39.212798
                                        ],
                                        [
                                            -86.502754,
                                            39.211743
                                        ],
                                        [
                                            -86.49877,
                                            39.211696
                                        ],
                                        [
                                            -86.494482,
                                            39.212088
                                        ],
                                        [
                                            -86.491745,
                                            39.212882
                                        ],
                                        [
                                            -86.487252,
                                            39.212923
                                        ],
                                        [
                                            -86.484409,
                                            39.214137
                                        ],
                                        [
                                            -86.478515,
                                            39.21421
                                        ],
                                        [
                                            -86.477632,
                                            39.21483
                                        ],
                                        [
                                            -86.468314,
                                            39.214887
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.463268,
                                            39.210031
                                        ],
                                        [
                                            -86.46329,
                                            39.205261
                                        ],
                                        [
                                            -86.463341,
                                            39.204103
                                        ],
                                        [
                                            -86.466624,
                                            39.202583
                                        ],
                                        [
                                            -86.467689,
                                            39.200922
                                        ],
                                        [
                                            -86.467777,
                                            39.193108
                                        ],
                                        [
                                            -86.468182,
                                            39.192065
                                        ],
                                        [
                                            -86.468028,
                                            39.186961
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.473898,
                                            39.179509
                                        ],
                                        [
                                            -86.478525,
                                            39.176769
                                        ],
                                        [
                                            -86.481418,
                                            39.175031
                                        ],
                                        [
                                            -86.482691,
                                            39.172671
                                        ],
                                        [
                                            -86.48321,
                                            39.172287
                                        ],
                                        [
                                            -86.483745,
                                            39.172091
                                        ],
                                        [
                                            -86.49008,
                                            39.171532
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.505797,
                                            39.177956
                                        ],
                                        [
                                            -86.507252,
                                            39.179774
                                        ],
                                        [
                                            -86.511389,
                                            39.183083
                                        ],
                                        [
                                            -86.514853,
                                            39.184719
                                        ],
                                        [
                                            -86.520933,
                                            39.186138
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.541339,
                                            39.18676
                                        ],
                                        [
                                            -86.5514,
                                            39.187066
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.555063,
                                            39.18811
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000800",
                                "AFFGEOID": "1400000US18105000800",
                                "GEOID": "18105000800",
                                "NAME": "8",
                                "LSAD": "CT",
                                "ALAND": 26113924,
                                "AWATER": 355298,
                                "POPULATION": 5806,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 136,
                                "PERCENTAGE": 1.36,
                                "MEDIAN_HOUSEHOLD": 46042,
                                "MEDIAN_HOME": 83281,
                                "MEDIAN_FAMILY": 201000
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.555063,
                                            39.18811
                                        ],
                                        [
                                            -86.554681,
                                            39.193792
                                        ],
                                        [
                                            -86.553946,
                                            39.20525
                                        ],
                                        [
                                            -86.554181,
                                            39.212299
                                        ],
                                        [
                                            -86.553963,
                                            39.214333
                                        ],
                                        [
                                            -86.553172,
                                            39.216456
                                        ],
                                        [
                                            -86.541371,
                                            39.234121
                                        ],
                                        [
                                            -86.540777,
                                            39.233027
                                        ],
                                        [
                                            -86.540703,
                                            39.232235
                                        ],
                                        [
                                            -86.54076,
                                            39.228534
                                        ],
                                        [
                                            -86.540085,
                                            39.225595
                                        ],
                                        [
                                            -86.535435,
                                            39.210231
                                        ],
                                        [
                                            -86.534964,
                                            39.208204
                                        ],
                                        [
                                            -86.534849,
                                            39.207108
                                        ],
                                        [
                                            -86.531466,
                                            39.208106
                                        ],
                                        [
                                            -86.53094,
                                            39.208164
                                        ],
                                        [
                                            -86.529181,
                                            39.208145
                                        ],
                                        [
                                            -86.529062,
                                            39.208125
                                        ],
                                        [
                                            -86.528979,
                                            39.208107
                                        ],
                                        [
                                            -86.528855,
                                            39.208067
                                        ],
                                        [
                                            -86.528812,
                                            39.208054
                                        ],
                                        [
                                            -86.528724,
                                            39.208019
                                        ],
                                        [
                                            -86.528667,
                                            39.206076
                                        ],
                                        [
                                            -86.522637,
                                            39.204455
                                        ],
                                        [
                                            -86.521037,
                                            39.202639
                                        ],
                                        [
                                            -86.515526,
                                            39.199622
                                        ],
                                        [
                                            -86.51322,
                                            39.196778
                                        ],
                                        [
                                            -86.514738,
                                            39.200317
                                        ],
                                        [
                                            -86.514519,
                                            39.20073
                                        ],
                                        [
                                            -86.513228,
                                            39.20082
                                        ],
                                        [
                                            -86.511886,
                                            39.201295
                                        ],
                                        [
                                            -86.511308,
                                            39.201686
                                        ],
                                        [
                                            -86.510934,
                                            39.202366
                                        ],
                                        [
                                            -86.510646,
                                            39.203079
                                        ],
                                        [
                                            -86.510438,
                                            39.203347
                                        ],
                                        [
                                            -86.509916,
                                            39.203539
                                        ],
                                        [
                                            -86.508313,
                                            39.204376
                                        ],
                                        [
                                            -86.506886,
                                            39.204921
                                        ],
                                        [
                                            -86.50549,
                                            39.208177
                                        ],
                                        [
                                            -86.505409,
                                            39.212798
                                        ],
                                        [
                                            -86.502754,
                                            39.211743
                                        ],
                                        [
                                            -86.49877,
                                            39.211696
                                        ],
                                        [
                                            -86.494482,
                                            39.212088
                                        ],
                                        [
                                            -86.491745,
                                            39.212882
                                        ],
                                        [
                                            -86.487252,
                                            39.212923
                                        ],
                                        [
                                            -86.484409,
                                            39.214137
                                        ],
                                        [
                                            -86.478515,
                                            39.21421
                                        ],
                                        [
                                            -86.477632,
                                            39.21483
                                        ],
                                        [
                                            -86.468314,
                                            39.214887
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.463268,
                                            39.210031
                                        ],
                                        [
                                            -86.46329,
                                            39.205261
                                        ],
                                        [
                                            -86.463341,
                                            39.204103
                                        ],
                                        [
                                            -86.466624,
                                            39.202583
                                        ],
                                        [
                                            -86.467689,
                                            39.200922
                                        ],
                                        [
                                            -86.467777,
                                            39.193108
                                        ],
                                        [
                                            -86.468182,
                                            39.192065
                                        ],
                                        [
                                            -86.468028,
                                            39.186961
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.473898,
                                            39.179509
                                        ],
                                        [
                                            -86.478525,
                                            39.176769
                                        ],
                                        [
                                            -86.481418,
                                            39.175031
                                        ],
                                        [
                                            -86.482691,
                                            39.172671
                                        ],
                                        [
                                            -86.48321,
                                            39.172287
                                        ],
                                        [
                                            -86.483745,
                                            39.172091
                                        ],
                                        [
                                            -86.49008,
                                            39.171532
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.505797,
                                            39.177956
                                        ],
                                        [
                                            -86.507252,
                                            39.179774
                                        ],
                                        [
                                            -86.511389,
                                            39.183083
                                        ],
                                        [
                                            -86.514853,
                                            39.184719
                                        ],
                                        [
                                            -86.520933,
                                            39.186138
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.541339,
                                            39.18676
                                        ],
                                        [
                                            -86.5514,
                                            39.187066
                                        ],
                                        [
                                            -86.555217,
                                            39.187239
                                        ],
                                        [
                                            -86.555063,
                                            39.18811
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000901",
                                "AFFGEOID": "1400000US18105000901",
                                "GEOID": "18105000901",
                                "NAME": "9.01",
                                "LSAD": "CT",
                                "ALAND": 1959957,
                                "AWATER": 0,
                                "POPULATION": 3265,
                                "CLAIMANTS": 33,
                                "PERCENTAGEVAL": 101,
                                "PERCENTAGE": 1.01,
                                "MEDIAN_HOUSEHOLD": 38490,
                                "MEDIAN_HOME": 87625,
                                "MEDIAN_FAMILY": 252800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.509462,
                                            39.168096
                                        ],
                                        [
                                            -86.507171,
                                            39.168214
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.497722,
                                            39.160919
                                        ],
                                        [
                                            -86.497696,
                                            39.155178
                                        ],
                                        [
                                            -86.497747,
                                            39.151129
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.508464,
                                            39.157781
                                        ],
                                        [
                                            -86.508477,
                                            39.164266
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.509462,
                                            39.168096
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000901",
                                "AFFGEOID": "1400000US18105000901",
                                "GEOID": "18105000901",
                                "NAME": "9.01",
                                "LSAD": "CT",
                                "ALAND": 1959957,
                                "AWATER": 0,
                                "POPULATION": 3265,
                                "CLAIMANTS": 33,
                                "PERCENTAGEVAL": 101,
                                "PERCENTAGE": 1.01,
                                "MEDIAN_HOUSEHOLD": 38490,
                                "MEDIAN_HOME": 87625,
                                "MEDIAN_FAMILY": 252800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.509462,
                                            39.168096
                                        ],
                                        [
                                            -86.507171,
                                            39.168214
                                        ],
                                        [
                                            -86.506756,
                                            39.17157
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.497722,
                                            39.160919
                                        ],
                                        [
                                            -86.497696,
                                            39.155178
                                        ],
                                        [
                                            -86.497747,
                                            39.151129
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.508464,
                                            39.157781
                                        ],
                                        [
                                            -86.508477,
                                            39.164266
                                        ],
                                        [
                                            -86.509408,
                                            39.164264
                                        ],
                                        [
                                            -86.509462,
                                            39.168096
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000903",
                                "AFFGEOID": "1400000US18105000903",
                                "GEOID": "18105000903",
                                "NAME": "9.03",
                                "LSAD": "CT",
                                "ALAND": 4340436,
                                "AWATER": 0,
                                "POPULATION": 5306,
                                "CLAIMANTS": 87,
                                "PERCENTAGEVAL": 164,
                                "PERCENTAGE": 1.64,
                                "MEDIAN_HOUSEHOLD": 30770,
                                "MEDIAN_HOME": 43365,
                                "MEDIAN_FAMILY": 182600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.49008,
                                            39.171532
                                        ],
                                        [
                                            -86.483745,
                                            39.172091
                                        ],
                                        [
                                            -86.48321,
                                            39.172287
                                        ],
                                        [
                                            -86.482691,
                                            39.172671
                                        ],
                                        [
                                            -86.481418,
                                            39.175031
                                        ],
                                        [
                                            -86.478525,
                                            39.176769
                                        ],
                                        [
                                            -86.473898,
                                            39.179509
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.466994,
                                            39.18585
                                        ],
                                        [
                                            -86.463617,
                                            39.185834
                                        ],
                                        [
                                            -86.462778,
                                            39.185898
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.467243,
                                            39.166232
                                        ],
                                        [
                                            -86.471888,
                                            39.164397
                                        ],
                                        [
                                            -86.472308,
                                            39.164305
                                        ],
                                        [
                                            -86.481195,
                                            39.164233
                                        ],
                                        [
                                            -86.489271,
                                            39.164227
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000903",
                                "AFFGEOID": "1400000US18105000903",
                                "GEOID": "18105000903",
                                "NAME": "9.03",
                                "LSAD": "CT",
                                "ALAND": 4340436,
                                "AWATER": 0,
                                "POPULATION": 5306,
                                "CLAIMANTS": 87,
                                "PERCENTAGEVAL": 164,
                                "PERCENTAGE": 1.64,
                                "MEDIAN_HOUSEHOLD": 30770,
                                "MEDIAN_HOME": 43365,
                                "MEDIAN_FAMILY": 182600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.502242,
                                            39.171549
                                        ],
                                        [
                                            -86.49008,
                                            39.171532
                                        ],
                                        [
                                            -86.483745,
                                            39.172091
                                        ],
                                        [
                                            -86.48321,
                                            39.172287
                                        ],
                                        [
                                            -86.482691,
                                            39.172671
                                        ],
                                        [
                                            -86.481418,
                                            39.175031
                                        ],
                                        [
                                            -86.478525,
                                            39.176769
                                        ],
                                        [
                                            -86.473898,
                                            39.179509
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.466994,
                                            39.18585
                                        ],
                                        [
                                            -86.463617,
                                            39.185834
                                        ],
                                        [
                                            -86.462778,
                                            39.185898
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.467243,
                                            39.166232
                                        ],
                                        [
                                            -86.471888,
                                            39.164397
                                        ],
                                        [
                                            -86.472308,
                                            39.164305
                                        ],
                                        [
                                            -86.481195,
                                            39.164233
                                        ],
                                        [
                                            -86.489271,
                                            39.164227
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.501747,
                                            39.170656
                                        ],
                                        [
                                            -86.502242,
                                            39.171549
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000904",
                                "AFFGEOID": "1400000US18105000904",
                                "GEOID": "18105000904",
                                "NAME": "9.04",
                                "LSAD": "CT",
                                "ALAND": 4905844,
                                "AWATER": 0,
                                "POPULATION": 5507,
                                "CLAIMANTS": 43,
                                "PERCENTAGEVAL": 78,
                                "PERCENTAGE": 0.78,
                                "MEDIAN_HOUSEHOLD": 36492,
                                "MEDIAN_HOME": 92800,
                                "MEDIAN_FAMILY": 264700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.489271,
                                            39.164227
                                        ],
                                        [
                                            -86.481195,
                                            39.164233
                                        ],
                                        [
                                            -86.472308,
                                            39.164305
                                        ],
                                        [
                                            -86.471888,
                                            39.164397
                                        ],
                                        [
                                            -86.467243,
                                            39.166232
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.462469,
                                            39.164629
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.463848,
                                            39.1505
                                        ],
                                        [
                                            -86.471169,
                                            39.150332
                                        ],
                                        [
                                            -86.47138,
                                            39.150329
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.497747,
                                            39.151129
                                        ],
                                        [
                                            -86.497696,
                                            39.155178
                                        ],
                                        [
                                            -86.497722,
                                            39.160919
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "000904",
                                "AFFGEOID": "1400000US18105000904",
                                "GEOID": "18105000904",
                                "NAME": "9.04",
                                "LSAD": "CT",
                                "ALAND": 4905844,
                                "AWATER": 0,
                                "POPULATION": 5507,
                                "CLAIMANTS": 43,
                                "PERCENTAGEVAL": 78,
                                "PERCENTAGE": 0.78,
                                "MEDIAN_HOUSEHOLD": 36492,
                                "MEDIAN_HOME": 92800,
                                "MEDIAN_FAMILY": 264700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.498296,
                                            39.164226
                                        ],
                                        [
                                            -86.489271,
                                            39.164227
                                        ],
                                        [
                                            -86.481195,
                                            39.164233
                                        ],
                                        [
                                            -86.472308,
                                            39.164305
                                        ],
                                        [
                                            -86.471888,
                                            39.164397
                                        ],
                                        [
                                            -86.467243,
                                            39.166232
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.462469,
                                            39.164629
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.463848,
                                            39.1505
                                        ],
                                        [
                                            -86.471169,
                                            39.150332
                                        ],
                                        [
                                            -86.47138,
                                            39.150329
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.497747,
                                            39.151129
                                        ],
                                        [
                                            -86.497696,
                                            39.155178
                                        ],
                                        [
                                            -86.497722,
                                            39.160919
                                        ],
                                        [
                                            -86.498296,
                                            39.164226
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001001",
                                "AFFGEOID": "1400000US18105001001",
                                "GEOID": "18105001001",
                                "NAME": "10.01",
                                "LSAD": "CT",
                                "ALAND": 5046172,
                                "AWATER": 0,
                                "POPULATION": 5651,
                                "CLAIMANTS": 52,
                                "PERCENTAGEVAL": 92,
                                "PERCENTAGE": 0.92,
                                "MEDIAN_HOUSEHOLD": 101179,
                                "MEDIAN_HOME": 117594,
                                "MEDIAN_FAMILY": 321300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.517616,
                                            39.139784
                                        ],
                                        [
                                            -86.515628,
                                            39.141195
                                        ],
                                        [
                                            -86.517412,
                                            39.14446
                                        ],
                                        [
                                            -86.517488,
                                            39.14828
                                        ],
                                        [
                                            -86.5151,
                                            39.148266
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.512542,
                                            39.150511
                                        ],
                                        [
                                            -86.50876,
                                            39.150492
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.480433,
                                            39.149346
                                        ],
                                        [
                                            -86.480386,
                                            39.1424
                                        ],
                                        [
                                            -86.480386,
                                            39.141931
                                        ],
                                        [
                                            -86.480495,
                                            39.136245
                                        ],
                                        [
                                            -86.481207,
                                            39.135677
                                        ],
                                        [
                                            -86.491126,
                                            39.135838
                                        ],
                                        [
                                            -86.496311,
                                            39.135947
                                        ],
                                        [
                                            -86.496516,
                                            39.13595
                                        ],
                                        [
                                            -86.504891,
                                            39.136399
                                        ],
                                        [
                                            -86.506675,
                                            39.136414
                                        ],
                                        [
                                            -86.508184,
                                            39.13648
                                        ],
                                        [
                                            -86.509695,
                                            39.136006
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.517616,
                                            39.139784
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001001",
                                "AFFGEOID": "1400000US18105001001",
                                "GEOID": "18105001001",
                                "NAME": "10.01",
                                "LSAD": "CT",
                                "ALAND": 5046172,
                                "AWATER": 0,
                                "POPULATION": 5651,
                                "CLAIMANTS": 52,
                                "PERCENTAGEVAL": 92,
                                "PERCENTAGE": 0.92,
                                "MEDIAN_HOUSEHOLD": 101179,
                                "MEDIAN_HOME": 117594,
                                "MEDIAN_FAMILY": 321300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.517616,
                                            39.139784
                                        ],
                                        [
                                            -86.515628,
                                            39.141195
                                        ],
                                        [
                                            -86.517412,
                                            39.14446
                                        ],
                                        [
                                            -86.517488,
                                            39.14828
                                        ],
                                        [
                                            -86.5151,
                                            39.148266
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.512542,
                                            39.150511
                                        ],
                                        [
                                            -86.50876,
                                            39.150492
                                        ],
                                        [
                                            -86.508424,
                                            39.15045
                                        ],
                                        [
                                            -86.498245,
                                            39.150471
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.480433,
                                            39.149346
                                        ],
                                        [
                                            -86.480386,
                                            39.1424
                                        ],
                                        [
                                            -86.480386,
                                            39.141931
                                        ],
                                        [
                                            -86.480495,
                                            39.136245
                                        ],
                                        [
                                            -86.481207,
                                            39.135677
                                        ],
                                        [
                                            -86.491126,
                                            39.135838
                                        ],
                                        [
                                            -86.496311,
                                            39.135947
                                        ],
                                        [
                                            -86.496516,
                                            39.13595
                                        ],
                                        [
                                            -86.504891,
                                            39.136399
                                        ],
                                        [
                                            -86.506675,
                                            39.136414
                                        ],
                                        [
                                            -86.508184,
                                            39.13648
                                        ],
                                        [
                                            -86.509695,
                                            39.136006
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.517616,
                                            39.139784
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001002",
                                "AFFGEOID": "1400000US18105001002",
                                "GEOID": "18105001002",
                                "NAME": "10.02",
                                "LSAD": "CT",
                                "ALAND": 12892251,
                                "AWATER": 0,
                                "POPULATION": 6140,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 129,
                                "PERCENTAGE": 1.29,
                                "MEDIAN_HOUSEHOLD": 62463,
                                "MEDIAN_HOME": 106678,
                                "MEDIAN_FAMILY": 189900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.524511,
                                            39.135949
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.509695,
                                            39.136006
                                        ],
                                        [
                                            -86.508184,
                                            39.13648
                                        ],
                                        [
                                            -86.506675,
                                            39.136414
                                        ],
                                        [
                                            -86.504891,
                                            39.136399
                                        ],
                                        [
                                            -86.496516,
                                            39.13595
                                        ],
                                        [
                                            -86.496311,
                                            39.135947
                                        ],
                                        [
                                            -86.491126,
                                            39.135838
                                        ],
                                        [
                                            -86.481207,
                                            39.135677
                                        ],
                                        [
                                            -86.480495,
                                            39.136245
                                        ],
                                        [
                                            -86.480386,
                                            39.141931
                                        ],
                                        [
                                            -86.480386,
                                            39.1424
                                        ],
                                        [
                                            -86.480433,
                                            39.149346
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.47138,
                                            39.150329
                                        ],
                                        [
                                            -86.471169,
                                            39.150332
                                        ],
                                        [
                                            -86.463848,
                                            39.1505
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.463302,
                                            39.108474
                                        ],
                                        [
                                            -86.4647,
                                            39.111198
                                        ],
                                        [
                                            -86.467111,
                                            39.113805
                                        ],
                                        [
                                            -86.4711,
                                            39.115029
                                        ],
                                        [
                                            -86.475127,
                                            39.115567
                                        ],
                                        [
                                            -86.476876,
                                            39.117088
                                        ],
                                        [
                                            -86.481177,
                                            39.119469
                                        ],
                                        [
                                            -86.485016,
                                            39.120619
                                        ],
                                        [
                                            -86.4896,
                                            39.121361
                                        ],
                                        [
                                            -86.509166,
                                            39.12145
                                        ],
                                        [
                                            -86.510155,
                                            39.121401
                                        ],
                                        [
                                            -86.511579,
                                            39.121443
                                        ],
                                        [
                                            -86.513611,
                                            39.121454
                                        ],
                                        [
                                            -86.522043,
                                            39.121447
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.526673,
                                            39.122932
                                        ],
                                        [
                                            -86.526677,
                                            39.123924
                                        ],
                                        [
                                            -86.526823,
                                            39.13083
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001002",
                                "AFFGEOID": "1400000US18105001002",
                                "GEOID": "18105001002",
                                "NAME": "10.02",
                                "LSAD": "CT",
                                "ALAND": 12892251,
                                "AWATER": 0,
                                "POPULATION": 6140,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 129,
                                "PERCENTAGE": 1.29,
                                "MEDIAN_HOUSEHOLD": 62463,
                                "MEDIAN_HOME": 106678,
                                "MEDIAN_FAMILY": 189900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.524511,
                                            39.135949
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.509695,
                                            39.136006
                                        ],
                                        [
                                            -86.508184,
                                            39.13648
                                        ],
                                        [
                                            -86.506675,
                                            39.136414
                                        ],
                                        [
                                            -86.504891,
                                            39.136399
                                        ],
                                        [
                                            -86.496516,
                                            39.13595
                                        ],
                                        [
                                            -86.496311,
                                            39.135947
                                        ],
                                        [
                                            -86.491126,
                                            39.135838
                                        ],
                                        [
                                            -86.481207,
                                            39.135677
                                        ],
                                        [
                                            -86.480495,
                                            39.136245
                                        ],
                                        [
                                            -86.480386,
                                            39.141931
                                        ],
                                        [
                                            -86.480386,
                                            39.1424
                                        ],
                                        [
                                            -86.480433,
                                            39.149346
                                        ],
                                        [
                                            -86.480461,
                                            39.15021
                                        ],
                                        [
                                            -86.47138,
                                            39.150329
                                        ],
                                        [
                                            -86.471169,
                                            39.150332
                                        ],
                                        [
                                            -86.463848,
                                            39.1505
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.463302,
                                            39.108474
                                        ],
                                        [
                                            -86.4647,
                                            39.111198
                                        ],
                                        [
                                            -86.467111,
                                            39.113805
                                        ],
                                        [
                                            -86.4711,
                                            39.115029
                                        ],
                                        [
                                            -86.475127,
                                            39.115567
                                        ],
                                        [
                                            -86.476876,
                                            39.117088
                                        ],
                                        [
                                            -86.481177,
                                            39.119469
                                        ],
                                        [
                                            -86.485016,
                                            39.120619
                                        ],
                                        [
                                            -86.4896,
                                            39.121361
                                        ],
                                        [
                                            -86.509166,
                                            39.12145
                                        ],
                                        [
                                            -86.510155,
                                            39.121401
                                        ],
                                        [
                                            -86.511579,
                                            39.121443
                                        ],
                                        [
                                            -86.513611,
                                            39.121454
                                        ],
                                        [
                                            -86.522043,
                                            39.121447
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.526673,
                                            39.122932
                                        ],
                                        [
                                            -86.526677,
                                            39.123924
                                        ],
                                        [
                                            -86.526823,
                                            39.13083
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001101",
                                "AFFGEOID": "1400000US18105001101",
                                "GEOID": "18105001101",
                                "NAME": "11.01",
                                "LSAD": "CT",
                                "ALAND": 3564199,
                                "AWATER": 0,
                                "POPULATION": 6007,
                                "CLAIMANTS": 125,
                                "PERCENTAGEVAL": 208,
                                "PERCENTAGE": 2.08,
                                "MEDIAN_HOUSEHOLD": 34603,
                                "MEDIAN_HOME": 31991,
                                "MEDIAN_FAMILY": 128200
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.54507,
                                            39.140018
                                        ],
                                        [
                                            -86.544789,
                                            39.140256
                                        ],
                                        [
                                            -86.538876,
                                            39.146074
                                        ],
                                        [
                                            -86.53887,
                                            39.146355
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.53628,
                                            39.150651
                                        ],
                                        [
                                            -86.534724,
                                            39.148681
                                        ],
                                        [
                                            -86.535231,
                                            39.150537
                                        ],
                                        [
                                            -86.532519,
                                            39.150525
                                        ],
                                        [
                                            -86.526944,
                                            39.150548
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.5151,
                                            39.148266
                                        ],
                                        [
                                            -86.517488,
                                            39.14828
                                        ],
                                        [
                                            -86.517412,
                                            39.14446
                                        ],
                                        [
                                            -86.515628,
                                            39.141195
                                        ],
                                        [
                                            -86.517616,
                                            39.139784
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.524511,
                                            39.135949
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.53389,
                                            39.135946
                                        ],
                                        [
                                            -86.534895,
                                            39.135953
                                        ],
                                        [
                                            -86.535062,
                                            39.135954
                                        ],
                                        [
                                            -86.535124,
                                            39.135956
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.54507,
                                            39.140018
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001101",
                                "AFFGEOID": "1400000US18105001101",
                                "GEOID": "18105001101",
                                "NAME": "11.01",
                                "LSAD": "CT",
                                "ALAND": 3564199,
                                "AWATER": 0,
                                "POPULATION": 6007,
                                "CLAIMANTS": 125,
                                "PERCENTAGEVAL": 208,
                                "PERCENTAGE": 2.08,
                                "MEDIAN_HOUSEHOLD": 34603,
                                "MEDIAN_HOME": 31991,
                                "MEDIAN_FAMILY": 128200
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.54507,
                                            39.140018
                                        ],
                                        [
                                            -86.544789,
                                            39.140256
                                        ],
                                        [
                                            -86.538876,
                                            39.146074
                                        ],
                                        [
                                            -86.53887,
                                            39.146355
                                        ],
                                        [
                                            -86.538806,
                                            39.149545
                                        ],
                                        [
                                            -86.538787,
                                            39.1506
                                        ],
                                        [
                                            -86.53628,
                                            39.150651
                                        ],
                                        [
                                            -86.534724,
                                            39.148681
                                        ],
                                        [
                                            -86.535231,
                                            39.150537
                                        ],
                                        [
                                            -86.532519,
                                            39.150525
                                        ],
                                        [
                                            -86.526944,
                                            39.150548
                                        ],
                                        [
                                            -86.522622,
                                            39.150531
                                        ],
                                        [
                                            -86.515127,
                                            39.150544
                                        ],
                                        [
                                            -86.5151,
                                            39.148266
                                        ],
                                        [
                                            -86.517488,
                                            39.14828
                                        ],
                                        [
                                            -86.517412,
                                            39.14446
                                        ],
                                        [
                                            -86.515628,
                                            39.141195
                                        ],
                                        [
                                            -86.517616,
                                            39.139784
                                        ],
                                        [
                                            -86.517479,
                                            39.135991
                                        ],
                                        [
                                            -86.524511,
                                            39.135949
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.53389,
                                            39.135946
                                        ],
                                        [
                                            -86.534895,
                                            39.135953
                                        ],
                                        [
                                            -86.535062,
                                            39.135954
                                        ],
                                        [
                                            -86.535124,
                                            39.135956
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.54507,
                                            39.140018
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001102",
                                "AFFGEOID": "1400000US18105001102",
                                "GEOID": "18105001102",
                                "NAME": "11.02",
                                "LSAD": "CT",
                                "ALAND": 6410882,
                                "AWATER": 0,
                                "POPULATION": 4812,
                                "CLAIMANTS": 93,
                                "PERCENTAGEVAL": 193,
                                "PERCENTAGE": 1.93,
                                "MEDIAN_HOUSEHOLD": 56701,
                                "MEDIAN_HOME": 77688,
                                "MEDIAN_FAMILY": 149600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.57158,
                                            39.13675
                                        ],
                                        [
                                            -86.561983,
                                            39.13652
                                        ],
                                        [
                                            -86.561849,
                                            39.136521
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.535124,
                                            39.135956
                                        ],
                                        [
                                            -86.535062,
                                            39.135954
                                        ],
                                        [
                                            -86.534895,
                                            39.135953
                                        ],
                                        [
                                            -86.53389,
                                            39.135946
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.526823,
                                            39.13083
                                        ],
                                        [
                                            -86.526677,
                                            39.123924
                                        ],
                                        [
                                            -86.526673,
                                            39.122932
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.529416,
                                            39.121448
                                        ],
                                        [
                                            -86.531345,
                                            39.12145
                                        ],
                                        [
                                            -86.533497,
                                            39.121462
                                        ],
                                        [
                                            -86.537596,
                                            39.121508
                                        ],
                                        [
                                            -86.537799,
                                            39.121514
                                        ],
                                        [
                                            -86.539148,
                                            39.121563
                                        ],
                                        [
                                            -86.566885,
                                            39.122209
                                        ],
                                        [
                                            -86.567353,
                                            39.122222
                                        ],
                                        [
                                            -86.568665,
                                            39.122191
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.571425,
                                            39.122307
                                        ],
                                        [
                                            -86.572394,
                                            39.124391
                                        ],
                                        [
                                            -86.573027,
                                            39.126991
                                        ],
                                        [
                                            -86.573184,
                                            39.133811
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001102",
                                "AFFGEOID": "1400000US18105001102",
                                "GEOID": "18105001102",
                                "NAME": "11.02",
                                "LSAD": "CT",
                                "ALAND": 6410882,
                                "AWATER": 0,
                                "POPULATION": 4812,
                                "CLAIMANTS": 93,
                                "PERCENTAGEVAL": 193,
                                "PERCENTAGE": 1.93,
                                "MEDIAN_HOUSEHOLD": 56701,
                                "MEDIAN_HOME": 77688,
                                "MEDIAN_FAMILY": 149600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573183,
                                            39.136792
                                        ],
                                        [
                                            -86.57158,
                                            39.13675
                                        ],
                                        [
                                            -86.561983,
                                            39.13652
                                        ],
                                        [
                                            -86.561849,
                                            39.136521
                                        ],
                                        [
                                            -86.548732,
                                            39.136335
                                        ],
                                        [
                                            -86.535124,
                                            39.135956
                                        ],
                                        [
                                            -86.535062,
                                            39.135954
                                        ],
                                        [
                                            -86.534895,
                                            39.135953
                                        ],
                                        [
                                            -86.53389,
                                            39.135946
                                        ],
                                        [
                                            -86.526891,
                                            39.136004
                                        ],
                                        [
                                            -86.526823,
                                            39.13083
                                        ],
                                        [
                                            -86.526677,
                                            39.123924
                                        ],
                                        [
                                            -86.526673,
                                            39.122932
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.529416,
                                            39.121448
                                        ],
                                        [
                                            -86.531345,
                                            39.12145
                                        ],
                                        [
                                            -86.533497,
                                            39.121462
                                        ],
                                        [
                                            -86.537596,
                                            39.121508
                                        ],
                                        [
                                            -86.537799,
                                            39.121514
                                        ],
                                        [
                                            -86.539148,
                                            39.121563
                                        ],
                                        [
                                            -86.566885,
                                            39.122209
                                        ],
                                        [
                                            -86.567353,
                                            39.122222
                                        ],
                                        [
                                            -86.568665,
                                            39.122191
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.571425,
                                            39.122307
                                        ],
                                        [
                                            -86.572394,
                                            39.124391
                                        ],
                                        [
                                            -86.573027,
                                            39.126991
                                        ],
                                        [
                                            -86.573184,
                                            39.133811
                                        ],
                                        [
                                            -86.573183,
                                            39.136792
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001103",
                                "AFFGEOID": "1400000US18105001103",
                                "GEOID": "18105001103",
                                "NAME": "11.03",
                                "LSAD": "CT",
                                "ALAND": 15765308,
                                "AWATER": 0,
                                "POPULATION": 2868,
                                "CLAIMANTS": 50,
                                "PERCENTAGEVAL": 174,
                                "PERCENTAGE": 1.74,
                                "MEDIAN_HOUSEHOLD": 60927,
                                "MEDIAN_HOME": 76250,
                                "MEDIAN_FAMILY": 164100
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.568665,
                                            39.122191
                                        ],
                                        [
                                            -86.567353,
                                            39.122222
                                        ],
                                        [
                                            -86.566885,
                                            39.122209
                                        ],
                                        [
                                            -86.539148,
                                            39.121563
                                        ],
                                        [
                                            -86.537799,
                                            39.121514
                                        ],
                                        [
                                            -86.537596,
                                            39.121508
                                        ],
                                        [
                                            -86.533497,
                                            39.121462
                                        ],
                                        [
                                            -86.531345,
                                            39.12145
                                        ],
                                        [
                                            -86.529416,
                                            39.121448
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.526495,
                                            39.107188
                                        ],
                                        [
                                            -86.5315,
                                            39.107233
                                        ],
                                        [
                                            -86.532533,
                                            39.104312
                                        ],
                                        [
                                            -86.537934,
                                            39.099257
                                        ],
                                        [
                                            -86.542172,
                                            39.096055
                                        ],
                                        [
                                            -86.544167,
                                            39.092981
                                        ],
                                        [
                                            -86.544229,
                                            39.091094
                                        ],
                                        [
                                            -86.542227,
                                            39.08606
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.540986,
                                            39.082662
                                        ],
                                        [
                                            -86.541727,
                                            39.078563
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.573408,
                                            39.110827
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001103",
                                "AFFGEOID": "1400000US18105001103",
                                "GEOID": "18105001103",
                                "NAME": "11.03",
                                "LSAD": "CT",
                                "ALAND": 15765308,
                                "AWATER": 0,
                                "POPULATION": 2868,
                                "CLAIMANTS": 50,
                                "PERCENTAGEVAL": 174,
                                "PERCENTAGE": 1.74,
                                "MEDIAN_HOUSEHOLD": 60927,
                                "MEDIAN_HOME": 76250,
                                "MEDIAN_FAMILY": 164100
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.571386,
                                            39.122235
                                        ],
                                        [
                                            -86.568665,
                                            39.122191
                                        ],
                                        [
                                            -86.567353,
                                            39.122222
                                        ],
                                        [
                                            -86.566885,
                                            39.122209
                                        ],
                                        [
                                            -86.539148,
                                            39.121563
                                        ],
                                        [
                                            -86.537799,
                                            39.121514
                                        ],
                                        [
                                            -86.537596,
                                            39.121508
                                        ],
                                        [
                                            -86.533497,
                                            39.121462
                                        ],
                                        [
                                            -86.531345,
                                            39.12145
                                        ],
                                        [
                                            -86.529416,
                                            39.121448
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.526495,
                                            39.107188
                                        ],
                                        [
                                            -86.5315,
                                            39.107233
                                        ],
                                        [
                                            -86.532533,
                                            39.104312
                                        ],
                                        [
                                            -86.537934,
                                            39.099257
                                        ],
                                        [
                                            -86.542172,
                                            39.096055
                                        ],
                                        [
                                            -86.544167,
                                            39.092981
                                        ],
                                        [
                                            -86.544229,
                                            39.091094
                                        ],
                                        [
                                            -86.542227,
                                            39.08606
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.540986,
                                            39.082662
                                        ],
                                        [
                                            -86.541727,
                                            39.078563
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.573408,
                                            39.110827
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001200",
                                "AFFGEOID": "1400000US18105001200",
                                "GEOID": "18105001200",
                                "NAME": "12",
                                "LSAD": "CT",
                                "ALAND": 166686637,
                                "AWATER": 78061,
                                "POPULATION": 6125,
                                "CLAIMANTS": 114,
                                "PERCENTAGEVAL": 186,
                                "PERCENTAGE": 1.86,
                                "MEDIAN_HOUSEHOLD": 65064,
                                "MEDIAN_HOME": 79727,
                                "MEDIAN_FAMILY": 184400
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.683002,
                                            39.165746
                                        ],
                                        [
                                            -86.629145,
                                            39.165049
                                        ],
                                        [
                                            -86.620216,
                                            39.165043
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.610251,
                                            39.139975
                                        ],
                                        [
                                            -86.610257,
                                            39.136821
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.604291,
                                            39.129249
                                        ],
                                        [
                                            -86.606523,
                                            39.127884
                                        ],
                                        [
                                            -86.605747,
                                            39.127054
                                        ],
                                        [
                                            -86.60571,
                                            39.122305
                                        ],
                                        [
                                            -86.584866,
                                            39.122294
                                        ],
                                        [
                                            -86.583994,
                                            39.122439
                                        ],
                                        [
                                            -86.582543,
                                            39.123366
                                        ],
                                        [
                                            -86.582543,
                                            39.123396
                                        ],
                                        [
                                            -86.577653,
                                            39.12296
                                        ],
                                        [
                                            -86.57527,
                                            39.121818
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.573408,
                                            39.110827
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.573204,
                                            39.073006
                                        ],
                                        [
                                            -86.573165,
                                            39.067474
                                        ],
                                        [
                                            -86.573696,
                                            39.065429
                                        ],
                                        [
                                            -86.573183,
                                            39.048522
                                        ],
                                        [
                                            -86.573346,
                                            39.045625
                                        ],
                                        [
                                            -86.573638,
                                            39.005728
                                        ],
                                        [
                                            -86.573534,
                                            38.993265
                                        ],
                                        [
                                            -86.573548,
                                            38.992147
                                        ],
                                        [
                                            -86.58789,
                                            38.992213
                                        ],
                                        [
                                            -86.595718,
                                            38.992008
                                        ],
                                        [
                                            -86.606579,
                                            38.992139
                                        ],
                                        [
                                            -86.608138,
                                            38.992055
                                        ],
                                        [
                                            -86.682277,
                                            38.992404
                                        ],
                                        [
                                            -86.682094,
                                            39.043472
                                        ],
                                        [
                                            -86.682401,
                                            39.079846
                                        ],
                                        [
                                            -86.682302,
                                            39.08669
                                        ],
                                        [
                                            -86.682548,
                                            39.108931
                                        ],
                                        [
                                            -86.683002,
                                            39.165746
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001200",
                                "AFFGEOID": "1400000US18105001200",
                                "GEOID": "18105001200",
                                "NAME": "12",
                                "LSAD": "CT",
                                "ALAND": 166686637,
                                "AWATER": 78061,
                                "POPULATION": 6125,
                                "CLAIMANTS": 114,
                                "PERCENTAGEVAL": 186,
                                "PERCENTAGE": 1.86,
                                "MEDIAN_HOUSEHOLD": 65064,
                                "MEDIAN_HOME": 79727,
                                "MEDIAN_FAMILY": 184400
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.683002,
                                            39.165746
                                        ],
                                        [
                                            -86.629145,
                                            39.165049
                                        ],
                                        [
                                            -86.620216,
                                            39.165043
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.610251,
                                            39.139975
                                        ],
                                        [
                                            -86.610257,
                                            39.136821
                                        ],
                                        [
                                            -86.606074,
                                            39.136808
                                        ],
                                        [
                                            -86.604291,
                                            39.129249
                                        ],
                                        [
                                            -86.606523,
                                            39.127884
                                        ],
                                        [
                                            -86.605747,
                                            39.127054
                                        ],
                                        [
                                            -86.60571,
                                            39.122305
                                        ],
                                        [
                                            -86.584866,
                                            39.122294
                                        ],
                                        [
                                            -86.583994,
                                            39.122439
                                        ],
                                        [
                                            -86.582543,
                                            39.123366
                                        ],
                                        [
                                            -86.582543,
                                            39.123396
                                        ],
                                        [
                                            -86.577653,
                                            39.12296
                                        ],
                                        [
                                            -86.57527,
                                            39.121818
                                        ],
                                        [
                                            -86.573411,
                                            39.122227
                                        ],
                                        [
                                            -86.573408,
                                            39.110827
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.573204,
                                            39.073006
                                        ],
                                        [
                                            -86.573165,
                                            39.067474
                                        ],
                                        [
                                            -86.573696,
                                            39.065429
                                        ],
                                        [
                                            -86.573183,
                                            39.048522
                                        ],
                                        [
                                            -86.573346,
                                            39.045625
                                        ],
                                        [
                                            -86.573638,
                                            39.005728
                                        ],
                                        [
                                            -86.573534,
                                            38.993265
                                        ],
                                        [
                                            -86.573548,
                                            38.992147
                                        ],
                                        [
                                            -86.58789,
                                            38.992213
                                        ],
                                        [
                                            -86.595718,
                                            38.992008
                                        ],
                                        [
                                            -86.606579,
                                            38.992139
                                        ],
                                        [
                                            -86.608138,
                                            38.992055
                                        ],
                                        [
                                            -86.682277,
                                            38.992404
                                        ],
                                        [
                                            -86.682094,
                                            39.043472
                                        ],
                                        [
                                            -86.682401,
                                            39.079846
                                        ],
                                        [
                                            -86.682302,
                                            39.08669
                                        ],
                                        [
                                            -86.682548,
                                            39.108931
                                        ],
                                        [
                                            -86.683002,
                                            39.165746
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001301",
                                "AFFGEOID": "1400000US18105001301",
                                "GEOID": "18105001301",
                                "NAME": "13.01",
                                "LSAD": "CT",
                                "ALAND": 149886097,
                                "AWATER": 28679,
                                "POPULATION": 5934,
                                "CLAIMANTS": 90,
                                "PERCENTAGEVAL": 152,
                                "PERCENTAGE": 1.52,
                                "MEDIAN_HOUSEHOLD": 56964,
                                "MEDIAN_HOME": 66827,
                                "MEDIAN_FAMILY": 141100
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.68561,
                                            39.336043
                                        ],
                                        [
                                            -86.682041,
                                            39.335472
                                        ],
                                        [
                                            -86.678254,
                                            39.333096
                                        ],
                                        [
                                            -86.675118,
                                            39.331755
                                        ],
                                        [
                                            -86.672034,
                                            39.331699
                                        ],
                                        [
                                            -86.667675,
                                            39.329482
                                        ],
                                        [
                                            -86.666329,
                                            39.329145
                                        ],
                                        [
                                            -86.665512,
                                            39.329286
                                        ],
                                        [
                                            -86.665847,
                                            39.331665
                                        ],
                                        [
                                            -86.66453,
                                            39.333771
                                        ],
                                        [
                                            -86.662976,
                                            39.334242
                                        ],
                                        [
                                            -86.660614,
                                            39.332871
                                        ],
                                        [
                                            -86.659848,
                                            39.330855
                                        ],
                                        [
                                            -86.658776,
                                            39.330099
                                        ],
                                        [
                                            -86.65638,
                                            39.330646
                                        ],
                                        [
                                            -86.655507,
                                            39.331476
                                        ],
                                        [
                                            -86.655062,
                                            39.333791
                                        ],
                                        [
                                            -86.656012,
                                            39.338673
                                        ],
                                        [
                                            -86.655335,
                                            39.339998
                                        ],
                                        [
                                            -86.657054,
                                            39.342367
                                        ],
                                        [
                                            -86.659137,
                                            39.344337
                                        ],
                                        [
                                            -86.658911,
                                            39.347252
                                        ],
                                        [
                                            -86.658398,
                                            39.350284
                                        ],
                                        [
                                            -86.655002,
                                            39.351893
                                        ],
                                        [
                                            -86.653425,
                                            39.354339
                                        ],
                                        [
                                            -86.651551,
                                            39.355593
                                        ],
                                        [
                                            -86.649524,
                                            39.355519
                                        ],
                                        [
                                            -86.642856,
                                            39.351024
                                        ],
                                        [
                                            -86.641658,
                                            39.3506
                                        ],
                                        [
                                            -86.640379,
                                            39.348273
                                        ],
                                        [
                                            -86.637787,
                                            39.34831
                                        ],
                                        [
                                            -86.636286,
                                            39.347656
                                        ],
                                        [
                                            -86.634809,
                                            39.348738
                                        ],
                                        [
                                            -86.633319,
                                            39.348523
                                        ],
                                        [
                                            -86.630818,
                                            39.346948
                                        ],
                                        [
                                            -86.630844,
                                            39.340755
                                        ],
                                        [
                                            -86.607185,
                                            39.340134
                                        ],
                                        [
                                            -86.57428,
                                            39.339681
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.59266,
                                            39.251817
                                        ],
                                        [
                                            -86.622115,
                                            39.252088
                                        ],
                                        [
                                            -86.624996,
                                            39.252429
                                        ],
                                        [
                                            -86.639365,
                                            39.252357
                                        ],
                                        [
                                            -86.64083,
                                            39.252257
                                        ],
                                        [
                                            -86.653354,
                                            39.252366
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.656639,
                                            39.252374
                                        ],
                                        [
                                            -86.658064,
                                            39.252386
                                        ],
                                        [
                                            -86.659167,
                                            39.25239
                                        ],
                                        [
                                            -86.659145,
                                            39.251345
                                        ],
                                        [
                                            -86.659029,
                                            39.245663
                                        ],
                                        [
                                            -86.658727,
                                            39.216872
                                        ],
                                        [
                                            -86.658617,
                                            39.216893
                                        ],
                                        [
                                            -86.630409,
                                            39.216505
                                        ],
                                        [
                                            -86.630405,
                                            39.215215
                                        ],
                                        [
                                            -86.623826,
                                            39.211969
                                        ],
                                        [
                                            -86.620843,
                                            39.211232
                                        ],
                                        [
                                            -86.620813,
                                            39.211224
                                        ],
                                        [
                                            -86.61922,
                                            39.210739
                                        ],
                                        [
                                            -86.616025,
                                            39.210291
                                        ],
                                        [
                                            -86.614176,
                                            39.209813
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.611193,
                                            39.208568
                                        ],
                                        [
                                            -86.608244,
                                            39.208217
                                        ],
                                        [
                                            -86.605835,
                                            39.208088
                                        ],
                                        [
                                            -86.604088,
                                            39.204449
                                        ],
                                        [
                                            -86.602075,
                                            39.201634
                                        ],
                                        [
                                            -86.598881,
                                            39.198124
                                        ],
                                        [
                                            -86.596401,
                                            39.196202
                                        ],
                                        [
                                            -86.593583,
                                            39.195478
                                        ],
                                        [
                                            -86.590989,
                                            39.193742
                                        ],
                                        [
                                            -86.585878,
                                            39.192293
                                        ],
                                        [
                                            -86.583111,
                                            39.190635
                                        ],
                                        [
                                            -86.582062,
                                            39.190009
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.569328,
                                            39.182965
                                        ],
                                        [
                                            -86.563968,
                                            39.179243
                                        ],
                                        [
                                            -86.561421,
                                            39.178051
                                        ],
                                        [
                                            -86.561731,
                                            39.177649
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.570253,
                                            39.171007
                                        ],
                                        [
                                            -86.5719,
                                            39.169372
                                        ],
                                        [
                                            -86.572811,
                                            39.167861
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.573543,
                                            39.164567
                                        ],
                                        [
                                            -86.582927,
                                            39.164652
                                        ],
                                        [
                                            -86.585873,
                                            39.164666
                                        ],
                                        [
                                            -86.588435,
                                            39.164688
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.620216,
                                            39.165043
                                        ],
                                        [
                                            -86.629145,
                                            39.165049
                                        ],
                                        [
                                            -86.683002,
                                            39.165746
                                        ],
                                        [
                                            -86.683274,
                                            39.177902
                                        ],
                                        [
                                            -86.683263,
                                            39.177993
                                        ],
                                        [
                                            -86.683813,
                                            39.222123
                                        ],
                                        [
                                            -86.684315,
                                            39.252588
                                        ],
                                        [
                                            -86.68477,
                                            39.281489
                                        ],
                                        [
                                            -86.68561,
                                            39.336043
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001301",
                                "AFFGEOID": "1400000US18105001301",
                                "GEOID": "18105001301",
                                "NAME": "13.01",
                                "LSAD": "CT",
                                "ALAND": 149886097,
                                "AWATER": 28679,
                                "POPULATION": 5934,
                                "CLAIMANTS": 90,
                                "PERCENTAGEVAL": 152,
                                "PERCENTAGE": 1.52,
                                "MEDIAN_HOUSEHOLD": 56964,
                                "MEDIAN_HOME": 66827,
                                "MEDIAN_FAMILY": 141100
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.68561,
                                            39.336043
                                        ],
                                        [
                                            -86.682041,
                                            39.335472
                                        ],
                                        [
                                            -86.678254,
                                            39.333096
                                        ],
                                        [
                                            -86.675118,
                                            39.331755
                                        ],
                                        [
                                            -86.672034,
                                            39.331699
                                        ],
                                        [
                                            -86.667675,
                                            39.329482
                                        ],
                                        [
                                            -86.666329,
                                            39.329145
                                        ],
                                        [
                                            -86.665512,
                                            39.329286
                                        ],
                                        [
                                            -86.665847,
                                            39.331665
                                        ],
                                        [
                                            -86.66453,
                                            39.333771
                                        ],
                                        [
                                            -86.662976,
                                            39.334242
                                        ],
                                        [
                                            -86.660614,
                                            39.332871
                                        ],
                                        [
                                            -86.659848,
                                            39.330855
                                        ],
                                        [
                                            -86.658776,
                                            39.330099
                                        ],
                                        [
                                            -86.65638,
                                            39.330646
                                        ],
                                        [
                                            -86.655507,
                                            39.331476
                                        ],
                                        [
                                            -86.655062,
                                            39.333791
                                        ],
                                        [
                                            -86.656012,
                                            39.338673
                                        ],
                                        [
                                            -86.655335,
                                            39.339998
                                        ],
                                        [
                                            -86.657054,
                                            39.342367
                                        ],
                                        [
                                            -86.659137,
                                            39.344337
                                        ],
                                        [
                                            -86.658911,
                                            39.347252
                                        ],
                                        [
                                            -86.658398,
                                            39.350284
                                        ],
                                        [
                                            -86.655002,
                                            39.351893
                                        ],
                                        [
                                            -86.653425,
                                            39.354339
                                        ],
                                        [
                                            -86.651551,
                                            39.355593
                                        ],
                                        [
                                            -86.649524,
                                            39.355519
                                        ],
                                        [
                                            -86.642856,
                                            39.351024
                                        ],
                                        [
                                            -86.641658,
                                            39.3506
                                        ],
                                        [
                                            -86.640379,
                                            39.348273
                                        ],
                                        [
                                            -86.637787,
                                            39.34831
                                        ],
                                        [
                                            -86.636286,
                                            39.347656
                                        ],
                                        [
                                            -86.634809,
                                            39.348738
                                        ],
                                        [
                                            -86.633319,
                                            39.348523
                                        ],
                                        [
                                            -86.630818,
                                            39.346948
                                        ],
                                        [
                                            -86.630844,
                                            39.340755
                                        ],
                                        [
                                            -86.607185,
                                            39.340134
                                        ],
                                        [
                                            -86.57428,
                                            39.339681
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.59266,
                                            39.251817
                                        ],
                                        [
                                            -86.622115,
                                            39.252088
                                        ],
                                        [
                                            -86.624996,
                                            39.252429
                                        ],
                                        [
                                            -86.639365,
                                            39.252357
                                        ],
                                        [
                                            -86.64083,
                                            39.252257
                                        ],
                                        [
                                            -86.653354,
                                            39.252366
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.656639,
                                            39.252374
                                        ],
                                        [
                                            -86.658064,
                                            39.252386
                                        ],
                                        [
                                            -86.659167,
                                            39.25239
                                        ],
                                        [
                                            -86.659145,
                                            39.251345
                                        ],
                                        [
                                            -86.659029,
                                            39.245663
                                        ],
                                        [
                                            -86.658727,
                                            39.216872
                                        ],
                                        [
                                            -86.658617,
                                            39.216893
                                        ],
                                        [
                                            -86.630409,
                                            39.216505
                                        ],
                                        [
                                            -86.630405,
                                            39.215215
                                        ],
                                        [
                                            -86.623826,
                                            39.211969
                                        ],
                                        [
                                            -86.620843,
                                            39.211232
                                        ],
                                        [
                                            -86.620813,
                                            39.211224
                                        ],
                                        [
                                            -86.61922,
                                            39.210739
                                        ],
                                        [
                                            -86.616025,
                                            39.210291
                                        ],
                                        [
                                            -86.614176,
                                            39.209813
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.611193,
                                            39.208568
                                        ],
                                        [
                                            -86.608244,
                                            39.208217
                                        ],
                                        [
                                            -86.605835,
                                            39.208088
                                        ],
                                        [
                                            -86.604088,
                                            39.204449
                                        ],
                                        [
                                            -86.602075,
                                            39.201634
                                        ],
                                        [
                                            -86.598881,
                                            39.198124
                                        ],
                                        [
                                            -86.596401,
                                            39.196202
                                        ],
                                        [
                                            -86.593583,
                                            39.195478
                                        ],
                                        [
                                            -86.590989,
                                            39.193742
                                        ],
                                        [
                                            -86.585878,
                                            39.192293
                                        ],
                                        [
                                            -86.583111,
                                            39.190635
                                        ],
                                        [
                                            -86.582062,
                                            39.190009
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.569328,
                                            39.182965
                                        ],
                                        [
                                            -86.563968,
                                            39.179243
                                        ],
                                        [
                                            -86.561421,
                                            39.178051
                                        ],
                                        [
                                            -86.561731,
                                            39.177649
                                        ],
                                        [
                                            -86.562398,
                                            39.176546
                                        ],
                                        [
                                            -86.570253,
                                            39.171007
                                        ],
                                        [
                                            -86.5719,
                                            39.169372
                                        ],
                                        [
                                            -86.572811,
                                            39.167861
                                        ],
                                        [
                                            -86.573281,
                                            39.164567
                                        ],
                                        [
                                            -86.573543,
                                            39.164567
                                        ],
                                        [
                                            -86.582927,
                                            39.164652
                                        ],
                                        [
                                            -86.585873,
                                            39.164666
                                        ],
                                        [
                                            -86.588435,
                                            39.164688
                                        ],
                                        [
                                            -86.610547,
                                            39.164909
                                        ],
                                        [
                                            -86.620216,
                                            39.165043
                                        ],
                                        [
                                            -86.629145,
                                            39.165049
                                        ],
                                        [
                                            -86.683002,
                                            39.165746
                                        ],
                                        [
                                            -86.683274,
                                            39.177902
                                        ],
                                        [
                                            -86.683263,
                                            39.177993
                                        ],
                                        [
                                            -86.683813,
                                            39.222123
                                        ],
                                        [
                                            -86.684315,
                                            39.252588
                                        ],
                                        [
                                            -86.68477,
                                            39.281489
                                        ],
                                        [
                                            -86.68561,
                                            39.336043
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001303",
                                "AFFGEOID": "1400000US18105001303",
                                "GEOID": "18105001303",
                                "NAME": "13.03",
                                "LSAD": "CT",
                                "ALAND": 18520188,
                                "AWATER": 0,
                                "POPULATION": 6102,
                                "CLAIMANTS": 72,
                                "PERCENTAGEVAL": 118,
                                "PERCENTAGE": 1.18,
                                "MEDIAN_HOUSEHOLD": 72473,
                                "MEDIAN_HOME": 87833,
                                "MEDIAN_FAMILY": 171700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.653354,
                                            39.252366
                                        ],
                                        [
                                            -86.64083,
                                            39.252257
                                        ],
                                        [
                                            -86.639365,
                                            39.252357
                                        ],
                                        [
                                            -86.624996,
                                            39.252429
                                        ],
                                        [
                                            -86.622115,
                                            39.252088
                                        ],
                                        [
                                            -86.59266,
                                            39.251817
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.579931,
                                            39.207772
                                        ],
                                        [
                                            -86.583045,
                                            39.210114
                                        ],
                                        [
                                            -86.5841,
                                            39.21056
                                        ],
                                        [
                                            -86.584434,
                                            39.210753
                                        ],
                                        [
                                            -86.584937,
                                            39.210995
                                        ],
                                        [
                                            -86.585636,
                                            39.211299
                                        ],
                                        [
                                            -86.586223,
                                            39.211505
                                        ],
                                        [
                                            -86.586064,
                                            39.211764
                                        ],
                                        [
                                            -86.589791,
                                            39.213007
                                        ],
                                        [
                                            -86.592678,
                                            39.215133
                                        ],
                                        [
                                            -86.593842,
                                            39.215871
                                        ],
                                        [
                                            -86.594496,
                                            39.216119
                                        ],
                                        [
                                            -86.595834,
                                            39.216488
                                        ],
                                        [
                                            -86.596922,
                                            39.21672
                                        ],
                                        [
                                            -86.598291,
                                            39.217116
                                        ],
                                        [
                                            -86.598981,
                                            39.217384
                                        ],
                                        [
                                            -86.599467,
                                            39.217602
                                        ],
                                        [
                                            -86.608658,
                                            39.22292
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.624744,
                                            39.233758
                                        ],
                                        [
                                            -86.628461,
                                            39.2364
                                        ],
                                        [
                                            -86.632048,
                                            39.241021
                                        ],
                                        [
                                            -86.635092,
                                            39.244981
                                        ],
                                        [
                                            -86.63639,
                                            39.245643
                                        ],
                                        [
                                            -86.637192,
                                            39.245787
                                        ],
                                        [
                                            -86.640902,
                                            39.245906
                                        ],
                                        [
                                            -86.643758,
                                            39.246169
                                        ],
                                        [
                                            -86.652542,
                                            39.250753
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.653354,
                                            39.252366
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001303",
                                "AFFGEOID": "1400000US18105001303",
                                "GEOID": "18105001303",
                                "NAME": "13.03",
                                "LSAD": "CT",
                                "ALAND": 18520188,
                                "AWATER": 0,
                                "POPULATION": 6102,
                                "CLAIMANTS": 72,
                                "PERCENTAGEVAL": 118,
                                "PERCENTAGE": 1.18,
                                "MEDIAN_HOUSEHOLD": 72473,
                                "MEDIAN_HOME": 87833,
                                "MEDIAN_FAMILY": 171700
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.653354,
                                            39.252366
                                        ],
                                        [
                                            -86.64083,
                                            39.252257
                                        ],
                                        [
                                            -86.639365,
                                            39.252357
                                        ],
                                        [
                                            -86.624996,
                                            39.252429
                                        ],
                                        [
                                            -86.622115,
                                            39.252088
                                        ],
                                        [
                                            -86.59266,
                                            39.251817
                                        ],
                                        [
                                            -86.573885,
                                            39.251688
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.579931,
                                            39.207772
                                        ],
                                        [
                                            -86.583045,
                                            39.210114
                                        ],
                                        [
                                            -86.5841,
                                            39.21056
                                        ],
                                        [
                                            -86.584434,
                                            39.210753
                                        ],
                                        [
                                            -86.584937,
                                            39.210995
                                        ],
                                        [
                                            -86.585636,
                                            39.211299
                                        ],
                                        [
                                            -86.586223,
                                            39.211505
                                        ],
                                        [
                                            -86.586064,
                                            39.211764
                                        ],
                                        [
                                            -86.589791,
                                            39.213007
                                        ],
                                        [
                                            -86.592678,
                                            39.215133
                                        ],
                                        [
                                            -86.593842,
                                            39.215871
                                        ],
                                        [
                                            -86.594496,
                                            39.216119
                                        ],
                                        [
                                            -86.595834,
                                            39.216488
                                        ],
                                        [
                                            -86.596922,
                                            39.21672
                                        ],
                                        [
                                            -86.598291,
                                            39.217116
                                        ],
                                        [
                                            -86.598981,
                                            39.217384
                                        ],
                                        [
                                            -86.599467,
                                            39.217602
                                        ],
                                        [
                                            -86.608658,
                                            39.22292
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.624744,
                                            39.233758
                                        ],
                                        [
                                            -86.628461,
                                            39.2364
                                        ],
                                        [
                                            -86.632048,
                                            39.241021
                                        ],
                                        [
                                            -86.635092,
                                            39.244981
                                        ],
                                        [
                                            -86.63639,
                                            39.245643
                                        ],
                                        [
                                            -86.637192,
                                            39.245787
                                        ],
                                        [
                                            -86.640902,
                                            39.245906
                                        ],
                                        [
                                            -86.643758,
                                            39.246169
                                        ],
                                        [
                                            -86.652542,
                                            39.250753
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.653354,
                                            39.252366
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001304",
                                "AFFGEOID": "1400000US18105001304",
                                "GEOID": "18105001304",
                                "NAME": "13.04",
                                "LSAD": "CT",
                                "ALAND": 11892886,
                                "AWATER": 0,
                                "POPULATION": 4078,
                                "CLAIMANTS": 69,
                                "PERCENTAGEVAL": 169,
                                "PERCENTAGE": 1.69,
                                "MEDIAN_HOUSEHOLD": 49744,
                                "MEDIAN_HOME": 56429,
                                "MEDIAN_FAMILY": 126000
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.659167,
                                            39.25239
                                        ],
                                        [
                                            -86.658064,
                                            39.252386
                                        ],
                                        [
                                            -86.656639,
                                            39.252374
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.652542,
                                            39.250753
                                        ],
                                        [
                                            -86.643758,
                                            39.246169
                                        ],
                                        [
                                            -86.640902,
                                            39.245906
                                        ],
                                        [
                                            -86.637192,
                                            39.245787
                                        ],
                                        [
                                            -86.63639,
                                            39.245643
                                        ],
                                        [
                                            -86.635092,
                                            39.244981
                                        ],
                                        [
                                            -86.632048,
                                            39.241021
                                        ],
                                        [
                                            -86.628461,
                                            39.2364
                                        ],
                                        [
                                            -86.624744,
                                            39.233758
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.612679,
                                            39.223222
                                        ],
                                        [
                                            -86.612155,
                                            39.220851
                                        ],
                                        [
                                            -86.611385,
                                            39.215835
                                        ],
                                        [
                                            -86.611393,
                                            39.211083
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.614176,
                                            39.209813
                                        ],
                                        [
                                            -86.616025,
                                            39.210291
                                        ],
                                        [
                                            -86.61922,
                                            39.210739
                                        ],
                                        [
                                            -86.620813,
                                            39.211224
                                        ],
                                        [
                                            -86.620843,
                                            39.211232
                                        ],
                                        [
                                            -86.623826,
                                            39.211969
                                        ],
                                        [
                                            -86.630405,
                                            39.215215
                                        ],
                                        [
                                            -86.630409,
                                            39.216505
                                        ],
                                        [
                                            -86.658617,
                                            39.216893
                                        ],
                                        [
                                            -86.658727,
                                            39.216872
                                        ],
                                        [
                                            -86.659029,
                                            39.245663
                                        ],
                                        [
                                            -86.659145,
                                            39.251345
                                        ],
                                        [
                                            -86.659167,
                                            39.25239
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001304",
                                "AFFGEOID": "1400000US18105001304",
                                "GEOID": "18105001304",
                                "NAME": "13.04",
                                "LSAD": "CT",
                                "ALAND": 11892886,
                                "AWATER": 0,
                                "POPULATION": 4078,
                                "CLAIMANTS": 69,
                                "PERCENTAGEVAL": 169,
                                "PERCENTAGE": 1.69,
                                "MEDIAN_HOUSEHOLD": 49744,
                                "MEDIAN_HOME": 56429,
                                "MEDIAN_FAMILY": 126000
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.659167,
                                            39.25239
                                        ],
                                        [
                                            -86.658064,
                                            39.252386
                                        ],
                                        [
                                            -86.656639,
                                            39.252374
                                        ],
                                        [
                                            -86.653983,
                                            39.252373
                                        ],
                                        [
                                            -86.652542,
                                            39.250753
                                        ],
                                        [
                                            -86.643758,
                                            39.246169
                                        ],
                                        [
                                            -86.640902,
                                            39.245906
                                        ],
                                        [
                                            -86.637192,
                                            39.245787
                                        ],
                                        [
                                            -86.63639,
                                            39.245643
                                        ],
                                        [
                                            -86.635092,
                                            39.244981
                                        ],
                                        [
                                            -86.632048,
                                            39.241021
                                        ],
                                        [
                                            -86.628461,
                                            39.2364
                                        ],
                                        [
                                            -86.624744,
                                            39.233758
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.612679,
                                            39.223222
                                        ],
                                        [
                                            -86.612155,
                                            39.220851
                                        ],
                                        [
                                            -86.611385,
                                            39.215835
                                        ],
                                        [
                                            -86.611393,
                                            39.211083
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.614176,
                                            39.209813
                                        ],
                                        [
                                            -86.616025,
                                            39.210291
                                        ],
                                        [
                                            -86.61922,
                                            39.210739
                                        ],
                                        [
                                            -86.620813,
                                            39.211224
                                        ],
                                        [
                                            -86.620843,
                                            39.211232
                                        ],
                                        [
                                            -86.623826,
                                            39.211969
                                        ],
                                        [
                                            -86.630405,
                                            39.215215
                                        ],
                                        [
                                            -86.630409,
                                            39.216505
                                        ],
                                        [
                                            -86.658617,
                                            39.216893
                                        ],
                                        [
                                            -86.658727,
                                            39.216872
                                        ],
                                        [
                                            -86.659029,
                                            39.245663
                                        ],
                                        [
                                            -86.659145,
                                            39.251345
                                        ],
                                        [
                                            -86.659167,
                                            39.25239
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001305",
                                "AFFGEOID": "1400000US18105001305",
                                "GEOID": "18105001305",
                                "NAME": "13.05",
                                "LSAD": "CT",
                                "ALAND": 6713353,
                                "AWATER": 0,
                                "POPULATION": 2250,
                                "CLAIMANTS": 28,
                                "PERCENTAGEVAL": 124,
                                "PERCENTAGE": 1.24,
                                "MEDIAN_HOUSEHOLD": 67557,
                                "MEDIAN_HOME": 74261,
                                "MEDIAN_FAMILY": 158900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.608658,
                                            39.22292
                                        ],
                                        [
                                            -86.599467,
                                            39.217602
                                        ],
                                        [
                                            -86.598981,
                                            39.217384
                                        ],
                                        [
                                            -86.598291,
                                            39.217116
                                        ],
                                        [
                                            -86.596922,
                                            39.21672
                                        ],
                                        [
                                            -86.595834,
                                            39.216488
                                        ],
                                        [
                                            -86.594496,
                                            39.216119
                                        ],
                                        [
                                            -86.593842,
                                            39.215871
                                        ],
                                        [
                                            -86.592678,
                                            39.215133
                                        ],
                                        [
                                            -86.589791,
                                            39.213007
                                        ],
                                        [
                                            -86.586064,
                                            39.211764
                                        ],
                                        [
                                            -86.586223,
                                            39.211505
                                        ],
                                        [
                                            -86.585636,
                                            39.211299
                                        ],
                                        [
                                            -86.584937,
                                            39.210995
                                        ],
                                        [
                                            -86.584434,
                                            39.210753
                                        ],
                                        [
                                            -86.5841,
                                            39.21056
                                        ],
                                        [
                                            -86.583045,
                                            39.210114
                                        ],
                                        [
                                            -86.579931,
                                            39.207772
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.582062,
                                            39.190009
                                        ],
                                        [
                                            -86.583111,
                                            39.190635
                                        ],
                                        [
                                            -86.585878,
                                            39.192293
                                        ],
                                        [
                                            -86.590989,
                                            39.193742
                                        ],
                                        [
                                            -86.593583,
                                            39.195478
                                        ],
                                        [
                                            -86.596401,
                                            39.196202
                                        ],
                                        [
                                            -86.598881,
                                            39.198124
                                        ],
                                        [
                                            -86.602075,
                                            39.201634
                                        ],
                                        [
                                            -86.604088,
                                            39.204449
                                        ],
                                        [
                                            -86.605835,
                                            39.208088
                                        ],
                                        [
                                            -86.608244,
                                            39.208217
                                        ],
                                        [
                                            -86.611193,
                                            39.208568
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.611393,
                                            39.211083
                                        ],
                                        [
                                            -86.611385,
                                            39.215835
                                        ],
                                        [
                                            -86.612155,
                                            39.220851
                                        ],
                                        [
                                            -86.612679,
                                            39.223222
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001305",
                                "AFFGEOID": "1400000US18105001305",
                                "GEOID": "18105001305",
                                "NAME": "13.05",
                                "LSAD": "CT",
                                "ALAND": 6713353,
                                "AWATER": 0,
                                "POPULATION": 2250,
                                "CLAIMANTS": 28,
                                "PERCENTAGEVAL": 124,
                                "PERCENTAGE": 1.24,
                                "MEDIAN_HOUSEHOLD": 67557,
                                "MEDIAN_HOME": 74261,
                                "MEDIAN_FAMILY": 158900
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.614151,
                                            39.226407
                                        ],
                                        [
                                            -86.608658,
                                            39.22292
                                        ],
                                        [
                                            -86.599467,
                                            39.217602
                                        ],
                                        [
                                            -86.598981,
                                            39.217384
                                        ],
                                        [
                                            -86.598291,
                                            39.217116
                                        ],
                                        [
                                            -86.596922,
                                            39.21672
                                        ],
                                        [
                                            -86.595834,
                                            39.216488
                                        ],
                                        [
                                            -86.594496,
                                            39.216119
                                        ],
                                        [
                                            -86.593842,
                                            39.215871
                                        ],
                                        [
                                            -86.592678,
                                            39.215133
                                        ],
                                        [
                                            -86.589791,
                                            39.213007
                                        ],
                                        [
                                            -86.586064,
                                            39.211764
                                        ],
                                        [
                                            -86.586223,
                                            39.211505
                                        ],
                                        [
                                            -86.585636,
                                            39.211299
                                        ],
                                        [
                                            -86.584937,
                                            39.210995
                                        ],
                                        [
                                            -86.584434,
                                            39.210753
                                        ],
                                        [
                                            -86.5841,
                                            39.21056
                                        ],
                                        [
                                            -86.583045,
                                            39.210114
                                        ],
                                        [
                                            -86.579931,
                                            39.207772
                                        ],
                                        [
                                            -86.573725,
                                            39.207674
                                        ],
                                        [
                                            -86.573595,
                                            39.18797
                                        ],
                                        [
                                            -86.582062,
                                            39.190009
                                        ],
                                        [
                                            -86.583111,
                                            39.190635
                                        ],
                                        [
                                            -86.585878,
                                            39.192293
                                        ],
                                        [
                                            -86.590989,
                                            39.193742
                                        ],
                                        [
                                            -86.593583,
                                            39.195478
                                        ],
                                        [
                                            -86.596401,
                                            39.196202
                                        ],
                                        [
                                            -86.598881,
                                            39.198124
                                        ],
                                        [
                                            -86.602075,
                                            39.201634
                                        ],
                                        [
                                            -86.604088,
                                            39.204449
                                        ],
                                        [
                                            -86.605835,
                                            39.208088
                                        ],
                                        [
                                            -86.608244,
                                            39.208217
                                        ],
                                        [
                                            -86.611193,
                                            39.208568
                                        ],
                                        [
                                            -86.611391,
                                            39.209078
                                        ],
                                        [
                                            -86.611393,
                                            39.211083
                                        ],
                                        [
                                            -86.611385,
                                            39.215835
                                        ],
                                        [
                                            -86.612155,
                                            39.220851
                                        ],
                                        [
                                            -86.612679,
                                            39.223222
                                        ],
                                        [
                                            -86.614151,
                                            39.226407
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001401",
                                "AFFGEOID": "1400000US18105001401",
                                "GEOID": "18105001401",
                                "NAME": "14.01",
                                "LSAD": "CT",
                                "ALAND": 88645447,
                                "AWATER": 33053,
                                "POPULATION": 2101,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 72904,
                                "MEDIAN_HOME": 91971,
                                "MEDIAN_FAMILY": 196800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.57428,
                                            39.339681
                                        ],
                                        [
                                            -86.509339,
                                            39.338799
                                        ],
                                        [
                                            -86.492904,
                                            39.338643
                                        ],
                                        [
                                            -86.473714,
                                            39.338667
                                        ],
                                        [
                                            -86.465115,
                                            39.3383
                                        ],
                                        [
                                            -86.464387,
                                            39.309291
                                        ],
                                        [
                                            -86.465042,
                                            39.294449
                                        ],
                                        [
                                            -86.463988,
                                            39.251576
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.472341,
                                            39.250926
                                        ],
                                        [
                                            -86.477166,
                                            39.251188
                                        ],
                                        [
                                            -86.497245,
                                            39.251447
                                        ],
                                        [
                                            -86.501039,
                                            39.251638
                                        ],
                                        [
                                            -86.529648,
                                            39.251352
                                        ],
                                        [
                                            -86.554859,
                                            39.251576
                                        ],
                                        [
                                            -86.553435,
                                            39.252485
                                        ],
                                        [
                                            -86.555582,
                                            39.253007
                                        ],
                                        [
                                            -86.55631,
                                            39.253919
                                        ],
                                        [
                                            -86.554706,
                                            39.255007
                                        ],
                                        [
                                            -86.557363,
                                            39.255441
                                        ],
                                        [
                                            -86.556762,
                                            39.25944
                                        ],
                                        [
                                            -86.555582,
                                            39.260072
                                        ],
                                        [
                                            -86.553257,
                                            39.25878
                                        ],
                                        [
                                            -86.552112,
                                            39.259709
                                        ],
                                        [
                                            -86.552826,
                                            39.2605
                                        ],
                                        [
                                            -86.555801,
                                            39.260994
                                        ],
                                        [
                                            -86.557729,
                                            39.262714
                                        ],
                                        [
                                            -86.557553,
                                            39.263988
                                        ],
                                        [
                                            -86.559051,
                                            39.264785
                                        ],
                                        [
                                            -86.557072,
                                            39.266625
                                        ],
                                        [
                                            -86.557404,
                                            39.268536
                                        ],
                                        [
                                            -86.560499,
                                            39.268438
                                        ],
                                        [
                                            -86.562852,
                                            39.267465
                                        ],
                                        [
                                            -86.562859,
                                            39.266026
                                        ],
                                        [
                                            -86.56435,
                                            39.266669
                                        ],
                                        [
                                            -86.564669,
                                            39.26869
                                        ],
                                        [
                                            -86.563517,
                                            39.26958
                                        ],
                                        [
                                            -86.565057,
                                            39.269734
                                        ],
                                        [
                                            -86.565707,
                                            39.267509
                                        ],
                                        [
                                            -86.566718,
                                            39.266614
                                        ],
                                        [
                                            -86.569212,
                                            39.266279
                                        ],
                                        [
                                            -86.568584,
                                            39.270635
                                        ],
                                        [
                                            -86.567177,
                                            39.272151
                                        ],
                                        [
                                            -86.567644,
                                            39.275315
                                        ],
                                        [
                                            -86.56934,
                                            39.274277
                                        ],
                                        [
                                            -86.571475,
                                            39.27671
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.57428,
                                            39.339681
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001401",
                                "AFFGEOID": "1400000US18105001401",
                                "GEOID": "18105001401",
                                "NAME": "14.01",
                                "LSAD": "CT",
                                "ALAND": 88645447,
                                "AWATER": 33053,
                                "POPULATION": 2101,
                                "CLAIMANTS": 0,
                                "PERCENTAGEVAL": 0,
                                "PERCENTAGE": 0.0,
                                "MEDIAN_HOUSEHOLD": 72904,
                                "MEDIAN_HOME": 91971,
                                "MEDIAN_FAMILY": 196800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.57428,
                                            39.339681
                                        ],
                                        [
                                            -86.509339,
                                            39.338799
                                        ],
                                        [
                                            -86.492904,
                                            39.338643
                                        ],
                                        [
                                            -86.473714,
                                            39.338667
                                        ],
                                        [
                                            -86.465115,
                                            39.3383
                                        ],
                                        [
                                            -86.464387,
                                            39.309291
                                        ],
                                        [
                                            -86.465042,
                                            39.294449
                                        ],
                                        [
                                            -86.463988,
                                            39.251576
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.472341,
                                            39.250926
                                        ],
                                        [
                                            -86.477166,
                                            39.251188
                                        ],
                                        [
                                            -86.497245,
                                            39.251447
                                        ],
                                        [
                                            -86.501039,
                                            39.251638
                                        ],
                                        [
                                            -86.529648,
                                            39.251352
                                        ],
                                        [
                                            -86.554859,
                                            39.251576
                                        ],
                                        [
                                            -86.553435,
                                            39.252485
                                        ],
                                        [
                                            -86.555582,
                                            39.253007
                                        ],
                                        [
                                            -86.55631,
                                            39.253919
                                        ],
                                        [
                                            -86.554706,
                                            39.255007
                                        ],
                                        [
                                            -86.557363,
                                            39.255441
                                        ],
                                        [
                                            -86.556762,
                                            39.25944
                                        ],
                                        [
                                            -86.555582,
                                            39.260072
                                        ],
                                        [
                                            -86.553257,
                                            39.25878
                                        ],
                                        [
                                            -86.552112,
                                            39.259709
                                        ],
                                        [
                                            -86.552826,
                                            39.2605
                                        ],
                                        [
                                            -86.555801,
                                            39.260994
                                        ],
                                        [
                                            -86.557729,
                                            39.262714
                                        ],
                                        [
                                            -86.557553,
                                            39.263988
                                        ],
                                        [
                                            -86.559051,
                                            39.264785
                                        ],
                                        [
                                            -86.557072,
                                            39.266625
                                        ],
                                        [
                                            -86.557404,
                                            39.268536
                                        ],
                                        [
                                            -86.560499,
                                            39.268438
                                        ],
                                        [
                                            -86.562852,
                                            39.267465
                                        ],
                                        [
                                            -86.562859,
                                            39.266026
                                        ],
                                        [
                                            -86.56435,
                                            39.266669
                                        ],
                                        [
                                            -86.564669,
                                            39.26869
                                        ],
                                        [
                                            -86.563517,
                                            39.26958
                                        ],
                                        [
                                            -86.565057,
                                            39.269734
                                        ],
                                        [
                                            -86.565707,
                                            39.267509
                                        ],
                                        [
                                            -86.566718,
                                            39.266614
                                        ],
                                        [
                                            -86.569212,
                                            39.266279
                                        ],
                                        [
                                            -86.568584,
                                            39.270635
                                        ],
                                        [
                                            -86.567177,
                                            39.272151
                                        ],
                                        [
                                            -86.567644,
                                            39.275315
                                        ],
                                        [
                                            -86.56934,
                                            39.274277
                                        ],
                                        [
                                            -86.571475,
                                            39.27671
                                        ],
                                        [
                                            -86.574114,
                                            39.275828
                                        ],
                                        [
                                            -86.57428,
                                            39.339681
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001402",
                                "AFFGEOID": "1400000US18105001402",
                                "GEOID": "18105001402",
                                "NAME": "14.02",
                                "LSAD": "CT",
                                "ALAND": 300180461,
                                "AWATER": 29703275,
                                "POPULATION": 5757,
                                "CLAIMANTS": 93,
                                "PERCENTAGEVAL": 162,
                                "PERCENTAGE": 1.62,
                                "MEDIAN_HOUSEHOLD": 59492,
                                "MEDIAN_HOME": 69875,
                                "MEDIAN_FAMILY": 204800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.475579,
                                            39.033815
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.475,
                                            39.037992
                                        ],
                                        [
                                            -86.472374,
                                            39.043134
                                        ],
                                        [
                                            -86.465955,
                                            39.046682
                                        ],
                                        [
                                            -86.463551,
                                            39.046386
                                        ],
                                        [
                                            -86.461809,
                                            39.048959
                                        ],
                                        [
                                            -86.45695,
                                            39.052625
                                        ],
                                        [
                                            -86.454231,
                                            39.056185
                                        ],
                                        [
                                            -86.452049,
                                            39.061655
                                        ],
                                        [
                                            -86.451463,
                                            39.070917
                                        ],
                                        [
                                            -86.449948,
                                            39.078179
                                        ],
                                        [
                                            -86.450855,
                                            39.078168
                                        ],
                                        [
                                            -86.456604,
                                            39.087692
                                        ],
                                        [
                                            -86.456988,
                                            39.088191
                                        ],
                                        [
                                            -86.461695,
                                            39.094312
                                        ],
                                        [
                                            -86.461831,
                                            39.10233
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.462469,
                                            39.164629
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.462778,
                                            39.185898
                                        ],
                                        [
                                            -86.463617,
                                            39.185834
                                        ],
                                        [
                                            -86.466994,
                                            39.18585
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.468028,
                                            39.186961
                                        ],
                                        [
                                            -86.468182,
                                            39.192065
                                        ],
                                        [
                                            -86.467777,
                                            39.193108
                                        ],
                                        [
                                            -86.467689,
                                            39.200922
                                        ],
                                        [
                                            -86.466624,
                                            39.202583
                                        ],
                                        [
                                            -86.463341,
                                            39.204103
                                        ],
                                        [
                                            -86.46329,
                                            39.205261
                                        ],
                                        [
                                            -86.463268,
                                            39.210031
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.46416,
                                            39.24928
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.463988,
                                            39.251576
                                        ],
                                        [
                                            -86.465042,
                                            39.294449
                                        ],
                                        [
                                            -86.464387,
                                            39.309291
                                        ],
                                        [
                                            -86.465115,
                                            39.3383
                                        ],
                                        [
                                            -86.422799,
                                            39.339043
                                        ],
                                        [
                                            -86.381395,
                                            39.339752
                                        ],
                                        [
                                            -86.379937,
                                            39.25108
                                        ],
                                        [
                                            -86.372408,
                                            39.250905
                                        ],
                                        [
                                            -86.372193,
                                            39.238083
                                        ],
                                        [
                                            -86.371993,
                                            39.223556
                                        ],
                                        [
                                            -86.370392,
                                            39.178648
                                        ],
                                        [
                                            -86.370292,
                                            39.165448
                                        ],
                                        [
                                            -86.370192,
                                            39.15265
                                        ],
                                        [
                                            -86.369693,
                                            39.143761
                                        ],
                                        [
                                            -86.36911,
                                            39.089643
                                        ],
                                        [
                                            -86.369456,
                                            39.081152
                                        ],
                                        [
                                            -86.369168,
                                            39.076826
                                        ],
                                        [
                                            -86.369211,
                                            39.061733
                                        ],
                                        [
                                            -86.370066,
                                            39.048375
                                        ],
                                        [
                                            -86.350756,
                                            39.048687
                                        ],
                                        [
                                            -86.336993,
                                            39.048947
                                        ],
                                        [
                                            -86.318133,
                                            39.04881
                                        ],
                                        [
                                            -86.317799,
                                            39.002733
                                        ],
                                        [
                                            -86.31738,
                                            39.00005
                                        ],
                                        [
                                            -86.317474,
                                            38.99087
                                        ],
                                        [
                                            -86.367515,
                                            38.990875
                                        ],
                                        [
                                            -86.37499,
                                            38.990699
                                        ],
                                        [
                                            -86.448829,
                                            38.991515
                                        ],
                                        [
                                            -86.448103,
                                            38.992665
                                        ],
                                        [
                                            -86.449181,
                                            38.995251
                                        ],
                                        [
                                            -86.449594,
                                            38.998549
                                        ],
                                        [
                                            -86.453599,
                                            38.998802
                                        ],
                                        [
                                            -86.454765,
                                            38.99952
                                        ],
                                        [
                                            -86.459605,
                                            39.000271
                                        ],
                                        [
                                            -86.461596,
                                            39.001093
                                        ],
                                        [
                                            -86.463962,
                                            39.002846
                                        ],
                                        [
                                            -86.466308,
                                            39.003957
                                        ],
                                        [
                                            -86.469657,
                                            39.007351
                                        ],
                                        [
                                            -86.471143,
                                            39.011667
                                        ],
                                        [
                                            -86.471697,
                                            39.014439
                                        ],
                                        [
                                            -86.471396,
                                            39.016051
                                        ],
                                        [
                                            -86.468803,
                                            39.017875
                                        ],
                                        [
                                            -86.468212,
                                            39.020064
                                        ],
                                        [
                                            -86.46912,
                                            39.029352
                                        ],
                                        [
                                            -86.474392,
                                            39.031255
                                        ],
                                        [
                                            -86.475384,
                                            39.032232
                                        ],
                                        [
                                            -86.475579,
                                            39.033815
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001402",
                                "AFFGEOID": "1400000US18105001402",
                                "GEOID": "18105001402",
                                "NAME": "14.02",
                                "LSAD": "CT",
                                "ALAND": 300180461,
                                "AWATER": 29703275,
                                "POPULATION": 5757,
                                "CLAIMANTS": 93,
                                "PERCENTAGEVAL": 162,
                                "PERCENTAGE": 1.62,
                                "MEDIAN_HOUSEHOLD": 59492,
                                "MEDIAN_HOME": 69875,
                                "MEDIAN_FAMILY": 204800
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.475579,
                                            39.033815
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.475,
                                            39.037992
                                        ],
                                        [
                                            -86.472374,
                                            39.043134
                                        ],
                                        [
                                            -86.465955,
                                            39.046682
                                        ],
                                        [
                                            -86.463551,
                                            39.046386
                                        ],
                                        [
                                            -86.461809,
                                            39.048959
                                        ],
                                        [
                                            -86.45695,
                                            39.052625
                                        ],
                                        [
                                            -86.454231,
                                            39.056185
                                        ],
                                        [
                                            -86.452049,
                                            39.061655
                                        ],
                                        [
                                            -86.451463,
                                            39.070917
                                        ],
                                        [
                                            -86.449948,
                                            39.078179
                                        ],
                                        [
                                            -86.450855,
                                            39.078168
                                        ],
                                        [
                                            -86.456604,
                                            39.087692
                                        ],
                                        [
                                            -86.456988,
                                            39.088191
                                        ],
                                        [
                                            -86.461695,
                                            39.094312
                                        ],
                                        [
                                            -86.461831,
                                            39.10233
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.462197,
                                            39.149039
                                        ],
                                        [
                                            -86.462469,
                                            39.164629
                                        ],
                                        [
                                            -86.462596,
                                            39.166586
                                        ],
                                        [
                                            -86.462778,
                                            39.185898
                                        ],
                                        [
                                            -86.463617,
                                            39.185834
                                        ],
                                        [
                                            -86.466994,
                                            39.18585
                                        ],
                                        [
                                            -86.468869,
                                            39.18552
                                        ],
                                        [
                                            -86.468028,
                                            39.186961
                                        ],
                                        [
                                            -86.468182,
                                            39.192065
                                        ],
                                        [
                                            -86.467777,
                                            39.193108
                                        ],
                                        [
                                            -86.467689,
                                            39.200922
                                        ],
                                        [
                                            -86.466624,
                                            39.202583
                                        ],
                                        [
                                            -86.463341,
                                            39.204103
                                        ],
                                        [
                                            -86.46329,
                                            39.205261
                                        ],
                                        [
                                            -86.463268,
                                            39.210031
                                        ],
                                        [
                                            -86.463525,
                                            39.212728
                                        ],
                                        [
                                            -86.46416,
                                            39.24928
                                        ],
                                        [
                                            -86.464045,
                                            39.250903
                                        ],
                                        [
                                            -86.463988,
                                            39.251576
                                        ],
                                        [
                                            -86.465042,
                                            39.294449
                                        ],
                                        [
                                            -86.464387,
                                            39.309291
                                        ],
                                        [
                                            -86.465115,
                                            39.3383
                                        ],
                                        [
                                            -86.422799,
                                            39.339043
                                        ],
                                        [
                                            -86.381395,
                                            39.339752
                                        ],
                                        [
                                            -86.379937,
                                            39.25108
                                        ],
                                        [
                                            -86.372408,
                                            39.250905
                                        ],
                                        [
                                            -86.372193,
                                            39.238083
                                        ],
                                        [
                                            -86.371993,
                                            39.223556
                                        ],
                                        [
                                            -86.370392,
                                            39.178648
                                        ],
                                        [
                                            -86.370292,
                                            39.165448
                                        ],
                                        [
                                            -86.370192,
                                            39.15265
                                        ],
                                        [
                                            -86.369693,
                                            39.143761
                                        ],
                                        [
                                            -86.36911,
                                            39.089643
                                        ],
                                        [
                                            -86.369456,
                                            39.081152
                                        ],
                                        [
                                            -86.369168,
                                            39.076826
                                        ],
                                        [
                                            -86.369211,
                                            39.061733
                                        ],
                                        [
                                            -86.370066,
                                            39.048375
                                        ],
                                        [
                                            -86.350756,
                                            39.048687
                                        ],
                                        [
                                            -86.336993,
                                            39.048947
                                        ],
                                        [
                                            -86.318133,
                                            39.04881
                                        ],
                                        [
                                            -86.317799,
                                            39.002733
                                        ],
                                        [
                                            -86.31738,
                                            39.00005
                                        ],
                                        [
                                            -86.317474,
                                            38.99087
                                        ],
                                        [
                                            -86.367515,
                                            38.990875
                                        ],
                                        [
                                            -86.37499,
                                            38.990699
                                        ],
                                        [
                                            -86.448829,
                                            38.991515
                                        ],
                                        [
                                            -86.448103,
                                            38.992665
                                        ],
                                        [
                                            -86.449181,
                                            38.995251
                                        ],
                                        [
                                            -86.449594,
                                            38.998549
                                        ],
                                        [
                                            -86.453599,
                                            38.998802
                                        ],
                                        [
                                            -86.454765,
                                            38.99952
                                        ],
                                        [
                                            -86.459605,
                                            39.000271
                                        ],
                                        [
                                            -86.461596,
                                            39.001093
                                        ],
                                        [
                                            -86.463962,
                                            39.002846
                                        ],
                                        [
                                            -86.466308,
                                            39.003957
                                        ],
                                        [
                                            -86.469657,
                                            39.007351
                                        ],
                                        [
                                            -86.471143,
                                            39.011667
                                        ],
                                        [
                                            -86.471697,
                                            39.014439
                                        ],
                                        [
                                            -86.471396,
                                            39.016051
                                        ],
                                        [
                                            -86.468803,
                                            39.017875
                                        ],
                                        [
                                            -86.468212,
                                            39.020064
                                        ],
                                        [
                                            -86.46912,
                                            39.029352
                                        ],
                                        [
                                            -86.474392,
                                            39.031255
                                        ],
                                        [
                                            -86.475384,
                                            39.032232
                                        ],
                                        [
                                            -86.475579,
                                            39.033815
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001501",
                                "AFFGEOID": "1400000US18105001501",
                                "GEOID": "18105001501",
                                "NAME": "15.01",
                                "LSAD": "CT",
                                "ALAND": 59090524,
                                "AWATER": 3846998,
                                "POPULATION": 5658,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 140,
                                "PERCENTAGE": 1.4,
                                "MEDIAN_HOUSEHOLD": 83411,
                                "MEDIAN_HOME": 92778,
                                "MEDIAN_FAMILY": 199300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.544167,
                                            39.092981
                                        ],
                                        [
                                            -86.542172,
                                            39.096055
                                        ],
                                        [
                                            -86.537934,
                                            39.099257
                                        ],
                                        [
                                            -86.532533,
                                            39.104312
                                        ],
                                        [
                                            -86.5315,
                                            39.107233
                                        ],
                                        [
                                            -86.526495,
                                            39.107188
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.522043,
                                            39.121447
                                        ],
                                        [
                                            -86.513611,
                                            39.121454
                                        ],
                                        [
                                            -86.511579,
                                            39.121443
                                        ],
                                        [
                                            -86.510155,
                                            39.121401
                                        ],
                                        [
                                            -86.509166,
                                            39.12145
                                        ],
                                        [
                                            -86.4896,
                                            39.121361
                                        ],
                                        [
                                            -86.485016,
                                            39.120619
                                        ],
                                        [
                                            -86.481177,
                                            39.119469
                                        ],
                                        [
                                            -86.476876,
                                            39.117088
                                        ],
                                        [
                                            -86.475127,
                                            39.115567
                                        ],
                                        [
                                            -86.4711,
                                            39.115029
                                        ],
                                        [
                                            -86.467111,
                                            39.113805
                                        ],
                                        [
                                            -86.4647,
                                            39.111198
                                        ],
                                        [
                                            -86.463302,
                                            39.108474
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.461831,
                                            39.10233
                                        ],
                                        [
                                            -86.461695,
                                            39.094312
                                        ],
                                        [
                                            -86.456988,
                                            39.088191
                                        ],
                                        [
                                            -86.456604,
                                            39.087692
                                        ],
                                        [
                                            -86.450855,
                                            39.078168
                                        ],
                                        [
                                            -86.449948,
                                            39.078179
                                        ],
                                        [
                                            -86.451463,
                                            39.070917
                                        ],
                                        [
                                            -86.452049,
                                            39.061655
                                        ],
                                        [
                                            -86.454231,
                                            39.056185
                                        ],
                                        [
                                            -86.45695,
                                            39.052625
                                        ],
                                        [
                                            -86.461809,
                                            39.048959
                                        ],
                                        [
                                            -86.463551,
                                            39.046386
                                        ],
                                        [
                                            -86.465955,
                                            39.046682
                                        ],
                                        [
                                            -86.472374,
                                            39.043134
                                        ],
                                        [
                                            -86.475,
                                            39.037992
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.480481,
                                            39.043687
                                        ],
                                        [
                                            -86.481017,
                                            39.045171
                                        ],
                                        [
                                            -86.482928,
                                            39.045954
                                        ],
                                        [
                                            -86.49053,
                                            39.045851
                                        ],
                                        [
                                            -86.491694,
                                            39.042643
                                        ],
                                        [
                                            -86.492108,
                                            39.038541
                                        ],
                                        [
                                            -86.490471,
                                            39.034792
                                        ],
                                        [
                                            -86.490093,
                                            39.032479
                                        ],
                                        [
                                            -86.494219,
                                            39.032286
                                        ],
                                        [
                                            -86.496038,
                                            39.032039
                                        ],
                                        [
                                            -86.497505,
                                            39.032085
                                        ],
                                        [
                                            -86.498318,
                                            39.03234
                                        ],
                                        [
                                            -86.500089,
                                            39.033859
                                        ],
                                        [
                                            -86.50223,
                                            39.034853
                                        ],
                                        [
                                            -86.51688,
                                            39.034921
                                        ],
                                        [
                                            -86.519935,
                                            39.034784
                                        ],
                                        [
                                            -86.520447,
                                            39.034391
                                        ],
                                        [
                                            -86.521487,
                                            39.02811
                                        ],
                                        [
                                            -86.52217,
                                            39.019039
                                        ],
                                        [
                                            -86.522869,
                                            39.018511
                                        ],
                                        [
                                            -86.524587,
                                            39.020488
                                        ],
                                        [
                                            -86.525828,
                                            39.021111
                                        ],
                                        [
                                            -86.527333,
                                            39.0214
                                        ],
                                        [
                                            -86.530694,
                                            39.021224
                                        ],
                                        [
                                            -86.534932,
                                            39.019023
                                        ],
                                        [
                                            -86.536622,
                                            39.020202
                                        ],
                                        [
                                            -86.536593,
                                            39.020307
                                        ],
                                        [
                                            -86.534448,
                                            39.027485
                                        ],
                                        [
                                            -86.534562,
                                            39.030914
                                        ],
                                        [
                                            -86.535863,
                                            39.037017
                                        ],
                                        [
                                            -86.536209,
                                            39.039672
                                        ],
                                        [
                                            -86.536288,
                                            39.041316
                                        ],
                                        [
                                            -86.536418,
                                            39.075825
                                        ],
                                        [
                                            -86.536981,
                                            39.078456
                                        ],
                                        [
                                            -86.538393,
                                            39.08092
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.542227,
                                            39.08606
                                        ],
                                        [
                                            -86.544229,
                                            39.091094
                                        ],
                                        [
                                            -86.544167,
                                            39.092981
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001501",
                                "AFFGEOID": "1400000US18105001501",
                                "GEOID": "18105001501",
                                "NAME": "15.01",
                                "LSAD": "CT",
                                "ALAND": 59090524,
                                "AWATER": 3846998,
                                "POPULATION": 5658,
                                "CLAIMANTS": 79,
                                "PERCENTAGEVAL": 140,
                                "PERCENTAGE": 1.4,
                                "MEDIAN_HOUSEHOLD": 83411,
                                "MEDIAN_HOME": 92778,
                                "MEDIAN_FAMILY": 199300
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.544167,
                                            39.092981
                                        ],
                                        [
                                            -86.542172,
                                            39.096055
                                        ],
                                        [
                                            -86.537934,
                                            39.099257
                                        ],
                                        [
                                            -86.532533,
                                            39.104312
                                        ],
                                        [
                                            -86.5315,
                                            39.107233
                                        ],
                                        [
                                            -86.526495,
                                            39.107188
                                        ],
                                        [
                                            -86.52665,
                                            39.121447
                                        ],
                                        [
                                            -86.522043,
                                            39.121447
                                        ],
                                        [
                                            -86.513611,
                                            39.121454
                                        ],
                                        [
                                            -86.511579,
                                            39.121443
                                        ],
                                        [
                                            -86.510155,
                                            39.121401
                                        ],
                                        [
                                            -86.509166,
                                            39.12145
                                        ],
                                        [
                                            -86.4896,
                                            39.121361
                                        ],
                                        [
                                            -86.485016,
                                            39.120619
                                        ],
                                        [
                                            -86.481177,
                                            39.119469
                                        ],
                                        [
                                            -86.476876,
                                            39.117088
                                        ],
                                        [
                                            -86.475127,
                                            39.115567
                                        ],
                                        [
                                            -86.4711,
                                            39.115029
                                        ],
                                        [
                                            -86.467111,
                                            39.113805
                                        ],
                                        [
                                            -86.4647,
                                            39.111198
                                        ],
                                        [
                                            -86.463302,
                                            39.108474
                                        ],
                                        [
                                            -86.461847,
                                            39.106856
                                        ],
                                        [
                                            -86.461831,
                                            39.10233
                                        ],
                                        [
                                            -86.461695,
                                            39.094312
                                        ],
                                        [
                                            -86.456988,
                                            39.088191
                                        ],
                                        [
                                            -86.456604,
                                            39.087692
                                        ],
                                        [
                                            -86.450855,
                                            39.078168
                                        ],
                                        [
                                            -86.449948,
                                            39.078179
                                        ],
                                        [
                                            -86.451463,
                                            39.070917
                                        ],
                                        [
                                            -86.452049,
                                            39.061655
                                        ],
                                        [
                                            -86.454231,
                                            39.056185
                                        ],
                                        [
                                            -86.45695,
                                            39.052625
                                        ],
                                        [
                                            -86.461809,
                                            39.048959
                                        ],
                                        [
                                            -86.463551,
                                            39.046386
                                        ],
                                        [
                                            -86.465955,
                                            39.046682
                                        ],
                                        [
                                            -86.472374,
                                            39.043134
                                        ],
                                        [
                                            -86.475,
                                            39.037992
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.480481,
                                            39.043687
                                        ],
                                        [
                                            -86.481017,
                                            39.045171
                                        ],
                                        [
                                            -86.482928,
                                            39.045954
                                        ],
                                        [
                                            -86.49053,
                                            39.045851
                                        ],
                                        [
                                            -86.491694,
                                            39.042643
                                        ],
                                        [
                                            -86.492108,
                                            39.038541
                                        ],
                                        [
                                            -86.490471,
                                            39.034792
                                        ],
                                        [
                                            -86.490093,
                                            39.032479
                                        ],
                                        [
                                            -86.494219,
                                            39.032286
                                        ],
                                        [
                                            -86.496038,
                                            39.032039
                                        ],
                                        [
                                            -86.497505,
                                            39.032085
                                        ],
                                        [
                                            -86.498318,
                                            39.03234
                                        ],
                                        [
                                            -86.500089,
                                            39.033859
                                        ],
                                        [
                                            -86.50223,
                                            39.034853
                                        ],
                                        [
                                            -86.51688,
                                            39.034921
                                        ],
                                        [
                                            -86.519935,
                                            39.034784
                                        ],
                                        [
                                            -86.520447,
                                            39.034391
                                        ],
                                        [
                                            -86.521487,
                                            39.02811
                                        ],
                                        [
                                            -86.52217,
                                            39.019039
                                        ],
                                        [
                                            -86.522869,
                                            39.018511
                                        ],
                                        [
                                            -86.524587,
                                            39.020488
                                        ],
                                        [
                                            -86.525828,
                                            39.021111
                                        ],
                                        [
                                            -86.527333,
                                            39.0214
                                        ],
                                        [
                                            -86.530694,
                                            39.021224
                                        ],
                                        [
                                            -86.534932,
                                            39.019023
                                        ],
                                        [
                                            -86.536622,
                                            39.020202
                                        ],
                                        [
                                            -86.536593,
                                            39.020307
                                        ],
                                        [
                                            -86.534448,
                                            39.027485
                                        ],
                                        [
                                            -86.534562,
                                            39.030914
                                        ],
                                        [
                                            -86.535863,
                                            39.037017
                                        ],
                                        [
                                            -86.536209,
                                            39.039672
                                        ],
                                        [
                                            -86.536288,
                                            39.041316
                                        ],
                                        [
                                            -86.536418,
                                            39.075825
                                        ],
                                        [
                                            -86.536981,
                                            39.078456
                                        ],
                                        [
                                            -86.538393,
                                            39.08092
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.542227,
                                            39.08606
                                        ],
                                        [
                                            -86.544229,
                                            39.091094
                                        ],
                                        [
                                            -86.544167,
                                            39.092981
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001502",
                                "AFFGEOID": "1400000US18105001502",
                                "GEOID": "18105001502",
                                "NAME": "15.02",
                                "LSAD": "CT",
                                "ALAND": 50230859,
                                "AWATER": 9317128,
                                "POPULATION": 2941,
                                "CLAIMANTS": 42,
                                "PERCENTAGEVAL": 143,
                                "PERCENTAGE": 1.43,
                                "MEDIAN_HOUSEHOLD": 71983,
                                "MEDIAN_HOME": 84276,
                                "MEDIAN_FAMILY": 148600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573696,
                                            39.065429
                                        ],
                                        [
                                            -86.573165,
                                            39.067474
                                        ],
                                        [
                                            -86.573204,
                                            39.073006
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.541727,
                                            39.078563
                                        ],
                                        [
                                            -86.540986,
                                            39.082662
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.538393,
                                            39.08092
                                        ],
                                        [
                                            -86.536981,
                                            39.078456
                                        ],
                                        [
                                            -86.536418,
                                            39.075825
                                        ],
                                        [
                                            -86.536288,
                                            39.041316
                                        ],
                                        [
                                            -86.536209,
                                            39.039672
                                        ],
                                        [
                                            -86.535863,
                                            39.037017
                                        ],
                                        [
                                            -86.534562,
                                            39.030914
                                        ],
                                        [
                                            -86.534448,
                                            39.027485
                                        ],
                                        [
                                            -86.536593,
                                            39.020307
                                        ],
                                        [
                                            -86.536622,
                                            39.020202
                                        ],
                                        [
                                            -86.534932,
                                            39.019023
                                        ],
                                        [
                                            -86.530694,
                                            39.021224
                                        ],
                                        [
                                            -86.527333,
                                            39.0214
                                        ],
                                        [
                                            -86.525828,
                                            39.021111
                                        ],
                                        [
                                            -86.524587,
                                            39.020488
                                        ],
                                        [
                                            -86.522869,
                                            39.018511
                                        ],
                                        [
                                            -86.52217,
                                            39.019039
                                        ],
                                        [
                                            -86.521487,
                                            39.02811
                                        ],
                                        [
                                            -86.520447,
                                            39.034391
                                        ],
                                        [
                                            -86.519935,
                                            39.034784
                                        ],
                                        [
                                            -86.51688,
                                            39.034921
                                        ],
                                        [
                                            -86.50223,
                                            39.034853
                                        ],
                                        [
                                            -86.500089,
                                            39.033859
                                        ],
                                        [
                                            -86.498318,
                                            39.03234
                                        ],
                                        [
                                            -86.497505,
                                            39.032085
                                        ],
                                        [
                                            -86.496038,
                                            39.032039
                                        ],
                                        [
                                            -86.494219,
                                            39.032286
                                        ],
                                        [
                                            -86.490093,
                                            39.032479
                                        ],
                                        [
                                            -86.490471,
                                            39.034792
                                        ],
                                        [
                                            -86.492108,
                                            39.038541
                                        ],
                                        [
                                            -86.491694,
                                            39.042643
                                        ],
                                        [
                                            -86.49053,
                                            39.045851
                                        ],
                                        [
                                            -86.482928,
                                            39.045954
                                        ],
                                        [
                                            -86.481017,
                                            39.045171
                                        ],
                                        [
                                            -86.480481,
                                            39.043687
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.475579,
                                            39.033815
                                        ],
                                        [
                                            -86.475384,
                                            39.032232
                                        ],
                                        [
                                            -86.474392,
                                            39.031255
                                        ],
                                        [
                                            -86.46912,
                                            39.029352
                                        ],
                                        [
                                            -86.468212,
                                            39.020064
                                        ],
                                        [
                                            -86.468803,
                                            39.017875
                                        ],
                                        [
                                            -86.471396,
                                            39.016051
                                        ],
                                        [
                                            -86.471697,
                                            39.014439
                                        ],
                                        [
                                            -86.471143,
                                            39.011667
                                        ],
                                        [
                                            -86.469657,
                                            39.007351
                                        ],
                                        [
                                            -86.466308,
                                            39.003957
                                        ],
                                        [
                                            -86.463962,
                                            39.002846
                                        ],
                                        [
                                            -86.461596,
                                            39.001093
                                        ],
                                        [
                                            -86.459605,
                                            39.000271
                                        ],
                                        [
                                            -86.454765,
                                            38.99952
                                        ],
                                        [
                                            -86.453599,
                                            38.998802
                                        ],
                                        [
                                            -86.449594,
                                            38.998549
                                        ],
                                        [
                                            -86.449181,
                                            38.995251
                                        ],
                                        [
                                            -86.448103,
                                            38.992665
                                        ],
                                        [
                                            -86.448829,
                                            38.991515
                                        ],
                                        [
                                            -86.461535,
                                            38.991673
                                        ],
                                        [
                                            -86.4799,
                                            38.991822
                                        ],
                                        [
                                            -86.488261,
                                            38.991921
                                        ],
                                        [
                                            -86.523611,
                                            38.992002
                                        ],
                                        [
                                            -86.530478,
                                            38.991709
                                        ],
                                        [
                                            -86.537196,
                                            38.991822
                                        ],
                                        [
                                            -86.544437,
                                            38.991754
                                        ],
                                        [
                                            -86.548011,
                                            38.992032
                                        ],
                                        [
                                            -86.568673,
                                            38.992125
                                        ],
                                        [
                                            -86.573548,
                                            38.992147
                                        ],
                                        [
                                            -86.573534,
                                            38.993265
                                        ],
                                        [
                                            -86.573638,
                                            39.005728
                                        ],
                                        [
                                            -86.573346,
                                            39.045625
                                        ],
                                        [
                                            -86.573183,
                                            39.048522
                                        ],
                                        [
                                            -86.573696,
                                            39.065429
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001502",
                                "AFFGEOID": "1400000US18105001502",
                                "GEOID": "18105001502",
                                "NAME": "15.02",
                                "LSAD": "CT",
                                "ALAND": 50230859,
                                "AWATER": 9317128,
                                "POPULATION": 2941,
                                "CLAIMANTS": 42,
                                "PERCENTAGEVAL": 143,
                                "PERCENTAGE": 1.43,
                                "MEDIAN_HOUSEHOLD": 71983,
                                "MEDIAN_HOME": 84276,
                                "MEDIAN_FAMILY": 148600
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.573696,
                                            39.065429
                                        ],
                                        [
                                            -86.573165,
                                            39.067474
                                        ],
                                        [
                                            -86.573204,
                                            39.073006
                                        ],
                                        [
                                            -86.573197,
                                            39.078747
                                        ],
                                        [
                                            -86.541727,
                                            39.078563
                                        ],
                                        [
                                            -86.540986,
                                            39.082662
                                        ],
                                        [
                                            -86.542731,
                                            39.085256
                                        ],
                                        [
                                            -86.538393,
                                            39.08092
                                        ],
                                        [
                                            -86.536981,
                                            39.078456
                                        ],
                                        [
                                            -86.536418,
                                            39.075825
                                        ],
                                        [
                                            -86.536288,
                                            39.041316
                                        ],
                                        [
                                            -86.536209,
                                            39.039672
                                        ],
                                        [
                                            -86.535863,
                                            39.037017
                                        ],
                                        [
                                            -86.534562,
                                            39.030914
                                        ],
                                        [
                                            -86.534448,
                                            39.027485
                                        ],
                                        [
                                            -86.536593,
                                            39.020307
                                        ],
                                        [
                                            -86.536622,
                                            39.020202
                                        ],
                                        [
                                            -86.534932,
                                            39.019023
                                        ],
                                        [
                                            -86.530694,
                                            39.021224
                                        ],
                                        [
                                            -86.527333,
                                            39.0214
                                        ],
                                        [
                                            -86.525828,
                                            39.021111
                                        ],
                                        [
                                            -86.524587,
                                            39.020488
                                        ],
                                        [
                                            -86.522869,
                                            39.018511
                                        ],
                                        [
                                            -86.52217,
                                            39.019039
                                        ],
                                        [
                                            -86.521487,
                                            39.02811
                                        ],
                                        [
                                            -86.520447,
                                            39.034391
                                        ],
                                        [
                                            -86.519935,
                                            39.034784
                                        ],
                                        [
                                            -86.51688,
                                            39.034921
                                        ],
                                        [
                                            -86.50223,
                                            39.034853
                                        ],
                                        [
                                            -86.500089,
                                            39.033859
                                        ],
                                        [
                                            -86.498318,
                                            39.03234
                                        ],
                                        [
                                            -86.497505,
                                            39.032085
                                        ],
                                        [
                                            -86.496038,
                                            39.032039
                                        ],
                                        [
                                            -86.494219,
                                            39.032286
                                        ],
                                        [
                                            -86.490093,
                                            39.032479
                                        ],
                                        [
                                            -86.490471,
                                            39.034792
                                        ],
                                        [
                                            -86.492108,
                                            39.038541
                                        ],
                                        [
                                            -86.491694,
                                            39.042643
                                        ],
                                        [
                                            -86.49053,
                                            39.045851
                                        ],
                                        [
                                            -86.482928,
                                            39.045954
                                        ],
                                        [
                                            -86.481017,
                                            39.045171
                                        ],
                                        [
                                            -86.480481,
                                            39.043687
                                        ],
                                        [
                                            -86.475106,
                                            39.036562
                                        ],
                                        [
                                            -86.475579,
                                            39.033815
                                        ],
                                        [
                                            -86.475384,
                                            39.032232
                                        ],
                                        [
                                            -86.474392,
                                            39.031255
                                        ],
                                        [
                                            -86.46912,
                                            39.029352
                                        ],
                                        [
                                            -86.468212,
                                            39.020064
                                        ],
                                        [
                                            -86.468803,
                                            39.017875
                                        ],
                                        [
                                            -86.471396,
                                            39.016051
                                        ],
                                        [
                                            -86.471697,
                                            39.014439
                                        ],
                                        [
                                            -86.471143,
                                            39.011667
                                        ],
                                        [
                                            -86.469657,
                                            39.007351
                                        ],
                                        [
                                            -86.466308,
                                            39.003957
                                        ],
                                        [
                                            -86.463962,
                                            39.002846
                                        ],
                                        [
                                            -86.461596,
                                            39.001093
                                        ],
                                        [
                                            -86.459605,
                                            39.000271
                                        ],
                                        [
                                            -86.454765,
                                            38.99952
                                        ],
                                        [
                                            -86.453599,
                                            38.998802
                                        ],
                                        [
                                            -86.449594,
                                            38.998549
                                        ],
                                        [
                                            -86.449181,
                                            38.995251
                                        ],
                                        [
                                            -86.448103,
                                            38.992665
                                        ],
                                        [
                                            -86.448829,
                                            38.991515
                                        ],
                                        [
                                            -86.461535,
                                            38.991673
                                        ],
                                        [
                                            -86.4799,
                                            38.991822
                                        ],
                                        [
                                            -86.488261,
                                            38.991921
                                        ],
                                        [
                                            -86.523611,
                                            38.992002
                                        ],
                                        [
                                            -86.530478,
                                            38.991709
                                        ],
                                        [
                                            -86.537196,
                                            38.991822
                                        ],
                                        [
                                            -86.544437,
                                            38.991754
                                        ],
                                        [
                                            -86.548011,
                                            38.992032
                                        ],
                                        [
                                            -86.568673,
                                            38.992125
                                        ],
                                        [
                                            -86.573548,
                                            38.992147
                                        ],
                                        [
                                            -86.573534,
                                            38.993265
                                        ],
                                        [
                                            -86.573638,
                                            39.005728
                                        ],
                                        [
                                            -86.573346,
                                            39.045625
                                        ],
                                        [
                                            -86.573183,
                                            39.048522
                                        ],
                                        [
                                            -86.573696,
                                            39.065429
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001600",
                                "AFFGEOID": "1400000US18105001600",
                                "GEOID": "18105001600",
                                "NAME": "16",
                                "LSAD": "CT",
                                "ALAND": 1578277,
                                "AWATER": 0,
                                "POPULATION": 5803,
                                "CLAIMANTS": 64,
                                "PERCENTAGEVAL": 110,
                                "PERCENTAGE": 1.1,
                                "MEDIAN_HOUSEHOLD": 14291,
                                "MEDIAN_HOME": 68929,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538103,
                                            39.174844
                                        ],
                                        [
                                            -86.538506,
                                            39.17661
                                        ],
                                        [
                                            -86.536,
                                            39.175965
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.534698,
                                            39.178992
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.528326,
                                            39.179009
                                        ],
                                        [
                                            -86.521096,
                                            39.179023
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.520994,
                                            39.171617
                                        ],
                                        [
                                            -86.523503,
                                            39.171636
                                        ],
                                        [
                                            -86.523484,
                                            39.168482
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.526967,
                                            39.172562
                                        ],
                                        [
                                            -86.528287,
                                            39.172571
                                        ],
                                        [
                                            -86.533595,
                                            39.172527
                                        ],
                                        [
                                            -86.534815,
                                            39.173273
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.538103,
                                            39.174844
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "STATEFP": "18",
                                "COUNTYFP": "105",
                                "TRACTCE": "001600",
                                "AFFGEOID": "1400000US18105001600",
                                "GEOID": "18105001600",
                                "NAME": "16",
                                "LSAD": "CT",
                                "ALAND": 1578277,
                                "AWATER": 0,
                                "POPULATION": 5803,
                                "CLAIMANTS": 64,
                                "PERCENTAGEVAL": 110,
                                "PERCENTAGE": 1.1,
                                "MEDIAN_HOUSEHOLD": 14291,
                                "MEDIAN_HOME": 68929,
                                "MEDIAN_FAMILY": 0
                            },
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            -86.538103,
                                            39.174844
                                        ],
                                        [
                                            -86.538506,
                                            39.17661
                                        ],
                                        [
                                            -86.536,
                                            39.175965
                                        ],
                                        [
                                            -86.535934,
                                            39.178998
                                        ],
                                        [
                                            -86.534698,
                                            39.178992
                                        ],
                                        [
                                            -86.534508,
                                            39.186313
                                        ],
                                        [
                                            -86.528396,
                                            39.186292
                                        ],
                                        [
                                            -86.528326,
                                            39.179009
                                        ],
                                        [
                                            -86.521096,
                                            39.179023
                                        ],
                                        [
                                            -86.521014,
                                            39.174089
                                        ],
                                        [
                                            -86.520994,
                                            39.171617
                                        ],
                                        [
                                            -86.523503,
                                            39.171636
                                        ],
                                        [
                                            -86.523484,
                                            39.168482
                                        ],
                                        [
                                            -86.526955,
                                            39.168502
                                        ],
                                        [
                                            -86.526967,
                                            39.172562
                                        ],
                                        [
                                            -86.528287,
                                            39.172571
                                        ],
                                        [
                                            -86.533595,
                                            39.172527
                                        ],
                                        [
                                            -86.534815,
                                            39.173273
                                        ],
                                        [
                                            -86.538571,
                                            39.17327
                                        ],
                                        [
                                            -86.538103,
                                            39.174844
                                        ]
                                    ]
                                ]
                            }
                        }
                    ]
                }

            });


            // tester/src/Mappage/mapdata.geojson
            map.addLayer({
                "id": "tracts",
                "type": "fill",
                "source": "dc",
                "paint": {
                    "fill-color": {
                        property: 'CLAIMANTS',
                        stops: [
                            [BREAKS[0], COLORS[0]],
                            [BREAKS[1], COLORS[1]],
                            [BREAKS[2], COLORS[2]],
                            [BREAKS[3], COLORS[3]],
                            [BREAKS[4], COLORS[4]],
                            [BREAKS[5], COLORS[5]]]
                    },
                    "fill-opacity": 0.3,
                    "fill-outline-color": "#a6a6a6"
                }
                
            });
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();

            map.on("mousemove", function (e) {
                var features = map.queryRenderedFeatures(e.point, {
                    layers: ["tracts"]
                });


                if (features.length) {
                    //show name and value in sidebar
                    document.getElementById('tooltip-name').innerHTML = "" + features[0].properties.NAME;
                    document.getElementById('tooltip').innerHTML = "" + features[0].properties.CLAIMANTS;
                    document.getElementById('tooltip-1').innerHTML = "" + features[0].properties.POPULATION;
                    document.getElementById('tooltip-2').innerHTML = "" + Number(Math.round((features[0].properties.PERCENTAGE + 'e2')) + 'e-2') + "%";
                    document.getElementById('tooltip-3').innerHTML = "" + features[0].properties.MEDIAN_HOUSEHOLD;
                    document.getElementById('tooltip-4').innerHTML = "" + features[0].properties.MEDIAN_HOME;
                    document.getElementById('tooltip-5').innerHTML = "" + features[0].properties.MEDIAN_FAMILY;

                    // document.getElementById('tooltip').innerHTML = "Claimants "+ (features[0].properties.Claimants);
                    //for troubleshooting - show complete features info
                    //document.getElementById('tooltip').innerHTML = JSON.stringify(features, null, 2);
                } else {
                    //if not hovering over a feature set tooltip to empty
                    document.getElementById('tooltip-name').innerHTML = "Census Tract ";
                    document.getElementById('tooltip').innerHTML = "Claimants";
                    document.getElementById('tooltip-1').innerHTML = "Total Population ";
                    document.getElementById('tooltip-2').innerHTML = "Total Percentage";
                    document.getElementById('tooltip-2').innerHTML = "Median Household Income";
                    document.getElementById('tooltip-2').innerHTML = "Median Home Value";
                    document.getElementById('tooltip-2').innerHTML = "Median Family Income";

                }
            });
        });
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-md-9">
                        <div className="">
                            <h3>Monroe County Data</h3>
                            <div id="" >
                                <div className="mapbox-container">
                                    <div id="state-legend" class="legend">
                                        <h4 style={{ "color": "black" }}>Number of Claims</h4>
                                        {/* <div><span style={{ "background-color": "#ffffcc" }}></span>25,000,000</div> */}
                                        <div><span style={{ "background-color": "#ffeda0" }}></span>0-30</div>
                                        <div><span style={{ "background-color": "#fed976" }}></span>31-60</div>
                                        {/* <div><span style={{ "background-color": "#feb24c" }}></span></div> */}
                                        {/* <div><span style={{ "background-color": "#fd8d3c" }}></span></div> 
                                        {/* <div><span style={{ "background-color": "#fc4e2a" }}></span>110</div>90*/}
                                        <div><span style={{ "background-color": "#e31a1c" }}></span>61-90</div>
                                        {/* <div><span style={{ "background-color": "#bd0026" }}></span>25,000,000</div>  */}
                                        <div><span style={{ "background-color": "#800026" }}></span>91-120</div>

                                    </div>
                                    <div ref={el => this.mapContainer = el} className="mapContainer" />


                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <div id=''>
                                {/* <h2 style={{ color: "black" }}>Unemployment Claims by Census Tracts</h2>
                            <h4 style={{ color: "black" }}> <div id="tooltip-name"></div></h4>
                            <h4 style={{ color: "black" }}><div id='tooltip'></div></h4>
                            <h4 style={{ color: "black" }}><div id="tooltip-1"></div></h4>
                            <h4 style={{ color: "black" }}> <div id='tooltip-2'></div></h4>
                    */}
                                <table class="table table-striped table-dark">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="col">Census Tract</th>
                                            <th scope="row"><div id="tooltip-name"></div></th>


                                        </tr>
                                        <tr>
                                            <th scope="col">Claimants</th>
                                            <td><div id="tooltip"></div></td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Population of Tract</th>
                                            <td><div id="tooltip-1"></div></td>

                                        </tr>
                                        <tr>
                                            <th scope="col">Total Percentage Unemployed</th>
                                            <td> <div id='tooltip-2'></div></td>

                                        </tr>
                                        <tr>
                                            <th scope="col">Median Household Income</th>
                                            <td>$ <div id='tooltip-3'></div></td>

                                        </tr>
                                        <tr>
                                            <th scope="col">Median Home Value</th>
                                            <td> $<div id='tooltip-4'></div></td>

                                        </tr>
                                        <tr>
                                            <th scope="col">Median Family Value</th>
                                            <td> $<div id='tooltip-5'></div></td>

                                        </tr>
                                        <tr>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }



}

export default Map;