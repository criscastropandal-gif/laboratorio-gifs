export const getGifs = async (category) => {
    const apiKey = 'ImCPHjL1t7MEslLyaQ6xrtL9K0S5S4wK'; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=5`;
    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};