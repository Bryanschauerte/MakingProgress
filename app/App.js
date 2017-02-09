import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavigationExperimental, Text, AsyncStorage } from 'react-native';
import BaseNavigator from './BaseNavigator';
import * as navActions from '../store/navigation/actions/navigation';
import * as goalActions from '../store/goals/actions/goalHandling'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class BleedingEdgeApplication extends Component {
  constructor(props, context) {
    super(props, context);
    this._onNavigationChange = this._onNavigationChange.bind(this);
    this._manageUserData = this._manageUserData.bind(this);
  }

  _onNavigationChange(type, route) {

    switch (type) {
      case 'push':
        this.props.nextRoute();
        break;
      case 'goTo':
        this.props.goTo(route);
        break;

      case 'pop':
        this.props.backRoute();
        break;
    }

  }
  componentDidMount(){

  }
  _manageUserData(type, info){
    switch (type) {
      case 'getOne':
        AsyncStorage.getItem(info.key, this.props.personalize(type, info));
      break;
    case 'getMany':
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
       stores.map((result, i, store) => {
         let key = store[i][0];
         let value = store[i][1];
        });
      });
    });

    break;
    case 'save':
      AsyncStorage.setItem(info.key, JSON.stringify(info));
      break;
      default:

    }
  }
  render() {
    return (
      <BaseNavigator
        navigationState={this.props.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}


function mapStateToProps (state) {

  return {
    navigationState: state.navigation.navigation
  }
}

function mapDispatchToProps (dispatch) {
  return {
    nextRoute: () => dispatch(navActions.nextRoute()),
    pushRoute: (route) => dispatch(navActions.pushRoute(route)),
    backRoute: () => dispatch(navActions.backRoute()),
    goTo:      (route) =>dispatch(navActions.goTo(route)),
    personalize:(type, info) =>dispatch(
      goalActions.populateStoredGoals(type, info)
    )

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BleedingEdgeApplication)
