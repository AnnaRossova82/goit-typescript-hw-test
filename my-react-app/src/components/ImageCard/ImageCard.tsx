
import { Image } from '../../images-api';

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;

/* const ImageCard = ({ image, openModal }) => {
    return (
      <div><img
      src={image.urls.small}
      alt={image.alt_description}
      onClick={() => openModal(image)}
    />
    </div>
      
    );
  };
  
  export default ImageCard; */