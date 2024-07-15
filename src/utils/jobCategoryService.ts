import jobCategories from '../data/jobCategories.json';

export const searchJobCategories = (query: string) => {
    const results: { category: string; subcategories: string[] }[] = [];
    for (const category in jobCategories) {
        const subcategories = jobCategories[category as keyof typeof jobCategories].filter(subcategory =>
            subcategory.toLowerCase().includes(query.toLowerCase())
        );
        if (subcategories.length > 0) {
            results.push({ category, subcategories });
        }
    }
    return results;
};
