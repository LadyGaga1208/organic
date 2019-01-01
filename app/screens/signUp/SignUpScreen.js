import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { MyText, MyTextInput, MyBotton } from '../../components'
import MainContainer from '../../containers/MainContainer';
import * as variables from '../../config/variables'

export default class SignUpScreen extends Component {
    render() {
        return (
            <MainContainer>
                <View>
                    <MyText
                        text='Đăng kí'
                        style={{ color: 'black', fontSize: 19, textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}
                    />
                    <View style={styles.wrapTextInput}>
                        <MyTextInput
                            placeholder='Tên tài khoản'
                        />
                        <View
                            style={{ height: 1, backgroundColor: '#d1caca' }}
                        />
                        <MyTextInput
                            placeholder='Email/Sđt'
                        />
                        <View
                            style={{ height: 1, backgroundColor: '#d1caca' }}
                        />
                        <MyTextInput
                            placeholder='Mật khẩu'
                        />
                    </View>
                    <MyBotton style={{ marginTop: 20 }}>
                        <MyText text='Đăng kí' style={{ fontSize: 14 }} />
                    </MyBotton>
                </View>
            </MainContainer>
        )
    }
}

const styles = StyleSheet.create({
    wrapTextInput: {
        borderColor: '#d1caca',
        borderWidth: 1,
        width: variables.widthButton,
        marginLeft: variables.marginButton,
        marginTop: 15
    },
})

