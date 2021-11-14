import React from "react";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import CardItem from "../../components/CardItem/cardItem";
//Actions
import {getMansProducts as listProducts} from "../../redux/actions/mansProductActions";
import Header from "../../components/Header/header";

const Man=()=>{
    const dispatch=useDispatch();
    const getMansProducts=useSelector((state) => state.getMansProducts);
    const {products, loading, error}=getMansProducts;

    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch])


    return(
        <div>
            <Header subtitle={"Красота в штучном экземпляре для самых стильных"} url={"img/manBG.png"} mobileDescr={"Красота в штучном экземпляре для самых стильных"} color={"#84aac5"}/>
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
export default Man;