import React from 'react';
import ReactModal from 'react-modal';
import { Image } from '../images-api';

interface ImageModalProps {
  selectedImage: Image | null;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, closeModal }) => {
  return (
    <ReactModal
      isOpen={selectedImage !== null}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)'
        },
      }}
    >
      {selectedImage && (
        <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      )}
    </ReactModal>
  );
};

export default ImageModal;

/* import ReactModal from 'react-modal';

const ImageModal = ({ selectedImage, closeModal }) => {
  return (
    <ReactModal
      isOpen={selectedImage !== null}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)' 
        },
      
      }}
    >
    
      {selectedImage && (
        <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      )}
    </ReactModal>
  );
};

export default ImageModal; */