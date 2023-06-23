import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import GalleryImages from "./components/GalleryImages";
import GalleryImagesItems from "./components/GalleryImagesItem";
import Loader from "./components/Loader";
import ButtonMore from "./components/ButtonMore";
import Modal from "./components/Modal";
import svgDefault from "./assets/images.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [render, setRender] = useState(false);
  const [moreBtn, setMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState('');

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  const handleGetAPI = async () => {
    if (render === true) {
      const response = await axios.get(
        `/?key=${
          import.meta.env.VITE_API_KEY
        }&q=${query}&image_type=photo&per_page=12&page=${page}`
      );
      const dataPics = response.data.hits;
      if (page != 1) {
        setImages((prevImages) => [...prevImages, ...dataPics]);
      } else {
        setImages(dataPics);
      }
      setRender(false);
      setTimeout(() => setLoading(false), 1500);
    }
  };

  useEffect(() => {
    handleGetAPI();
  }, [images, render]);
  return (
    <>
      <SearchBar
        setQuery={setQuery}
        setPage={setPage}
        query={query}
        onRender={setRender}
        onShowBtn={setMore}
        onLoading={setLoading}
      />
      <Loader loading={loading} />
      {images.length > 0 ? (
        <GalleryImages render={render}>
          {images.map((image) => (
            <GalleryImagesItems
              key={nanoid(6)}
              image={image.webformatURL}
              alt={image.tags}
              onUrl={setUrl}
              onModal={setModal}
            />
          ))}
        </GalleryImages>
      ) : (
        <div className="svg-container">
          <img src={svgDefault} />
          <p className="svg-text">Encuentra la imagen perfecta!</p>
        </div>
      )}
      <ButtonMore
        onPageChange={() => {
          setRender(true);
          setLoading(true);
          setPage((prevPage) => prevPage + 1);
        }}
        showBtn={moreBtn}
      />
      <Modal modal={modal} largeImageUrl={url} handleStateModal={setModal} />
    </>
  );
}

export default App;
