

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 max-w-screen-xl mx-auto text-base-content">
                <aside>
                    <p className="font-semibold text-2xl text-[#F8B90C]">TaskSwift</p>
                    <p>TaskSwift Ltd.<br />Providing reliable service since 2002</p>
                </aside>
                <nav>
                    <header className="footer-title opacity-100 text-[#F8B90C]">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title opacity-100 text-[#F8B90C]">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title opacity-100 text-[#F8B90C]">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-[#BBEDEA] text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by TaskSwift Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;