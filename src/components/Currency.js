import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const setName = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        })
    }

    return(
        <div className='alert alert-dark'>
            <label htmlfor='Currency-Select'>Currency </label>
            <select className='Currency' id='Currency-Select' onChange={(event) => setName(event.target.value)}>
                <option defaultValue>£ Pound</option>
                <option value='Dollar' name='Dollar'>$ Dollar</option>
                <option value='Euro' name='Euro'>€ Euro</option>
                <option value='Ruppee' name='Ruppee'>R Rupee</option>
            </select>
        </div>
    )
}

export default Currency;