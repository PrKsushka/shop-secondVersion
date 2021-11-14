import React, {useState} from "react";
import axios from "axios";

const Admin=()=>{
    const [input, setInput]=useState({
        title:'',
        text:'',
        price:'',
        img:''
    });
    function handleChange(e){
        const {name,value}=e.target;
        setInput(prevInput=>{
            console.log(prevInput);
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    function handleClick(e){
        e.preventDefault();
        const formData={
            title:input.title,
            text:input.text,
            price:input.price,
            img:input.img
        }
        axios.post('/api/products',formData);

    }
    return(
        <div className="mainAdmin" style={{position:'relative',top:'120px',marginBottom:'400px'}}>
            <div className="adminPannel" style={{fontFamily:'Roboto'}}>Admin pannel</div>
            <form className="admin">
                <div className="subscr">Добавление товара в раздел Женщинам</div>
                            <div className="wrapper"><span className="fio">Введите наименование товара</span>
                              <input type="text"
                                       name="title"
                                       value={input.title}
                                       data-rule="text"
                                       onChange={handleChange}
                                />
                            </div>
                            <br/>
                            <div className="wrapper"><span className="phone">Введите путь к картинке</span>
                                <input type="text"
                                       name="img"
                                       value={input.img}
                                       data-rule="tel"
                                       onChange={handleChange}
                                />
                            </div>
                            <br/>
                            <div className="wrapper adres"><span>Введите краткое описание</span>
                                <input type="text"
                                       name="text"
                                       value={input.text}
                                       data-rule="email"
                                       onChange={handleChange}
                                />
                            </div>
                            <br/>
                            <div className="wrapper adres"><span>Введите стоимость</span>
                                <input type="text"
                                       name="price"
                                       value={input.price}
                                       data-rule="email"
                                       onChange={handleChange}
                                />
                            </div>
                            <br/>
                            <button onClick={handleClick} className="button k">Отправить</button>
                        </form>
        </div>
    )


}
export default Admin;