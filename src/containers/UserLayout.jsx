import authRoute from '../routes/auth-routes'
import { Switch, Route } from 'react-router-dom'

export default function App() {
    console.log(authRoute);
    return (
        <div>
           <Switch>
                {authRoute.map(el => 
                    <Route key={el.id} path={el.path} component={el.component}/>)
                }
            </Switch>
        </div>
    )
}