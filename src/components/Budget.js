import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget ,dispatch } = useContext(AppContext);

    const handleClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
        
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                    required='required'
                    type='number'
                    min='1660'
                    max='20000'
                    step='10'
                    id='budget'
                    value={budget}
                    onChange={(event) => handleClick(event.target.value)}>
                   </input>
        </div>
    );
};

export default Budget;
