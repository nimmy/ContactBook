import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './Picture.scss';

const Picture = () => {
    const [images, setImages] = useState([]);
    const getImagesFromApi = async (term) => {
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                "Authorization": 'Client-ID TYdPhuVi0qI2WjX9HOvsOK7Qx7H6vmBM6XwfVZE_K0A',
            },
            params: {
                query: term
            }
        })
        return result.data.results;
    }

    const onSearchType = async (value) => {
        const searchReuslt = await getImagesFromApi(value);
        setImages(searchReuslt);
        // console.log(images);
    }   

    return (
        <div className="container">
            <SearchBar onSubmit={onSearchType} />
            <ImageList images={images} />
        </div>
    )
}

export default Picture