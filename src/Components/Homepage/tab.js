import React from 'react';
import PropTypes from 'prop-types';
import "./slider.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tableau from "./TableauReact";
import MapPage from "../Map/Mainpage";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Iframe from "react-iframe";
import Paper from '@material-ui/core/Paper';
import PovertyMainpage from "../PovertyData/povertymainpage"
import CensusMainpage from "../CensusTracts/censusmainpage"
import banner from "../../assets/images/infection.png";
import InfoIcon from '@material-ui/icons/Info';

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
    background: "#005B94",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(	0, 91, 148, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}));

export default function SimpleTabs() {
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="">
        <Tabs value={value} className={classes.tabs} onChange={handleChange}  centered >
        <Tab label="Employment and Mobility" {...a11yProps(0)} />
          <Tab label="Poverty Insights" {...a11yProps(1)} ></Tab>
          <Tab label="Census Tracts" {...a11yProps(2)} />
          <Tab label="Map" {...a11yProps(3)} />
          
          <Tab label="COVID Data" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="container" style={{display: "flex",
  alignItems: "left"}}>
        <button className='button_no_dec'
          onClick={createNotification('info')}><InfoIcon></InfoIcon>
        </button>
        <Tableau></Tableau>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <PovertyMainpage></PovertyMainpage>
      </TabPanel>
      <TabPanel value={value} index={2}>
   <CensusMainpage></CensusMainpage>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <MapPage></MapPage>
      </TabPanel>
      <NotificationContainer/>

   

      <TabPanel value={value} index={4}>
      <div className="container-fluid" style={{ alignContent: "center" }}>
        <div className="row" style={{backgroundColor:"#fff"}}>
          <div className="col-5" >
          <Iframe
                url="https://covidactnow.org/embed/us/county/18105"
                title="CoVid Act Now"
                width="450"
                height="370"
                frameBorder="0"
                scrolling="no"
                backgroundColor="black"
              ></Iframe>
          </div>
          <div className="col-7">
          <img style={{width: "100%", height: "auto"}} src={banner} />
          </div>

        </div>
            <h6>COVID Act now bridges data from multiple authoritative data sources - more useful than just state data</h6> <a href="https://docs.google.com/presentation/d/1XmKCBWYZr9VQKFAdWh_D7pkpGGM_oR9cPjj-UrNdMJQ/edit#slide=id.g875b45be96_0_301">See</a>
            </div>
      </TabPanel>

    </Paper>
  );
}
