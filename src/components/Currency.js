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
                <option value='£' name='Pound'>£ Pound</option>
                <option value='$' name='Dollar'>$ Dollar</option>
                <option value='€' name='Euro'>€ Euro</option>
                <option value='Rs' name='Ruppee'>Rs Rupee</option>
            </select>
        </div>
    )
}

export default Currency;