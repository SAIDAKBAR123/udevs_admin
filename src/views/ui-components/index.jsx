import { useHistory } from 'react-router-dom'
import Wrapper from '../../components/Template/index'

export default function App () {
    const history = useHistory()
    console.log(history)
    return (
        <Wrapper header="UI component">
            <h2>hello</h2>
        </Wrapper>
    )
}