import { useState } from "react";
import { useHistory } from "react-router";
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
import Segment from "../../components/Segment";
import GoogleMaps from "../../components/GoogleMaps";

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

const addIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6" fill="#4094F7" fill-opacity="0.1" />
    <path
      d="M20.9998 16.8334H16.8332V21.0001C16.8332 21.4584 16.4582 21.8334 15.9998 21.8334C15.5415 21.8334 15.1665 21.4584 15.1665 21.0001V16.8334H10.9998C10.5415 16.8334 10.1665 16.4584 10.1665 16.0001C10.1665 15.5417 10.5415 15.1667 10.9998 15.1667H15.1665V11.0001C15.1665 10.5417 15.5415 10.1667 15.9998 10.1667C16.4582 10.1667 16.8332 10.5417 16.8332 11.0001V15.1667H20.9998C21.4582 15.1667 21.8332 15.5417 21.8332 16.0001C21.8332 16.4584 21.4582 16.8334 20.9998 16.8334Z"
      fill="#4094F7"
    />
  </svg>
);

const segmentIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.28612 2.28587C1.03588 3.53612 0.333496 5.23181 0.333496 6.99992C0.333496 8.76803 1.03588 10.4637 2.28612 11.714C3.53636 12.9642 5.23205 13.6666 7.00016 13.6666C8.76827 13.6666 10.464 12.9642 11.7142 11.714C12.9644 10.4637 13.6668 8.76803 13.6668 6.99992H7.00016V0.333252C5.23205 0.333252 3.53636 1.03563 2.28612 2.28587Z"
      fill="#4094F7"
    />
    <path
      d="M11.7142 2.28586C10.872 1.44364 9.81985 0.841983 8.66683 0.543264V5.33326H13.4568C13.1581 4.18024 12.5565 3.12809 11.7142 2.28586Z"
      fill="#4094F7"
    />
  </svg>
);

const crossIcon = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.19998 0.806647C8.93998 0.546647 8.51998 0.546647 8.25998 0.806647L4.99998 4.05998L1.73998 0.79998C1.47998 0.53998 1.05998 0.53998 0.79998 0.79998C0.53998 1.05998 0.53998 1.47998 0.79998 1.73998L4.05998 4.99998L0.79998 8.25998C0.53998 8.51998 0.53998 8.93998 0.79998 9.19998C1.05998 9.45998 1.47998 9.45998 1.73998 9.19998L4.99998 5.93998L8.25998 9.19998C8.51998 9.45998 8.93998 9.45998 9.19998 9.19998C9.45998 8.93998 9.45998 8.51998 9.19998 8.25998L5.93998 4.99998L9.19998 1.73998C9.45331 1.48665 9.45331 1.05998 9.19998 0.806647Z"
      fill="#4094F7"
    />
  </svg>
);

const moneyIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM11.91 16.09V16.67C11.91 17.4 11.31 18 10.58 18H10.57C9.84 18 9.24 17.4 9.24 16.67V16.07C7.91 15.79 6.73 15.06 6.23 13.83C6 13.28 6.43 12.67 7.03 12.67H7.27C7.64 12.67 7.94 12.92 8.08 13.27C8.37 14.02 9.13 14.54 10.59 14.54C12.55 14.54 12.99 13.56 12.99 12.95C12.99 12.12 12.55 11.34 10.32 10.81C7.84 10.21 6.14 9.19 6.14 7.14C6.14 5.42 7.53 4.3 9.25 3.93V3.33C9.25 2.6 9.85 2 10.58 2H10.59C11.32 2 11.92 2.6 11.92 3.33V3.95C13.3 4.29 14.17 5.15 14.55 6.21C14.75 6.76 14.33 7.34 13.74 7.34H13.48C13.11 7.34 12.81 7.08 12.71 6.72C12.48 5.96 11.85 5.47 10.59 5.47C9.09 5.47 8.19 6.15 8.19 7.11C8.19 7.95 8.84 8.5 10.86 9.02C12.88 9.54 15.04 10.41 15.04 12.93C15.02 14.76 13.65 15.76 11.91 16.09Z"
      fill="#4094F7"
    />
  </svg>
);

const carIcon = (
  <svg
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.42 1.01C16.22 0.42 15.66 0 15 0H4C3.34 0 2.79 0.42 2.58 1.01L0.61 6.68C0.54 6.89 0.5 7.11 0.5 7.34V14.5C0.5 15.33 1.17 16 2 16C2.83 16 3.5 15.33 3.5 14.5V14H15.5V14.5C15.5 15.32 16.17 16 17 16C17.82 16 18.5 15.33 18.5 14.5V7.34C18.5 7.12 18.46 6.89 18.39 6.68L16.42 1.01ZM4 11C3.17 11 2.5 10.33 2.5 9.5C2.5 8.67 3.17 8 4 8C4.83 8 5.5 8.67 5.5 9.5C5.5 10.33 4.83 11 4 11ZM15 11C14.17 11 13.5 10.33 13.5 9.5C13.5 8.67 14.17 8 15 8C15.83 8 16.5 8.67 16.5 9.5C16.5 10.33 15.83 11 15 11ZM2.5 6L3.77 2.18C3.91 1.78 4.29 1.5 4.72 1.5H14.28C14.71 1.5 15.09 1.78 15.23 2.18L16.5 6H2.5Z"
      fill="#4094F7"
    />
  </svg>
);

