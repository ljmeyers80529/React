import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

configure({adapter: new Adapter()});

describe('Auth reducer...', () => {

    it('should return the initial state...', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });

    it('should store the token upon login...', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'test_token',
            userId: 'test_userid'
        })).toEqual({
            token: 'test_token',
            userId: 'test_userid',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });
});