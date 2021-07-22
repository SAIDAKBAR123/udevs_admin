// import RCCheckbox from 'rc-checkbox'; 
// import MCheckbox from '@material-ui/core/Checkbox';
import "./index.scss";

export default function Checkbox (props) {
    const {
      text,
      size = 'large',
      error = false,
      disabled = false,
      ...rest
    } = props
    // const { title, ...rest } = props
    return (
        // <div>
        //     <div {...rest} className={`${className} w-40 h-40`}>
        //         <div>{children}</div>
        //     </div>
        // </div>
        <label className={`custom-checkbox_${size} custom-checkbox ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
          {text}
          <input type="checkbox" disabled={disabled}/>
          <span className="checkmark focus:ring-4"></span>
        </label>
    )
}