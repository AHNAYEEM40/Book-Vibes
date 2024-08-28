import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/LocalStroge";
import { getWishBook } from "../Utility/LocalStore1";
const ListedBooks = () => {
  const book = useLoaderData();
  const navigate = useNavigate();

  const [addbook, setAddbook] = useState([]);
  const [wishBook ,setwishbook]= useState([]);
  const [WishListBook ,setWishListBook] =useState([])
 

  useEffect(() => {
    const storeBook = getStoredBook();
    if (book.length > 0) {
      const AddBook = book.filter((book) => storeBook.includes(book.id));
      // console.log(book ,storeBook ,AddBook);
      setAddbook(AddBook);
    //   setwishbook(AddBook)
    }
  }, [book]);

  useEffect(() => {
    const storeWishListBook = getWishBook();
    if (book.length > 0) {
      const AddWishList = book.filter((book) => storeWishListBook.includes(book.id));
    setWishListBook(AddWishList)
    }
  }, [book]);

  const backToOldPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="lg:w-[1169px] h-28 mx-auto bg-gray-300 rounded-2xl">
        <h1 className="text-2xl font-bold text-center pt-8">
          Books:{addbook.length}
        </h1>
      </div>
      <div className="text-center mt-2 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 btn-primary">
            Short by
            <SlArrowDown className="text-xl font-extrabold"></SlArrowDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Page Number</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2>
              {addbook.map((book) => (
                <li key={book.id} >
                  <div className="card card-side bg-base-100 shadow-xl lg:w-[1168px] lg:h-80 mx-auto ">
                    <figure>
                      <img src={book.logo} alt="Album" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                        {book.book_title}
                      </h2>
                      <p className="text-xl font-semibold">
                        {book.writer_name}
                      </p>
                      <p className="text-xl font-bold ">
                        Tag:
                        <button className="btn border-gray-500 mr-3 text-lg text-bold rounded-2xl text-green-700">
                          {book.Motion}
                        </button>
                        <button className="btn border-gray-500 mr-3 text-lg text-bold rounded-2xl text-green-700">
                          {book.book_type}
                        </button>{" "}
                        Year Of Publishing:{book.YearOfPublishing}
                      </p>
                      <div className="flex gap-4">
                        <h1 className="text-2xl font-bold">
                          Publisher:{book.Publisher}
                        </h1>
                        <h1 className="text-2xl font-bold">
                          Page:{book.NumberOfPage}
                        </h1>
                      </div>
                      <hr />
                      <div className="card-actions">
                        <h1 className="border border-2 border-gray-700 text-2xl font-bold rounded-2xl text-green-600 h-12 w-48 pt-1 bg-lime-300 ">
                          Category:{book.Category}
                        </h1>
                        <button className="btn btn-warning">
                          Reating:{book.Rating}
                        </button>
                        <button
                          onClick={backToOldPage}
                          className="btn btn-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </h2>
          </TabPanel>
          <TabPanel>
          <h2>
              {WishListBook.map((book) => (
                <li key={book.id}>
                  <div className="card card-side bg-base-100 shadow-xl lg:w-[1168px] lg:h-80 mx-auto ">
                    <figure>
                      <img src={book.logo} alt="Album" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                        {book.book_title}
                      </h2>
                      <p className="text-xl font-semibold">
                        {book.writer_name}
                      </p>
                      <p className="text-xl font-bold ">
                        Tag:
                        <button className="btn border-gray-500 mr-3 text-lg text-bold rounded-2xl text-green-700">
                          {book.Motion}
                        </button>
                        <button className="btn border-gray-500 mr-3 text-lg text-bold rounded-2xl text-green-700">
                          {book.book_type}
                        </button>{" "}
                        Year Of Publishing:{book.YearOfPublishing}
                      </p>
                      <div className="flex gap-4">
                        <h1 className="text-2xl font-bold">
                          Publisher:{book.Publisher}
                        </h1>
                        <h1 className="text-2xl font-bold">
                          Page:{book.NumberOfPage}
                        </h1>
                      </div>
                      <div className="card-actions">
                        <h1 className="border border-2 border-gray-700 text-2xl font-bold rounded-2xl text-green-600 h-12 w-48 pt-1 bg-lime-300 ">
                          Category:{book.Category}
                        </h1>
                        <button className="btn btn-warning">
                          Reating:{book.Rating}
                        </button>
                        <button
                          onClick={backToOldPage}
                          className="btn btn-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
