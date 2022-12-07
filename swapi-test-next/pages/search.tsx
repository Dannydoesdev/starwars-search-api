import Link from "next/link";
import { Key, useEffect, useState } from "react";
import Film from "../components/HomePage/Film";
import { useApiSearch } from "../hooks/useApiSearch"

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
    <div>
      <input
        id='mainSearchInput'
        name='mainSearchInput'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="type"> Search from:</label>

      <select onChange={handleSelectChange} name="type" id="type">
        <option value="films">Films</option>
        <option value="people">Characters</option>
        <option value="vehicles">Vehicles</option>

      </select>

      {searchResultInput ?
        searchResultInput.map((result: any, index: Key | null | undefined) => {
          return (
            <div key={index}>
              <Link href={result.url}>
                <h2>{result.name}</h2>
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