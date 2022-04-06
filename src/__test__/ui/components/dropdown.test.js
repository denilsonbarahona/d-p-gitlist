import React from 'react';
import {mount} from 'enzyme'
import {create} from 'react-test-renderer'
import Dropdown from '../../../shared/components/dropdown'

describe('dropdown',()=>{
    const dropdown = mount(<Dropdown items={['option1', 'option2']}/>)

    test('render dropdown',()=>{
        expect(dropdown.length).toEqual(1)
    })

    test('render dropdown panel',()=>{
        const panel=dropdown.find('.dropdown-panel');
        expect(panel.length).toEqual(1)
    })

    test('simulate event click on item',()=>{
        const onEventClick = jest.fn()
        const ItemClick = mount(<Dropdown items={['option1', 'option2']} onSelected={onEventClick}/>)
        ItemClick.find('.dropdown-item').first().simulate('click')
        expect(onEventClick).toHaveBeenCalledTimes(1)
    })

    test('create snapshot',()=>{
        const dropdownSnapshot = create(<Dropdown items={['option1', 'option2']}/>)
        expect(dropdownSnapshot.toJSON()).toMatchSnapshot()
    })
})
