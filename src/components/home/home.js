import React from 'react';
 import { connect } from 'react-redux'
import { login, logout } from './actionCreators'

 class Home extends React.Component {
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //     counter:this.props.counter
    //     }
    // }
    
    
    
    render(props)

    {
        return(
          <div>
           
          Welcome {props.profile}

          </div>



        );
    }

}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
      profile: state.name
    }
  }
  const mapDispatchToProps = {login }
     export default connect(mapStateToProps,mapDispatchToProps)(Home);
      





