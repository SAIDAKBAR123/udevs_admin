const  menu = [
    {
        title: 'Дашборд',
        path: '/home/dashboard',
        isActive: false,
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V13C10 13.55 9.55 14 9 14ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM13 14C12.45 14 12 13.55 12 13V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V13C14 13.55 13.55 14 13 14Z" fill="#6E8BB7"/>
        </svg>,
        children: [
            {
                title: 'Accordion',
                path: '/home/accordion',
                isChild: true,
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V13C10 13.55 9.55 14 9 14ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM13 14C12.45 14 12 13.55 12 13V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V13C14 13.55 13.55 14 13 14Z" fill="#6E8BB7"/>
                </svg>
                
            },
            {
                title: 'Buttons',
                path: '/home/buttons',
                isChild: true,
                icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 7C15.88 7 16.99 5.88 16.99 4.5C16.99 3.12 15.88 2 14.5 2C13.12 2 12 3.12 12 4.5C12 5.88 13.12 7 14.5 7ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM14.5 9C12.67 9 9 9.92 9 11.75V13C9 13.55 9.45 14 10 14H19C19.55 14 20 13.55 20 13V11.75C20 9.92 16.33 9 14.5 9ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H7V11.75C7 10.9 7.33 9.41 9.37 8.28C8.5 8.1 7.66 8 7 8Z" fill="#6E8BB7"/>
                </svg>
                
            },
            {
                title: 'Avatar Stack',
                path: '/home/orders',
                isChild: true,
                icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7.9998H16.21L11.82 1.4298C11.42 0.839805 10.55 0.839805 10.16 1.4298L5.77 7.9998H1C0.45 7.9998 0 8.4498 0 8.9998C0 9.0898 0.00999996 9.1798 0.04 9.2698L2.58 18.5398C2.81 19.3798 3.58 19.9998 4.5 19.9998H17.5C18.42 19.9998 19.19 19.3798 19.43 18.5398L21.97 9.2698L22 8.9998C22 8.4498 21.55 7.9998 21 7.9998ZM10.99 3.7898L13.8 7.9998H8.18L10.99 3.7898ZM11 15.9998C9.9 15.9998 9 15.0998 9 13.9998C9 12.8998 9.9 11.9998 11 11.9998C12.1 11.9998 13 12.8998 13 13.9998C13 15.0998 12.1 15.9998 11 15.9998Z" fill="#6E8BB7"/>
                </svg>
                
            }
        ]
        
    },
    {
        title: 'UI components',
        path: '/home/table',
        isActive: true,
        icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 7C15.88 7 16.99 5.88 16.99 4.5C16.99 3.12 15.88 2 14.5 2C13.12 2 12 3.12 12 4.5C12 5.88 13.12 7 14.5 7ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM14.5 9C12.67 9 9 9.92 9 11.75V13C9 13.55 9.45 14 10 14H19C19.55 14 20 13.55 20 13V11.75C20 9.92 16.33 9 14.5 9ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H7V11.75C7 10.9 7.33 9.41 9.37 8.28C8.5 8.1 7.66 8 7 8Z" fill="#6E8BB7"/>
        </svg>
        
    },
    {
        title: 'Component',
        path: '/home/cs',
        isActive: false,
        icon: <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.333 6.5H14.3413L10.683 1.025C10.3497 0.533333 9.62467 0.533333 9.29967 1.025L5.64134 6.5H1.66634C1.20801 6.5 0.833008 6.875 0.833008 7.33333C0.833008 7.40833 0.841341 7.48333 0.866341 7.55833L2.98301 15.2833C3.17467 15.9833 3.81634 16.5 4.58301 16.5H15.4163C16.183 16.5 16.8247 15.9833 17.0247 15.2833L19.1413 7.55833L19.1663 7.33333C19.1663 6.875 18.7913 6.5 18.333 6.5ZM9.99134 2.99167L12.333 6.5H7.64967L9.99134 2.99167ZM9.99967 13.1667C9.08301 13.1667 8.33301 12.4167 8.33301 11.5C8.33301 10.5833 9.08301 9.83333 9.99967 9.83333C10.9163 9.83333 11.6663 10.5833 11.6663 11.5C11.6663 12.4167 10.9163 13.1667 9.99967 13.1667Z" fill="#6E8BB7"/>
        </svg>
    },
    {
        title: 'Settings',
        path: '/home/settings',
        isActive: false,
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.192 9.81666C15.2254 9.54999 15.2504 9.28332 15.2504 8.99999C15.2504 8.71666 15.2254 8.44999 15.192 8.18332L16.9504 6.80832C17.1087 6.68332 17.1504 6.45832 17.0504 6.27499L15.3837 3.39166C15.2837 3.20832 15.0587 3.14166 14.8754 3.20832L12.8004 4.04166C12.367 3.70832 11.9004 3.43332 11.392 3.22499L11.0754 1.01666C11.0504 0.816657 10.8754 0.666656 10.667 0.666656H7.33369C7.12535 0.666656 6.95035 0.816657 6.92535 1.01666L6.60869 3.22499C6.10035 3.43332 5.63369 3.71666 5.20035 4.04166L3.12535 3.20832C2.93369 3.13332 2.71702 3.20832 2.61702 3.39166L0.950354 6.27499C0.842021 6.45832 0.892021 6.68332 1.05035 6.80832L2.80869 8.18332C2.77535 8.44999 2.75035 8.72499 2.75035 8.99999C2.75035 9.27499 2.77535 9.54999 2.80869 9.81666L1.05035 11.1917C0.892021 11.3167 0.850354 11.5417 0.950354 11.725L2.61702 14.6083C2.71702 14.7917 2.94202 14.8583 3.12535 14.7917L5.20035 13.9583C5.63369 14.2917 6.10035 14.5667 6.60869 14.775L6.92535 16.9833C6.95035 17.1833 7.12535 17.3333 7.33369 17.3333H10.667C10.8754 17.3333 11.0504 17.1833 11.0754 16.9833L11.392 14.775C11.9004 14.5667 12.367 14.2833 12.8004 13.9583L14.8754 14.7917C15.067 14.8667 15.2837 14.7917 15.3837 14.6083L17.0504 11.725C17.1504 11.5417 17.1087 11.3167 16.9504 11.1917L15.192 9.81666ZM9.00035 11.9167C7.39202 11.9167 6.08369 10.6083 6.08369 8.99999C6.08369 7.39166 7.39202 6.08332 9.00035 6.08332C10.6087 6.08332 11.917 7.39166 11.917 8.99999C11.917 10.6083 10.6087 11.9167 9.00035 11.9167Z" fill="#6E8BB7"/>
        </svg>        
        
    }
]

export default menu