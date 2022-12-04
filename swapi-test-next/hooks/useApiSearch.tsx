import useSWR, { Key } from "swr"

interface ReturnObject {
  name: string,
  data: object
}
interface ReturnArray {
  data?: Array<ReturnObject>
}

const fetcher = (url: URL) => fetch(url).then(res => res.json())

export function useApiSearch(endpoint: string, id: string) {

  const { data, error } = useSWR(`https://www.swapi.tech/api/${endpoint}/${id}`, fetcher)

  return {
    result: data.result,
    properties: data.result.properties,
    isLoading: !error && !data,
    isError: error
  }
}

function useApiArray(endpointArray: string[]) {

  if (!endpointArray) {
    console.log('no URL received in hook')
  }

  const returnArr: any = [];

  endpointArray.map((endpoint) => {
    const { data } = useSWR(`${endpoint}`, fetcher, { dedupingInterval: 2000 })
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
