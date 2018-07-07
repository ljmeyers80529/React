import React from 'react';

import BuildControl from './BuildControl';

import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => (
    <div className={classes.buildControls}>
        {controls.map(cntrl => (
            <BuildControl 
                key={cntrl.label} 
                label={cntrl.label}
                added = {() => props.ingredientAdded(cntrl.type)}
                removed = {() => props.ingredientRemoved(cntrl.type)}
                disabled = {props.disabled[cntrl.type]} />
        ))}
    </div>
);

export default buildControls;
