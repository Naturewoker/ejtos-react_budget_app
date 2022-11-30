import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { dispatch,budget } = useContext(AppContext);
    const localbudget = React.createRef(budget);
     
	const changeBudget = () => {
		dispatch({
			type: 'SET_BUDGET',
			payload: localbudget.current.value,
		});
	}

	return (
		<div className='alert alert-secondary'>
            <label for="budget">Budget: £</label>
            <input
                required='required'
                type='number'
                id='budget'
                ref={localbudget}
                value={budget}
                max="20000"
                step='10'
                style={{ marginLeft: '2rem' , size: 5}}
                onChange={changeBudget}>
            </input>
		</div>
	);
};

export default Budget;
