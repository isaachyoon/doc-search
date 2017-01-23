import React from 'react';
import Title from './title.jsx';
import Nav from './nav.jsx';


class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searched: true
		}
		this.search = this.search.bind(this);
	}

	search(event) {
		console.log('printing out searched event', event);
	}

   render() {
      return (
         <div>
        	 <Title message={this.props.message} />
        	 <Nav search = {this.search}/>
         </div>
      );
   }
}

export default App;