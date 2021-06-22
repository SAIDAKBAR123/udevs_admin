import './index.scss'
export default function App () {
    return (
        <div className="overflow-auto flex">
        <table id="table-react" align="center" border="1" className="w-full">
            <thead className="sticky">
                <tr>
                    <th className="sticky">№</th>
                    <th>Клиент</th>
                    <th>Ид.заказа</th>
                    <th>Таймер</th>
                    <th>Курьер</th>
                    <th>Филиал</th>
                    <th>Тип доставки</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody align="center">
                <tr className="py-3">
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>$320,800</td>
                </tr>
                <tr className="py-3">
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>$320,800</td>
                </tr>
                <tr className="py-3">
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>$320,800</td>
                </tr>
            </tbody>
        </table>
        <div className="w-12 rounded bg-black h-full flex-stretch">
                h
            </div>
        </div>
    )
}