import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import * as variables from '../config/variables'

export default class MyText extends PureComponent {
    render() {
        return (
            <View>
                <Text style={[styles.txt, this.props.style]}>{this.props.text}</Text>
            </View>
        )
    }
}

MyText.propTypes = {
    text: PropTypes.string.isRequired,
    style: View.propTypes.style
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: variables.whiteColor
    }
})

//Note style={{}} not use StyleSheet.create({})

