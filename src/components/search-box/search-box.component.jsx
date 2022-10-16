import './search-box.styles.css';

export default function SearchBox(props) {
  const {
    placeholder, 
    changeHandler
  } = props;
  return(
    <input 
    className='search-box'
    type='search'
    placeholder={placeholder}
    onChange={changeHandler} 
    />
  );
}