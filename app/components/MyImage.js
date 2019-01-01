import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class MyImage extends Component {
    render() {
        return (
            <View>
                <Image
                    {...this.props}
                />
            </View>
        )
    }
}
