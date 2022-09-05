import React from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/png': ['.png','.jpg'],
    }
  });
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop your image here, or click to select file</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Dropzone;

