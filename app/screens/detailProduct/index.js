import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Rating } from 'react-native-elements';
import Modal from "react-native-modal";

import { MyHeader, MyImage } from '../../components'
import * as variables from '../../config/variables'
import * as icons from '../../assets/images'
import { yellow } from 'ansi-colors';

export default class DetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleModal: false
        }
    }

    _toggleModal = () =>
        this.setState({ visibleModal: !this.state.visibleModal });

    goToCart() {
        this.setState({ visibleModal: !this.state.visibleModal });
        setTimeout(() => {
            this.props.navigation.navigate('Cart')
        }, 2000)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <MyHeader
                    headerName='製品の詳細'
                    onPress={() => this.props.navigation.goBack()}
                />
                <View style={{ paddingHorizontal: variables.paddingHorizontal, marginTop: 10 }}>
                    <View style={styles.wrapTop}>
                        <MyImage
                            source={{ uri: 'http://ctyrausach.com/wp-content/uploads/2016/06/cai-ngot.jpg' }}
                            style={styles.imgProduct}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#111' }}>白菜 はくさい	</Text>
                            <Text style={{ marginTop: 7, fontSize: 15, color: variables.grayColor }}>格納する Tomita</Text>
                            <Text style={{ fontSize: 16, color: variables.mainColor, fontWeight: 'bold', marginTop: 2 }}>¥ 125</Text>
                            <View style={{ width: 0.23 * variables.width, marginTop: 2 }}>
                                <Rating
                                    type="star"
                                    fractions={1}
                                    startingValue={this.props.rate}
                                    readonly
                                    imageSize={16}
                                    onFinishRating={this.ratingCompleted}
                                    onStartRating={this.ratingStarted}
                                    style={{ paddingVertical: 1, marginTop: 2 }}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.buyNow}
                                onPress={this._toggleModal.bind(this)}
                            >
                                <Text style={{ fontSize: 16, color: '#ffffff' }}>今買う</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.txtDetail}>
                        <Text style={{ marginTop: 5 }}>あらすじ</Text>
                        <Text>忍者を目指し、アカデミーに通ううずまきナルトは超問題児の落ちこぼれで、毎日イタズラ三昧。卒業試験に3回落第していたが、とある事件で身を挺して守ってくれた教師のうみのイルカに認められ、卒業の証の額当てを送られて晴れて下忍になる。下忍になったナルトは、うちはサスケ、春野サクラと共に、上忍のはたけカカシの第七班に配属される。カカシから鈴を奪い取るサバイバル演習では自分たちの未熟さを思い知るが、“仲間の大切さ”に気付き、これまで合格者を出したことのないカカシから正式に下忍として認められる。</Text>
                        <Text>その後、波の国のタズナの護衛の任務において、霧隠れの抜け忍、桃地再不斬と氷遁忍術を操る少年、白と戦闘。苦戦を強いられるが、この実戦を通じて忍者として大きな成長を遂げる。サスケはこの戦いにおいて、うちは一族の血継限界である写輪眼を開眼し、ナルトは自らに眠る九尾の強大な力の片鱗を初めて見せる。</Text>
                    </View>
                </View>

                <Modal
                    isVisible={this.state.visibleModal}
                    animationInTiming={3000}
                    animationOutTiming={3000}
                    backdropTransitionInTiming={3000}
                    backdropTransitionOutTiming={3000}
                    style={{ margin: 0 }}
                >
                    <View style={{ flex: 1 }}>
                        <View
                            style={{ backgroundColor: variables.whiteColor, height: 0.5 * variables.height, marginTop: 0.5 * variables.height }}
                        >
                            <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10 }}>
                                <MyImage
                                    source={{ uri: 'https://hatgiongphuongnam.com/asset/upload/image/hat-giong-rau-cai-thia.jpg' }}
                                    style={styles.imgProductModal}
                                />
                                <View style={{ width: 0.4 * variables.width, marginTop: 10, marginLeft: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: variables.mainColor }}>20.000đ</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>/kg</Text>
                                    </View>
                                    <Text style={{}}>Số lượng: 50kg</Text>
                                </View>
                                <View style={{ width: 0.23 * variables.width, alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={this._toggleModal}>
                                        <MyImage
                                            source={icons.cancel}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ height: 0.12 * variables.height, justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                <TouchableOpacity style={[styles.wrapNumber, { borderColor: variables.grayColor, backgroundColor: '#ffffff' }]}>
                                    <MyImage
                                        source={icons.minus}
                                        style={{ height: 20, width: 20, resizeMode: 'stretch', tintColor: variables.mainColor }}
                                    />
                                </TouchableOpacity>
                                <View style={styles.wrapNumber}>
                                    <Text style={{ color: '#ffffff', fontSize: 17 }}>2</Text>
                                </View>
                                <TouchableOpacity style={[styles.wrapNumber, { borderColor: variables.grayColor, backgroundColor: '#ffffff' }]}>
                                    <MyImage
                                        source={icons.plus}
                                        style={{ height: 20, width: 20, resizeMode: 'stretch', tintColor: variables.mainColor }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', width: 0.5 * variables.width, height: 0.08 * variables.height, backgroundColor: variables.mainColor, borderRadius: 5, justifyContent: "center", alignItems: 'center', marginLeft: 10 }}>
                                    <MyImage
                                        source={icons.cart}
                                        style={{ width: 18, height: 18, tintColor: '#ffffff', resizeMode: 'stretch' }}
                                    />
                                    <Text style={{ color: '#ffffff', fontSize: 15, marginLeft: 5 }}>Thêm vào giỏ hàng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 0.38 * variables.width, backgroundColor: variables.mainColor, height: 0.08 * variables.height, borderRadius: 5, justifyContent: "center", alignItems: 'center', marginLeft: 20 }}
                                    onPress={this.goToCart.bind(this)}
                                >
                                    <Text style={{ color: '#ffffff', fontSize: 15 }}>Mua ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapTop: {
        flexDirection: 'row'
    },
    imgProduct: {
        width: 0.4 * variables.width,
        height: 0.25 * variables.height,
        resizeMode: 'stretch'
    },
    buyNow: {
        width: 0.5 * variables.width,
        height: 40,
        borderRadius: 5,
        ...variables.shadow,
        backgroundColor: variables.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    txtDetail: {
        marginTop: 15,
        backgroundColor: variables.backgroundColor,
        borderRadius: 5,
        height: 0.55 * variables.height
    },
    imgProductModal: {
        width: 0.3 * variables.width,
        height: 0.2 * variables.height,
        resizeMode: 'stretch',
    },
    wrapNumber: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.mainColor,
        borderRadius: 20,
        ...variables.shadow,
        marginHorizontal: 20
    },
})
