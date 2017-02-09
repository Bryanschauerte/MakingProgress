import React, { Component, PropTypes } from 'react';
import {
// PixelRatio,

  // StyleSheet,
  // Text,
  Button
} from 'react-native';

export default class ButtonFeedBack extends Component {

  render() {
console.log("BUTM", this.props)
    return (
      <Button
        onPress={()=>this.props.action()}
        title={this.props.title}
        color={this.props.color}
        accessibilityLabel={this.props.accessibilityLabel}
      />
    );
  }
};

ButtonFeedBack.propTypes={

  title: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired

}
// const styles = StyleSheet.create({
//   navigator: {
//     flex: 1,
//   },
//   scrollView: {
//     marginTop: 64
//   },
//   row: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1 / PixelRatio.get(),
//     borderBottomColor: '#CDCDCD',
//   },
//   rowText: {
//     fontSize: 17,
//   },
//   buttonText: {
//     fontSize: 17,
//     fontWeight: '500',
//   },
// });
