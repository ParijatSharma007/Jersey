import { queryClient } from 'app/layout'
import React from 'react'

const apicall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Successful")
        }, 5000)
    })
}

const Calls = async ({
    id
} : {id : string}) => {

    const res = await queryClient.fetchQuery({
        queryKey : ["test-oo1"],
        queryFn : apicall
    })

  return (
    <div>
      {res as string}
    </div>
  )
}

export default Calls
