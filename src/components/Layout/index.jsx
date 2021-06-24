

export default function App(props) {
    return (
        <div className="flex bg-background w-full" style={{ minHeight: '100vh', height: 'inherit' }}>
            <div className="flex-none">
                {props.sidebar}
            </div>
            <div className="flex-grow">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}