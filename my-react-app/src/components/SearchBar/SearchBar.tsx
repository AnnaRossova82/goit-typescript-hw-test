import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface FormValues {
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const initialValues: FormValues = {
    searchTerm: '',
  };

  const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    if (!values.searchTerm) {
      toast.error('Please enter a search term');
    } else {
      onSubmit(values.searchTerm);
      toast.success('Searching...');
      resetForm();
    }
  };

  return (
    <header className={styles.searchBar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <button type="submit">
            <IoSearch /> Search
          </button>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchTerm"
          />
          <ErrorMessage name="searchTerm" component="div" />
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;

/* import { toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './SearchBar.module.css';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    searchTerm: '',
  };


  const handleSubmit = (values, { resetForm }) => {
    if (!values.searchTerm) {
      toast.error('Please enter a search term');
    } else {
      onSubmit(values.searchTerm);
      toast.success('Searching...'); 
      resetForm();
    }
  };

  return (
    <header className={styles.searchBar}>
      <Formik
        initialValues={initialValues}

        onSubmit={handleSubmit}
      >
        <Form>
        <button type="submit"><IoSearch />   Search</button> 
          <Field 
       
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchTerm"
          />
          <ErrorMessage name="searchTerm" component="div" />
      
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} /> 
    </header>
  );
};

export default SearchBar; */