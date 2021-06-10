'use strict';
// const pattern = require('../reflectors/reflectorB.js')

const reflect = (input, reflectSchedule) => reflectSchedule[`${input}`]

module.exports = reflect;
// console.log(reflect('T', pattern))