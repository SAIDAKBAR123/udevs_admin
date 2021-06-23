import Layout from '../components/Layout/index.jsx'
import { Route, Switch, useLocation } from 'react-router-dom'
import dashboardRoutes from '../routes/dashboard-routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Sidebar from '../components/Sidebar/index.jsx'

export default function App() {
    let location = useLocation();
    return (
        <div>
            <Layout sidebar={<Sidebar />}>
                <div className="">
                    <Switch location={location}>
                        {dashboardRoutes.map(el => <Route className="trnns-group" key={el.id} path={el.path} component={el.component} />)}
                    </Switch>
                </div>
            </Layout>
        </div>
    )
}