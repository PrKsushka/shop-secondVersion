import React from "react";
import "./woman.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import CardItem from "../../components/CardItem/cardItem";
import Header from "../../components/Header/header";
//Actions
import {getProducts as listProducts} from "../../redux/actions/productActions";

const Woman=()=>{
    const dispatch=useDispatch();
    const getProducts=useSelector((state) => state.getProducts);
    const {products, loading, error}=getProducts;

    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch])


    return(
        <div>
            <Header subtitle={"Красота в штучном экземпляре для наших красавиц"} url={"img/woman.png"}/>
        <div className="mainContent">
            <div className="firstLine">
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>error</h2>) : (products.map((product)=>(
                <CardItem   key={product._id}
                            img={product.img}
                            title={product.title}
                            text={product.text}
                            price={product.price}/>
            )))}
            </div>
        </div>
        </div>
    )
};
export default Woman;