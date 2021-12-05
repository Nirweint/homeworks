import React from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC('up'))

    expect(newState[0].name).toBe('Александр')
    expect(newState[0].age).toBe(66)
    expect(newState[1].name).toBe('Виктор')
    // expect(...).toBe(...)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC('down'))

    expect(newState[1].name).toBe('Коля')
    expect(newState[0].name).toBe('Кот')
    expect(newState[5].age).toBe(66)
    expect(newState[5].name).toBe('Александр')

})
test('check age 18', () => {
    const newState18 = homeWorkReducer(initialState, checkAgeAC(18))
    const newState45 = homeWorkReducer(initialState, checkAgeAC(45))

    expect(newState18.length).toBe(4)
    expect(newState45.length).toBe(2)


})
