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
    <Button shape="text" color="secondary">
      537391
    </Button>,
    <Button shape="text" color="secondary">
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
    <Button shape="text" color="error" onClick={() => history.goBack()}>
      Отменить
    </Button>,
    <Button shape="text" color="primary">
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
          <Button className="px-5" shape="text" color="dark">
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
                  <span className="pr-3 cursor-pointer">Add icon</span>
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
                <Segment icon={crossIcon}>Россия</Segment>
                <Segment icon={crossIcon}>Россия кроме (Мск)</Segment>
                <Segment icon={crossIcon}>Средней давности</Segment>
                <Segment icon={crossIcon}>Средняя сумма покупки</Segment>
                <Segment icon={crossIcon}>Средний LTV</Segment>
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
                        {crossIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {crossIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {crossIcon}
                      </div>
                      <div className="flex items-center border rounded-lg px-10">
                        {crossIcon}
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
                      Money Icon
                      <h5 className="text-sm text-gray-600 py-3 px-4">
                        Сумма заказа
                      </h5>
                    </div>
                    <h5 className="text-sm py-3 px-4">2 000 000 сум</h5>
                  </div>
                  <div className="flex">
                    <div className="w-1/2  flex items-center">
                      Car Icon
                      <h5 className="text-sm text-gray-600 py-3 px-4">
                        Сумма доставки
                      </h5>
                    </div>
                    <h5 className="text-sm py-3 px-4">10 000 сум</h5>
                  </div>
                  <hr className="my-4 mx-2" />
                  <div className="flex">
                    <div className="w-1/2 flex items-center">
                      Sum icon
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
