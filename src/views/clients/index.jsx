import { useHistory } from "react-router-dom";
import TableHeader from "../../components/Header/Header";
import Wrapper from "../../components/Template/index";
import DataTable from "../../components/DataTable/index";
import Input from "../../components/Input/index";
import Button from "../../components/Buttons/index";
import { searchIcon } from "../../components/Header/Header";
import { plusIcon, tableIcon, filterIcon, downloadIcon } from "../orders";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import Checkbox from "@material-ui/core/Checkbox";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextHighlight from "../../components/TextHighlight";
import { StyledPropMenu } from "../orders";
import {
  StyledTableCell,
  StyledTableRow,
  listRender,
  icon,
  useStyles,
} from "../../components/DataTable/index";

//icons
const officeIcon = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="6" fill="#4094F7" fill-opacity="0.15" />
    <path
      d="M49.2149 27.4364V22.8614C49.2149 22.2292 48.7041 21.7185 48.072 21.7185H23.9292C23.297 21.7185 22.7863 22.2292 22.7863 22.8614V27.4364C22.1899 27.4721 21.7149 27.9685 21.7149 28.5756V33.2792C21.7126 34.1437 21.8876 34.9994 22.2292 35.7935C22.3827 36.1578 22.572 36.5006 22.7863 36.8256V49.1471C22.7863 49.7756 23.297 50.2899 23.9292 50.2899H48.072C48.7041 50.2899 49.2149 49.7792 49.2149 49.1471V36.8256C49.4325 36.4998 49.6191 36.1543 49.772 35.7935C50.1113 34.9971 50.2863 34.1506 50.2863 33.2792V28.5756C50.2863 27.9685 49.8113 27.4721 49.2149 27.4364ZM25.3577 24.2899H46.6434V27.4328H25.3577V24.2899ZM38.2863 47.7221H33.7149V44.0042H38.2863V47.7221ZM46.6434 47.7221H40.572V42.8614C40.572 42.2292 40.0613 41.7185 39.4291 41.7185H32.572C31.9399 41.7185 31.4292 42.2292 31.4292 42.8614V47.7221H25.3577V39.0721C25.4613 39.1221 25.5684 39.1721 25.6792 39.2149C26.4756 39.5506 27.322 39.7185 28.1934 39.7185C29.0649 39.7185 29.9077 39.5506 30.7077 39.2149C31.2006 39.0078 31.6649 38.7435 32.0899 38.4256C32.097 38.4221 32.1042 38.4221 32.1113 38.4256C32.5376 38.7449 33.0019 39.01 33.4934 39.2149C34.2899 39.5506 35.1363 39.7185 36.0077 39.7185C36.8792 39.7185 37.722 39.5506 38.522 39.2149C39.0149 39.0078 39.4791 38.7435 39.9042 38.4256C39.9113 38.4221 39.9184 38.4221 39.9256 38.4256C40.3519 38.7449 40.8162 39.01 41.3077 39.2149C42.1041 39.5506 42.9506 39.7185 43.822 39.7185C44.6934 39.7185 45.5363 39.5506 46.3363 39.2149C46.4434 39.1685 46.5506 39.1221 46.6577 39.0721V47.7221H46.6434ZM47.7149 33.2792C47.7149 35.4149 45.9649 37.1471 43.8113 37.1471C42.3542 37.1471 41.0827 36.3578 40.4113 35.1864C40.3077 35.0078 40.122 34.8971 39.9149 34.8971H39.8934C39.6899 34.8971 39.5006 35.0078 39.397 35.1864C39.0544 35.7839 38.5596 36.2801 37.9631 36.6245C37.3665 36.9689 36.6894 37.1492 36.0006 37.1471C34.547 37.1471 33.2792 36.3614 32.6077 35.1935C32.5006 35.0114 32.3077 34.8971 32.097 34.8971C31.8863 34.8971 31.6899 35.0114 31.5863 35.1935C31.2417 35.7888 30.7463 36.2828 30.15 36.6257C29.5538 36.9687 28.8777 37.1485 28.1899 37.1471C26.0363 37.1471 24.2863 35.4149 24.2863 33.2792V30.0221C24.2863 30.0114 24.2934 30.0042 24.3042 30.0042H47.697C47.7077 30.0042 47.7149 30.0114 47.7149 30.0221V33.2792Z"
      fill="#4094F7"
    />
  </svg>
);

