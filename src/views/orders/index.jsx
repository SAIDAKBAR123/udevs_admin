import Button from "../../components/Buttons/index";
import TableHeader from "../../components/Header/Header.jsx";
import TabBody from "../../components/Tab/TabBody.jsx";
import Input from "../../components/Input/index";
import Dropdown from "../../components/Dropdown";
import Toggle from "../../components/Toggle";
import Menu from "@material-ui/core/Menu";

import { withStyles } from "@material-ui/styles";

import { useState } from "react";
import { useHistory } from "react-router-dom";

//List
const listRender = [
  {
    title: "№",
  },
  {
    title: "Клиент",
  },
  {
    title: "Ид.заказа",
  },
  {
    title: "Таймер",
  },
  {
    title: "Курьер",
  },
  {
    title: "Филиал",
  },
  {
    title: "Тип доставки",
  },
  {
    title: "Цена заказа",
  },
];

export const StyledPropMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "7px 10px",
    fontSize: "12px",
    fontFamily: "Inter",
    marginTop: "14px",
    borderRadius: 6,
    boxShadow: `0px 8px 24px 0px rgba(110, 139, 183, 0.25);
      `,
  },
})((props) => (
  <Menu
    className="scroll_menu_list shadow-lg"
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function App() {
  const [dropList, setDropList] = useState(null);
  const history = useHistory();

  //Header items and buttons
  const tableAndMap = [
    <Button shape="text" color="secondary">
      Таблица
    </Button>,
    <Button shape="text" color="secondary">
      Карта
    </Button>,
  ];

  const actionAndCreate = [
    <Button shape="text">Действия</Button>,
    <Button
      shape="text"
      color="success"
      onClick={() => history.push("/home/orders/create")}
    >
      Создать
    </Button>,
  ];

  return (
    <div>
      <TableHeader left={tableAndMap} right={actionAndCreate}>
        <div className="bg-gray-50 h-14 w-full flex items-center font-body">
          <div className="flex justify-between w-full items-center px-4">
            <div className="flex w-4/12">
              <div className="text-md font-semibold w-4/5 px-3">
                <Input placeholder="Ид. Заказа, Номер, Курьер, Статус, Способ оплаты"></Input>
              </div>
              <div className=""></div>
            </div>
            <div className="flex space-x-1 w-6/12 justify-end">
              <Button
                shape="text"
                color="dark"
                onClick={(e) => setDropList(e.currentTarget)}
              >
                Столбцы
              </Button>
              <StyledPropMenu
                id="customized-menu"
                anchorEl={dropList}
                keepMounted
                className="shadow-lg"
                open={Boolean(dropList)}
                onClose={() => setDropList(null)}
              >
                <div className="mx-1 mb-2 divide-x">
                  <Input className="px-2 py-1" placeholder="Поиск..."></Input>
                </div>
                <hr />
                <div className="flex flex-col divide-y font-body text-sm">
                  {listRender.map((el) => (
                    <div className="flex w-full cursor-pointer py-3 justify-between px-2">
                      <div>{el.title}</div>

                      <div>
                        <Toggle height="26px" width="52px" />
                      </div>
                    </div>
                  ))}
                </div>
              </StyledPropMenu>
              <Dropdown>
                <Button shape="text" color="dark">
                  Фильтр
                </Button>
              </Dropdown>
              <Button shape="text" color="dark">
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </TableHeader>
      <div className="mx-4 mt-3 rounded-lg p-3 bg-white">
        <TabBody />
      </div>
    </div>
  );
}
