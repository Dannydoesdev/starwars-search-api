import Link from "next/link";
import { Key, useEffect, useState } from "react";
import Film from "../components/HomePage/Film";
import { useApiSearch } from "../hooks/useApiSearch"

function Search() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('films')
  const [searchParamater, setSearchParameter] = useState('title')
  const [searchResults, setSearchResults] = useState([])



  // console.log(searchResultInput)
  function handleSelectChange(event: any) {
    console.log(event)
    console.log(event.target.value)
    const selectedType = event.target.value
    console.log('child change')
    setSelectValue(event.target.value);
    if (!(selectedType == 'films')) {
      setSearchParameter('name')
    } else {
      setSearchParameter('title')
    }
    console.log(selectValue)
    // onChange && onChange(event.target.value);
  }

  function handleInputChange(event: any) {
    // if (event.target.value == '') {
    //   setInputValue('')
    // }
    const inputValue = event.target.value
    if (inputValue === "") {
      // setResultsListItems([]);
      setInputValue("");
    } else {
      setInputValue(inputValue);
    }
    // console.log('child change')
    // setInputValue(event.target.value)
    // const searchResultInput = useApiSearch(selectValue, searchParamater, inputValue)
    // searchResult(searchResultInput)
    // onChange && onChange(event.target.value);
  }

  // function searchResult(results:any) {

    // setSearchResults(results)
    // const searchResultInput = useApiSearch('films', 'title', inputValue)
    // console.log(searchResultInput)
  
  // }

  const searchResultInput = useApiSearch(selectValue, searchParamater, inputValue)
  // useEffect(() => {
  //   setSearchResults(searchResultInput)
  // }, searchResultInput)

  // const searchResultInput = useApiSearch('films', 'title', inputValue)
  // console.log(searchResultInput)
  // let searchResultInput
  // useEffect(() => {


  // // const searchResult = useApiSearch('films', 'title', 'strikes')
  // // console.log(searchResult)

  // // const searchResultInput = useApiSearch('films', 'title', inputValue)
    

  // },[inputValue])



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

      <select onChange={handleSelectChange} name="type"  id="type">
        <option value="films">Films</option>
        <option value="people">Characters</option>
        <option value="vehicles">Vehicles</option>
        {/* <option value="audi">Audi</option> */}
      </select>
{/* 
      {searchResultInput ?
        searchResultInput.map((film: any, index: Key | null | undefined) => {
          return (
            <div key={index}>
              <Film
                title={film.data.title}
                releaseYear={film.data.release_date}
                director={film.data.director}
                uid={film.uid}
                url={film.data.url}
              />
            </div>
          )
        })
        :
        <p>no result</p>
      } */}

    {searchResultInput ?
        searchResultInput.map((result: any, index: Key | null | undefined) => {
          return (
            <div key={index}>
              {/* {currentFavourites.includes(film.properties.url) ? <p color='red'>Local Fave</p> : <p>Not local fave</p>} */}


              {/* {result.film ?  */}
                <Link href={result.url}>
                <h2>{result.name}</h2>
                {/* <h2>{result.data.title}</h2> */}
                </Link>
                {/* : 
                <Link href={result.url}>
                <h2>{result.name}</h2>

                      </Link>
              } */}
              

              {/* <Link href={result.data.url}>
              <h2>{result.data.name}</h2> */}
              {/* <h2>{result.data.title}</h2> */}
                    {/* </Link> */}
              {/* <p>{result.data.url}</p> */}
              {/* <Film
                isCurrentFavourite={currentFavourites.includes(film.properties.url) ? true : false}
                title={film.data.title}
                releaseYear={film.data.release_date}
                director={film.data.director}
                uid={film.uid}
                url={film.data.url}
              onFavourite={handleFavouriteNew}
              /> */}
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