import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import TableHeader from "../../components/Header/Header";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import { withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { TabPanel } from "../../components/Tab/TabBody";
import DataTable from "../../components/DataTable/index";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextHighlight from "../../components/TextHighlight";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 100,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
  },
}))((props) => <Tab disableRipple {...props} />);

//Icons
const idIcon = (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.47159 0.363636H0.0113636V12H2.47159V0.363636ZM8.52474 12C12.0702 12 14.2179 9.80682 14.2179 6.17045C14.2179 2.54545 12.0702 0.363636 8.55883 0.363636H4.39974V12H8.52474ZM6.85997 9.89205V2.47159H8.42815C10.61 2.47159 11.7634 3.58523 11.7634 6.17045C11.7634 8.76705 10.61 9.89205 8.42247 9.89205H6.85997Z"
      fill="#6E8BB7"
    />
  </svg>
);

const calendarIcon = (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6665 2.49992H14.8332V1.66659C14.8332 1.20825 14.4582 0.833252 13.9998 0.833252C13.5415 0.833252 13.1665 1.20825 13.1665 1.66659V2.49992H4.83317V1.66659C4.83317 1.20825 4.45817 0.833252 3.99984 0.833252C3.5415 0.833252 3.1665 1.20825 3.1665 1.66659V2.49992H2.33317C1.4165 2.49992 0.666504 3.24992 0.666504 4.16658V17.4999C0.666504 18.4166 1.4165 19.1666 2.33317 19.1666H15.6665C16.5832 19.1666 17.3332 18.4166 17.3332 17.4999V4.16658C17.3332 3.24992 16.5832 2.49992 15.6665 2.49992ZM14.8332 17.4999H3.1665C2.70817 17.4999 2.33317 17.1249 2.33317 16.6666V6.66658H15.6665V16.6666C15.6665 17.1249 15.2915 17.4999 14.8332 17.4999Z"
      fill="#6E8BB7"
    />
  </svg>
);

const cancelIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99984 0.666748C4.3915 0.666748 0.666504 4.39175 0.666504 9.00008C0.666504 13.6084 4.3915 17.3334 8.99984 17.3334C13.6082 17.3334 17.3332 13.6084 17.3332 9.00008C17.3332 4.39175 13.6082 0.666748 8.99984 0.666748ZM12.5832 12.5834C12.2582 12.9084 11.7332 12.9084 11.4082 12.5834L8.99984 10.1751L6.5915 12.5834C6.2665 12.9084 5.7415 12.9084 5.4165 12.5834C5.0915 12.2584 5.0915 11.7334 5.4165 11.4084L7.82484 9.00008L5.4165 6.59175C5.0915 6.26675 5.0915 5.74175 5.4165 5.41675C5.7415 5.09175 6.2665 5.09175 6.5915 5.41675L8.99984 7.82508L11.4082 5.41675C11.7332 5.09175 12.2582 5.09175 12.5832 5.41675C12.9082 5.74175 12.9082 6.26675 12.5832 6.59175L10.1748 9.00008L12.5832 11.4084C12.8998 11.7251 12.8998 12.2584 12.5832 12.5834Z"
      fill="#F76659"
    />
  </svg>
);

const saveIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6583 0.991667C12.3417 0.675 11.9167 0.5 11.475 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V4.525C15.5 4.08333 15.325 3.65833 15.0083 3.35L12.6583 0.991667ZM8 13.8333C6.61667 13.8333 5.5 12.7167 5.5 11.3333C5.5 9.95 6.61667 8.83333 8 8.83333C9.38333 8.83333 10.5 9.95 10.5 11.3333C10.5 12.7167 9.38333 13.8333 8 13.8333ZM8.83333 5.5H3.83333C2.91667 5.5 2.16667 4.75 2.16667 3.83333C2.16667 2.91667 2.91667 2.16667 3.83333 2.16667H8.83333C9.75 2.16667 10.5 2.91667 10.5 3.83333C10.5 4.75 9.75 5.5 8.83333 5.5Z"
      fill="#4094F7"
    />
  </svg>
);

