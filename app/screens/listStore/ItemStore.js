import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements';
import PropTypes from 'prop-types';

import { MyImage, MyText } from '../../components'
import * as variables from '../../config/variables'
import * as icons from '../../assets/images'

export default class ItemStore extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <MyImage
                    source={{ uri: `${this.props.source}` }}
                    style={styles.imgStore}
                />
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17, color: '#111', fontWeight: 'bold' }}>{this.props.nameStore}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                        <MyImage source={icons.place} style={{ width: 18, height: 18, tintColor: variables.grayColor }} />
                        <Text style={{ width: 0.5 * variables.width }} numberOfLines={2}>{this.props.place}</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: variables.mainColor, fontWeight: 'bold', marginTop: 2 }}>{this.props.price}</Text>
                    <View style={{ width: 0.3 * variables.width, flexDirection: 'row' }}>
                        <Rating
                            type="star"
                            fractions={1}
                            startingValue={this.props.rate}
                            readonly
                            imageSize={15}
                            onFinishRating={this.ratingCompleted}
                            onStartRating={this.ratingStarted}
                            style={{ paddingVertical: 1, marginTop: 2 }}
                        />
                        <Text style={{ fontSize: 16 }}>({this.props.numberRate})</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

ItemStore.propTypes = {
    source: PropTypes.string,
    nameStore: PropTypes.string,
    place: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    numberRate: PropTypes.string,
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        height: 0.18 * variables.height,
        backgroundColor: variables.whiteColor,
        borderRadius: 10,
        ...variables.shadow,
        flexDirection: 'row',
        marginTop: 10,
        padding: 2
    },
    imgStore: {
        width: 0.35 * variables.width,
        height: 0.17 * variables.height,
        resizeMode: 'stretch'
    }
});

