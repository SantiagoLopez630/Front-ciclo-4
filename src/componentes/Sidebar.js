import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <aside className="md: w-80 lg:w-45 px-5 py-10 bg-gray-800">
            <Link
            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
            to={"/crear-categoria"}
            >
          Crear categoria
        </Link>
        <div className="py-10">
        <Link
            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
            to={"/admin"}
            >
          Admin categoria
        </Link>
        </div>   
        </aside>
    );
}

export default Sidebar;