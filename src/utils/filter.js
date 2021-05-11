const filterByState = (data, state) => {
    if (state.toLowerCase() === 'all') return data;

    return data.filter(val => {
        return val[0] === state
    });
}


const filterData = (data, state, city) => {
    if (!data) return [];
    if (city.toLowerCase() === 'all' || city === '-' || city === '') return filterByState(data, state);
    
    return data.filter(val => {
        return val[1] === city
    });
};

// const filterByPlasma = (filterData, blood_group) => {
//     return filterData.filter(val => {
//         return val[3] === blood_group
//     });
// };

// const filterByBed = (filterData, bed_type) => {
//     return filterData.filter(val => {
//         return val[3].toLowerCase() === bed_type.toLowerCase()
//     });
// };




export default filterData;
//export default filterByPlasma;