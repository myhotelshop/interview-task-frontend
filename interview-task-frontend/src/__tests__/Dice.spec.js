import { mount } from '@vue/test-utils'
import Dice from '../components/Dice.vue'

describe('Dice.vue', () => {
    test("setup correctly", () => {
        expect(true).toBe(true)
    })
})

it('Dice render without crashing', () => {
    mount(Dice)
})

const wrapper = mount(Dice)

test('checkThree', () => {
    expect(wrapper.vm.checkThree([2, 2, 2, 2, 2])).toBe(true)
    expect(wrapper.vm.checkThree([2, 2, 2, 2, 1])).toBe(true)
    expect(wrapper.vm.checkThree([2, 2, 2, 1, 6])).toBe(true)
    expect(wrapper.vm.checkThree([1, 2, 3, 4, 5])).toBe(false)
    expect(wrapper.vm.checkThree([2, 2, 3, 4, 4])).toBe(false)
    expect(wrapper.vm.checkThree([1, 5, 5, 6, 6])).toBe(false)
})

test('checkFour', () => {
    expect(wrapper.vm.checkFour([1, 1, 1, 1, 2])).toBe(true)
    expect(wrapper.vm.checkFour([1, 1, 1, 1, 1])).toBe(true)
    expect(wrapper.vm.checkFour([5, 5, 1, 5, 5])).toBe(true)
    expect(wrapper.vm.checkFour([1, 2, 3, 4, 5])).toBe(false)
    expect(wrapper.vm.checkFour([1, 1, 1, 2, 3])).toBe(false)
    expect(wrapper.vm.checkFour([1, 1, 2, 2, 2])).toBe(false)
})

test('checkFive', () => {
    expect(wrapper.vm.checkFive([1, 1, 1, 1, 1])).toBe(true)
    expect(wrapper.vm.checkFive([2, 2, 2, 2, 2])).toBe(true)
    expect(wrapper.vm.checkFive([1, 2, 3, 4, 5])).toBe(false)
    expect(wrapper.vm.checkFive([1, 1, 1, 1, 3])).toBe(false)
    expect(wrapper.vm.checkFive([2, 1, 1, 1, 2])).toBe(false)
    expect(wrapper.vm.checkFive([1, 2, 3, 3, 4])).toBe(false)
})

test('checkFullHouse', () => {
    expect(wrapper.vm.checkFullHouse([1, 1, 2, 2, 2])).toBe(true)
    expect(wrapper.vm.checkFullHouse([2, 2, 3, 2, 3])).toBe(true)
    expect(wrapper.vm.checkFullHouse([2, 3, 2, 3, 2])).toBe(true)
    expect(wrapper.vm.checkFullHouse([4, 5, 4, 5, 6])).toBe(false)
    expect(wrapper.vm.checkFullHouse([4, 4, 4, 5, 6])).toBe(false)
    expect(wrapper.vm.checkFullHouse([4, 4, 4, 4, 5])).toBe(false)
})

test('checkSmallStraight', () => {
    expect(wrapper.vm.checkSmallStraight([1, 3, 2, 4, 5])).toBe(true)
    expect(wrapper.vm.checkSmallStraight([2, 3, 5, 5, 4])).toBe(true)
    expect(wrapper.vm.checkSmallStraight([1, 2, 4, 3, 6])).toBe(true)
    expect(wrapper.vm.checkSmallStraight([2, 1, 1, 2, 3])).toBe(false)
    expect(wrapper.vm.checkSmallStraight([1, 2, 3, 5, 6])).toBe(false)
    expect(wrapper.vm.checkSmallStraight([1, 2, 1, 2, 3])).toBe(false)
})

test('checkLargeStraight', () => {
    expect(wrapper.vm.checkLargeStraight([1, 2, 4, 3, 5])).toBe(true)
    expect(wrapper.vm.checkLargeStraight([2, 6, 5, 4, 3])).toBe(true)
    expect(wrapper.vm.checkLargeStraight([5, 6, 4, 3, 2])).toBe(true)
    expect(wrapper.vm.checkLargeStraight([1, 3, 2, 4, 6])).toBe(false)
    expect(wrapper.vm.checkLargeStraight([2, 1, 4, 1, 3])).toBe(false)
    expect(wrapper.vm.checkLargeStraight([1, 2, 2, 3, 5])).toBe(false)
})