import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifCard from "./GifCard";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const data = await getGifs(category);
            setImages(data);
        };
        getImages();
    }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image) => (
                    <GifCard 
                        key={image.id} 
                        title={image.title} 
                        url={image.url} 
                    />
                ))}
            </div>
        </div>
    );
};

export default GifGrid;