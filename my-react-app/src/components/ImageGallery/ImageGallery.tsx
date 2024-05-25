import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../images-api';

interface ImageGalleryProps {
  items: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <div>
      {items && items.length > 0 ? (
        <ul className={css.itemsList}>
          {items.map((image) => (
            <li className={css.imagesList} key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageGallery;

/* import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, openModal }) => {
  return (
    <div>
      {items && items.length > 0 ? (
        <ul className={css.itemsList}>
          {items.map((image) => (
            <li className={css.imagesList} key={image.id}>
                <ImageCard image={image} openModal={openModal} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageGallery; */