"use client"

import React, { Suspense } from 'react'
import Calls from '@/components/test/Calls';
import { useRouter } from 'next/navigation';

const page =() => {

  const router = useRouter()

    const handlePush = () => {
      router.push("/test_one")
    }
    
  return (
    <div>
      <button onClick={handlePush}>Push to test one</button>
      <Suspense fallback={<p>...Loading</p>}>
        <Calls id='123'/> 
      </Suspense>
    </div>
  )
}

export default page