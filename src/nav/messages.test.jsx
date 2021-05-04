import React from "react";
import s from './profile.module.css'
import stateData from "../redux/state";


test('Path to photo should be correct', () => {
    //data
    let data = stateData
    //action
    // function map(arr) {
    //     return arr.map(el => el.name)
    // }
    //res
    expect(data[0].pathImage).toBe('ddddd')

})