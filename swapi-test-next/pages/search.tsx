import Link from "next/link";
import { Key, useEffect, useState } from "react";
import Film from "../components/HomePage/Film";
import { useApiSearch } from "../hooks/useApiSearch"
import styles from '../styles/Search.module.scss'

function Search() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('films')
  const [searchParamater, setSearchParameter] = useState('title')

  function handleSelectChange(event: any) {
    const selectedType = event.target.value
    setSelectValue(event.target.value);
    if (!(selectedType == 'films')) {
      setSearchParameter('name')
    } else {
      setSearchParameter('title')
    }
  }

  function handleInputChange(event: any) {
    const inputValue = event.target.value
    if (inputValue === "") {
      setInputValue("");
    } else {
      setInputValue(inputValue);
    }
  }

  const searchResultInput = useApiSearch(selectValue, searchParamater, inputValue)


  return (
    <div className={styles.body}>
      <input
        className={styles.searchBox}
        id='mainSearchInput'
        name='mainSearchInput'
        type='text'
        placeholder="Type here to search the database"
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <label htmlFor="type"> Search from:  </label>
      {/* <div className='selectDropDown'> */}
        <select className='typeSelect' onChange={handleSelectChange} name="type" id="type">
          <option value="films">Films</option>
          <option value="people">Characters</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
        </select>
      {/* </div> */}
      {searchResultInput ?
        searchResultInput.map((result: any, index: Key | null | undefined) => {
          return (
            <div key={index}>
              <Link href={result.url}>
                <p>{result.name}</p>
              </Link>
            </div>
          )
        })
        :
        <p>no result</p>
      }

    </div>
  )

}


export default Search