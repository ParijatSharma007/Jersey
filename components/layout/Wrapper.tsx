import CustomHeader from "./Header";

import React from 'react'

type WrapperPropsType = {
  children: React.ReactNode
}

const Wrapper = ({
  children
} : WrapperPropsType) => {
  return (
    <>
        <CustomHeader/>
        {children}
    </>
  )
}

export default Wrapper