export const Footer = () => {
    return (
        <footer className="bg-[#181411] text-white pt-16">

            {/* Newsletter */}
            <div className="max-w-7xl mx-auto px-8 pb-12 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-semibold">Stay Sharp</h2>
                    <p className="text-sm text-white/70 mt-2">
                        Join the club. Get grooming tips & exclusive offers straight to your inbox.
                    </p>
                </div>
                <div className="flex gap-3 w-full lg:w-auto">
                    <div className="flex items-center bg-[#231E19] px-4 py-2 rounded-md w-full lg:w-72">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent outline-none text-sm w-full text-white placeholder:text-white/50"
                        />
                    </div>
                    <button className="bg-[#CF6317] text-black px-6 py-2 rounded-md font-semibold hover:opacity-90 transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Links */}
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">✂ BARBERÍA MODERNA</h3>
                    <p className="text-sm text-white/70">
                        Redefining the gentleman’s grooming experience with precision, style, and urban elegance.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Explore</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>Services</li>
                        <li>The Experience</li>
                        <li>Book Appointment</li>
                        <li>About Us</li>
                        <li>Our Team</li>
                    </ul>
                </div>

                {/* Visit Us */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Visit Us</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li>
                            <strong className="text-white">Headquarters</strong><br />
                            123 Urban Avenue, Downtown<br />
                            New York, NY 10001
                        </li>
                        <li>
                            <strong className="text-white">Booking & Contact</strong><br />
                            +1 (555) 012-3456
                        </li>
                        <li>
                            <strong className="text-white">Opening Hours</strong><br />
                            Mon–Fri: 10am – 8pm<br />
                            Sat: 9am – 6pm
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 py-6 text-sm text-white/50 flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto">
                <p>© 2025 Barbería Moderna. All rights reserved.</p>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookie Settings</span>
                </div>
            </div>

        </footer>
    );
};
