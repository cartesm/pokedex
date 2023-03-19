import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'

function Error() {

    let error= useRouteError();

  return <>
    <Header/>
    <section className='text-center h-screen py-10 bg-sky-900 text-white'>
        <span className='block text-4xl'>Oops!, ha ocurrido un error inesperado</span>
        <span className='block'>{error.statusText || error.message}</span>
    </section>
  </>
}

export default Error