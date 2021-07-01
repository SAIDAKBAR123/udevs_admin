

import { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import config from '../../config/defaultSettings';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "../Avatar/Index"
import Badge from "../Badge/Index"
import './index.scss';
import menu from './menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popup from '../Popup/index'
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: 12,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip placement="right" arrow classes={classes} {...props} />;
}


export default function App() {
    const [anchorEl, setAnchorEl] = useState(false);
    // **** USE-HOOKS ****
    const history = useHistory()
    const [visible, setVisible] = useState(false)
    const [selectedList, setSelectedList] = useState([])
    const toggleSidebar = () => setVisible(prev => !prev)


    useEffect(() => {
        console.log(menu, history)
        if (menu.length) {
            menu.forEach(el => {
                const fatherPathname = el.path.split('/')[2]
                if (history.location.pathname.includes(fatherPathname)) { // el.path === history.location.pathname
                    if (el.children && el.children.length) {
                        setSelectedList(el.children)
                        setVisible(prev => true)
                    }
                }
            })
        }
    }, [history])

    // **** FUNCTOINS ****
    const linkTo = (item) => {
        console.log(item)
        if (item.isChild) {
            setVisible(prev => true)
            history.replace(item.path)
            return
        }
        if (item.children && item.children.length) {
            setVisible(prev => true)
            setSelectedList(item.children)
            return
        }
        // setSelectedList([])
        setVisible(prev => false)
        return item.path
    }
    
    // **** COMPONENTS ****
    const RenderSidebarItems = ({ items }) => {
        useEffect(() => {
            console.log('sidebar')
            // setVisible(true)
        }, [])

        return (
            <ul className="space-y-2 text-sm mt-5 dashboard_list font-body">
                {items.map(el => (
                    <li key={el.title}>
                        <NavLink activeClassName='is-active' onClick={() => linkTo(el)} to={el.path}>
                            <span className={`spanITem flex items-center space-x-3 text-gray-700 p-3 hover:text-black rounded-md font-medium hover:bg-background_2 focus:shadow-outline`}>
                                <span>{el.title}</span>
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
    }
    
    return (
        <div className="flex h-screen h-full" style={{ height: '100%' }}>
            <div className="font-body flex flex-col items-center fixed top-0 bottom-0 left-0 justify-between bg-white" style={{ borderRight: '1px solid rgba(229, 233, 235, 0.75)' }}>
                <div>
                    <ul className="px-auto mb-3 mt-2 flex" onClick={toggleSidebar}>
                        <Avatar size={32} src={config.project.logo} alt="asdasd" className="mx-auto" />
                    </ul>
                    <ul className="space-y-2 w-full text-sm items-center">
                        {
                            menu.map(el => <li key={el.title}>
                                <NavLink exact={true} activeClassName='is-active-sidebar' onClick={() => linkTo(el)} to={el.path}>
                                    <BootstrapTooltip title={el.title}>
                                        <span className={`active-sidebar w-14 h-14 flex items-center justify-center space-x-2 text-gray-700 p-0 rounded-md`}>
                                            <span className="text-gray-600 flex items-center">
                                                {el.icon}
                                            </span>
                                            {/* <span>{el.title}</span> */}
                                        </span>
                                    </BootstrapTooltip>
                                </NavLink>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className="flex flex-col items-center space-y-5">
                    <ul
                        className="space-y-2 items-end dashboard_list font-body transition hover:text-white ease-in-out transform hover:rotate-12 cursor-pointer">
                        <NavLink activeClassName='is-active-profile' to="/home/profile">
                            <Badge badgeContent={12} max={10}>
                                <svg width="16" className="profile-icon" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99956 20C9.09956 20 9.99956 19.1 9.99956 18H5.99956C5.99956 19.1 6.88956 20 7.99956 20ZM13.9996 14V9C13.9996 5.93 12.3596 3.36 9.49956 2.68V2C9.49956 1.17 8.82956 0.5 7.99956 0.5C7.16956 0.5 6.49956 1.17 6.49956 2V2.68C3.62956 3.36 1.99956 5.92 1.99956 9V14L0.709563 15.29C0.0795632 15.92 0.519563 17 1.40956 17H14.5796C15.4696 17 15.9196 15.92 15.2896 15.29L13.9996 14Z" fill="#6E8BB7" />
                                </svg>
                            </Badge>
                        </NavLink>
                    </ul>
                    <ul style={{ transition: 'all 0.3s', }} className="space-y-2 items-end dashboard_list transition ease-in-out transform">
                        <div onClick={(e) => setAnchorEl(prev => !prev)} >
                            <Avatar aria-controls="simple-menu" size={40} src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" alt="iasdafsd" />
                        </div>
                        <Popup isOpen={anchorEl} bottom={4} left={5} onClose={() => setAnchorEl(prev => !prev)}>
                            helo world helo world helo world
                        </Popup>
                        {/* {anchorEl ? <div className="h-32 rounded p-2 shadow-2xl w-40 bg-background absolute left-16 bottom-12 z-10">Set cont</div> : '' } */}
                    </ul>
                </div>
            </div>
            <div className={`h-screen sidebar bg-white w-60 ${visible ? 'p-3' : 'inset-0 transform -translate-x-4 overflow-hidden'}`} style={{
                height: '100%',
                marginLeft: 49,
                transition: 'all 0.3s',
                width: visible ? '' : '0px',
                opacity: visible ? '1' : '0'
            }}>
                <div className="flex justify-between items-center w-full px-3" >
                    <span className="items-center">
                        <h3 className="font-bold text-3xl text-gray-700 font-poppins tracking-wide">{config.project.title}</h3>
                    </span>
                    <span className="flex items-center mt-1 cursor-pointer" onClick={() => toggleSidebar()}>
                        <svg width="20" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33333 10H10.5C10.9583 10 11.3333 9.625 11.3333 9.16667C11.3333 8.70833 10.9583 8.33333 10.5 8.33333H1.33333C0.875 8.33333 0.5 8.70833 0.5 9.16667C0.5 9.625 0.875 10 1.33333 10ZM1.33333 5.83333H8C8.45833 5.83333 8.83333 5.45833 8.83333 5C8.83333 4.54167 8.45833 4.16667 8 4.16667H1.33333C0.875 4.16667 0.5 4.54167 0.5 5C0.5 5.45833 0.875 5.83333 1.33333 5.83333ZM0.5 0.833333C0.5 1.29167 0.875 1.66667 1.33333 1.66667H10.5C10.9583 1.66667 11.3333 1.29167 11.3333 0.833333C11.3333 0.375 10.9583 0 10.5 0H1.33333C0.875 0 0.5 0.375 0.5 0.833333ZM14.9167 7.4L12.5167 5L14.9167 2.6C15.2417 2.275 15.2417 1.75 14.9167 1.425C14.5917 1.1 14.0667 1.1 13.7417 1.425L10.75 4.41667C10.425 4.74167 10.425 5.26667 10.75 5.59167L13.7417 8.58333C14.0667 8.90833 14.5917 8.90833 14.9167 8.58333C15.2333 8.25833 15.2417 7.725 14.9167 7.4Z" fill="#5B77A0" />
                        </svg>
                    </span>
                </div>
                <RenderSidebarItems items={selectedList} />
            </div>
        </div>
    )
}
