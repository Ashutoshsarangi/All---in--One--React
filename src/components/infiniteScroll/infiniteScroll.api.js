import axios from 'axios';
export const getList = async(existingArr, limit = 10) =>{
    const result = [];
    for(let i = 0;i< limit; i++){
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const responseData = response.data.message;
        result.push({id: Math.floor(Math.random() * 100), imageUrl: responseData})
    }
    return [...existingArr, ...result];
}