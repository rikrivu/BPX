import './RadioButtonGroup.scss';
import { RadioButtonComponentProps, RadioButtonOption } from './RadioButtonGroupModels';

function RadioButtonGroup (props: RadioButtonComponentProps) {
    
    return (
        props.options.length ?
        <div onChange={props.handleRadioButtonToggle} className="radio-btn-wrapper">

            {
                props.options.map((option: RadioButtonOption) => (
                    <div key={option.id}>
                        <input
                            id={option.id}
                            type="radio"
                            className="radio-input"
                            name="permit"
                            value={option.name}
                            defaultChecked={props.selected === option.name}
                        />
                        <label htmlFor={option.id}>{option.name}</label>
                    </div>
                ))
            }
        
        </div>
        : <div>No Option to show for Radio Group</div>
    );
}

export default RadioButtonGroup;