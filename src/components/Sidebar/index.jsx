

import { useHistory } from 'react-router-dom'

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
    {
        title: 'Выйти',
        path: '/auth/login',
        isActive: false,
        icon: <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
        
    }
]
export default function App () {
    const history = useHistory()
    const linkTo = (path) => {
        history.push(path)
    }
    return (
        <div className="font-body bg-white p-3 shadow-lg h-full w-2/12 fixed">
        <ul className="space-y-2 text-sm dashboard_list">
            {  
                menu.map(el => <li key={el.title} onClick={() => linkTo(el.path)}>
                    <span className={`${el.isActive?'bg-blue-50':''} flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-blue-50 focus:shadow-outline`}>
                        <span className="text-gray-600">
                            {el.icon}
                        </span>
                        <span>{el.title}</span>
                    </span>
                </li>
            )
            }
            {/* <li onClick={() => linkTo('/notification')}>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    </span>
                    <span>Notifications</span>
                </span>
            </li>
            <li>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                    </span>
                    <span>Personal messages</span>
                </span>
            </li>
            <li onClick={() => linkTo('/home/profile')}>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>My profile</span>
                </span>
            </li>
            <li>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </span>
                    <span>My orders</span>
                </span>
            </li>
            <li>
                <span href="asd" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className=" text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span>My wishlist</span>
                </span>
            </li>
            <li>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </span>
                    <span>Settings</span>
                </span>
            </li>
            <li>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <span>Change password</span>
                </span>
            </li>
            <li onClick={() => linkTo('/auth/login')}>
                <span href="#/" className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span>Logout</span>
                </span>
            </li> */}
        </ul>
    </div>
    )
}