import logo from '../assets/icons/logo_blue.png'

const defaultSetting = {
    baseURL: process.env.REACT_BASE_URL, // base url for whole project
    mode: 'default', // mode => default | light | semi-dark
    avatar: '',
    fixedHeader: true, // sticky header
    fixSiderbar: true, // sticky sidebar
    project: {
        title: 'Udevs',
        logo: logo,
        createdBy: 'Udevs company'
    }

}

document.title = defaultSetting.project.title

export default defaultSetting