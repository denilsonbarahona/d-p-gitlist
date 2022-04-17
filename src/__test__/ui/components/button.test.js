import React from 'react'
import {mount} from "enzyme"
import {create} from 'react-test-renderer'
import Button from '../../../shared/components/button'


describe('button',()=>{
    const button = mount(<Button/>)

    test('render del button',()=>{
        expect(button.length).toEqual(1)
    })

    test('create snapshot',()=>{
        const buttonSnapshot = create(<Button />)
        expect(buttonSnapshot.toJSON()).toMatchSnapshot()
    })

    test('simulate event click',()=>{
        const onClickEvent = jest.fn();
        const buttonEvent = mount(<Button onClick={onClickEvent} />)
        buttonEvent.find('button').simulate('click');
        expect(onClickEvent).toHaveBeenCalledTimes(1);
    })
})