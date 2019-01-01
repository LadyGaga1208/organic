import { Dimensions, StyleSheet } from 'react-native'

export const { height, width } = Dimensions.get('window')

export const mainColor = '#98c93a'
export const whiteColor = '#ffffff'
export const grayColor = '#858080'
export const placeholderColor = 'black'
export const backgroundColor = '#f9f7f7'

export const widthButton = 0.64 * width
export const marginButton = 0.18 * width
export const paddingHorizontal = 10

export const shadow = {
    shadowColor: '#DDE5ED',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 2,
    shadowOffset: { width: 0, height: 4 }
}

export const textTitle = {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
}
