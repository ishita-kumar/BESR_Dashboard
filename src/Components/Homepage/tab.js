import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tableau from "./TableauReact";
import MapPage from "../Map/Mainpage";
import Iframe from "react-iframe";
import Paper from '@material-ui/core/Paper';
import PovertyMainpage from "../PovertyData/povertymainpage"
import CensusMainpage from "../CensusTracts/censusmainpage"
import banner from "../../assets/images/infection.png";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eee",
  },
  tabs:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} className={classes.tabs} onChange={handleChange} aria-label="simple tabs example"  centered >
          <Tab label="Key Insights" {...a11yProps(0)} />
          <Tab label="Poverty Insights" {...a11yProps(1)} />
          <Tab label="Map" {...a11yProps(2)} />
          <Tab label="Census Tracts" {...a11yProps(3)} />
          <Tab label="COVID Data" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Tableau></Tableau>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <MapPage></MapPage>
      </TabPanel>
 
      <TabPanel value={value} index={1}>
          <PovertyMainpage></PovertyMainpage>
      </TabPanel>
      <TabPanel value={value} index={3}>
   <CensusMainpage></CensusMainpage>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="container-fluid" style={{ alignContent: "center" }}>
        <div className="row">
          <div className="col-3">
          <Iframe
                url="https://covidactnow.org/embed/us/county/18105"
                title="CoVid Act Now"
                width="350"
                height="370"
                frameBorder="0"
                scrolling="no"
              ></Iframe>
          </div>
          <div className="col-9">
          <img style={{width: "100%", height: "auto"}} src={banner} />
          </div>

        </div>
            
            </div>
      </TabPanel>

    
    </Paper>
  );
}
