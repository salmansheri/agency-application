'use client'; 

import React, { useEffect, useState } from 'react'

import fetcher from '@/actions/fetcher';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const DashboardClient = () => {
 
    const { data, error, isLoading, mutate } = useSWR("/api/posts?userId=${", fetcher); 

    console.log(data); 
    
 
  return (
    <div></div>
  )
}

export default DashboardClient