/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function StyledDropzone(props) {
  const [images, setImages] = useState([]);

  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if(images.length<1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
}, [images]);

function onImageChange(e) {
    setImages([...e.target.files]);
}

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'image/*': []}});
  
  return (
    <>
    <div className="container">
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} onChange={onImageChange}/>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
    </div>
    { imageURLs.map(imageSrc => <img src={imageSrc} />) }
    </>
  );
}

export default StyledDropzone;