import "./style/HomePage.css"
import CardRestaurant from "../components/Restaurant/CardRestaurant"
import Presentation from "../components/Global/Presentation"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchAllRestaurateur, fetchApi } from "../components/Global/globalSlice"

const HomePage = () => {
    const dispatch = useDispatch();

    const [restaurants, setRestaurants] = useState(useSelector((state) => state.restaurants))
    console.log(restaurants);
    useEffect(() => {
        dispatch(fetchAllRestaurateur())
    }, [])
    // VIENS
    return (
        <main id='HomePages'>
            <section className="hero">
                <cite>
                    <h1>Un Festin à portée de main ! </h1>
                    <form className="Search-Bar">
                        <i>icon</i>
                        <input type="text" name="" id="" />
                        <button>Rechercher</button>
                    </form>
                </cite>
            </section>
            <Presentation title={'Meilleurs Ventes'}>
                <figure className="Best-Menu">
                    <div>
                        <img src="https://images.unsplash.com/photo-1615917124838-1af8a2aaae09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Burger</p>

                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Nouilles</p>
                    </div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1661776841313-1bd2be380a64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Crêpes</p>
                    </div>
                </figure>
            </Presentation>
            <Presentation title={'Nos Restaurant'}>
                <div className="card">
                    {/* {restaurants.map(({ nom, notation, specialite, img, idRestaurant }) => <CardRestaurant key={idRestaurant} nom={nom} notation={notation} specialite={specialite} img={img} />)} */}
                </div>
            </Presentation>
        </main>
    )
}

export default HomePage