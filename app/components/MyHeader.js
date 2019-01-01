import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Header } from 'react-navigation';
import PropTypes from 'prop-types';

import MyImage from './MyImage';
import MyText from './MyText'
import * as icons from '../assets/images'
import * as variables from '../config/variables'

export default class MyHeader extends Component {
    render() {
        return (
            <View>
                <View
                    style={[styles.head, variables.shadow]}
                >
                    <TouchableOpacity style={styles.backStyle} onPress={this.props.onPress}>
                        <MyImage source={icons.back} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <MyText text={this.props.headerName} style={{ fontSize: 18, marginLeft: 15, fontWeight: 'bold' }} />
                </View>
            </View>
        )
    }
}

MyHeader.defaultProps = {
    headerName: 'Gio hang cua ban'
};

MyHeader.propTypes = {
    onPress: PropTypes.func,
    headerName: PropTypes.string
}

const styles = StyleSheet.create({
    head: {
        height: Header.HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: variables.mainColor
    },
    backStyle: {
        width: 0.15 * variables.width,
        height: Header.HEIGHT,
        justifyContent: 'center',
    },
    iconStyle: {
        tintColor: variables.whiteColor,
        height: 28,
        height: 28,
        marginLeft: 10
    }
})
