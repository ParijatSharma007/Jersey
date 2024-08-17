
import React from 'react'
import { shopifyGraphQL } from 'shopify'
import ptoduct_list from "@graphql/product_list.gql"

const page = async() => {

  const res = await shopifyGraphQL(ptoduct_list);

  console.log(res);
  

  return (
    <div>page</div>
  )
}

export default page