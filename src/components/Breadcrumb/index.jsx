const bread = (color = '#B0BABF') => <svg width="18" height="14" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={color} d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H7L9 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2Z"/>
</svg>
const arrow = <svg width="11" height="14" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L5.5 5L1 9.5" stroke="#B0BABF"/>
</svg>


export default function App({ items = [] }) {
    return (
        <div className="flex pb-3">
            {
                items.map((el, i) => <div key={Math.random()} className="flex items-center text-sm">
                    <div
                        key={Math.random()} 
                        className="flex px-2 justify-between rounded items-center w-22 py-1">
                        <span className="pr-1">{ items.length !== i + 1 ? bread() : bread('#4094F7')}</span>
                        <span className="px-1">{el.title}</span>
                        { items.length !== i + 1 ? <div className="mx-2">{arrow}</div> : '' }
                    </div> 
                </div>
                )
            }
        </div>
    )
}