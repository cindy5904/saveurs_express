import MenuCard from "../components/menu/MenuCard"
import "./style/HomePage.css"
import CardRestaurant from "../components/Restaurant/CardRestaurant"
import Presentation from "../components/Global/Presentation"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchAllRestaurateur } from "../components/Global/globalSlice"


const HomePage = () => {
    document.title = 'Saveur Express | Accueil'
    const dispatch = useDispatch();
    const restaurants = {
        data: useSelector((state) => state.global.restaurants.data),
        loading: useSelector((state) => state.global.restaurants.loading)
    }
    useEffect(() => {
        dispatch(fetchAllRestaurateur())

    }, [])

    return (
        <main id='HomePages'>

            <section className="hero">
                <cite>
                    <h1>Un Festin à portée de main ! </h1>
                    <form className="Search-Bar">
                        <i>icon</i>
                        <input type="text" placeholder="Rechercher un menu" name="" id="" />
                        <button>Rechercher</button>
                    </form>
                </cite>
            </section>
            <section className="corps">

                <Presentation title={'Meilleurs Ventes'}>


                    <figure className="Best-Menu">

                        <div className="container">
                            <img src="https://images.unsplash.com/photo-1615917124838-1af8a2aaae09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p>Burger</p>
                        </div>
                        <div className="container">
                            <img src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p>Nouilles</p>
                        </div>
                        <div className="container">
                            <img src="https://plus.unsplash.com/premium_photo-1661776841313-1bd2be380a64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p>Crêpes</p>
                        </div>
                    </figure>
                </Presentation>
                <Presentation title={'Nos Restaurants'}>
                    <div className="card">
                        {restaurants.data?.map(({ nom, notation, specialite, img, idRestaurant }) => <CardRestaurant key={idRestaurant} nom={nom} notation={notation} specialite={specialite} img={img} />)}
                    </div>
                </Presentation>
            </section>

        </main>
    )
}

export default HomePage