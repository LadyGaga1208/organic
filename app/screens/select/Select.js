import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'


import MainContainer from '../../containers/MainContainer';
import { MyText, MyBotton, } from '../../components'
import * as style from '../../config/variables';

export default class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setBefore: false,
            buyNow: false
        }
    }

    goToListStore() {
        this.props.navigation.navigate('ListStore')
    }

    render() {
        return (
            <MainContainer>
                <View>
                    <MyText text='Bạn muốn đặt trước hay mua ngay ?' style={style.textTitle} />
                    <View style={{ marginTop: 10 }}>
                        <CheckBox
                            center
                            title='Đặt trước'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.setBefore}
                            containerStyle={styles.wrapCheckBox}
                            textStyle={styles.textCheckBox}
                            uncheckedColor={style.grayColor}
                            checkedColor={style.mainColor}
                            onPress={
                                () => {
                                    this.setState({
                                        setBefore: !this.state.setBefore,
                                        buyNow: false
                                    })
                                }
                            }
                        />
                        <CheckBox
                            center
                            title='Mua ngay'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.buyNow}
                            containerStyle={styles.wrapCheckBox}
                            textStyle={styles.textCheckBox}
                            uncheckedColor={style.grayColor}
                            checkedColor={style.mainColor}
                            onPress={
                                () => {
                                    this.setState({
                                        buyNow: !this.state.buyNow,
                                        setBefore: false
                                    })
                                }
                            }
                        />
                    </View>
                    <MyBotton style={{ marginTop: 20 }} onPress={this.goToListStore.bind(this)}>
                        <MyText text='Tiếp tục' style={{ fontSize: 14 }} />
                    </MyBotton>
                </View>
            </MainContainer>
        )
    }
}

const styles = StyleSheet.create({
    wrapCheckBox: {
        backgroundColor: 'white',
        borderColor: 'white'
    },
    textCheckBox: {
        color: style.grayColor,
        fontSize: 18,
        fontWeight: '300'
    }
});
