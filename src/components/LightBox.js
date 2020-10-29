import React, { Component } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateModal from './DateModal';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

class BaseLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 700,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }
  render() {
    const { horizontalPercent = 1, verticalPercent = 1 } = this.props;
    const height = verticalPercent
      ? deviceHeight * verticalPercent
      : deviceHeight;

    const width = horizontalPercent
      ? deviceWidth * horizontalPercent
      : deviceWidth;

    let children = <DateModal _closeModal={this._closeModal} />;
  
    return (
      <Animated.View
        style={[styles.container, { opacity: this.state.opacity }]}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'white',
          }}>
          {children}
        </View>
      </Animated.View>
    );
  }
  _closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true,
    }).start(Actions.pop);
  };

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BaseLightbox;
