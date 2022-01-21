import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      toast.error('type in the search!');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };
  render() {
    return (
      <div className={s.Header}>
        <form className={s.Form} onSubmit={this.handleSubmit}>
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
            value={this.state.searchName}
            onChange={this.handleNameChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
