import config from '../../config/defaultSettings'
export default function App(props) {
    return (
        <div className="w-full h-16 bg-white p-2 flex align-center sticky top-0 shadow-md">
                <div className="w-full flex justify-between items-center px-1">
                    <div className="bg-red w-2/12">
                        <div className="flex justify-between items-center w-full">
                            <span className="flex justify-between items-center">
                                <img src={config.project.logo} alt="asdasd" className="rounded-full w-10 h-10" />
                                <h3 className="font-bold pl-3 text-2xl text-gray-700 font-poppins tracking-wide">{config.project.title}</h3>
                            </span>
                            <span className="flex items-center mr-5">
                                <svg width="20" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33333 10H10.5C10.9583 10 11.3333 9.625 11.3333 9.16667C11.3333 8.70833 10.9583 8.33333 10.5 8.33333H1.33333C0.875 8.33333 0.5 8.70833 0.5 9.16667C0.5 9.625 0.875 10 1.33333 10ZM1.33333 5.83333H8C8.45833 5.83333 8.83333 5.45833 8.83333 5C8.83333 4.54167 8.45833 4.16667 8 4.16667H1.33333C0.875 4.16667 0.5 4.54167 0.5 5C0.5 5.45833 0.875 5.83333 1.33333 5.83333ZM0.5 0.833333C0.5 1.29167 0.875 1.66667 1.33333 1.66667H10.5C10.9583 1.66667 11.3333 1.29167 11.3333 0.833333C11.3333 0.375 10.9583 0 10.5 0H1.33333C0.875 0 0.5 0.375 0.5 0.833333ZM14.9167 7.4L12.5167 5L14.9167 2.6C15.2417 2.275 15.2417 1.75 14.9167 1.425C14.5917 1.1 14.0667 1.1 13.7417 1.425L10.75 4.41667C10.425 4.74167 10.425 5.26667 10.75 5.59167L13.7417 8.58333C14.0667 8.90833 14.5917 8.90833 14.9167 8.58333C15.2333 8.25833 15.2417 7.725 14.9167 7.4Z" fill="#5B77A0" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className=" bg-indigo flex text-md items-center">
                        <img src="https://sefon.pro/img/artist_photos/inna.jpg" className=" h-8 rounded-full" alt="gd" />
                        <span className="px-2">{props.user.name}</span> 
                    </div>
                </div>
        </div>
    )
}