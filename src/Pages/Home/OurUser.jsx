

const OurUser = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h2 className="text-center text-[40px] font-semibold">Our User</h2>
            <p className="text-center text-xl font-bold text-[#F8B90C]">You may use our TaskSwift to make your life easier!</p>
            <div className="flex flex-wrap justify-center items-center align-middle gap-9 mt-20">
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold uppercase">Lawyer </h2>
                            <p>A lawyer is a legal professional who advises and represents clients in legal matters. s, lawyers play a key role in upholding justice and safeguarding the rights of those they serve</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-sm text-[white] bg-[#F8B90C] hover:bg-[#F8B90C]">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold uppercase">architect</h2>
                            <p>An architect is a professional who designs and plans structures, combining aesthetics and functionality. With expertise in spatial design and construction, architects shape environments.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-sm text-[white] bg-[#F8B90C] hover:bg-[#F8B90C]">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title   uppercase">Web-developer</h2>
                            <p>A web developer specializes in crafting websites and web applications, employing various programming languages to ensure optimal functionality and user experience on the internet.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-sm text-[white] bg-[#F8B90C] hover:bg-[#F8B90C]">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurUser;