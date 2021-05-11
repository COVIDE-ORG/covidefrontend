const filterByState = (data, state) => {
    if (!data) return [];
    if (state.toLowerCase() === 'all') return data;

    return data.filter(val => {
        console.log(val[1], state)
        return val[0] === state
    });
}


const filterData = (data, state, city) => {
    if (city.toLowerCase() === 'all') return filterByState(data, state);
    
    return data.filter(val => {
        console.log(val[1], city)
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