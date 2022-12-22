import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import crud from '../conexiones/crud';

const CrearCuenta = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const { nombre, email, password, confirmar} = usuario;

  const onChange = (e) => {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
  };

  const CrearCuenta = async () => {

    if((nombre).length===0 || (email).length===0 || (password).length===0){
      console.log('diferentes');
      const mensaje = "Todos los campos son obligatorios";
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons:{
          confirm:{
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }else{
          //los dos password deben ser iguales
    
    if(password !== confirmar){
      console.log('diferentes');
      const mensaje = "las contraseñas no coinciden.";
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons:{
          confirm:{
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }else{
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }
      console.log(data);

      const response = await crud.POST(`/api/usuarios`, data);
      const mensaje = response.msg;
      //console.log(mensaje);
      if(mensaje === "El usuario ya existe"){
        const mensaje = "El usuario ya existe";
        swal({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          buttons:{
            confirm:{
              text: 'Ok',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        });
      }else{
        const mensaje = "El usuario fue creado correctamente";
        swal({
          title: 'Información',
          text: mensaje,
          icon: 'success',
          buttons:{
            confirm:{
              text: 'Ok',
              value: true,
              visible: true,
              className: 'btn btn-primary',
              closeModal: true
            }
          }
        });
    }


        setUsuario({
          nombre:'',
          email:'',
          password:'',
          confirmar:''
        })
        //redireccionar nuevamente a la pagina login
        navigate("/");
      };
    }





  
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearCuenta();
  }

    return (
      <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'> 
      <div className='md:w-2/3 lg:w-2/5'>
      <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
        G12 Iniciar sesión Ecommerce
      </h1>
      <form 
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={onSubmit}
      >
        
        
        <div className="my-5">
          
          <label className="uppercase text-gray-600 block text-lx font-bold">Nombre</label>
          <input
          type="nombre"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
          value={nombre}
          onChange={onChange}
          />

          <label className="uppercase text-gray-600 block text-lx font-bold">Email</label>
          <input
          type="email"
          id="email"
          name="email"
          placeholder="Email de Registro"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
          value={email}
          onChange={onChange}
          />
  
          <label className="uppercase text-gray-600 block text-lx font-bold">Password</label>
          <input
          type="password"
          id="password"
          name="password"
          placeholder="Password de Registro"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
          value={password}
          onChange={onChange}
          />

          <label className="uppercase text-gray-600 block text-lx font-bold">confirme su password</label>
          <input
          type="password"
          id="confirmar"
          name="confirmar"
          placeholder="Confirmar password"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
          value={confirmar}
          onChange={onChange}
          /> 

        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
          />
  
        <Link
          className="block text-center my-5"
          to={"/login"}
        >
          Regresar
        </Link>   
      </form>
    </div>
    
    </main>
    )

}

export default CrearCuenta;