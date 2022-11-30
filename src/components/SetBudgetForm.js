import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SetBudgetForm = (props) => {
	const { dispatch,remaining  } = useContext(AppContext);

	const [budget, setBudget] = useState('');


	const submitEvent = () => {
		dispatch({
			type: 'SET_BUDGET',
			payload: budget,
		});
	}


	return (
		<div>
			<div className='row'>
				
			<div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
					<input
						required='required'
						type='number'
						id='budget'
						value={budget}
						style={{ marginLeft: '2rem' , size: 10}}
						onChange={(event) => setBudget(event.target.value)}>
						</input>

					<button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
						Save
					</button>
				</div>
				</div>
				
		</div>
	);
};

export default SetBudgetForm;
