import React from 'react'
import "./Home.scss"
import Slider from '../../components/slider/Slider'
import Featured from '../../components/FeaturedProducts/Featured'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'


export const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type="Fetured"/>
      <Categories/>
      <Featured type="Trending"/>
      <Contact/>
    </div>
  )
}
