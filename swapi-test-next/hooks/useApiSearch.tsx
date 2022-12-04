import useSWR, { Key } from "swr"

const fetcher = (url: URL) => fetch(url).then(res => res.json())

function useApiSearch(endpoint:string, id:string) {
  
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
  console.log(endpointArray)  

  interface returnObject {
    [key: string]: any,
    properties?: object
  }


  let returnObj: returnObject = [
   
    // [key: string]: Object[]
  ]
  
  endpointArray.map((endpoint) => {
    console.log(endpoint)
    const { data } = useSWR(`${endpoint}`, fetcher)
    if (data) { 
    console.log(data)
    let resultName: string = data.result.properties.name;
    let resultData: object = data.result.properties
      

      returnObj[resultName] = resultData;
      console.log(returnObj)
  }

  })

  return { data: returnObj };

  // const { data, error } = useSWR(`https://www.swapi.tech/api/${endpoint}/${id}`, fetcher)

  // return {
  //   result: data.result,
  //   properties: data.result.properties,
  //   isLoading: !error && !data,
  //   isError: error
  // }

}

// Using serverside/static props with fetcher

// https://swr.vercel.app/examples/ssr
// const fetcher = (url) => fetch(url).then((res) => res.json());
// const API = "https://api.github.com/repos/vercel/swr";

// export async function getServerSideProps() {
//   const repoInfo = await fetcher(API);
//   return {
//     props: {
//       fallback: {
//         [API]: repoInfo
//       }
//     }
//   };
// }

export default useApiArray