
import React, { Component } from 'react';
import {
  NavigationExperimental,
  View,
  Text,
  StyleSheet

} from 'react-native';
const {Header: NavigationHeader} = NavigationExperimental;
export default class HeaderComponent extends Component {
  _back = () => {
    this.props.onPopRoute();
  }
  _renderTitleComponent = (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }
}
