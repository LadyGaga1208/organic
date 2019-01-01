import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { MyTextInput, MyIcon, MyImage, MyBotton, MyText } from '../../components';
import MainContainer from '../../containers/MainContainer';
import * as image from '../../assets/images'
import * as variables from '../../config/variables'

export default class SignInScreen extends Component {

    goToForgotPass() {
        this.props.navigation.navigate('ForgotPassword');
    }

    goToSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    goToHome() {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <MainContainer >
                <View style={styles.container}>
                    <MyText
                        text='Đăng nhập'
                        style={styles.titleStyle}
                    />
                    <View style={styles.wrapTextInput}>
                        <MyTextInput
                            placeholder='Số điện thoại'
                        />
                        <View
                            style={{ height: 1, backgroundColor: '#d1caca' }}
                        />
                        <MyTextInput
                            placeholder='Mật khẩu'
                        />
                    </View>
                    <View
                        style={{
                            width: variables.widthButton,
                            marginLeft: variables.marginButton,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 7
                        }}
                    >
                        <TouchableOpacity onPress={this.goToForgotPass.bind(this)}>
                            <MyText text='Quên mật khẩu' style={{ color: variables.grayColor, fontSize: 14 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToSignUp.bind(this)}>
                            <MyText text='Đăng kí' style={{ color: variables.grayColor, fontSize: 14 }} />
                        </TouchableOpacity>
                    </View>
                    <MyBotton style={{ marginTop: 20 }} onPress={this.goToHome.bind(this)}>
                        <MyText text='Đăng nhập' style={{ fontSize: 14 }} />
                    </MyBotton>
                </View>
            </MainContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    titleStyle: {
        ...variables.textTitle
    },
    wrapTextInput: {
        borderColor: '#d1caca',
        borderWidth: 1,
        width: variables.widthButton,
        marginLeft: variables.marginButton,
        marginTop: 15
    },
})
