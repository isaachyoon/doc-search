import React from 'react';
import Title from './title.jsx';
import Nav from './nav.jsx';


class App extends React.Component {

	constructor(props){
		super(props)
	}

   render() {
      return (
         <div>
        	 <Title message={this.props.message} />
        	 <Nav/>
         </div>
      );
   }
}

export default App;