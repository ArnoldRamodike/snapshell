import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import DesignPreview from './DesignPreview';

interface PreviewPageProps{
    searchParams: {
        [key: string]: string | string[] | undefined
      }
}

const PreviewPage = async ({searchParams}: PreviewPageProps) => {
    const {id} = searchParams;
    console.log(id);

    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: {id},

    })

    if (!configuration) {
        return notFound();
    }

  return (
    <div>
        <DesignPreview configuration={configuration}/>
    </div>
  )
}

export default PreviewPage