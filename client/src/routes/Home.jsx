import React from 'react'
import { AddRestaurant } from '../components/AddRestaurant'
import { Header } from '../components/Header'
import { RestaurantList } from '../components/RestaurantList'
import { SearchBar } from '../components/SearchBar'

export const Home = () => {
  return (
    <div>
        <Header/>
        <AddRestaurant/>
        <SearchBar/>
        <RestaurantList/>
    </div>
  )
}
