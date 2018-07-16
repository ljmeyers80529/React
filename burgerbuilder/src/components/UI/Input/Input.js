import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let InputElement = null;
    let errorText = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
        errorText = <p className={classes.InvalidText}>Plese enter the correct information.</p>
    }

    switch (props.elementType) {
        case ('input'):
            InputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value} />;
            break;
        case ('textarea'):
            InputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>;
            break;
            case ('select'):
            InputElement = (<select 
                className={inputClasses.join(' ')}
                onChange={props.changed}
                value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
                </select>
                );
            break;
        default:
            InputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>;
    }

    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {InputElement}
        {errorText}
    </div>
    );
}

export default input;