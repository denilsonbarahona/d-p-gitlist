import React from 'react';
import {mount} from 'enzyme';
import {create} from 'react-test-renderer'
import Form from '../../../shared/components/form';


describe('form',()=>{
    const form = mount(<Form />)

    test('render del form',()=>{
        expect(form.length).toEqual(1)
    })

    test('submit form',()=>{
        const Onsubmit = jest.fn()
        const submitEvent = mount(<Form onSubmit={Onsubmit}/>)
        submitEvent.find('form').simulate('submit')
        expect(Onsubmit).toHaveBeenCalledTimes(1)
    })

    test('create snapshot',()=>{
        const formSnapshot = create(<Form />)
        expect(formSnapshot.toJSON()).toMatchSnapshot()
    })
})