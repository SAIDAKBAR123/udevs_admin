import Layout from '../components/layout/index.jsx'
import Navbar from '../components/navbar/index.jsx'
import { Route, Switch, useLocation } from 'react-router-dom'
import dashboardRoutes from '../routes/dashboard-routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import  Breadcrumbs from '../components/breadcrumb/index.jsx'
 
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
        <Layout >
            <Navbar >
                <div className="w-full flex justify-between items-center px-1">
                    <div className=" bg-red"><Breadcrumbs items={list}/></div>
                    <div className=" bg-indigo flex text-md items-center">
                        <img src="https://sefon.pro/img/artist_photos/inna.jpg" className=" h-8 rounded-full" alt="gd" />
                        <span className="pl-2">Saidakbar</span> 
                    </div>
                </div>
            </Navbar>
            <TransitionGroup>
                <CSSTransition 
                     key={location.key}
                    classNames="fade"
                    timeout={100}
                    >
                    <Switch location={location}>
                        {dashboardRoutes.map(el => <Route className="trnns-group" key={el.id} path={el.path} component={el.component}/>)}
                    </Switch>
            </CSSTransition>
            </TransitionGroup>
        </Layout>

    )
}