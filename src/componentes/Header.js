import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate("/");
      }

    return (
        <header className="px-4 py-5 bg-gray-800 border-b">
            <div className="md:flex md:justify-between">
                <h2 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent">
                    Panel de administrador G12
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-4"> 
                <input
                    type="submit"
                    value="Cerrar sesión"
                    className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                    onClick={cerrarSesion}
                />
                </div>
                
            </div>

        </header>
        
    );
}

export default Header;