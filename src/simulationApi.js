

export const simulationApi = () =>{
    return { 
        num : Math.floor(Math.random()*1000), 
        person : [
            {name: 'Ashu', age: 27}, 
            {name: 'Basu', age: 20}
        ]
    };
}
