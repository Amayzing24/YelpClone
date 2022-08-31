import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

export const SearchBar = (props) => {
    const { setRestaurants } = useContext(RestaurantsContext)
    const [searchText, setSearchText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!searchText) {
            const response = await RestaurantFinder.get("/")
            setRestaurants(response.data.data.restaurants)
        } else {
            const response = await RestaurantFinder.get(`/search/${searchText}`)
            setRestaurants(response.data.data.restaurants)
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={searchText} onChange={e => setSearchText(e.target.value)} type="text" className="form-control" placeholder="Search for a restaurant here..." />
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
