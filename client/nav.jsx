import React from 'react';
import $ from 'jquery';

var Nav = (props) => {
	console.log('whats in props', props.search)
	return (
		<div>
			<select className = 'searchBar'>
	 			<option> Express </option>
	 			<option> Mongo </option>
	 			<option> React </option>
	 		</select>



	 		<input type='text' placeholder='Search'/>
	 		<button type="text" onClick={(e)=>{return props.search($('input').val())}}>submit</button>


	 	</div>
	)
	//ref={(input)=> this.todo = input}
	//check form
}

export default Nav;