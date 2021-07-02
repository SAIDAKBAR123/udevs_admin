import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DataTable from "../DataTable/index";
import "./style.scss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "6px",
    outline: "none",
    textTransform: "capitalize",
    textAlign: "start",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabLabel = (text, value = "", isActive = false) => {
    return (
      <span className="px-1">
        {text}
        <span
          style={{
            background: !isActive
              ? "rgba(110, 139, 183, 0.75)"
              : "rgba(64, 148, 247, 1)",
          }}
          className="rounded-full bg-gray-500 text-white w-4 h-3 p-1 px-2 ml-2 text-xs"
        >
          {value}
        </span>
      </span>
    );
  };

  return (
    <div className={"bg-white p-3" + classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered={false}
          aria-label="full width tabs example"
        >
          <Tab
            className="capitalize"
            label={tabLabel("Новый", 12, value === 0)}
            {...a11yProps(0)}
          />
          <Tab
            label={tabLabel("Оператор принял", 12, value === 1)}
            {...a11yProps(1)}
          />
          <Tab
            label={tabLabel("Загатовка", 32, value === 2)}
            {...a11yProps(2)}
          />
          <Tab
            label={tabLabel("Курьер в пути", 10, value === 3)}
            {...a11yProps(3)}
          />
          <Tab
            label={tabLabel("Завершен", 120, value === 4)}
            {...a11yProps(4)}
          />
          <Tab
            label={tabLabel("Все заказы", 15, value === 5)}
            {...a11yProps(5)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={0}
          dir={theme.direction}
        >
          <DataTable />
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={1}
          dir={theme.direction}
        >
          vsdd
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={2}
          dir={theme.direction}
        >
          <DataTable />
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={3}
          dir={theme.direction}
        >
          Item Thresdasde
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={4}
          dir={theme.direction}
        >
          Item Thrggee
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={5}
          dir={theme.direction}
        >
          Item 6
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
// export default function TableBody () {
//     return (
//         <div className="bg-white p-3 m-4 rounded-md" style={{ height: '84vh'}}>

//         </div>
//     )
// }
