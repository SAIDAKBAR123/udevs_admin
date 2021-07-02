import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Checkbox from "@material-ui/core/Checkbox";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "../../components/Buttons/index.jsx";
import { StyledPropMenu } from "../../views/orders/index.jsx";
import { useState } from "react";

import "./index.scss";
import TextHighlight from "../TextHighlight/index.jsx";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
    color: "black",
    fontFamily: "Inter",
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
    fontFamily: "Inter",
    // minWidth: 200
  },
}))(TableCell);

//Icons
const refreshIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="#FDF5CA"
    />
    <path
      d="M19.7668 12.2334C18.6802 11.1467 17.1402 10.5201 15.4468 10.6934C13.0002 10.9401 10.9868 12.9267 10.7135 15.3734C10.3468 18.6067 12.8468 21.3334 16.0002 21.3334C18.1268 21.3334 19.9535 20.0867 20.8068 18.2934C21.0202 17.8467 20.7002 17.3334 20.2068 17.3334C19.9602 17.3334 19.7268 17.4667 19.6202 17.6867C18.8668 19.3067 17.0602 20.3334 15.0868 19.8934C13.6068 19.5667 12.4135 18.3601 12.1002 16.8801C11.5402 14.2934 13.5068 12.0001 16.0002 12.0001C17.1068 12.0001 18.0935 12.4601 18.8135 13.1867L17.8068 14.1934C17.3868 14.6134 17.6802 15.3334 18.2735 15.3334H20.6668C21.0335 15.3334 21.3335 15.0334 21.3335 14.6667V12.2734C21.3335 11.6801 20.6135 11.3801 20.1935 11.8001L19.7668 12.2334Z"
      fill="#D29404"
    />
  </svg>
);

const carIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="#F6EBFD"
    />
    <path
      d="M20.6133 12.0066C20.48 11.6133 20.1067 11.3333 19.6667 11.3333H12.3333C11.8933 11.3333 11.5267 11.6133 11.3867 12.0066L10.0733 15.7866C10.0267 15.9266 10 16.0733 10 16.2266V20.9999C10 21.5533 10.4467 21.9999 11 21.9999C11.5533 21.9999 12 21.5533 12 20.9999V20.6666H20V20.9999C20 21.5466 20.4467 21.9999 21 21.9999C21.5467 21.9999 22 21.5533 22 20.9999V16.2266C22 16.0799 21.9733 15.9266 21.9267 15.7866L20.6133 12.0066ZM12.3333 18.6666C11.78 18.6666 11.3333 18.2199 11.3333 17.6666C11.3333 17.1133 11.78 16.6666 12.3333 16.6666C12.8867 16.6666 13.3333 17.1133 13.3333 17.6666C13.3333 18.2199 12.8867 18.6666 12.3333 18.6666ZM19.6667 18.6666C19.1133 18.6666 18.6667 18.2199 18.6667 17.6666C18.6667 17.1133 19.1133 16.6666 19.6667 16.6666C20.22 16.6666 20.6667 17.1133 20.6667 17.6666C20.6667 18.2199 20.22 18.6666 19.6667 18.6666ZM11.3333 15.3333L12.18 12.7866C12.2733 12.5199 12.5267 12.3333 12.8133 12.3333H19.1867C19.4733 12.3333 19.7267 12.5199 19.82 12.7866L20.6667 15.3333H11.3333Z"
      fill="#C479F3"
    />
  </svg>
);

const editIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="#E3EFFE"
    />
    <path
      d="M10 19.64V21.6666C10 21.8533 10.1467 22 10.3333 22H12.36C12.4467 22 12.5333 21.9666 12.5933 21.9L19.8733 14.6266L17.3733 12.1266L10.1 19.4C10.0333 19.4666 10 19.5466 10 19.64ZM21.8067 12.6933C22.0667 12.4333 22.0667 12.0133 21.8067 11.7533L20.2467 10.1933C19.9867 9.93329 19.5667 9.93329 19.3067 10.1933L18.0867 11.4133L20.5867 13.9133L21.8067 12.6933Z"
      fill="#4094F7"
    />
  </svg>
);

const cancelIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="#FEE8E6"
    />
    <path
      d="M20.2 11.8066C19.94 11.5466 19.52 11.5466 19.26 11.8066L16 15.06L12.74 11.8C12.48 11.54 12.06 11.54 11.8 11.8C11.54 12.06 11.54 12.48 11.8 12.74L15.06 16L11.8 19.26C11.54 19.52 11.54 19.94 11.8 20.2C12.06 20.46 12.48 20.46 12.74 20.2L16 16.94L19.26 20.2C19.52 20.46 19.94 20.46 20.2 20.2C20.46 19.94 20.46 19.52 20.2 19.26L16.94 16L20.2 12.74C20.4533 12.4866 20.4533 12.06 20.2 11.8066Z"
      fill="#F76659"
    />
  </svg>
);

const checkIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="#DDF6F1"
    />
    <path
      d="M14.0001 18.7799L11.6868 16.4665C11.4268 16.2065 11.0068 16.2065 10.7468 16.4665C10.4868 16.7265 10.4868 17.1465 10.7468 17.4065L13.5334 20.1932C13.7934 20.4532 14.2134 20.4532 14.4734 20.1932L21.5268 13.1399C21.7868 12.8799 21.7868 12.4599 21.5268 12.1999C21.2668 11.9399 20.8468 11.9399 20.5868 12.1999L14.0001 18.7799Z"
      fill="#1AC19D"
    />
  </svg>
);

const icon = (
  <svg
    width="14"
    height="5"
    viewBox="0 0 14 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.66634 2.49998C3.66634 2.94201 3.49075 3.36593 3.17819 3.67849C2.86562 3.99105 2.4417 4.16665 1.99967 4.16665C1.55765 4.16665 1.13372 3.99105 0.821163 3.67849C0.508602 3.36593 0.333008 2.94201 0.333008 2.49998C0.333008 2.05795 0.508602 1.63403 0.821163 1.32147C1.13372 1.00891 1.55765 0.833313 1.99967 0.833313C2.4417 0.833313 2.86562 1.00891 3.17819 1.32147C3.49075 1.63403 3.66634 2.05795 3.66634 2.49998ZM8.66634 2.49998C8.66634 2.94201 8.49075 3.36593 8.17818 3.67849C7.86562 3.99105 7.4417 4.16665 6.99967 4.16665C6.55765 4.16665 6.13372 3.99105 5.82116 3.67849C5.5086 3.36593 5.33301 2.94201 5.33301 2.49998C5.33301 2.05795 5.5086 1.63403 5.82116 1.32147C6.13372 1.00891 6.55765 0.833313 6.99967 0.833313C7.4417 0.833313 7.86562 1.00891 8.17818 1.32147C8.49075 1.63403 8.66634 2.05795 8.66634 2.49998ZM11.9997 4.16665C12.4417 4.16665 12.8656 3.99105 13.1782 3.67849C13.4907 3.36593 13.6663 2.94201 13.6663 2.49998C13.6663 2.05795 13.4907 1.63403 13.1782 1.32147C12.8656 1.00891 12.4417 0.833313 11.9997 0.833313C11.5576 0.833313 11.1337 1.00891 10.8212 1.32147C10.5086 1.63403 10.333 2.05795 10.333 2.49998C10.333 2.94201 10.5086 3.36593 10.8212 3.67849C11.1337 3.99105 11.5576 4.16665 11.9997 4.16665Z"
      fill="#4094F7"
    />
  </svg>
);

//List
const listRender = [
  {
    title: "Повторить выставить счет",
    icon: refreshIcon,
  },
  {
    title: "Курьер отменил",
    icon: carIcon,
  },
  {
    title: "Изменить",
    icon: editIcon,
  },
  {
    title: "Отменено",
    icon: cancelIcon,
  },
  {
    title: "Завершить",
    icon: checkIcon,
  },
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      // backgroundColor: 'rgba(14, 115, 246, 0.08)',
    },
    borderRadius: "6px",
  },
}))(TableRow);

function createData(...rest) {
  console.log(...rest);
  return { ...rest };
}

const rows = [
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
  {
    address: "Ташкент г. Алмазар р. Янги Алмазар у. 51",
    name: "Абдумансуров Абдукаххор",
    phone: "+998 (90) 123-45-67",
    id: "255024",
    time: "0:02:36",
    delever: "Доставка",
    price: "1 000 000 сум",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    borderRadius: "6px",
  },
  stickyHeader: true,
});

