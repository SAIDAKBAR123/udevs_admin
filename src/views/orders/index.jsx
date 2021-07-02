import Button from "../../components/Buttons/index";
import TableHeader from "../../components/Header/Header.jsx";
import TabBody from "../../components/Tab/TabBody.jsx";
import Input from "../../components/Input/index";
import Dropdown from "../../components/Dropdown";
import Toggle from "../../components/Toggle";
import Menu from "@material-ui/core/Menu";

import { withStyles } from "@material-ui/styles";

import { searchIcon } from "../../components/Header/Header.jsx";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const filterIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.541571 1.67498C2.4749 4.15831 5.33324 7.83331 5.33324 7.83331L5.33324 12C5.33324 12.9166 6.08324 13.6666 6.9999 13.6666C7.91657 13.6666 8.66657 12.9166 8.66657 12V7.83331C8.66657 7.83331 11.5249 4.15831 13.4582 1.67498C13.8832 1.12498 13.4916 0.333313 12.7916 0.333313L1.1999 0.333313C0.508238 0.333313 0.116571 1.12498 0.541571 1.67498Z"
      fill="#303940"
    />
  </svg>
);

const downloadIcon = (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.166992 12.8333C0.166992 12.6123 0.25479 12.4003 0.41107 12.2441C0.56735 12.0878 0.779312 12 1.00033 12L11.0003 12C11.2213 12 11.4333 12.0878 11.5896 12.2441C11.7459 12.4003 11.8337 12.6123 11.8337 12.8333C11.8337 13.0543 11.7459 13.2663 11.5896 13.4226C11.4333 13.5788 11.2213 13.6666 11.0003 13.6666L1.00033 13.6666C0.779312 13.6666 0.56735 13.5788 0.41107 13.4226C0.25479 13.2663 0.166992 13.0543 0.166992 12.8333ZM2.91116 6.41081C3.06743 6.25459 3.27936 6.16682 3.50033 6.16682C3.7213 6.16682 3.93322 6.25459 4.08949 6.41081L5.16699 7.48831L5.16699 1.16665C5.16699 0.945633 5.25479 0.733671 5.41107 0.577391C5.56735 0.42111 5.77931 0.333313 6.00033 0.333313C6.22134 0.333313 6.4333 0.42111 6.58958 0.577391C6.74586 0.733671 6.83366 0.945633 6.83366 1.16665L6.83366 7.48831L7.91116 6.41081C7.98803 6.33122 8.07999 6.26774 8.18166 6.22406C8.28333 6.18039 8.39268 6.1574 8.50333 6.15644C8.61398 6.15548 8.72371 6.17656 8.82612 6.21846C8.92854 6.26036 9.02158 6.32224 9.09982 6.40048C9.17807 6.47873 9.23994 6.57177 9.28184 6.67418C9.32374 6.7766 9.34483 6.88633 9.34387 6.99698C9.34291 7.10763 9.31992 7.21698 9.27625 7.31865C9.23257 7.42032 9.16908 7.51227 9.08949 7.58915L6.58949 10.0891C6.43322 10.2454 6.2213 10.3331 6.00033 10.3331C5.77936 10.3331 5.56743 10.2454 5.41116 10.0891L2.91116 7.58915C2.75493 7.43287 2.66717 7.22095 2.66717 6.99998C2.66717 6.77901 2.75493 6.56709 2.91116 6.41081Z"
      fill="#252C32"
    />
  </svg>
);

const tableIcon = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33333 6.35L10.5 6.35V15.5H6.33333L6.33333 6.35ZM12.1667 15.5H14.6667C15.5833 15.5 16.3333 14.75 16.3333 13.8333V6.33333L12.1667 6.33333V15.5ZM14.6667 0.5L2.16667 0.5C1.25 0.5 0.5 1.25 0.5 2.16667L0.5 4.66667L16.3333 4.66667V2.16667C16.3333 1.25 15.5833 0.5 14.6667 0.5ZM0.5 13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H4.66667L4.66667 6.33333L0.5 6.33333L0.5 13.8333Z"
      fill="#303940"
    />
  </svg>
);

