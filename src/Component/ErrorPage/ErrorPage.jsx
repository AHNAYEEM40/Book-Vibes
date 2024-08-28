import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="border border-4 border-black-400 bg-green-400 lg:w-96 mx-auto lg:h-56  text-center mt-4 rounded-2xl hover:bg-blue-800 lg:ml-96  lg:mt-60">
            <h1 className="text-3xl font-bold text-orange-600">Oops You are Click in the wrong town</h1>
            <Link to="/"><button className="text-3xl font-bold btn btn-success mt-8">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;