export default function App() {
  const classes = useStyles();
  const [dropList, setDropList] = useState(null);

  // return (
  //         <TableContainer component={Paper}>
  //         <Table className={classes.table} aria-label="simple table">
  //         <TableHead>
  //             <TableRow>
  //             <TableCell style={{ position: 'sticky', left: 0}}>Dessert (100g serving)</TableCell>
  //             <TableCell align="right">Calories</TableCell>
  //             <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //             <TableCell align="right">Calories</TableCell>
  //             <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //             <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //             </TableRow>
  //         </TableHead>
  //         <TableBody>
  //             {rows.map((row) => (
  //             <TableRow  key={row.name}>
  //                 <TableCell style={{ position: 'sticky', left: 0}} component="th" scope="row">
  //                 {row.name}
  //                 </TableCell>
  //                 <TableCell align="right">{row.calories}</TableCell>
  //                 <TableCell align="right">{row.fat}</TableCell>
  //                 <TableCell align="right">{row.carbs}</TableCell>
  //                 <TableCell align="right">{row.protein}</TableCell>
  //                 <TableCell align="right">{row.calories}</TableCell>
  //                 <TableCell align="right">{row.fat}</TableCell>
  //                 <TableCell align="right">{row.carbs}</TableCell>
  //                 <TableCell align="right">{row.protein}</TableCell>
  //                 <TableCell align="right">{row.calories}</TableCell>
  //                 <TableCell align="right">{row.fat}</TableCell>
  //                 <TableCell align="right">{row.carbs}</TableCell>
  //                 <TableCell align="right">{row.protein}</TableCell>
  //             </TableRow>
  //             ))}
  //         </TableBody>
  //         </Table>
  //     </TableContainer>
  // )
  return (
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
            <StyledTableCell>N1</StyledTableCell>
            <StyledTableCell>Клиент</StyledTableCell>
            <StyledTableCell align="left">Ид.заказа</StyledTableCell>
            <StyledTableCell align="left">Таймер</StyledTableCell>
            <StyledTableCell align="left">Курьер</StyledTableCell>
            <StyledTableCell align="left">Филиал</StyledTableCell>
            <StyledTableCell align="left">Тип доставки</StyledTableCell>
            <StyledTableCell align="left">Цена заказа</StyledTableCell>
            <StyledTableCell align="left">Адресс клиента</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow
              className={i === 0 ? "stick-head" : ""}
              key={row.name + i}
            >
              <StyledTableCell align="left">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
                <br></br>
                <a className=" text-blue-600" href={`tel: ${row.phone}`}>
                  {row.phone}
                </a>
              </StyledTableCell>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">
                <TextHighlight color="green">{row.time}</TextHighlight>
              </StyledTableCell>
              <StyledTableCell align="left">-</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
                <br></br>
                <a className=" text-blue-600" href={`tel: ${row.phone}`}>
                  {row.phone}
                </a>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TextHighlight color="orange">{row.delever}</TextHighlight>
              </StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
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
  );
}

// import './index.scss'
// export default function App () {
//     return (
//         <div className="overflow-auto flex">
//         <table id="table-react" align="center" border="1" className="w-full">
//             <thead className="sticky">
//                 <tr>
//                     <th className="sticky">№</th>
//                     <th>Клиент</th>
//                     <th>Ид.заказа</th>
//                     <th>Таймер</th>
//                     <th>Курьер</th>
//                     <th>Филиал</th>
//                     <th>Тип доставки</th>
//                     <th> </th>
//                 </tr>
//             </thead>
//             <tbody align="center">
//                 <tr className="py-3">
//                     <td>Tiger Nixon</td>
//                     <td>System Architect</td>
//                     <td>Edinburgh</td>
//                     <td>61</td>
//                     <td>2011/04/25</td>
//                     <td>$320,800</td>
//                     <td>$320,800</td>
//                 </tr>
//                 <tr className="py-3">
//                     <td>Tiger Nixon</td>
//                     <td>System Architect</td>
//                     <td>Edinburgh</td>
//                     <td>61</td>
//                     <td>2011/04/25</td>
//                     <td>$320,800</td>
//                     <td>$320,800</td>
//                 </tr>
//                 <tr className="py-3">
//                     <td>Tiger Nixon</td>
//                     <td>System Architect</td>
//                     <td>Edinburgh</td>
//                     <td>61</td>
//                     <td>2011/04/25</td>
//                     <td>$320,800</td>
//                     <td>$320,800</td>
//                 </tr>
//             </tbody>
//         </table>
//         <div className="w-12 rounded bg-black h-full flex-stretch">
//                 h
//             </div>
//         </div>
//     )
// }