const clientsIcon = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="6" fill="#4094F7" fill-opacity="0.15" />
    <path
      d="M34.6667 30.6667C34.6667 31.7276 34.2452 32.745 33.4951 33.4951C32.7449 34.2453 31.7275 34.6667 30.6667 34.6667C29.6058 34.6667 28.5884 34.2453 27.8382 33.4951C27.0881 32.745 26.6667 31.7276 26.6667 30.6667C26.6667 29.6058 27.0881 28.5884 27.8382 27.8383C28.5884 27.0881 29.6058 26.6667 30.6667 26.6667C31.7275 26.6667 32.7449 27.0881 33.4951 27.8383C34.2452 28.5884 34.6667 29.6058 34.6667 30.6667ZM45.3333 30.6667C45.3333 31.192 45.2299 31.7121 45.0289 32.1974C44.8278 32.6827 44.5332 33.1237 44.1618 33.4951C43.7903 33.8665 43.3494 34.1612 42.8641 34.3622C42.3788 34.5632 41.8586 34.6667 41.3333 34.6667C40.808 34.6667 40.2879 34.5632 39.8026 34.3622C39.3173 34.1612 38.8763 33.8665 38.5049 33.4951C38.1335 33.1237 37.8388 32.6827 37.6378 32.1974C37.4368 31.7121 37.3333 31.192 37.3333 30.6667C37.3333 29.6058 37.7548 28.5884 38.5049 27.8383C39.2551 27.0881 40.2725 26.6667 41.3333 26.6667C42.3942 26.6667 43.4116 27.0881 44.1618 27.8383C44.9119 28.5884 45.3333 29.6058 45.3333 30.6667ZM39.9067 45.3334C39.968 44.8974 40 44.4534 40 44C40.0031 41.9052 39.2983 39.8707 38 38.2267C39.0134 37.6416 40.1631 37.3335 41.3333 37.3335C42.5035 37.3335 43.6531 37.6415 44.6666 38.2266C45.68 38.8117 46.5216 39.6533 47.1068 40.6667C47.6919 41.6802 48 42.8298 48 44V45.3334H39.9067ZM30.6667 37.3334C32.4348 37.3334 34.1305 38.0357 35.3807 39.286C36.631 40.5362 37.3333 42.2319 37.3333 44V45.3334H24V44C24 42.2319 24.7024 40.5362 25.9526 39.286C27.2029 38.0357 28.8986 37.3334 30.6667 37.3334Z"
      fill="#4094F7"
    />
  </svg>
);

const bellIcon = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="6" fill="#4094F7" fill-opacity="0.15" />
    <path
      d="M36.0001 49.3333C37.4667 49.3333 38.6667 48.1333 38.6667 46.6666H33.3334C33.3334 48.1333 34.5201 49.3333 36.0001 49.3333ZM44.0001 41.3333V34.6666C44.0001 30.5733 41.8134 27.1466 38.0001 26.24V25.3333C38.0001 24.2266 37.1067 23.3333 36.0001 23.3333C34.8934 23.3333 34.0001 24.2266 34.0001 25.3333V26.24C30.1734 27.1466 28.0001 30.56 28.0001 34.6666V41.3333L26.2801 43.0533C25.4401 43.8933 26.0267 45.3333 27.2134 45.3333H44.7734C45.9601 45.3333 46.5601 43.8933 45.7201 43.0533L44.0001 41.3333Z"
      fill="#4094F7"
    />
  </svg>
);

const courierIcon = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="6" fill="#4094F7" fill-opacity="0.15" />
    <path
      d="M45.2267 28.0134C44.96 27.2267 44.2133 26.6667 43.3333 26.6667H28.6667C27.7867 26.6667 27.0533 27.2267 26.7733 28.0134L24.1467 35.5734C24.0533 35.8534 24 36.1467 24 36.4534V46C24 47.1067 24.8933 48 26 48C27.1067 48 28 47.1067 28 46V45.3334H44V46C44 47.0934 44.8933 48 46 48C47.0933 48 48 47.1067 48 46V36.4534C48 36.16 47.9467 35.8534 47.8533 35.5734L45.2267 28.0134ZM28.6667 41.3334C27.56 41.3334 26.6667 40.44 26.6667 39.3334C26.6667 38.2267 27.56 37.3334 28.6667 37.3334C29.7733 37.3334 30.6667 38.2267 30.6667 39.3334C30.6667 40.44 29.7733 41.3334 28.6667 41.3334ZM43.3333 41.3334C42.2267 41.3334 41.3333 40.44 41.3333 39.3334C41.3333 38.2267 42.2267 37.3334 43.3333 37.3334C44.44 37.3334 45.3333 38.2267 45.3333 39.3334C45.3333 40.44 44.44 41.3334 43.3333 41.3334ZM26.6667 34.6667L28.36 29.5734C28.5467 29.04 29.0533 28.6667 29.6267 28.6667H42.3733C42.9467 28.6667 43.4533 29.04 43.64 29.5734L45.3333 34.6667H26.6667Z"
      fill="#4094F7"
    />
  </svg>
);

