import Layout from '../components/layout/index.jsx'
import Navbar from '../components/navbar/index.jsx'
import { Route, Switch, useLocation } from 'react-router-dom'
import dashboardRoutes from '../routes/dashboard-routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
 
export default function App() {
    let location = useLocation();
    return (
        <Layout >
            <Navbar >
                <div className="w-full flex justify-between items-center px-1">
                    <div className=" bg-red">1</div>
                    <div className=" bg-indigo">
                        <img src="https://sefon.pro/img/artist_photos/inna.jpg" className=" h-10 rounded-full" alt="" />
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