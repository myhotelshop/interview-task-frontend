import { mount } from '@vue/test-utils'
import ResultTable from '../components/Dice.vue'

describe('ResultTable.vue', () => {
    test("setup correctly", () => {
        expect(true).toBe(true)
    })
})

it('ResultTable render without crashing', () => {
    mount(ResultTable)
})