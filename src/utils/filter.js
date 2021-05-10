const filterByState = (data, state) => {
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

export default filterData;