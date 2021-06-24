
export default function Card (props) {
    const { children, className, ...rest } = props
    return (
        <div>
            <div {...rest} className={`${className} w-40 h-40`}>
                <div>{children}</div>
            </div>
        </div>
    )
}