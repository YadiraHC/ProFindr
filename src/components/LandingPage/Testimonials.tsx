import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
    {
        message: "As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio",
        name: "Daphne Augustine",
        title: "UI/UX Designer",
        img: "./images/user-avatar.png"
    },
    {
        message: "As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio",
        name: "Daphne Augustine",
        title: "UI/UX Designer",
        img: "./images/user-avatar.png"
    },
    {
        message: "As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio",
        name: "Daphne Augustine",
        title: "UI/UX Designer",
        img: "./images/user-avatar.png"
    },
    {
        message: "As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio",
        name: "Daphne Augustine",
        title: "UI/UX Designer",
        img: "./images/user-avatar.png"
    },
    {
        message: "As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio",
        name: "Daphne Augustine",
        title: "UI/UX Designer",
        img: "./images/user-avatar.png"
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-medium mb-8 text-center">Testimonials</h2>
                <div className="hidden lg:flex space-x-4 overflow-x-scroll no-scrollbar">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#0A65CC] text-white p-6 rounded-lg min-w-[300px] lg:min-w-[450px]">
                            <p className="mb-4">{testimonial.message}</p>
                            <div className="flex items-center">
                                <img src={testimonial.img} alt={testimonial.name} className="w-[50px] h-[50px] rounded-full mr-4 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">{testimonial.name}</p>
                                    <p className="text-gray-200">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:hidden">
                    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-[#0A65CC] text-white p-6 rounded-lg">
                                <p className="mb-4">{testimonial.message}</p>
                                <div className="flex items-center">
                                    <div className='w-[50px] h-[50px] pr-1'>
                                        <img src={testimonial.img} alt={testimonial.name} className="rounded-full" />
                                    </div>
                                    
                                    <div>
                                        <p className="font-normal">{testimonial.name}</p>
                                        <p className="text-gray-200">{testimonial.title}</p>
                                    </div>
                        
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
