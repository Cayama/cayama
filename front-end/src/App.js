import React, { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';
import './App.css';


function App() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [description, setDescription] = useState('');
  const [videosPath, setVideosPath] = useState('');
  const [productImages, setProductImages] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmNzc1NDBjOWNhMjUxNDk1ZDg2MWNhMiIsImZpcnN0TmFtZSI6IkphZmV0IEhlbnJpcXVlIiwibGFzdE5hbWUiOiJHdWVycmEgRmFndW5kZXMiLCJlbWFpbCI6ImphZnNkZXNzc3NzdEBqYWZlc3QuY29tLmJyIiwiYmlydGhEYXRlIjoiMDIvMDcvMTk5NCIsImluZmx1ZW5jZXIiOnsic29jaWFsTWVkaWEiOiJZb3VUdWJlIiwic29jaWFsTWVkaWFOYW1lIjoiQ2FuYWwgWW91IFRlY2hub2xvZ3kiLCJjb250ZW50VHlwZSI6IlRlY25vbG9naWEiLCJpbmZsdWVuY2VyTGluayI6ImphZmV0ZWNoIn0sImFkZHJlc3NlcyI6W3sibmFtZSI6IkphZmV0IEhlbnJpcXVlIEd1ZXJyYSBGYWd1bmRlcyIsImNlcCI6IjMwMzUwNjYwIiwic3RhdGUiOiJNaW5hcyBHZXJhaXMiLCJjaXR5IjoiQmVsbyBIb3Jpem9udGUiLCJuZWlnaGJvcmhvb2QiOiJTw6NvIEJlbnRvIiwic3RyZWV0IjoiUnVhIERvdXRvciBNYXJpbyBQaXJlcyIsIm51bWJlciI6IjkxIiwiY29tcGxlbWVudCI6IkNhc2EiLCJwaG9uZSI6IjMxOTk2NDcxODg4In1dfSwiaWF0IjoxNjAyNzA1Mjg3LCJleHAiOjE2MDI3MDg4ODd9.GHPRhioinWR2aihJ0-w5uLhLl0EhX0ebuJgQTHCp7Oo';

  const registerProduct = (event) => {
    event.preventDefault();

    let formData = new FormData();
    productImages.forEach((image) => formData.append('productImages', image))

    console.log(formData)
    return axios.post('http://localhost:3001/store/register-product', formData,
      {
        headers: { authorization: token, 'Content-Type': `multipart/form-data; boundary=${formData._boundary}` }
      }
    )
    .then(() => console.log('Form enviado com sucesso'))
    .catch((err) => console.log(err))
  };

  const handleImages = (event) => {
    const fileObjArray = [];
    fileObjArray.push(event.target.files);
    const fileArray = [];

    for (let i = 0; i < fileObjArray[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObjArray[0][i]))
    }

    setProductImages(fileArray)
  }

  return (
    <div className="App">
      <form action="/store/register-product" method="post" encType="multipart/form-data">
        <label htmlFor="product-name">
          <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" id="product-name" name="productName" />
        </label>
        <label htmlFor="price">
          <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" id="price" name="price" />
        </label>
        <label htmlFor="stock-quantity">
          <input onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} type="number" id="stock-quantity" name="stockQuantity" />
        </label>
        <label htmlFor="description">
          <input type="textbox" onChange={(e) => setDescription(e.target.value)} value={description} id="description" name="description" />
        </label>
        <label htmlFor="video-path">
          <input type="text" onChange={(e) => setVideosPath(e.target.value)} value={videosPath} id="video-path" name="videosPath" />
        </label>
        <label htmlFor="select-files">
          Escolhas as fotos:
          <input id="select-files" onChange={(e) => handleImages(e)} name="productImages" type="file" multiple />
        </label>
        <button type="submit" onClick={(event) => registerProduct(event)}>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
