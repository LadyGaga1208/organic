import React, { Component } from 'react'
import AppContainer from './navigations/AppNavigator';
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

