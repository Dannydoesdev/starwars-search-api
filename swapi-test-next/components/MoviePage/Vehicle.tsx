import styles from './Character.module.scss'
import ReactTooltip from 'react-tooltip';

function Vehicle({ name, model, crew, cost_in_credits, passengers }: any) {

  return (
    <div className={styles.div}>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Model: {model}</p>
        <p>Number of crew: {crew}</p>
        <p>Number of passengers: {passengers}</p>
        <p>Cost (in credits): {cost_in_credits}</p>
      </ReactTooltip>
    </div>
  )
}

export default Vehicle