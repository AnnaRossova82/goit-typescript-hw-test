import  { forwardRef } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = forwardRef<HTMLButtonElement, LoadMoreBtnProps>(({ onClick }, ref) => (
  <button className={css.button} onClick={onClick} ref={ref}>
    Load more images
  </button>
));

export default LoadMoreBtn;

/* import css from "./LoadMoreBtn.module.css";


const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>Load more images</button>
  );
};

export default LoadMoreBtn; */