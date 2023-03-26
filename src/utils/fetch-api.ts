import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url: string)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'fe1b962b8amsh149991337b475c9p1994fcjsn92acb7120dfe',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 
    })

    return data
}