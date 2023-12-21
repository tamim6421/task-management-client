
import { Link, NavLink } from "react-router-dom";


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const{user, logOut} = useContext(AuthContext)

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle = e =>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  useEffect( () =>{
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  } ,[theme])



    const links = <>

        <li>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 text-lg font-semibold" : "hover:bg-green-100  text-gray-600 text-lg"
  }
>
 Home
</NavLink>
        </li>
     
        <li>
            <NavLink
      to="dashboard"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-500 text-lg  font-semibold" : "hover:bg-green-100   text-lg"
      }
    >
    Dashboard
    </NavLink>
            </li>
        
    </>
    return (
        <div className=" ">
        <div className="navbar fixed z-10 max-w-[1200px] mx-auto bg-opacity-90 bg-white top-0 w-full  shadow-lg px-10 font-semibold  ">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn  bg-[#43f16f5d] lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-box w-29">
   {links}
  
  </ul>
</div>
<Link to='/'><button className=" normal-case px-4  font-extrabold text-2xl">
  <h1>Task.io</h1>
  </button></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {links}
</ul>
</div>
<div className="navbar-end">

  {/* for dark theme */}
  <div className="text-green-500">
  <label className="swap swap-rotate">

  <input onChange={handleToggle} type="checkbox" />
  
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
{
  user ? <div> 
      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      {
        user.photoURL === null ?  <img  src="https://i.ibb.co/hXYvv9g/girl2.jpg" alt={user.displayName} /> :
        <img src={user.photoURL } alt={user.displayName} />
      }
      
    </div>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content text-sm  space-y-2 mt-3 z-[1] p-2 shadow bg-green-200 ">
    <li>
    {
              user.displayName == null ? <button className="btn btn-sm text-white bg-green-500"> User </button> :<button className="btn btn-sm  text-white bg-green-500">  {user.displayName} </button>
            }
          </li>
          <li>
          <button className="btn btn-sm text-white bg-green-400" > {user.email} </button>
          </li>
          <li className="w-full">
           <button
          onClick={logOut}
            className="btn btn-sm text-white  w-full bg-green-400" > LogOut </button>
          </li>
  </ul>
</div>

  </div> : <Link to='/login'> <button className="rounded-lg btn-sm text-white bg-green-500 ">Let's Explore</button> </Link>

}

</div>
</div>
    </div>
    );
};

export default Navbar;