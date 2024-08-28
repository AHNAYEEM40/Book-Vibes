import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    id,
    logo,
    book_title,
    writer_name,
    Icon_type,
    Motion,
    book_type,
    Rating,
  } = book;
  
  return (
 <Link to={`/BookList/${id}`}>
    <div className="card card-compact w-96 bg-base-100 shadow-xl space-y-4">
      <figure className="bg-gray-200">
        <img className="w-32 h-48 pb-4 mt-2"  src={logo} alt="Shoes" />
      </figure>
      <div className="text-xl font-semibold flex space-x-1 pl-4 text-green-600">
        <button className="btn btn-outline btn-success font-bold">{Motion}</button>
        <button className="btn btn-outline btn-success font-bold">{Icon_type}</button>

      </div>
      <div className="card-body">

        <h2 className="card-title">{book_title}</h2>
        <p className="text-xl font-bold">{writer_name}</p>
        <hr />
        <div className="flex space-x-48 ">
          <h1 className="text-xl fond-bold ">{book_type}</h1>
          
          <div >
            <h1 className="flex font-bold text-xl">
              {Rating}
              <FaRegStar className="mt-1"></FaRegStar>
            </h1>
         
          </div>
        
        </div>
      </div>
    </div>
 </Link>
  );
};

export default Book;