//data

const rows = [
  {
    name: "Cody Fisher",
    phoneNumber: "(907) 555-0101",
    status: "Активный",
  },
  {
    name: "Ronald Richards",
    phoneNumber: "(319) 555-0115",
    status: "Не активный",
  },
  {
    name: "Devon Lane",
    phoneNumber: "(684) 555-0102",
    status: "Активный",
  },
  {
    name: "Kathryn Murphy",
    phoneNumber: "(252) 555-0126",
    status: "Не активный",
  },
  {
    name: "Darrel Steward",
    phoneNumber: "(302) 555-0107",
    status: "Не активный",
  },
  {
    name: "Dianne Russell",
    phoneNumber: "(219) 555-0114",
    status: "Активный",
  },
  {
    name: "Jane Cooper",
    phoneNumber: "(603) 555-0123",
    status: "Активный",
  },
  {
    name: "Eleanor Pena",
    phoneNumber: "(270) 555-0117",
    status: "Активный",
  },
  {
    name: "Kristin Watson",
    phoneNumber: "(205) 555-0100",
    status: "Не активный",
  },
  {
    name: "Robert Fox",
    phoneNumber: "(209) 555-0104",
    status: "Не активный",
  },
];

export default function App() {
  const [dropList, setDropList] = useState(null);
  const classes = useStyles();

  const history = useHistory();
  console.log(history);
  return (
    <div>
      <TableHeader
        title="Клиенты"
        right={[
          <Button icon={plusIcon} shape="text" color="success">
            Добавить
          </Button>,
        ]}
      >
        <div className="bg-gray-50 h-14 w-full flex items-center font-body">
          <div className="flex justify-between w-full items-center px-4">
            <div className="flex w-4/12">
              <div className="text-md font-semibold w-4/5 px-3">
                <Input icon={searchIcon} placeholder="Поиск..."></Input>
              </div>
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
              <Button shape="text" color="dark" icon={filterIcon}>
                Фильтр
              </Button>
              <Button shape="text" color="dark" icon={downloadIcon}>
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </TableHeader>
      <div className="flex justify-center items-center gap-x-4 p-4">
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">24</div>
            <div className="text-grey text-sm">Филиалы</div>
          </div>
          <div className="w-auto">{officeIcon}</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">110,823</div>
            <div className="text-grey text-sm">Клиенты</div>
          </div>
          <div className="w-auto">{clientsIcon}</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">110,823</div>
            <div className="text-grey text-sm">Подписчики</div>
          </div>
          <div className="w-auto">{bellIcon}</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">75</div>
            <div className="text-grey text-sm">Курьеры</div>
          </div>
          <div className="w-auto">{courierIcon}</div>
        </div>
      </div>
      <div className="flex px-4 py-2">
        <TableContainer
          elevation={0}
          component={Paper}
          className=" shadow-none rounded-xl"
        >
          <Table
            elevation={0}
            className={classes.table}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow className="text-black font-body">
                <StyledTableCell>Название</StyledTableCell>
                <StyledTableCell align="center">Номер телефона</StyledTableCell>
                <StyledTableCell align="left">Статус</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow
                  className={i === 0 ? "stick-head" : ""}
                  key={row.name + i}
                >
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextHighlight
                      className="w-1/2"
                      color={row.status === "Активный" ? "green" : "red"}
                    >
                      {row.status}
                    </TextHighlight>
                  </StyledTableCell>

                  <StyledTableCell
                    className="w-16 border-l"
                    style={{ position: "sticky", right: 0 }}
                    align="left"
                  >
                    <Button
                      shape="text"
                      icon={icon}
                      onClick={(e) => setDropList(e.currentTarget)}
                    ></Button>
                    <StyledPropMenu
                      anchorEl={dropList}
                      open={Boolean(dropList)}
                      onClose={() => setDropList(null)}
                    >
                      <div className="flex flex-col divide-y font-body text-sm">
                        {listRender.map((el) => (
                          <div className="flex w-full cursor-pointer py-3">
                            <div className="mx-2">{el.icon}</div>
                            <div className="my-auto mx-2">{el.title}</div>
                          </div>
                        ))}
                      </div>
                    </StyledPropMenu>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    // <Wrapper header="UI component">
    //   <DataTable dataSource={[]} columns={[]} pagination={"5"} />
    // </Wrapper>
  );
}
