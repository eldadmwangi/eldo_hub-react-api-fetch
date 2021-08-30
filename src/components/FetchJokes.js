import React,{useState,useEffect} from 'react'
import './fetchjokes.css'
import axios from 'axios'


function FetchJokes() {
    const [joke, setJoke] = useState()
    const [categoryData, setCategoryData] =useState([])
    const [currentCategory, setcurrentCategory] =useState('animal')

    useEffect(()=>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`)
        .then(response =>{
            setJoke(response.data)
            // console.log(response)
        })
    },[currentCategory])

    
    useEffect(()=>{
        axios.get('https://api.chucknorris.io/jokes/categories')
        .then(response =>{
            setCategoryData(response.data)
            // console.log(response)
        })
    },[])


    // console.log(joke.value)

    return (
        <>
        <div className ='fetch__jokes'>
        <div className='jokes__container'>
        <select className='select__option' value={currentCategory} onChange={(e)=>setcurrentCategory(e?.target?.value)}>
            {categoryData.map((category)=>(
                <option key={category} value={category} > {category} </option>
            ))}  
        </select>
                <div className="joke__container">{joke.value}</div>
            </div>
            </div>
            </>
      
    )
}

export default FetchJokes
