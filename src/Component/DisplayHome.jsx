import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assest/assets'
import Albumitem from './Albumitem'
import Songitme from './Songitme'

function DisplayHome() {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto'>
          {albumsData.map((item,i)=>(<Albumitem key={i} name={item.name} image={item.image} desc={item.desc} id={item.id} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Todays's Hits Song</h1>
          <div className='flex overflow-auto'>
          {songsData.map((item,i)=>(<Songitme key={i} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
          </div>
        </div>
    </>
  )
}

export default DisplayHome