import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as variables from '../config/variables';

export default class MyBotton extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                style={[styles.container, variables.shadow, { ...this.props.style }]}
                onPress={this.props.onPress}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

MyBotton.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    children: PropTypes.element
}

const styles = StyleSheet.create({
    container: {
        width: variables.widthButton,
        height: 40,
        marginLeft: variables.marginButton,
        borderRadius: 50,
        backgroundColor: variables.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

//Note style={{}} not use StyleSheet.create({})


