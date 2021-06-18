import Layout from '../components/Layout/index.jsx'
import Navbar from '../components/Navbar/index.jsx'
import { Route, Switch, useLocation } from 'react-router-dom'
import dashboardRoutes from '../routes/dashboard-routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Sidebar from '../components/Sidebar/index.jsx'

export default function App() {
    let location = useLocation();
    const list = [
        {
            title: 'Dashboard'
        },
        {
            title: 'users'
        },
        {
            title: 'Sections'
        }
    ]
    return (
        <div>
            <Navbar user={{ name: 'Inna ' }}/>
            <Layout sidebar={<Sidebar />}>
                <div className="p-5">
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={100}
                        >
                            <Switch location={location}>
                                {dashboardRoutes.map(el => <Route className="trnns-group" key={el.id} path={el.path} component={el.component} />)}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </Layout>
        </div>
    )
}