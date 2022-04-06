import React from 'react';
import { mount, create } from 'enzyme';
import Label from '../../../shared/components/label'

describe('Label',()=>{
    const label = mount(<Label />)
    test('render label',()=>{
        expect(label.length).toEqual(1)
    })
})
