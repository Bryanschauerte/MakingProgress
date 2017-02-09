import React, { Component } from 'react';
import {
  NavigationExperimental,
  View,
  Text,
  StyleSheet,

  PixelRatio
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Landing from './containers/Landing';
import Goals from './containers/Goals';
import NewAddition from './containers/NewAddition';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class BaseNavigator extends Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push',null);
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop', null);
    this._goToGoals = this.props.onNavigationChange.bind(null, 'goTo', 'Goals');
    this._goToLanding = this.props.onNavigationChange.bind(null, 'goTo', 'Landing');
    this._goToHome = this.props.onNavigationChange.bind(null, 'goTo', 'Home');
    this._goToNewAddition = this.props.onNavigationChange.bind(null, 'goTo', 'NewAddition');
    this._renderScene = this._renderScene.bind(this);
  }
  _onGoToRoute(destination){

  }

  render() {

    //route here based on this.props.navigationState?
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}//must return reat ele
        renderHeader={this._renderHeader}

      />
    );
  }

  _renderScene(sceneProps) {

    switch(sceneProps.scene.route.key) {

    case 'Home':
      return (<View><Text>Home</Text></View>);
    case 'Landing':
      return (<Landing route={sceneProps.scene.route}
                sceneProps={sceneProps}
                onPushRoute={this._onPushRoute}
                onPopRoute={this._onPopRoute}
                goToGoals={this._goToGoals}
                goToHome= {this._goToHome}
                goToNewAddition= {this._goToNewAddition}
                onExit={this.props.onExit}
              />
              );
  case 'Goals':
    return (<Goals
              sceneProps={sceneProps}
              route={sceneProps.scene.route}
              onPushRoute={this._onPushRoute}
              onPopRoute={this._onPopRoute}
              goToLanding={this._goToLanding}
              goToHome= {this._goToHome}
              goToNewAddition= {this._goToNewAddition}
              onExit={this.props.onExit}
            />
  );
  case 'NewAddition':
    return (
      <NewAddition
        sceneProps={sceneProps}
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        goToLanding={this._goToLanding}
        goToHome= {this._goToHome}
        onExit={this.props.onExit}
      />
    );
      default:
      return (
        <View><Text>view not found</Text></View>
      );
  }

  }
  _renderHeader = (sceneProps) => {
  return (
    <HeaderComponent
      // navigate={this._navigate}
      onPopRoute={this._onPopRoute}
      {...sceneProps}
    />
  )
}
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    marginTop: 64
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});
