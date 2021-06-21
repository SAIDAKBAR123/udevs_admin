

export default function App(props) {
    return (
        <div className="flex bg-blue-100 w-full" style={{ minHeight: '100vh', height: 'inherit' }}>
            <div className="flex-none ">
                {props.sidebar}
            </div>
            <div className="flex-grow">
                <div style={{ minHeight: '84vh' }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}