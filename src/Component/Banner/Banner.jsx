import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="lg:w-[1170px] lg:h-[554px] mx-auto mt-4 bg-slate-200 rounded-2xl lg:flex sm:flex-row-reverse-reverse">
            <div className="lg:pl-24 pl-8 lg:pt-56">
                <h1 className="text-3xl font-bold">Books to freshen up your bookshelf</h1>
              <Link to="/listed">
              <button className="btn btn-secondary bg-green-500 mt-4">View The List</button></Link>
            </div>
            <div className="lg:mt-16 pl-28">
            <img src="https://i.ibb.co/7Gx4CC3/pngwing-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;

