import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavigationExperimental, Text } from 'react-native';
import MyVerySimpleNavigator from './MyVerySimpleNavigator';


const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

// const navigationRoute = {
//   key:string,
//   title?:'string'
// }

class BleedingEdgeApplication extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [//array with navigationRoute(s)
          {
            key: 'My Initial Scene'
          },
          {
            key: 'home'
          }], // Starts with only one route.
      },
    };

    // We'll define this function later - hang on
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type) {
    // Extract the navigationState from the current state:
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        // Push a new route, which in our case is an object with a key value.
        // I am fond of cryptic keys (but seriously, keys should be unique)
        const route = {key: 'Route-' + Date.now()};
        // Use the push reducer provided by NavigationStateUtils
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':
        // Pop the current route using the pop reducer.
        console.log('pop')
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. We will only update state if it has changed.
    if (this.state.navigationState !== navigationState) {
      // Always use setState() when setting a new state!
      this.setState({navigationState});
      // If you are new to ES6, the above is equivalent to:
      // this.setState({navigationState: navigationState});
    }
  }

  render() {
    return (
      <MyVerySimpleNavigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}


function mapStateToProps (state) {
  console.log(state, "state from connected APp")
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BleedingEdgeApplication)
