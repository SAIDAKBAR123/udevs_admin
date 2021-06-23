import BreadCrumb from '../Breadcrumb/index.jsx'
export default function App(props) {
    return (
        <div className="white w-full p-4 font-body">
            <div className="font-body bg-white p-4 rounded-md">
                <div><BreadCrumb items={props.directory ? props.directory : [{ title: 'Дашборд' }, { title: 'Клиенты' }, { title: 'Заказы' }]} /></div>
                <hr></hr>
                <div className="py-4 font-semibold text-xl rounded bg-white">{props.header}</div>
                <div className="">{props.children}</div>
            </div>
        </div>
    )
}