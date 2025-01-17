import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardVideo from '../../components/Cards';

const CategoriasPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/Wilmerd0/alura-flix-api/videos');
                setVideos(response.data); // Actualizamos el estado con los datos de videos obtenidos
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className={styles.categorias}>
            <h1>Categorías</h1>
            <div className={styles.videos}>
                {videos.map((video) => (
                    <CardVideo key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default CategoriasPage;
