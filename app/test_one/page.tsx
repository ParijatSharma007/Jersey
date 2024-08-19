"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const TestOne = () => {

    const router = useRouter()

    const handlePush = () => {
        router.push("/test")
    }

  return (
    <div>
      <button onClick={handlePush}>Push to test</button>
    </div>
  )
}

export default TestOne
