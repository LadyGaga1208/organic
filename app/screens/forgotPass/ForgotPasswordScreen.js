import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MyText, MyTextInput, MyBotton } from '../../components'
import MainContainer from '../../containers/MainContainer';
import * as variables from '../../config/variables'

export default class ForgotPasswordScreen extends Component {
    render() {
        return (
            <MainContainer>
                <View>
                    <MyText
                        text='Lấy lại mật khẩu'
                        style={{ color: 'black', fontSize: 19, textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}
                    />
                    <View style={styles.wrapTextInput}>
                        <MyTextInput
                            placeholder='Email/Sđt'
                        />
                    </View>
                    <MyBotton style={{ marginTop: 20 }}>
                        <MyText text='Tiếp tục' style={{ fontSize: 14 }} />
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
