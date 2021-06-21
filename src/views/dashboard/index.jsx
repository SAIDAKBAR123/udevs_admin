import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BreadCrumb from '../../components/Breadcrumb/index.jsx'
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
        fontFamily: 'Inter'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: 'rgba(14, 115, 246, 0.08)',
        },
        borderRadius: '6px'
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('01.03.21', 159, 6.0, 24, 4.0),
    createData('01.03.21', 237, 9.0, 37, 4.3),
    createData('01.03.21', 262, 16.0, 24, 6.0),
    createData('01.03.21', 305, 3.7, 67, 4.3),
    createData('01.03.21', 356, 16.0, 49, 3.9),
    createData('01.03.21', 159, 6.0, 24, 4.0),
    createData('01.03.21', 237, 9.0, 37, 4.3),
    createData('01.03.21', 262, 16.0, 24, 6.0),
    createData('01.03.21', 305, 3.7, 67, 4.3),
    createData('01.03.21', 356, 16.0, 49, 3.9),
    createData('01.03.21', 262, 16.0, 24, 6.0)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        borderRadius: '6px'
    },
});

export default function App() {
    const classes = useStyles();

    return (
        <div style={{ minHeight: '80vh' }} className=" rounded bg-white p-5 shadow-lg font-body">
            <div><BreadCrumb items={[{ title: 'Дашборд'}, {title: 'Клиенты'}, { title: 'Заказы'}]} /></div>
            <hr></hr>
            <div className="py-4 font-semibold text-xl rounded bg-white">Общий отчет</div>
            <hr></hr>
            <div className="py-4 font-semibold text-xl rounded bg-white"></div>
            <TableContainer elevation={0} component={Paper} className=" shadow-none rounded-xl">
                <Table elevation={0} className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow className="text-black font-body">
                            <StyledTableCell>Число</StyledTableCell>
                            <StyledTableCell align="center">Доставка</StyledTableCell>
                            <StyledTableCell align="center">Самовывоз</StyledTableCell>
                            <StyledTableCell align="center">Агрегаторы</StyledTableCell>
                            <StyledTableCell align="center">Бесплатная доставка</StyledTableCell>
                            <StyledTableCell align="center">Отмененные заказы</StyledTableCell>
                            <StyledTableCell align="center">Отдано Кешбек</StyledTableCell>
                            <StyledTableCell align="center">Отменено продано</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <StyledTableRow key={row.name + i}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}