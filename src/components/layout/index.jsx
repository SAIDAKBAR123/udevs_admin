

export default function App(props) {
    return (
        <div className="flex flex-wrap bg-blue-100 w-full" style={{ minHeight: '100vh' }}>
            <div className="w-2/12 h-full">
                {props.sidebar}
            </div>
            <div className="w-10/12">
                <div className="p-0 text-gray-500">
                    {props.children}
                </div>
            </div>
        </div>
    )
}