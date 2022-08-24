import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/uploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/modal';

function App() {
  const [selectedImg, setselectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setselectedImg={setselectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg}/>}
    </div>
  );
}

export default App;
