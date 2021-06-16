import fallbackRoute from '../routes/fallback-routes'
import { Switch, Route } from 'react-router-dom'

export default function App() {
    console.log(fallbackRoute);
    return (
        <div>
           <Switch>
                {fallbackRoute.map(el => 
                    <Route key={el.id} path={el.path} component={el.component}/>)
                }
            </Switch>
        </div>
    )
}