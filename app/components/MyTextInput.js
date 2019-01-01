import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import * as variables from '../config/variables';

export default class MyTextInput extends Component {

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholderColor={variables.placeholderColor}
                    autoCapitalize='none'
                    autoCorrect={false}
                    {...this.props}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        textAlign: 'center'
    }
});
