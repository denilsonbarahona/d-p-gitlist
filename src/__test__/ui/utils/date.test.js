import {getTimeFormat} from '../../../shared/utils/dates.js'

describe('utils', ()=>{
    test('getTimeFormat seconds',()=>{
        const date = new Date()
        const now = new Date()
        date.setDate(date.getDate()-1)
        expect(getTimeFormat(now, date)).toEqual('1 day ago')
    })
})
