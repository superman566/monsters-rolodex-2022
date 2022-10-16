import './card.styles.css';

export default function Card(props){
  const {
    id, 
    name, 
    email
  } = props.monster;
  return(
    <div className={'card-container'}>
      <img alt={name} src={`https://robohash.org/${id}?set=set2&180*180`} />
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
}