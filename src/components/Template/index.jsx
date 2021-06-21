import BreadCrumb from '../Breadcrumb/index.jsx'
export default function App(props) {
    return (
        <div className="rounded bg-white white w-full p-3 font-body">
            <div className="font-body">
                <div><BreadCrumb items={props.directory ? props.directory : [{ title: 'Дашборд' }, { title: 'Клиенты' }, { title: 'Заказы' }]} /></div>
                <hr></hr>
                <div className="py-4 font-semibold text-xl rounded bg-white">{props.header}</div>
                <hr></hr>
                <div className="">{props.children}</div>
            </div>
        </div>
    )
}