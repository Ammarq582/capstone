import './form-input.styles.jsx';
import { Group, GroupInput, GroupLabel, ShrinkLabel } from './form-input.styles.jsx';

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <GroupInput {...otherProps}/>
            {label && ( 
                <GroupLabel shrink={otherProps.value.length}>
                    {label}
                </GroupLabel>
            )}
        </Group>
                
    )
}

export default FormInput;