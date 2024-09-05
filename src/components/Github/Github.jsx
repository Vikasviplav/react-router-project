import { useLoaderData } from "react-router-dom"

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/vikasviplav')
   return response.json()
}

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vikasviplav')
    //     .then((res) => res.json())
    //     .then( (data) => setData(data))
    // }, [])

  return (
    <>
    
    <div className="text-center m-4 flex bg-gray-600 text-white p-4 text-3xl">
    <img src={data.avatar_url} height={400} width={400} />
    <div className="text-center m-5">Github followers: {data.followers}</div></div>
    </>
  )
}

export default Github