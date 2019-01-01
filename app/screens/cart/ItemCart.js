import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

import { MyImage, MyText } from '../../components'
import * as variables from '../../config/variables'
import * as icons from '../../assets/images'

export default class ItemCart extends Component {
    render() {
        return (
            <TouchableOpacity style={[variables.shadow, styles.container]}>
                <MyImage source={{ uri: `${this.props.sourceImg}` }} style={styles.img} />
                <View style={{ paddingVertical: 5, flexDirection: 'row' }}>
                    <View style={{ width: 0.3 * variables.width, marginLeft: 10 }}>
                        <MyText text={this.props.nameProduct} style={{ fontSize: 17, color: '#111111' }} />
                        <MyText text={this.props.nameStore} style={{ fontSize: 14, color: variables.grayColor }} />
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <MyImage source={icons.ship} style={{ width: 24, height: 24, tintColor: '#83b32b' }} />
                            <MyText text={this.props.priceShip} style={{ color: variables.grayColor, marginTop: 4, marginLeft: 5 }} />
                        </View>
                    </View>
                    <View style={{ width: 0.39 * variables.width, marginLeft: 10 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginLeft: 20 }}>
                            <MyText text='đ' style={{ fontSize: 18, fontWeight: 'bold', color: variables.mainColor }} />
                            <MyText text={this.props.price} style={{ fontSize: 18, fontWeight: 'bold', color: variables.mainColor }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                            <TouchableOpacity style={[styles.wrapNumber, variables.shadow, { borderColor: variables.grayColor, backgroundColor: '#ffffff' }]}>
                                <MyImage source={icons.minus} style={{ tintColor: variables.mainColor, width: 15, height: 15, resizeMode: 'stretch' }} />
                            </TouchableOpacity>
                            <View style={styles.wrapNumber}>
                                <MyText text={this.props.quantity} />
                            </View>
                            <TouchableOpacity style={[styles.wrapNumber, variables.shadow, { borderColor: variables.grayColor, backgroundColor: '#ffffff' }]}>
                                <MyImage source={icons.plus} style={{ tintColor: variables.mainColor, width: 15, height: 15, resizeMode: 'stretch' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }
}

ItemCart.propTypes = {
    sourceImg: PropTypes.string,
    nameProduct: PropTypes.string,
    nameStore: PropTypes.string,
    priceShip: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 5,
        height: 0.16 * variables.height,
        backgroundColor: variables.whiteColor,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 4
    },
    img: {
        width: 0.25 * variables.width,
        height: 0.16 * variables.height,
        resizeMode: 'stretch'
    },
    wrapNumber: {
        backgroundColor: variables.mainColor,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})