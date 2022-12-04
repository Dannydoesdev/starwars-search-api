import styles from './Character.module.scss'
import ReactTooltip from 'react-tooltip';

function Character({ name, skinColor, birthYear, eyeColour, hairColour, gender }: any) {

  return (
    <div className={styles.div}>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Born: {birthYear}</p>
        <p>Eye Colour: {eyeColour}</p>
        <p>Hair Colour: {hairColour}</p>
        <p>Gender: {gender}</p>
      </ReactTooltip>
      <div>
        <p>Born: {birthYear}</p>
        <p>Eye Colour: {eyeColour}</p>
        <p>Hair Colour: {hairColour}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  )
}

export default Character