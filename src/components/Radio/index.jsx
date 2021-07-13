// import RCCheckbox from 'rc-checkbox'; 
// import MCheckbox from '@material-ui/core/Checkbox';
import "./index.scss";

export default function Checkbox (props) {
    const {
      text,
      size = 'large',
      error = false,
      disabled = false,
      name,
      ...rest
    } = props
    // const { title, ...rest } = props
    return (
        <label className={`custom-radio_${size} custom-radio ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
            {text}
            <input type="radio" disabled={disabled} name={name} />
            <span class="checkmark-radio"></span>
        </label>
    )
}