import { useHistory } from "react-router-dom";
import TableHeader from "../../components/Header/Header";
import Wrapper from "../../components/Template/index";
import DataTable from "../../components/DataTable/index";
import Input from "../../components/Input/index";
import Button from "../../components/Buttons/index";
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
          <Button shape="text" color="success">
            Добавить
          </Button>,
        ]}
      >
        <div className="bg-gray-50 h-14 w-full flex items-center font-body">
          <div className="flex justify-between w-full items-center px-4">
            <div className="flex w-4/12">
              <div className="text-md font-semibold w-4/5 px-3">
                <Input placeholder="Поиск..."></Input>
              </div>
            </div>
            <div className="flex space-x-1 w-6/12 justify-end">
              <Button shape="text" color="dark">
                Столбцы
              </Button>
              <Button shape="text" color="dark">
                Фильтр
              </Button>
              <Button shape="text" color="dark">
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
          <div className="w-auto">Office icon</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">110,823</div>
            <div className="text-grey text-sm">Клиенты</div>
          </div>
          <div className="w-auto">Clients icon</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">110,823</div>
            <div className="text-grey text-sm">Подписчики</div>
          </div>
          <div className="w-auto">Bellicon</div>
        </div>
        <div className="w-1/4 bg-white flex h-36 justify-between rounded-md p-8 shadow-lg">
          <div className="w-auto space-y-4">
            <div className="font-bold text-primary text-2xl">75</div>
            <div className="text-grey text-sm">Курьеры</div>
          </div>
          <div className="w-auto">Couriericon</div>
        </div>
      </div>
      <div className="fslex px-4 py-2">
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
