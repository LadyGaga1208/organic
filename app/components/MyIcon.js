import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as variables from '../config/variables';

export default class MyIcon extends PureComponent {
    render() {
        return (
            <View>
                <Image
                    source={this.props.icon}
                    style={[styles.img, { ...this.props.style }]}
                />
            </View>
        )
    }
}

MyIcon.propTypes = {
    icon: PropTypes.number
}

const styles = StyleSheet.create({
    img: {
        width: 34,
        height: 34,
        resizeMode: 'stretch',
        tintColor: variables.mainColor
    }
})