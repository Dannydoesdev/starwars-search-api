import styles from './Character.module.scss'
import ReactTooltip from 'react-tooltip';

function Planet({ name, population, terrain }: any) {

  return (
    <div className={styles.div}>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Population: {population}</p>
        <p>Terrain: {terrain}</p>
      </ReactTooltip>
    </div>
  )
}

export default Planet