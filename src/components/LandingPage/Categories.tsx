import React from 'react';

const categories = [
    { icon: 'construction', title: 'Construction & Maintenance', positions: 357 },
    { icon: 'cleaning_services', title: 'Home cleaning & Maintenance', positions: 312 },
    { icon: 'gavel', title: 'Legal & Professional services', positions: 297 },
    { icon: 'event', title: 'Events & Entertainment', positions: 247 },
    { icon: 'local_shipping', title: 'Transport & Removals', positions: 204 },
    { icon: 'account_balance_wallet', title: 'Account & Finance', positions: 167 },
    { icon: 'health_and_safety', title: 'Personal Care & Well-being', positions: 125 },
    { icon: 'female', title: 'Beauty', positions: 57 },
];

const Categories: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-medium mb-8">Popular category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 flex items-center border md:border-transparent sm:border-gray-300 md:rounded-none"
                        >
                            <div className="bg-blue-100 rounded-lg p-3 mr-4">
                                <span className="material-icons text-[#0A65CC]">{category.icon}</span>
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-medium">{category.title}</p>
                                <p className="text-gray-600">{category.positions} Open position</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-8">
                    <button className="text-blue-500 flex items-center space-x-2">
                        <span>View All</span>
                        <span className="material-icons">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
