import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {

    const[books,setBooks]=useState([]);
    const [dataLength ,setDataLength]=useState(6);
    useEffect(() =>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Books</h1>
            <div className="grid lg:grid-cols-3 gap-8 mt-10 mb-6">
                {
                    books.slice(0,dataLength).map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <div className={dataLength ===books.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(books.length)} className="btn btn-accent ">Show All Books</button>
            </div>
          
        </div>

    );
};

export default BookList;