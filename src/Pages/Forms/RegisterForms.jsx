import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const RegisterForms = () => {
    const {createUser,} = useContext(AuthContext);

    const handleRegistration = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // create user
        createUser(email,password)
        .then(alert('created'))
        .catch(alert('some wrong'))
    }
    return (
        <div>
            <div>
            <div className="flex justify-center mt-10 mb-20 bg-[#E6E6E6] sm:py-0 md:py-36 lg:py-36 rounded-md">
            <div className="bg-white p-10 rounded-md">
                <h2 className="text-center mb-5 font-extrabold text-xl">Register Your Account</h2>
                <form onSubmit={handleRegistration}>
                    <div className=" mx-auto mt-5">

                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                            <input className="w-[330px] h-[60px] bg-[#E6E6E6] font-bold p-5 block mt-5 rounded-full" type="text" name="name" required placeholder="Write Your name" />

                            <input className="w-[330px] h-[60px] bg-[#E6E6E6] font-bold p-5 block mt-5 rounded-full" type="text" name="photo" required placeholder="Give Photo URL" />
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                            <input className="w-[330px] h-[60px] bg-[#E6E6E6] font-bold p-5 block mt-5 rounded-full" type="email" required name="email" placeholder="Give Your E-mail" />

                            <input className="w-[330px] h-[60px] bg-[#E6E6E6] p-5 font-bold block mt-5 mb-2 rounded-full" type="password" name="password" required placeholder="Create a Password" />
                        </div>


                        <div><button className="mx-auto mt-3 rounded-full  bg-[#F8B90C] hover:bg-[#F8B90C] btn w-[330px] text-white block mb-10">Crate Account</button></div>
                        <div className='flex  justify-center'>
                            <div className=''>
                                <p>Have an account? <button className="btn btn-link"><Link to='/login'>Loin In</Link></button></p>

                            </div>
                        </div>
                        
                    </div>
                </form>
                
            </div>

        </div>
            </div>
        </div>
    );
};

export default RegisterForms;