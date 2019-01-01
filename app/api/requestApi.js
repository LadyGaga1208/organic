import axios from 'axios';
import { Platform } from 'react-native';
import * as api from './api';
import { store } from '../store';

const defaultNetworkError = {
    meta: {
        code: 404,
        msg: 'An error occurred while processing your request. Please try again later.'
    },
    response: null
};


function* requestAPI(path, method, params, headerIn) {
    let baseURL = path.indexOf('http') === -1 ? api.API : '';
    let additionPath = path;
    let accessToken = store.getState().auth.userdata ? store.getState().auth.userdata.token : null;
    let header;

    if (headerIn) {
        header = headerIn
    } else {
        if (accessToken) {
            header = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${accessToken}`
            };
        } else {
            header = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };
        }
    }

    try {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const response = yield axios.request({
            url: additionPath,
            method: method,
            baseURL: baseURL,
            headers: header,
            params: method === api.GET ? params : null,
            data: method === api.POST ? params : null,
            timeout: 20000,
            responseType: 'json',
            responseEncoding: 'utf8',
            cancelToken: source.token
        });
        console.log(method, baseURL + '/' + additionPath, params);
        console.log('ResponeseData', response);
        return response.data.meta.code === 200 ? response.data : defaultNetworkError;
    }
    catch (e) {
        console.log(method, baseURL + '/' + additionPath, params, e.message);
        return defaultNetworkError;
    }
};

// upload image


export {
    requestAPI
}