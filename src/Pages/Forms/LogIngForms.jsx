import { useContext, } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIngForms = () => {
    const {singIn,singInWithGoogle} = useContext(AuthContext);
   
    const Navigate = useNavigate();

   
    const handleLogin = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        // 
        singIn(email, password)
        .then(
            Navigate('/dashboard')
        )
        .catch()
    }

    const handleLogInWithGoogle = async () => {
        singInWithGoogle()
        .then(()=>{
            Navigate('/dashboard')
        })
        .catch(()=>{
            
        })
    };
    
    return (
        <div>
            <div className="flex justify-center  mt-5 mb-5 bg-[#E6E6E6] sm:py-0 md:py-28 lg:py-28 rounded-md">
            <div className="bg-white  py-8 px-10 rounded-md">
                <h2 className="text-center mb-5 font-extrabold text-xl">LOGIN</h2>
                <form onSubmit={handleLogin}>
                    <div className=" mx-auto mt-5">
                        <input className="w-[330px] bg-[#E6E6E6] font-bold p-5 block" type="email" name='email' required placeholder="E-mail" />
                        <input className="w-[330px] bg-[#E6E6E6] p-5 font-bold block mt-6 mb-2" type="password" name='password' required placeholder="Password" />
                        <div className="mb-4">
                            <div className="flex gap-1"><input type="checkbox" /> <p className="font-medium">Remember Me</p></div>
                            <div></div>
                        </div>
                        <div>
                            <button className="bg-[#F8B90C] hover:bg-[#F8B90C] btn w-[330px] text-white block mb-4">LOGIN</button>
                            
                        </div>
                        <p className='font-lg font-medium'>New here? <button className='btn btn-link mb-5'><Link to='/register'>Create Account</Link></button></p>

                        <div className='flex  justify-center'>
                            <div onClick={handleLogInWithGoogle} className='cursor-pointer border border-blue-500 rounded-full flex items-center py-2 px-4 gap-1'>
                                <FcGoogle className='text-xl font-semibold text-center'></FcGoogle>
                                <p   className='font-semibold text-xl text-blue-500 text-center'>SingIn with Google</p>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>

        </div>
        </div>
    );
};

export default LogIngForms;