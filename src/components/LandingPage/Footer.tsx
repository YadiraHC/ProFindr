import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="hidden lg:flex justify-between">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="./images/Logo.png" alt="ProFindr Logo" className="h-8" />
                            <span className="font-medium">ProFindr</span>
                        </div>
                        <p>Copyright © 2024 ProFindr. All rights reserved</p>
                        <div className="flex space-x-4">
                            <a href="#"><img src="./images/facebook-icon.png" alt="Facebook" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/instagram-icon.png" alt="Instagram" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/twitter-icon.png" alt="Twitter" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/youtube-icon.png" alt="YouTube" className="h-6 w-6" /></a>
                        </div>
                    </div>
                    <div className="flex space-x-12">
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium">Company</h3>
                            <a href="#">About us</a>
                            <a href="#">Contact us</a>
                            <a href="#">Testimonials</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium">Support</h3>
                            <a href="#">Help center</a>
                            <a href="#">Terms of service</a>
                            <a href="#">Legal</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Status</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-medium">Find a Job</h3>
                        <div className="relative">
                            <input type="text" placeholder="Job title, keyword" className="px-4 py-2 rounded-lg w-full focus:outline-none" />
                            <span className="material-icons absolute top-2 right-3 text-gray-400">search</span>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex items-center">
                        <img src="./images/Logo.png" alt="ProFindr Logo" className="h-8" />
                        <span className="font-medium">ProFindr</span>
                        
                    </div>
                    <div className='text-center mb-4'>
                    <p className="mt-4">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    
                    </div>
                    <div className="flex justify-between mb-8">
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium">About</h3>
                            <a href="#">Companies</a>
                            <a href="#">Pricing</a>
                            <a href="#">Terms</a>
                            <a href="#">Advice</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium">Resources</h3>
                            <a href="#">Help Docs</a>
                            <a href="#">Guide</a>
                            <a href="#">Updates</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="mb-8 text-center">
                        <h3 className="font-medium">Get job notifications</h3>
                        <p className="mt-2 mb-4">The latest job news, articles, sent to your inbox weekly.</p>
                        <input type="text" placeholder="Email Address" className="px-4 py-2 rounded-lg w-full mb-4 focus:outline-none" />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Subscribe</button>
                    </div>
                    <div className="text-center">
                        <p className="mb-4">2024 @ ProFindr. All rights reserved.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#"><img src="./images/facebook-icon.png" alt="Facebook" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/instagram-icon.png" alt="Instagram" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/twitter-icon.png" alt="Twitter" className="h-6 w-6" /></a>
                            <a href="#"><img src="./images/youtube-icon.png" alt="YouTube" className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
