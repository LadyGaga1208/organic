import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

import SelectContainer from '../../containers/SelectContainer';
import { MyImage, MyText, MyBotton } from '../../components'
import * as icons from '../../assets/images'
import * as variable from '../../config/variables';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Thịt gà',
                    value: 'thịt gà'
                },
                {
                    label: 'Thịt lợn',
                    value: 'thịt lợn'
                },
                {
                    label: 'Rau xanh',
                    value: 'rau xanh'
                }
            ],
            items2: [
                {
                    label: 'Thịt gà ta',
                    value: 'Thịt gà ta',
                },
                {
                    label: 'Thịt gà chọi',
                    value: 'Thịt gà chọi',
                },
                {
                    label: 'Thịt gà công nghiệp',
                    value: 'Thịt gà công nghiệp',
                },
            ],
            favSport: undefined,
        }

    }

    goToSelect() {
        this.props.navigation.navigate('Select')
    }

    render() {
        return (
            <SelectContainer>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <MyText text='Bạn muốn ăn gì ?' style={styles.titleStyle} />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15 }}>Mời bạn chọn thể loại</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Chọn loại sản phẩm ...',
                            value: null,
                        }}
                        items={this.state.items}
                        onValueChange={(value) => {
                            this.setState({
                                favColor: value,
                            });
                        }}
                        onUpArrow={() => {
                            this.inputRefs.name.focus();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.picker2.togglePicker();
                        }}
                        // style={{ ...pickerSelectStyles }}
                        value={this.state.favColor}
                        ref={(el) => {
                            this.inputRefs.picker = el;
                        }}
                    />
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Mời bạn chọn thể loại chi tiết</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Chọn chi tiết thể loại ...',
                            value: null,
                        }}
                        items={this.state.items2}
                        onValueChange={(value) => {
                            this.setState({
                                favSport: value,
                            });
                        }}
                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        // style={{ ...pickerSelectStyles }}
                        value={this.state.favSport}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />
                </View>
                <MyBotton style={{ marginTop: 20 }} onPress={this.goToSelect.bind(this)}>
                    <MyText text='Tiếp theo' style={{ fontSize: 14 }} />
                </MyBotton>
            </SelectContainer>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        ...variable.textTitle
    }
});
