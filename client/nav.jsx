import React from 'react';


var Nav = () => {
	return (
		<div>

	 		<select>
	 			<option> Express </option>
	 			<option> Mongo </option>
	 			<option> React </option>
	 		</select>

	 		<input type='text' value = 'search something'/>
	 		<button type="button">submit</button>


	 	</div>
	)
}

export default Nav;