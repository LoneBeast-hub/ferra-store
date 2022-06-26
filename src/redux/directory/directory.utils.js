export const convertArrayToMap = (arrayToConvert) => {
    // reduce the array to an object with each title value as each property value
    return arrayToConvert.reduce((accumulator, arrayValue) => {
    accumulator[arrayValue.routeName] = arrayValue;
    return accumulator;
    }, {})
}