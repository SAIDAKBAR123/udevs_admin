import { useHistory } from 'react-router-dom'
import  { Button } from '@material-ui/core'
import logo from '../../assets/icons/logo_blue.png'

export default function App ({ children }) {
    const history = useHistory()

    const linkTo = (path) => {
        history.push(path)
    }
    return (
        <div className="flex flex-wrap bg-blue-100 w-full" style={{ minHeight: '100vh'}}>
        <div className="w-2/12 bg-white rounded p-3 shadow-lg">
            <div className="flex items-center justify-between space-x-4 p-2 mb-5">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="asdasd" className="rounded-full w-12 h-12" />
                        <h3 className="font-semibold text-4xl text-gray-700 font-poppins tracking-wide">elever</h3>
                        {/* <span className="text-sm tracking-wide flex items-center space-x-1">
                            hello world here
                        </span> */}
                    </div>
                    <div>
                    </div>
            </div>
                <ul className="space-y-2 text-sm dashboard_list">
                    <li onClick={() => linkTo('/home/dashboard')}>
                        <span className="flex items-center space-x-3 text-gray-700 p-3 rounded-md font-medium bg-gray-200 hover:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>Dashboard</span>
                        </span>
                    </li>
                    <li onClick={() => linkTo('/notification')}>
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
                    </li>
                </ul>
            </div>

            <div className="w-10/12">
                <div className="p-5 text-gray-500">
                    {children}
                </div>
            </div>
        </div>
    )
}