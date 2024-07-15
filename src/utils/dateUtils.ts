// src/utils/dateUtils.ts
export const getTimeSinceUpdate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffDays < 1) {
        return "Today";
    } else if (diffDays === 1) {
        return "Yesterday";
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 14) {
        return "A week ago";
    } else if (diffDays < 21) {
        return "Two weeks ago";
    } else if (diffDays < 28) {
        return "Three weeks ago";
    } else if (diffMonths < 12) {
        return `${diffMonths} months ago`;
    } else {
        return `${diffYears} years ago`;
    }
};
