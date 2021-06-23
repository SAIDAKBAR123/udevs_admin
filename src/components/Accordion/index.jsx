import { useState, useEffect } from "react"

export default function Accordion (props) {
    const {
        id,
        width,
        style,
        border,
        weight,
        expanded,
        className,
        summary = '',
        details = '',
        filled = false,
        disabled = false,
        size = 'medium',
        onChange = function() {}
        // children
    } = props

    // **** USE-HOOKS ****
    const [expand, setExpand] = useState(expanded)

    useEffect(() => {
        setExpand(expanded)
        // onChange(expand)
    }, [expanded])

    // **** EVENTS ****
    const onExpanded = () => {
        if(expanded === undefined) {
            setExpand(old => !old)
        }
        onChange(!expand, id)
    }

    return (
        <div
            style={{ width, ...style }}
            className={`
                w-full
                relative
                overflow-hidden
                ${filled ? 'border border-indigo-200' : ''}
                ${setBorder(border)}
                ${className}
            `}
        >
            <div className={disabled ? "absolute inset-0 z-10 bg-white opacity-70 cursor-not-allowed" : 'invisible'} />
            <div
                onClick={onExpanded}
                className={`
                    flex
                    cursor-pointer
                    items-center
                    border-indigo-200
                    ${filled ? setWeight(weight) : ''}
                    ${expand && filled ? 'border-b' : ''}
                    ${setSize(size)}
                `}
            >
                <span className={`${expand ? 'rotate-90' : 'rotate-0'} transform mr-3.5 transition duration-300 ease-in-out`}>
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5L4 4L0.5 7.5" stroke="#252C32"/>
                    </svg>
                </span>
                {RenderSummary(summary)}
            </div>
            <div style={{ transition: 'all .2s'}} className={`${expand ? 'h-auto ' + setSize(size) : 'h-0'} overflow-hidden transform transition duration-300 ease-in-out`}>
                {RenderDetails(details)}
            </div>
        </div>
    )
}

function setSize(size) {
    switch (size) {
        case 'large':
            return 'py-2 px-3.5'
        case 'medium':
            return 'py-1 px-3.5'
        case 'small':
            return 'py-0 px-3.5'
        default:
            return 'py-1 px-3.5'
    }
}

function setBorder (borderType) {
    switch (borderType) {
        case 'top':
            return 'border-t rounded-md rounded-t-none'
        case 'bottom':
            return 'border-b rounded-md rounded-b-none'
        case 'both':
            return 'border-t border-b rounded-none'
        default:
            return 'rounded-md'
    }
}

function setWeight (weight) {
    switch (weight) {
        case 'bold':
            return 'bg-indigo-200'
        case 'bolder':
            return 'bg-indigo-100'
        default:
            return 'bg-indigo-50'
    }
}

function RenderSummary (summary) {
    switch(typeof summary) {
        case 'string':
            return <p className="text-base">{summary}</p>
        default:
            return summary
    }
}

function RenderDetails (details) {
    switch(typeof details) {
        case 'string':
            return <p className="text-base">{details}</p>
        default:
            return details
    }
}