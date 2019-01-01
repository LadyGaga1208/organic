import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

import { MyHeader } from '../../components'
import ItemStore from './ItemStore'
import * as variables from '../../config/variables'

export default class ListStore extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            catalogue: undefined,
            items: [
                {
                    label: 'đùi',
                    value: 'đùi',
                },
                {
                    label: 'chân',
                    value: 'chân',
                },
                {
                    label: 'cánh',
                    value: 'cánh',
                },
            ],
        }
    }

    goBack() {
        this.props.navigation.goBack();
    }

    goToProductDetail() {
        this.props.navigation.navigate('DetailProduct')
    }

    render() {
        return (
            <View style={{ backgroundColor: variables.backgroundColor, flex: 1 }}>
                <MyHeader
                    headerName='Các cửa hàng bán thịt gà'
                    onPress={this.goBack.bind(this)}
                />
                <View style={{ paddingHorizontal: variables.paddingHorizontal }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: '#111', fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Phần</Text>
                        <View style={{ width: 0.5 * variables.width, marginLeft: 30 }}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Chọn thành phần chi tiết',
                                    value: null,
                                }}
                                items={this.state.items}
                                onValueChange={(value) => {
                                    this.setState({
                                        catalogue: value,
                                    });
                                }}
                                onUpArrow={() => {
                                    this.inputRefs.name.focus();
                                }}
                                onDownArrow={() => {
                                    this.inputRefs.picker2.togglePicker();
                                }}
                                style={{ ...pickerSelectStyles }}
                                value={this.state.catalogue}
                                ref={(el) => {
                                    this.inputRefs.picker = el;
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <ItemStore
                        source='https://biggreen.org/wp-content/themes/red_underscores/images/logo.png'
                        nameStore='Big Green'
                        place='45 Lạc Long Quân/Cầu giấy (500m)'
                        price='27.000đ'
                        rate={4.5}
                        numberRate='156'
                        onPress={this.goToProductDetail.bind(this)}
                    />
                    <ItemStore
                        source='http://file.hstatic.net/1000144808/file/logo_20tomita_20mart_20_2__grande.png'
                        nameStore='Store Tomita'
                        place='20 Trần Duy Hưng/Cầu giấy (500m)'
                        price='27.000đ'
                        rate={3.7}
                        numberRate='156'
                        onPress={this.goToProductDetail.bind(this)}
                    />
                    <ItemStore
                        source='https://theme.hstatic.net/1000191320/1000295916/14/logo.png?v=916'
                        nameStore='Bác Tôm'
                        place='20 Nguyễn Khánh Toàn/Cầu giấy (500m)'
                        price='27.000đ'
                        rate={2.2}
                        numberRate='156'
                        onPress={this.goToProductDetail.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const pickerSelectStyles = StyleSheet.create({

});
