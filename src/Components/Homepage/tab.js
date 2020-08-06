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
    background: "#D9D9D9",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(	0, 91, 148, .3)',
    color: 'black',
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
          <Tab label="Povert Insights" {...a11yProps(0)} ></Tab>
          {/* <Tab label="Poverty Insights" {...a11yProps(1)} /> */}
          <Tab label="Map" {...a11yProps(1)} />
          <Tab label="Census Tracts" {...a11yProps(2)} />
          <Tab label="COVID Data" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        <div className="container" style={{display: "flex",
  alignItems: "left"}}>
        <button className='button_no_dec'
          onClick={createNotification('info')}><InfoIcon></InfoIcon>
        </button>
        <Tableau></Tableau>
        </div>
      </TabPanel> */}
      <TabPanel value={value} index={0}>
          <PovertyMainpage></PovertyMainpage>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <MapPage></MapPage>
      </TabPanel>
      <NotificationContainer/>

   
      <TabPanel value={value} index={2}>
   <CensusMainpage></CensusMainpage>
      </TabPanel>
      <TabPanel value={value} index={3}>
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
