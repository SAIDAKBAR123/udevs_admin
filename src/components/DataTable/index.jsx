import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/Buttons/index.jsx'
import './index.scss'
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Inter',
        fontWeight: '600'
    },
    body: {
        fontSize: 14,
        fontFamily: 'Inter',
        // minWidth: 200
    },
}))(TableCell);

const icon = <svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66634 2.49998C3.66634 2.94201 3.49075 3.36593 3.17819 3.67849C2.86562 3.99105 2.4417 4.16665 1.99967 4.16665C1.55765 4.16665 1.13372 3.99105 0.821163 3.67849C0.508602 3.36593 0.333008 2.94201 0.333008 2.49998C0.333008 2.05795 0.508602 1.63403 0.821163 1.32147C1.13372 1.00891 1.55765 0.833313 1.99967 0.833313C2.4417 0.833313 2.86562 1.00891 3.17819 1.32147C3.49075 1.63403 3.66634 2.05795 3.66634 2.49998ZM8.66634 2.49998C8.66634 2.94201 8.49075 3.36593 8.17818 3.67849C7.86562 3.99105 7.4417 4.16665 6.99967 4.16665C6.55765 4.16665 6.13372 3.99105 5.82116 3.67849C5.5086 3.36593 5.33301 2.94201 5.33301 2.49998C5.33301 2.05795 5.5086 1.63403 5.82116 1.32147C6.13372 1.00891 6.55765 0.833313 6.99967 0.833313C7.4417 0.833313 7.86562 1.00891 8.17818 1.32147C8.49075 1.63403 8.66634 2.05795 8.66634 2.49998ZM11.9997 4.16665C12.4417 4.16665 12.8656 3.99105 13.1782 3.67849C13.4907 3.36593 13.6663 2.94201 13.6663 2.49998C13.6663 2.05795 13.4907 1.63403 13.1782 1.32147C12.8656 1.00891 12.4417 0.833313 11.9997 0.833313C11.5576 0.833313 11.1337 1.00891 10.8212 1.32147C10.5086 1.63403 10.333 2.05795 10.333 2.49998C10.333 2.94201 10.5086 3.36593 10.8212 3.67849C11.1337 3.99105 11.5576 4.16665 11.9997 4.16665Z" fill="#4094F7"/>
</svg>

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: 'rgba(14, 115, 246, 0.08)',
        },
        borderRadius: '6px'
    },
}))(TableRow);

function createData(...rest) {
    console.log(...rest)
    return { ...rest };
}

const rows = [
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
    { address: 'Ташкент г. Алмазар р. Янги Алмазар у. 51', name: 'Абдумансуров Абдукаххор', phone: '+998 (90) 123-45-67', id: '255024', time : '0:02:36', delever: 'Доставка', price: '1 000 000 сум'},
];

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        borderRadius: '6px'
    },
    stickyHeader: true
});

export default function App() {
    const classes = useStyles();

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
    
            <TableContainer elevation={0} component={Paper} className=" shadow-none rounded-xl">
                <Table elevation={0} className={classes.table} aria-label="customized table">
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
                            <StyledTableRow className={i === 0 ? 'stick-head' : ''} key={row.name + i}>
                                <StyledTableCell align="left"><Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                /></StyledTableCell>
                                  <StyledTableCell component="th" scope="row">
                                    {row.name}<br></br>
                                    <a className=" text-blue-600" href={`tel: ${row.phone}`}>{row.phone}</a>
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.id}</StyledTableCell>
                                <StyledTableCell align="left">{row.time}</StyledTableCell>
                                <StyledTableCell align="left">-</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}<br></br>
                                    <a className=" text-blue-600" href={`tel: ${row.phone}`}>{row.phone}</a>
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.delever}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}</StyledTableCell>
                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                <StyledTableCell className="w-16 border-l" style={{  position: 'sticky' , right: 0, }} align="left">
                                    <Button shape="outlined" icon={icon}></Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
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