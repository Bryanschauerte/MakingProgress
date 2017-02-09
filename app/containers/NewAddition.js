import React, { Component } from 'react';
import { connect } from 'react-redux';
import TappableRow from '../presentation/native/TappableRow';
import QuestionBarrage from '../presentation/native/edit/QuestionBarrage';
import * as subActions from '../../store/submissions/actions/submission'
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


class NewAddition extends Component{
  constructor(props, context) {
    super(props, context);
    this.renderQuestions = this.renderQuestions.bind(this);
    this._addValuePair = this._addValuePair.bind(this);
    this.removePart = this.removePart.bind(this);
    this.editContainer = this.editContainer.bind(this);
    this.resetContainer = this.resetContainer.bind(this);
    this._selectOption = this._selectOption.bind(this);
    this._toggleDetail = this._toggleDetail.bind(this);

  }
    _addValuePair(key, value){

      this.props.editContainer(key, value);
      this.props.changeIndex(this.props.route.key, this.props.questions.index + 1);
    }
    removePart(key, value){
      this.props.removePart(key, value)
    }
    editContainer(key, value) {
      this.props.editContainer(key, value)
    }
    resetContainer() {

    }
    _toggleDetail(section, index, value){
      this.props._toggleDetail(section, index, value)
    }

    _selectOption(key, value){
      this.props.addValuePair(key, value)
    }



    renderQuestions(index){

          return(<View style={styles.questionContainer}>
            <Text style={styles.countText}>
              {this.props.questionIndex + 1} of {this.props.questions.items.length}
            </Text>

          <QuestionBarrage
                  question ={this.props.questions.items[index]}
                  addValuePair={this._addValuePair}
                  toggleDetail= {this._toggleDetail}
                  questionIndex = {index}
                  {...this.props}/>
                </View>);


    }


  render(){
console.log("EDITTTT", this.props)
    return this.renderQuestions(this.props.questions.index)
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
  },
  questionContainer:{
    flex:1,
    backgroundColor: 'steelblue'
  }
})

function mapStateToProps (state) {

  return {
    submissionState: state.submissions.submissions.submittingState,
    questions:state.submissions.submissions.NewAddition,
    questionIndex: state.submissions.submissions.NewAddition.index
  }
}

function mapDispatchToProps (dispatch) {

  return {
    editContainer: (key, value) => dispatch(subActions.editContainer(key, value)),
    removePart: (key, value) => dispatch(subActions.removePart(key, value)),
    resetContainer: () => dispatch(subActions.resetContainer()),
    changeIndex: ( section, index) => dispatch(subActions.changeIndex(section, index)),
    toggleDetail:( section, index, value) => dispatch(subActions.toggleDetail(section, index, value))
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
)(NewAddition)