const tableIconMini = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.8335 0C2.17045 0 1.53457 0.263392 1.06573 0.732233C0.596888 1.20107 0.333496 1.83696 0.333496 2.5V7.5C0.333496 8.16304 0.596888 8.79893 1.06573 9.26777C1.53457 9.73661 2.17045 10 2.8335 10H11.1668C11.8299 10 12.4658 9.73661 12.9346 9.26777C13.4034 8.79893 13.6668 8.16304 13.6668 7.5V2.5C13.6668 1.83696 13.4034 1.20107 12.9346 0.732233C12.4658 0.263392 11.8299 0 11.1668 0H2.8335ZM2.00016 7.5V6.66667H6.16683V8.33333H2.8335C2.61248 8.33333 2.40052 8.24554 2.24424 8.08926C2.08796 7.93297 2.00016 7.72101 2.00016 7.5ZM7.8335 8.33333H11.1668C11.3878 8.33333 11.5998 8.24554 11.7561 8.08926C11.9124 7.93297 12.0002 7.72101 12.0002 7.5V6.66667H7.8335V8.33333ZM7.8335 5H12.0002V3.33333H7.8335V5ZM6.16683 3.33333H2.00016V5H6.16683V3.33333Z"
      fill="#6E8BB7"
    />
  </svg>
);

const mapIcon = (
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.87477 2.04164C2.96879 0.947621 4.45259 0.333008 5.99977 0.333008C7.54694 0.333008 9.03075 0.947621 10.1248 2.04164C11.2188 3.13566 11.8334 4.61946 11.8334 6.16664C11.8334 7.71381 11.2188 9.19762 10.1248 10.2916L5.99977 14.4166L1.87477 10.2916C1.33303 9.74996 0.903298 9.10687 0.610109 8.3991C0.316919 7.69132 0.166016 6.93273 0.166016 6.16664C0.166016 5.40054 0.316919 4.64195 0.610109 3.93418C0.903298 3.22641 1.33303 2.58332 1.87477 2.04164ZM5.99977 7.8333C6.4418 7.8333 6.86572 7.65771 7.17828 7.34515C7.49084 7.03259 7.66644 6.60867 7.66644 6.16664C7.66644 5.72461 7.49084 5.30069 7.17828 4.98813C6.86572 4.67557 6.4418 4.49997 5.99977 4.49997C5.55774 4.49997 5.13382 4.67557 4.82126 4.98813C4.5087 5.30069 4.3331 5.72461 4.3331 6.16664C4.3331 6.60867 4.5087 7.03259 4.82126 7.34515C5.13382 7.65771 5.55774 7.8333 5.99977 7.8333Z"
      fill="#6E8BB7"
    />
  </svg>
);

const plusIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0003 6.83335H6.83366V11C6.83366 11.4584 6.45866 11.8334 6.00033 11.8334C5.54199 11.8334 5.16699 11.4584 5.16699 11V6.83335H1.00033C0.541992 6.83335 0.166992 6.45835 0.166992 6.00002C0.166992 5.54169 0.541992 5.16669 1.00033 5.16669H5.16699V1.00002C5.16699 0.541687 5.54199 0.166687 6.00033 0.166687C6.45866 0.166687 6.83366 0.541687 6.83366 1.00002V5.16669H11.0003C11.4587 5.16669 11.8337 5.54169 11.8337 6.00002C11.8337 6.45835 11.4587 6.83335 11.0003 6.83335Z"
      fill="#1AC19D"
    />
  </svg>
);

const editIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 12.55V15.0833C0.5 15.3167 0.683333 15.5 0.916667 15.5H3.45C3.55833 15.5 3.66667 15.4583 3.74167 15.375L12.8417 6.28334L9.71667 3.15834L0.625 12.25C0.541667 12.3333 0.5 12.4333 0.5 12.55ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
      fill="#4094F7"
    />
  </svg>
);

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

  return (
    <div>
      <TableHeader
        left={[
          <Button shape="text" color="secondary" icon={tableIconMini}>
            Таблица
          </Button>,
          <Button shape="text" color="secondary" icon={mapIcon}>
            Карта
          </Button>,
        ]}
        right={[
          <Button shape="text" icon={editIcon}>
            Действия
          </Button>,
          <Button
            shape="text"
            color="success"
            icon={plusIcon}
            onClick={() => history.push("/home/orders/create")}
          >
            Создать
          </Button>,
        ]}
      >
        <div className="bg-gray-50 h-14 w-full flex items-center font-body">
          <div className="flex justify-between w-full items-center px-4">
            <div className="flex w-4/12">
              <div className="text-md font-semibold w-4/5">
                <Input
                  icon={searchIcon}
                  placeholder="Ид. Заказа, Номер, Курьер, Статус, Способ оплаты"
                ></Input>
              </div>
              <div className=""></div>
            </div>
            <div className="flex space-x-1 w-6/12 justify-end">
              <Button
                shape="text"
                color="dark"
                icon={tableIcon}
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
                  <Input
                    className="px-2 py-1"
                    icon={searchIcon}
                    placeholder="Поиск..."
                  ></Input>
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
                <Button shape="text" color="dark" icon={filterIcon}>
                  Фильтр
                </Button>
              </Dropdown>
              <Button shape="text" color="dark" icon={downloadIcon}>
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
