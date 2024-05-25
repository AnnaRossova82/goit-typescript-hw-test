import React, { useEffect, useState, useRef, RefObject } from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../images-api';
import { Audio } from 'react-loader-spinner';
import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { Image } from '../../types';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const btnRef: RefObject<HTMLButtonElement> = useRef(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);

    if (btnRef.current) {
      btnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchImageData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);

        if (page > 1 && btnRef.current) {
          btnRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageData();
  }, [page, query]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />

      {error && <b>There was an error! Please reload the page!</b>}

      <ImageGallery items={images} openModal={openModal} />

      {isLoading && (
        <div>
          <Audio
            height="80"
            width="80"
            // radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}} 
            wrapperClass=""
          />
        </div>
      )}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn ref={btnRef} onClick={handleLoadMore} />
      )}

      <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
    </div>
  );
};

export default App;

/* import { useEffect, useState, useRef } from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../images-api';
import { Audio } from 'react-loader-spinner';
import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';


export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const btnRef = useRef();

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    

    if (btnRef.current) {
      btnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchImageData() {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);


        if (page > 1 && btnRef.current) {
          btnRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImageData();
  }, [page, query]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />

      {error && <b>There was an error! Please reload the page!</b>}

      <ImageGallery items={images} openModal={openModal} />

      {isLoading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn ref={btnRef} onClick={handleLoadMore} />
      )}

      <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
    </div>
  );
} */