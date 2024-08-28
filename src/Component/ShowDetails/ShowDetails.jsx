import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { SaveBookList } from "../Utility/LocalStroge";
import { SaveWishList } from "../Utility/LocalStore1";

const ShowDetails = () => {
  const Book = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  const book = Book.find((book) => book.id === idInt);
  console.log(book);
  const nevigate = useNavigate();

  const Readlist = () => {
    SaveBookList(idInt);
    toast("Your Read is Successfully  Complete ");
  };
  const wishList = () => {
    SaveWishList(idInt);
    toast("Your WishList is SuccessFul");
  };
  const GoBack = () => {
    nevigate(-1);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4 animate-bounce">
        Book
      </h1>
      <div className="hero lg:w-[1140px] lg:h-[1030px] mx-auto bg-base-200 rounded-xl mb-4 mt-4">
        <div className="hero-content flex-col lg:flex-row">
          <img src={book.logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{book.book_title}</h1>
            <p className="py-6 text-xl font-semibold">{book.writer_name}</p>
            <hr />
            <h1 className="text-xl mb-2 font-medium">{book.book_type}</h1>
            <hr />
            <h1 className="font-bold">Review:{book.Review}</h1>
            <div>
              <p className="flex space-x-3 font-bold mb-4 ">
                <h1 className="text-xl font-bold ">Tag:</h1>
                <button className="border border-2 border-green-300  rounded-xl text-green-400 w-28 h-8">
                  {book.Motion_Type}
                </button>
                <button className="border border-2 border-green-300  rounded-xl text-green-400 w-28 h-8">
                  {book.Motion_Types}
                </button>
              </p>
            </div>
            <hr />

            <div className="text-xl font-bold">
              <h1>
                Number of Pages:{" "}
                <span className="lg:ml-14"> {book.NumberOfPage}</span>
              </h1>
              <h1>
                Publisher: <span className="lg:ml-32">{book.Publisher}</span>
              </h1>
              <h1>
                Year of Publishing:{" "}
                <span className="lg:ml-12"> {book.YearOfPublishing}</span>
              </h1>
              <h1>
                Rating: <span className="lg:ml-40">{book.Rating}</span>
              </h1>
            </div>

            <div className="space-x-2 mt-4">
              <button
                onClick={Readlist}
                className="btn btn-outline  w-16 h-12 "
              >
                Read
              </button>
              <button onClick={wishList} className="btn btn-accent">
                WishList
              </button>
            </div>
            <div className="mt-4 ">
              <button onClick={GoBack} className="btn btn-success w-36">
                Go Back{" "}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShowDetails;