const printIcon = (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8332 4.66667L3.1665 4.66667C1.78317 4.66667 0.666504 5.78333 0.666504 7.16667L0.666504 10.5C0.666504 11.4167 1.4165 12.1667 2.33317 12.1667H3.99984L3.99984 13.8333C3.99984 14.75 4.74984 15.5 5.6665 15.5L12.3332 15.5C13.2498 15.5 13.9998 14.75 13.9998 13.8333V12.1667H15.6665C16.5832 12.1667 17.3332 11.4167 17.3332 10.5V7.16667C17.3332 5.78333 16.2165 4.66667 14.8332 4.66667ZM11.4998 13.8333H6.49984C6.0415 13.8333 5.6665 13.4583 5.6665 13V9.66667L12.3332 9.66667V13C12.3332 13.4583 11.9582 13.8333 11.4998 13.8333ZM14.8332 8C14.3748 8 13.9998 7.625 13.9998 7.16667C13.9998 6.70833 14.3748 6.33333 14.8332 6.33333C15.2915 6.33333 15.6665 6.70833 15.6665 7.16667C15.6665 7.625 15.2915 8 14.8332 8ZM13.1665 0.5L4.83317 0.5C4.37484 0.5 3.99984 0.875 3.99984 1.33333L3.99984 3C3.99984 3.45833 4.37484 3.83333 4.83317 3.83333L13.1665 3.83333C13.6248 3.83333 13.9998 3.45833 13.9998 3V1.33333C13.9998 0.875 13.6248 0.5 13.1665 0.5Z"
      fill="#323232"
    />
  </svg>
);

function App() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabLabel = (text, isActive = false) => {
    return <span className="px-1">{text}</span>;
  };

  //Header items and buttons
  const idAndDate = [
    <Button shape="text" color="secondary" icon={idIcon}>
      537391
    </Button>,
    <Button shape="text" color="secondary" icon={calendarIcon}>
      2021-06-22 18:40:27
    </Button>,
  ];

  const cancelAndSaveButtons = [
    <TextHighlight color="green" className="text-sm">
      0:02:36
    </TextHighlight>,
    <TextHighlight color="blue" className="text-sm">
      Доставлен
    </TextHighlight>,
    <Button shape="text" color="error" icon={cancelIcon}>
      Отменить
    </Button>,
    <Button shape="text" color="primary" icon={saveIcon}>
      Сохранить
    </Button>,
  ];

  return (
    <div>
      <TableHeader title="Заказ" left={idAndDate} right={cancelAndSaveButtons}>
        <div className="bg-gray-50 h-14 w-full flex justify-between items-center font-body">
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered={false}
            aria-label="full width tabs example"
            TabIndicatorProps={{ children: <span className="w-2" /> }}
          >
            <StyledTab
              className="capitalize"
              label={tabLabel("Основное")}
              {...a11yProps(0)}
              style={{ width: "100px" }}
            />
            <StyledTab
              label={tabLabel("История изменений")}
              {...a11yProps(1)}
            />
          </StyledTabs>
          <Button className="px-5" shape="text" color="dark" icon={printIcon}>
            Печать
          </Button>
        </div>
      </TableHeader>
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
          <div className="grid grid-cols-2 grid-row-5 gap-4">
            <div className="row-span-3 bg-white rounded-md py-2 ">
              <h5 className="py-1 px-4">Клиент</h5>
              <hr />
              <div className="flex flex-col">
                <div className="flex items-center px-4">
                  <h5>Тип клиента</h5>
                  <CustomDropdown />
                </div>
                <div className="flex items-center px-4">
                  <h5>Имя</h5>
                  <Input placeholder="Имя"></Input>
                </div>
                <div className="flex items-center px-4">
                  <h5>Фамилия</h5>
                  <Input placeholder="Имя"></Input>
                </div>
                <div className="flex items-center px-4">
                  <h5>Телефон</h5>
                  <Input placeholder="Имя"></Input>
                </div>
              </div>
            </div>
            <div className="row-span-3 bg-white rounded-md py-2 px-4">2</div>

            <div className="col-span-2 row-span-2 bg-white rounded-md py-2 px-4">
              3
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          style={{ height: "76vh" }}
          index={1}
          dir={theme.direction}
        >
          vsdd
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default App;
