import Wrapper from '../../components/Template/index'
import Card from '../../components/Card/index'
export default function App () {
    return (
        <Wrapper>
            <h2>Cards</h2>
            <div className="flex space-x-4">
                <Card className={'shadow-md'} />
                <Card className={'shadow-lg'} />
                <Card className={'shadow-xl'} />
                <Card className={'shadow-2xl'} />
            </div>
        </Wrapper>
    )
}