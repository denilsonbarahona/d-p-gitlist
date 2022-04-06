import React from 'react';
import { mount } from 'enzyme';
import {create} from 'react-test-renderer'
import LoginLayout from '../../../entities/login/infrastructure/layouts/login-layout';


describe('Login Layout', ()=>{
    const layout = mount(<LoginLayout />)
    test('render layout',()=>{
        expect(layout.length).toEqual(1)
    })

    test('create snapshot',()=>{
        const layout = create(<LoginLayout />)
        expect(layout.toJSON()).toMatchSnapshot()
    })
})

