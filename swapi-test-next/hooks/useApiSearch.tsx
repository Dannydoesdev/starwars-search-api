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

  const returnArr: any = [];
  const { data, error, isLoading } = useSWR(`https://www.swapi.tech/api/${endpoint}/?${param}=${term}`, fetcher, 
  { dedupingInterval: 1000 })

 
  console.log(data)
  if(!isLoading){
  if (data && data.result) {
    data.result.map((singleResult: any) => {
      let resultObj = {
        name: singleResult.properties.title ? singleResult.properties.title : singleResult.properties.name,
        url: singleResult.properties.url ? singleResult.properties.url : singleResult.properties.url,
        film: true
      }
      returnArr.push(resultObj)

    })
    return returnArr;
  } else if (data && data.results) {
    data.results.map((singleResult: any) => {
      let resultObj = {
        name: singleResult.name,
        url: singleResult.url,
        film: false
      }
      returnArr.push(resultObj)

    })
    return returnArr;
  }
}
}


function useApiArray(endpointArray: string[]) {

  if (!endpointArray) {
    console.log('no URL received in hook')
  }

  const returnArr: any = [];

  endpointArray.map((endpoint) => {
    const { data, error } = useSWRImmutable(`${endpoint}`, fetcher, { dedupingInterval: 2000 })
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
