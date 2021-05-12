const filterByState = (data, state) => {
    if (state.toLowerCase() === 'all') return data;

    return data.filter(val => {
        return val[0] === state
    });
}


export const filterData = (data, state, city) => {
    if (!data) return [];
    if (city.toLowerCase() === 'all' || city === '-' || city === '') return filterByState(data, state);
    
    return data.filter(val => {
        return (val[1] === city && val[0] === state )
    });
};

export const filterByPlasma = (filterData, blood_group) => {
    if (blood_group.toLowerCase() === 'all') return filterData;
    return filterData.filter(val => {
        return (val[3] === blood_group || val[3].toLowerCase() === 'all' )
    });
};

// const filterByBed = (filterData, bed_type) => {
//     return filterData.filter(val => {
//         return val[3].toLowerCase() === bed_type.toLowerCase()
//     });
// };

