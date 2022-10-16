import './card.styles.css';

export default function Card(props){
  const {
    id, 
    name,
    phone
  } = props.monster;
  console.log(props.monster);
  return(
    <div className={'card-container'}>
      <img alt={name} src={`https://robohash1.org/${id}?set=set2&180*180`} />
      <h2>{name}</h2>
      <h3>{phone}</h3>
    </div>
  );
}