import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

import * as variables from '../config/variables'
import { MyImage, MyText } from '../components'
import * as image from '../assets/images'

export default class MainContainer extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <MyImage
                        source={image.logoTomita}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                {this.props.children}
            </View>
        );
    }
}

MainContainer.propTypes = {
    children: PropTypes.children,
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.whiteColor
    },
    logo: {
        marginTop: 10,
        width: 0.5 * variables.width,
        height: 0.2 * variables.height,
        marginLeft: 0.25 * variables.width,
        resizeMode: 'stretch'
    }
})


