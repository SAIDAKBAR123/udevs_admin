

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import config from '../../config/defaultSettings'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import './index.scss'
  
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
const menu = [
    {
        title: 'Дашборд',
        path: '/home/dashboard',
        isActive: true,
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V13C10 13.55 9.55 14 9 14ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM13 14C12.45 14 12 13.55 12 13V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V13C14 13.55 13.55 14 13 14Z" fill="#4094F7"/>
        </svg>
        
    },
    {
        title: 'Клиенты',
        path: '/home/clients',
        isActive: false,
        icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 7C15.88 7 16.99 5.88 16.99 4.5C16.99 3.12 15.88 2 14.5 2C13.12 2 12 3.12 12 4.5C12 5.88 13.12 7 14.5 7ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM14.5 9C12.67 9 9 9.92 9 11.75V13C9 13.55 9.45 14 10 14H19C19.55 14 20 13.55 20 13V11.75C20 9.92 16.33 9 14.5 9ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H7V11.75C7 10.9 7.33 9.41 9.37 8.28C8.5 8.1 7.66 8 7 8Z" fill="#6E8BB7"/>
        </svg>
        
    },
    {
        title: 'Заказы',
        path: '/home/orders',
        isActive: false,
        icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7.9998H16.21L11.82 1.4298C11.42 0.839805 10.55 0.839805 10.16 1.4298L5.77 7.9998H1C0.45 7.9998 0 8.4498 0 8.9998C0 9.0898 0.00999996 9.1798 0.04 9.2698L2.58 18.5398C2.81 19.3798 3.58 19.9998 4.5 19.9998H17.5C18.42 19.9998 19.19 19.3798 19.43 18.5398L21.97 9.2698L22 8.9998C22 8.4498 21.55 7.9998 21 7.9998ZM10.99 3.7898L13.8 7.9998H8.18L10.99 3.7898ZM11 15.9998C9.9 15.9998 9 15.0998 9 13.9998C9 12.8998 9.9 11.9998 11 11.9998C12.1 11.9998 13 12.8998 13 13.9998C13 15.0998 12.1 15.9998 11 15.9998Z" fill="#6E8BB7"/>
        </svg>
        
    },
    // {
    //     title: 'Выйти',
    //     path: '/auth/login',
    //     isActive: false,
    //     icon: <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    // </svg>
        
    // }
]
const list = [
    {
        title: 'Тарифы',
        path: '/home/dashboard',
        isActive: true,
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V13C10 13.55 9.55 14 9 14ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM13 14C12.45 14 12 13.55 12 13V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V13C14 13.55 13.55 14 13 14Z" fill="#4094F7"/>
        </svg>
        
    },
    {
        title: 'Payme',
        path: '/home/clients',
        isActive: false,
        icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 7C15.88 7 16.99 5.88 16.99 4.5C16.99 3.12 15.88 2 14.5 2C13.12 2 12 3.12 12 4.5C12 5.88 13.12 7 14.5 7ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM14.5 9C12.67 9 9 9.92 9 11.75V13C9 13.55 9.45 14 10 14H19C19.55 14 20 13.55 20 13V11.75C20 9.92 16.33 9 14.5 9ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H7V11.75C7 10.9 7.33 9.41 9.37 8.28C8.5 8.1 7.66 8 7 8Z" fill="#6E8BB7"/>
        </svg>
        
    },
    {
        title: 'Lico',
        path: '/home/orders',
        isActive: false,
        icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7.9998H16.21L11.82 1.4298C11.42 0.839805 10.55 0.839805 10.16 1.4298L5.77 7.9998H1C0.45 7.9998 0 8.4498 0 8.9998C0 9.0898 0.00999996 9.1798 0.04 9.2698L2.58 18.5398C2.81 19.3798 3.58 19.9998 4.5 19.9998H17.5C18.42 19.9998 19.19 19.3798 19.43 18.5398L21.97 9.2698L22 8.9998C22 8.4498 21.55 7.9998 21 7.9998ZM10.99 3.7898L13.8 7.9998H8.18L10.99 3.7898ZM11 15.9998C9.9 15.9998 9 15.0998 9 13.9998C9 12.8998 9.9 11.9998 11 11.9998C12.1 11.9998 13 12.8998 13 13.9998C13 15.0998 12.1 15.9998 11 15.9998Z" fill="#6E8BB7"/>
        </svg>
        
    },
    {
        title: 'Jowi',
        path: '/',
        isActive: false,
        icon: <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
        
    }
]
export default function App () {
    const history = useHistory()
    const [visible, setVisible] = useState(true)
    const toggleSidebar = () => {
        setVisible(prev => !prev)
    }
    const linkTo = (path) => {
        history.push(path)
    }
    return (
        <div className="flex h-screen h-full" style={{ height: '100%' }}>
        <div className="font-body flex flex-col justify-between bg-gray-200 p-3 shadow-lg" style={{ borderRight: '1px solid #f0f3f8'}}>
            <div>
            <ul className="px-auto mb-3 flex" onClick={toggleSidebar}>
                <img src={config.project.logo} alt="asdasd" className="rounded-full items-center mx-auto w-10 h-10" />
            </ul>
            <ul className="space-y-2 text-sm dashboard_list items-center">
                {  
                    menu.map(el => <li key={el.title} onClick={() => linkTo(el.path)}>
                    <BootstrapTooltip title={el.title}>
                        <span className={`${el.isActive?'bg-blue-50':''} flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-blue-50 focus:shadow-outline`}>
                            <span className="text-gray-600">
                                {el.icon}
                            </span>
                            {/* <span>{el.title}</span> */}
                        </span>
                        </BootstrapTooltip>
                    </li>
                )
                }
            </ul>
            </div>
            <div className="flex flex-col items-center space-y-5">
                <ul className="space-y-2 items-end dashboard_list font-body">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99956 20C9.09956 20 9.99956 19.1 9.99956 18H5.99956C5.99956 19.1 6.88956 20 7.99956 20ZM13.9996 14V9C13.9996 5.93 12.3596 3.36 9.49956 2.68V2C9.49956 1.17 8.82956 0.5 7.99956 0.5C7.16956 0.5 6.49956 1.17 6.49956 2V2.68C3.62956 3.36 1.99956 5.92 1.99956 9V14L0.709563 15.29C0.0795632 15.92 0.519563 17 1.40956 17H14.5796C15.4696 17 15.9196 15.92 15.2896 15.29L13.9996 14Z" fill="#6E8BB7"/>
                    </svg>
                </ul>
                <ul className="space-y-2 items-end dashboard_list">
                    <img className="rounded-full cursor-pointer w-10 h-10" src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" alt="iasdafsd"></img> 
                </ul>
            </div>
        </div>
        <div className={`h-screen sidebar shadow-lg bg-white w-60 p-3${visible ? '' : 'inset-0 transform -translate-y-full'}`} style={{ height: '100%', transition: 'all 0.5s', width: visible ? '': '0px'}}>
            <div className="flex justify-between items-center w-full px-3" >
                <span className="items-center">
                    <h3 className="font-bold text-3xl text-gray-700 font-poppins tracking-wide">{config.project.title}</h3>
                </span>
                <span  className="flex items-center mt-1" onClick={() => toggleSidebar()}>
                    <svg width="20" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33333 10H10.5C10.9583 10 11.3333 9.625 11.3333 9.16667C11.3333 8.70833 10.9583 8.33333 10.5 8.33333H1.33333C0.875 8.33333 0.5 8.70833 0.5 9.16667C0.5 9.625 0.875 10 1.33333 10ZM1.33333 5.83333H8C8.45833 5.83333 8.83333 5.45833 8.83333 5C8.83333 4.54167 8.45833 4.16667 8 4.16667H1.33333C0.875 4.16667 0.5 4.54167 0.5 5C0.5 5.45833 0.875 5.83333 1.33333 5.83333ZM0.5 0.833333C0.5 1.29167 0.875 1.66667 1.33333 1.66667H10.5C10.9583 1.66667 11.3333 1.29167 11.3333 0.833333C11.3333 0.375 10.9583 0 10.5 0H1.33333C0.875 0 0.5 0.375 0.5 0.833333ZM14.9167 7.4L12.5167 5L14.9167 2.6C15.2417 2.275 15.2417 1.75 14.9167 1.425C14.5917 1.1 14.0667 1.1 13.7417 1.425L10.75 4.41667C10.425 4.74167 10.425 5.26667 10.75 5.59167L13.7417 8.58333C14.0667 8.90833 14.5917 8.90833 14.9167 8.58333C15.2333 8.25833 15.2417 7.725 14.9167 7.4Z" fill="#5B77A0" />
                    </svg>
                </span>
            </div>
            <ul className="space-y-2 text-sm mt-5 dashboard_list font-body">
                {  
                    list.map(el => <li key={el.title} onClick={() => linkTo(el.path)}>
                        <span className={` flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-blue-50 focus:shadow-outline`}>
                            <span>{el.title}</span>
                        </span>
                    </li>
                )
                }
            </ul>
        </div>
        </div>
    )
}