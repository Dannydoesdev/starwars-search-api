import useSWR, { Key } from "swr"
import useSWRImmutable from 'swr/immutable'


interface ReturnObject {
  name: string,
  data: object
}
interface ReturnArray {
  data?: Array<ReturnObject>
}

const fetcher = (url: URL) => fetch(url).then(res => res.json())


export function useApiSearch(endpoint: string, param: string, term: string) {

  // if (!endpoint || !param || !term)
    
  // if (!(endpoint) || !(param) || !(term)) {
  //   console.log('no URL received in hook')
  //   return
  // }
  console.log(`https://www.swapi.tech/api/${endpoint}/?${param}=${term}`)
  // const { data, error } = useSWR(`https://www.swapi.tech/api/${endpoint}/${id}`, fetcher)
  // const { data, error } = useSWR(`https://www.swapi.tech/api/${endpoint}/?${param}=${term}`, fetcher)

  // if (endpoint && param && term) {

    const returnArr: any = [];
    const { data, error } = useSWRImmutable(`https://www.swapi.tech/api/${endpoint}/?${param}=${term}`, fetcher)

  if (data && data.result) {
    console.log(data)

      data.result.map((singleResult: any) => {
        let resultObj = {
          name: singleResult.properties.title ? singleResult.properties.title : singleResult.properties.name,
          url: singleResult.properties.url ? singleResult.properties.url: singleResult.properties.url,
          // data: singleResult.properties,
          film: true
        }
        returnArr.push(resultObj)

      })
      console.log(returnArr)
      return returnArr;
    }  else if (data && data.results) {
      console.log(data)
  
        data.results.map((singleResult: any) => {
          let resultObj = {
            name: singleResult.name,
            url: singleResult.url,
            film: false
            // data: singleResult.properties
          }
          returnArr.push(resultObj)
  
        })
        console.log(returnArr)
        return returnArr;
      }

  // }
   
  }
  
  // return {
  //   result: data.result,
  //   properties: data.result.properties,
  //   isLoading: !error && !data,
  //   isError: error
  // }


function useApiArray(endpointArray: string[]) {

  if (!endpointArray) {
    console.log('no URL received in hook')
  }

  const returnArr: any = [];

  endpointArray.map((endpoint) => {
    // const { data } = useSWR(`${endpoint}`, fetcher, { dedupingInterval: 2000 })
    const { data } = useSWRImmutable(`${endpoint}`, fetcher, { dedupingInterval: 2000 })
    if (data) {
      let resultObj = {
        name: data.result.properties.name,
        data: data.result.properties
      }
      returnArr.push(resultObj)
    }
  })

  return returnArr;
}

export default useApiArray
