import ReactTooltip from 'react-tooltip';

function Character({ name, skin_color, birth_year, eye_color, hair_color, gender }: any) {

  return (
    <div>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Born: {birth_year}</p>
        <p>Eye Colour: {eye_color}</p>
        <p>Hair Colour: {hair_color}</p>
        <p>Gender: {gender}</p>
      </ReactTooltip>
    </div>
  )
}

export default Character