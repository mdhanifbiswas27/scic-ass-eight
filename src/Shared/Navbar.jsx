import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    const handleLogOut=()=>{
        logout()
        .then()
        .catch()
    }

    return (
        <div className=" bg-white">
            <div className="navbar max-w-screen-xl mx-auto text-black">
                <div className="navbar-start flex justify-between">
                    <div className="dropdown order-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1C222A] rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {
                            user && <>
                              <li><Link to='/dashboard'>Dashboard</Link></li>
                            </>
                        }
                        <li><Link to='/register'>Register</Link></li>
                        {
                            user? <><li onClick={handleLogOut} className="rounded-md bg-[#F8B90C] hover:bg-[#F8B90C] text-white"><Link to='/logIn'>LogOut</Link></li></> :
                            
                            <><li className="rounded-md bg-[#F8B90C] hover:bg-[#F8B90C] text-white"><Link to='/logIn'>LogIn</Link></li></>
                        }

                        </ul>
                    </div>
                    <p className="btn hover:bg-transparent btn-ghost text-2xl text-[#F8B90C] order-1">TaskSwift</p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-medium">
                        <li><Link to='/'>Home</Link></li>
                        {
                            user && <>
                              <li><Link to='/dashboard'>Dashboard</Link></li>
                            </>
                        }
                        <li><Link to='/register'>Register</Link></li>
                        {
                            user? <><li onClick={handleLogOut} className="rounded-md bg-[#F8B90C] hover:bg-[#F8B90C] text-white"><Link to='/logIn'>LogOut</Link></li></> :
                            
                            <><li className="rounded-md bg-[#F8B90C] hover:bg-[#F8B90C] text-white"><Link to='/logIn'>LogIn</Link></li></>
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

