import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import DesignConfigarator from './DesignConfigarator';

interface DesignPageProps{
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const DesignPage = async ({searchParams}: DesignPageProps) => {

  const {id} = searchParams;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: {id},
  })

  
  if (!configuration) {
    return notFound();
  }

  const {imageUrl, width, height} = configuration;
  


  return (
    <div>
      <DesignConfigarator configId={configuration.id} imageDimentions={{width, height}} imageUrl={imageUrl} />
    </div>
  )
}

export default DesignPage