import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { MyImage } from '../components'

import * as images from '../assets/images'
import * as variables from '../config/variables'

export default class SelectContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapTop}>
                    <MyImage
                        source={images.logoTomita}
                        style={styles.logo}
                    />
                    <MyImage
                        source={images.cart}
                        style={styles.styleCart}
                    />
                </View>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapTop: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 0.3 * variables.width,
        height: 0.15 * variables.height,
        resizeMode: 'stretch'
    },
    styleCart: {
        width: 0.12 * variables.width,
        height: 0.08 * variables.height,
        tintColor: variables.mainColor,
        resizeMode: 'stretch',
    }
});
