import styles from './Character.module.scss'
import ReactTooltip from 'react-tooltip';

function Starship({ name, model, crew, cost_in_credits, starship_class }: any) {

  return (
    <div className={styles.div}>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Model: {model}</p>
        <p>Starship Class: {starship_class}</p>
        <p>Number of crew: {crew}</p>
        <p>Cost (in credits): {cost_in_credits}</p>
      </ReactTooltip>
    </div>
  )
}

export default Starship