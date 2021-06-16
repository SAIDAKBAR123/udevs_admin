import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
export default function App () {
    const history = useHistory()
    return ( 
        <div className="h-screen flex">
            <div className="w-7/12 h-screen bg-blue-400"></div>
            <div className="w-5/12 h-screen bg-blue-100 justify-center items-center flex">
                <Button onClick={() => history.push('/home/dashboard')}>Click to continue</Button>
            </div>
        </div>
    )
}