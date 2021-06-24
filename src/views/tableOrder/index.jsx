import Button from '../../components/Buttons/index'
import TableHeader from '../../components/Header/Header.jsx'
import TabBody from '../../components/Tab/TabBody.jsx'


export default function App () {
    return (
        <div>
            <TableHeader />
            <div className="mx-4 mt-3 rounded-lg p-3 bg-white"><TabBody /></div>
        </div>
    )
}