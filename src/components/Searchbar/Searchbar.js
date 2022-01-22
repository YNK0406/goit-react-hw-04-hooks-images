import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.scss';

function Searchbar({onSubmit}) {
  const [searchName, setSearchName] = useState('');
  

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      toast.error('type in the search!');
      return;
    }
    onSubmit(searchName);
    setSearchName('' );
  };
 
    return (
      <div className={s.Header}>
        <form className={s.Form} onSubmit={handleSubmit}>
          <button type="submit" className={s.Button}>
            <ImSearch/>
          </button>
          <label className={s.ButtonLabel}>
            Search pictures
          </label>
          <input
            id={nanoid()}
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={handleNameChange}
          />
        </form>
      </div>
    );
  }


export default Searchbar;
