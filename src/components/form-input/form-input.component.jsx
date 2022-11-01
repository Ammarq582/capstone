import './form-input.styles.jsx';
import { Group, GroupInput, GroupLabel, ShrinkLabel } from './form-input.styles.jsx';

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <GroupInput {...otherProps}/>
            {label && (
                otherProps.value.length
                ?
                <ShrinkLabel>{label}</ShrinkLabel>
                : 
                <GroupLabel>{label}</GroupLabel>
                
            )}
        </Group>
                
    )
}

export default FormInput;