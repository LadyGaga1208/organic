import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-navigation';

import { MyHeader } from '../../components'
import { MyText } from '../../components'
import * as variables from '../../config/variables';
import ItemCart from './ItemCart'

export default class Cart extends Component {
    goBack() {
        this.props.navigation.navigate('DetailProduct')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.whiteColor }}>
                <MyHeader
                    onPress={this.goBack.bind(this)}
                />
                <ItemCart
                    sourceImg='http://bizweb.dktcdn.net/thumb/grande/100/292/196/products/rau-cai-canh.png?v=1517961662027'
                    nameProduct='rau cải xanh'
                    nameStore='TOMITA'
                    priceShip='5.00đ'
                    price='12.000'
                    quantity='12'
                />
                <ItemCart
                    sourceImg='http://sachtunhien.com/wp-content/uploads/2017/03/ca-chua.png'
                    nameProduct='cà chua Mỹ'
                    nameStore='BIG GREEN'
                    priceShip='7.00đ'
                    price='3.000'
                    quantity='12'
                />
                <ItemCart
                    sourceImg='http://images.ongbachau.vn/Images/Uploaded/Share/2015/10/2/Meo-nhan-biet-thit-lon-bi-bom-nuoc-tang-trong-1.jpg'
                    nameProduct='thịt ba chỉ bò'
                    nameStore='BÁC TÔM'
                    priceShip='4.000đ'
                    price='120.000'
                    quantity='20'
                />
                <TouchableOpacity style={[styles.wrap, variables.shadow]}>
                    <MyText text='Go Checkout' style={{ fontSize: 17 }} />
                    <MyText text='(340.000đ)' style={{ fontSize: 17 }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        height: Header.HEIGHT,
        backgroundColor: variables.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: variables.width
    }
})