const sumIcon = (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 12V14C13.5 14.2652 13.3946 14.5196 13.2071 14.7071C13.0196 14.8946 12.7652 15 12.5 15H1.5L7.5 8L1.5 1H12.5C12.7652 1 13.0196 1.10536 13.2071 1.29289C13.3946 1.48043 13.5 1.73478 13.5 2V4"
      stroke="#4094F7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function App() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const history = useHistory();

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
    <TextHighlight color="green" className="text-sm mx-2">
      0:02:36
    </TextHighlight>,
    <TextHighlight color="blue" className="text-sm mx-2">
      Доставлен
    </TextHighlight>,
    <Button
      shape="text"
      color="error"
      icon={cancelIcon}
      onClick={() => history.goBack()}
    >
      Отменить
    </Button>,
    <Button shape="text" color="primary" icon={saveIcon}>
      Сохранить
    </Button>,
  ];

  const clientTypes = [
    {
      label: "Type 1",
      value: 1,
    },
    {
      label: "Type 2",
      value: 2,
    },
    {
      label: "Type 3",
      value: 3,
    },
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
          <div className="grid grid-cols-2 grid-row-5 gap-4 font-body">
            {/* first grid */}
            <div className="row-span-3 bg-white rounded-md pb-2">
              {/* Clients */}
              <h5 className="text-sm font-semibold py-3 px-4">Клиент</h5>
              <hr />
              <div className="flex flex-col pb-2">
                <div className="flex items-center py-2 px-4">
                  <h5 className="w-1/4 text-sm font-semibold text-gray-600 whitespace-nowrap">
                    Тип клиента
                  </h5>
                  <CustomDropdown className="px-3">
                    {clientTypes}
                  </CustomDropdown>
                </div>
                <div className="flex items-center py-2 px-4">
                  <h5 className="w-1/4 text-sm font-semibold text-gray-600">
                    Имя
                  </h5>
                  <Input className="px-3" placeholder="Имя"></Input>
                </div>
                <div className="flex items-center py-2 px-4">
                  <h5 className="w-1/4 text-sm font-semibold text-gray-600">
                    Фамилия
                  </h5>
                  <Input className="px-3" placeholder="Фамилия"></Input>
                </div>
                <div className="flex items-center py-2 px-4">
                  <h5 className="w-1/4 text-sm font-semibold text-gray-600">
                    Телефон
                  </h5>
                  <Input className="px-5" placeholder="Телефон"></Input>
                  <span className="pr-3 cursor-pointer">{addIcon}</span>
                </div>
              </div>
              <hr />

              {/* Tags */}
              <h5 className="py-3 px-4">Теги</h5>
              <div className="flex flex-wrap pl-4 gap-3">
                <TextHighlight postIcon={crossIcon}>
                  Выиграл в розыгрыше
                </TextHighlight>
                <TextHighlight postIcon={crossIcon} color="green">
                  Не обработан
                </TextHighlight>
                <TextHighlight postIcon={crossIcon} color="orange">
                  Поставщик
                </TextHighlight>
                <TextHighlight postIcon={crossIcon} color="red">
                  Проблема доставки
                </TextHighlight>
                <TextHighlight postIcon={crossIcon} color="orange">
                  Уточнение по заказу
                </TextHighlight>
              </div>

              {/* Segments */}
              <h5 className="py-3 px-4">Сегменты</h5>
              <div className="flex flex-wrap gap-3 px-4">
                <Segment icon={segmentIcon}>Россия</Segment>
                <Segment icon={segmentIcon}>Россия кроме (Мск)</Segment>
                <Segment icon={segmentIcon}>Средней давности</Segment>
                <Segment icon={segmentIcon}>Средняя сумма покупки</Segment>
                <Segment icon={segmentIcon}>Средний LTV</Segment>
              </div>
            </div>

            {/* second grid */}
            <div className="row-span-3 bg-white rounded-md pb-2">
              <div className="flex justify-between text-sm font-semibold">
                <h5 className="py-3 px-4">Доставка</h5>
                <span className="flex py-3 px-4">
                  <h5 className="text-gray-600 pr-1">Расстояние: </h5>
                  <h5>10.4 км</h5>
                </span>
              </div>
              <hr />
              <div className="flex">
                <div className="w-3/5 flex items-center py-2 px-4">
                  <h5 className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                    Тип доставки
                  </h5>
                  <CustomDropdown className="px-3">
                    {clientTypes}
                  </CustomDropdown>
                </div>
                <div className="w-2/5 flex items-center py-2 px-4">
                  <h5 className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                    Тариф
                  </h5>
                  <CustomDropdown className="px-3">
                    {clientTypes}
                  </CustomDropdown>
                </div>
              </div>
              <div className="flex items-center px-4">
                <h5 className="w-1/5 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Адрес
                </h5>
                <Input className="px-3" placeholder="Адрес или обьект"></Input>
              </div>
              <div className="flex items-center py-3 justify-center">
                <GoogleMaps />
              </div>
              <div className="flex items-center px-4">
                <h5 className="w-1/5 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Филиал
                </h5>
                <Input className="px-3" placeholder="Филиал" />
              </div>
              <div className="flex items-center py-3 px-4">
                <h5 className="w-1/5 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Дом
                </h5>

                <div className="flex pr-3">
                  <Input placeholder="Дом" />
                  <div className="w-5/6 flex items-center">
                    <h5 className="text-sm font-semibold text-gray-600 whitespace-nowrap px-3">
                      Квартира
                    </h5>
                    <Input placeholder="Квартира" />
                  </div>
                </div>
              </div>
              <div className="flex items-center px-4">
                <h5 className="w-1/5 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Этаж
                </h5>
                <Input className="px-3" placeholder="Этаж" />
              </div>
            </div>

            <div className="col-span-2 row-span-2 bg-white rounded-md pb-2">
              <div className="flex justify-between">
                <h5 className="text-sm font-semibold py-3 px-4">Продукты</h5>
                <div className="flex">
                  <h5 className="text-sm text-gray-600 font-semibold py-3 px-4">
                    История заказов
                  </h5>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-12 px-4 pt-2 gap-3 items-center">
                <div className="col-span-3">
                  <h5 className="text-gray-600 text-sm font-semibold py-2">
                    Наименование
                  </h5>
                  <CustomDropdown />
                </div>
                <div className="col-span-2">
                  <h5 className="text-gray-600 text-sm font-semibold py-2">
                    Цена
                  </h5>
                  <Input placeholder="26 000 сум" />
                </div>

                <div className="col-span-2">
                  <h5 className="text-gray-600 text-sm font-semibold py-2">
                    Кол-во
                  </h5>
                  <Input />
                </div>
                <div className="col-span-2">
                  <h5 className="text-gray-600 text-sm whitespace-nowrap font-semibold py-2">
                    Общая стоимость
                  </h5>
                  <Input />
                </div>
                <div className="col-span-3">
                  <h5 className="text-gray-600 text-sm whitespace-nowrap font-semibold py-2">
                    Описание
                  </h5>
                  <Input />
                </div>
              </div>
              <div className="flex items-center justify-center bg-blue-100 rounded-lg border border-dashed border-blue-500 cursor-pointer my-6 mx-4 py-2">
                <h5 className="text-sm font-thin text-blue-800">
                  + Добавить продукт
                </h5>
              </div>
              <hr />
              <div className="flex py-4">
                <div className="w-1/2 flex flex-col gap-4 pr-2">
                  <div className="flex">
                    <h5 className="text-sm text-gray-600 font-semibold py-3 px-4">
                      Типы оплаты
                    </h5>
                    <div className="flex gap-3">
                      <div className="flex items-center border rounded-lg px-10">
                        {cancelIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {cancelIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {cancelIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {cancelIcon}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <h5 className="w-1/4 text-sm text-gray-600 font-semibold py-3 px-4">
                      Курьер
                    </h5>
                    <CustomDropdown />
                  </div>
                  <div className="flex items-center">
                    <h5 className="w-1/4 text-sm text-gray-600 font-semibold py-3 px-4">
                      Оператор
                    </h5>
                    <CustomDropdown />
                  </div>
                </div>
                <div className="border-l mx-5"></div>
                <div className="w-1/2 flex flex-col pl-2">
                  <div className="flex">
                    <div className="w-1/2  flex items-center">
                      {moneyIcon}
                      <h5 className="text-sm text-gray-600 py-3 px-4">
                        Сумма заказа
                      </h5>
                    </div>
                    <h5 className="text-sm py-3 px-4">2 000 000 сум</h5>
                  </div>
                  <div className="flex">
                    <div className="w-1/2  flex items-center">
                      {carIcon}
                      <h5 className="text-sm text-gray-600 py-3 px-4">
                        Сумма доставки
                      </h5>
                    </div>
                    <h5 className="text-sm py-3 px-4">10 000 сум</h5>
                  </div>
                  <hr className="my-4 mx-2" />
                  <div className="flex">
                    <div className="w-1/2 flex items-center">
                      {sumIcon}
                      <h5 className="text-md py-3 px-4">Итого</h5>
                    </div>
                    <h5 className="text-md py-3 px-4">2 010 000 сум</h5>
                  </div>
                </div>
              </div>
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
