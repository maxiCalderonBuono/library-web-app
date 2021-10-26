import {useState, useEffect} from 'react'
import  getBooks  from "../helpers/getBooks";


const useAxiosBooks =  (url) => {

const [books, setBooks] = useState([]);

useEffect(  () =>  getBooks(setBooks, url), [])

return books

    
}

export default useAxiosBooks