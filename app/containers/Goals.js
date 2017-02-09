import React, { Component } from 'react';
import { connect } from 'react-redux';
import TappableRow from '../presentation/native/TappableRow';
import {
  NavigationExperimental,
  PixelRatio,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;


class Goals extends Component{
  constructor(props, context) {
    super(props, context);
    this._renderCurrentGoals = this._renderCurrentGoals.bind(this);
    this._renderUpCommingGoals = this._renderUpCommingGoals.bind(this);
    this._renderBurndown = this._renderBurndown.bind(this);
  }

    _renderCurrentGoals() {

    }
    _renderUpCommingGoals() {

    }
    _renderBurndown() {

    }


  render(){

    return(
    //   <NavigationCardStack
    //   onNavigateBack={this._onPopRoute}
    //   navigationState={this.props.navigationState}
    //   renderScene={this._renderScene}//must return reat ele
    //   renderHeader={this._renderHeader}
    //
    // />

      <View style={styles.masterContainer}>
        <View style={styles.topContiner}>
          <Text>Top GOALS BABY</Text>
          <TappableRow
            text="Go to landing"
            onPress={this.props.goToLanding}/>
        </View>
        <View style={styles.midContiner}>
          <Text>mid</Text>
          <TappableRow
            text="Go Home"
            onPress={this.props.goToHome}/>
        </View>
        <View style={styles.btmContiner}>
          <Text>Bottom </Text>
          <TappableRow
            text="Go To edit goals"
            onPress={this.props.goToEdit}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  masterContainer:{
    flex:1
  },
  topContiner:{
    flex:1,
    backgroundColor: 'powderblue'
  },
  midContiner:{
    flex:1,
    backgroundColor: 'skyblue'
  },
  btmContiner:{
    flex:1,
    backgroundColor: 'steelblue'
  }
})

function mapStateToProps (state) {
  console.log(state, "state from connected addagoal")
  return {
      goals: state.goals.goalState,
      submissions: state.submissions.submissions
  }
}

function mapDispatchToProps (dispatch) {

  return {

    // nextRoute: () => dispatch(navActions.nextRoute()),
    // pushRoute: (route) => dispatch(navActions.pushRoute(route)),
    // backRoute: () => dispatch(navActions.backRoute()),
    // goTo:      (route) =>dispatch(navActions.goTo(route)),
    // personalize:(type, info) =>dispatch(
    //   goalActions.populateStoredGoals(type, info)
    // )

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goals)
