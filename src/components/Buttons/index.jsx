import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function Button (props) {
    const classes = useStyles();
    const { 
        children,
        icon = '',
        loading = false,
        shape = 'filled',
        position = 'left',
        size = 'medium',
        ...rest 
    } = props

    const getSize = (key) => {
        switch (key) {
            case 'small':
                return {
                    size: 'px-3 py-1',
                    fontSize: 'text-xs'
                }
            case 'medium':
                return {
                    size: 'px-4 py-2',
                    fontSize: 'text-sm'
                }
            case 'large':
                return {
                    size: 'px-6 py-2',
                    fontSize: 'text-base'
                }
        
            default:
                break;
        }
    }

    const getShape = (key) => {
        console.log(key)
        switch (key) {
            case 'filled':
                return { color: 'bg-blue-500 iconColor-filled hover:bg-blue-600' }
            case 'outlined':
                return { color: 'bg-white iconColor-outlined text-gray-900  border hover:bg-gray-200' }
            case 'text':
                return { color: 'bg-white iconColor-text text-gray-900 hover:bg-gray-200' }
        
            default:
                return { color: 'iconColor-filled'};
        }
    }
    return (
        <div>
            <div className="">
                <button
                    type="button"
                    className={`
                        rounded-lg
                        focus:outline-none
                        transition
                        focus:ring focus:border-blue-300 
                        ${getSize(size).size}
                        ${props.disabled ? 'bg-gray-200 cursor-not-allowed' : getShape(shape).color}
                        text-white`
                    } 
                    { ...rest}>
                        <div className="flex justify-around items-center space-x-1">
                            {
                                !loading ? <><div>{icon}</div>
                                <div className={getSize(size).fontSize}>{ children }</div></> : 
                                <div className={classes.root}>
                                <LinearProgress />
                                </div>
                            }
                        </div>
                    </button>
            </div>
        </div>
    )
}