import styles from './Character.module.scss'
import ReactTooltip from 'react-tooltip';

function Species({ name, classification, language, average_height, average_lifespan }: any) {

  return (
    <div className={styles.div}>
      <h4 data-tip data-for={name}>{name}</h4>
      <ReactTooltip id={name} place="top" type="dark" effect="float">
        <p>Classification: {classification}</p>
        <p>Language: {language}</p>
        <p>Average height: {average_height}</p>
        <p>Average lifespan: {average_lifespan}</p>
      </ReactTooltip>
    </div>
  )
}

export default Species