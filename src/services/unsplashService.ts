// src/services/unsplashService.ts
export const getProfileImage = async () => {
    const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
    const response = await fetch(`https://api.unsplash.com/photos/random?query=profile&client_id=${accessKey}`);
    const data = await response.json();
    return data.urls.small;
};
