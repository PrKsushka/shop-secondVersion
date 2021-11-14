import React, {useState} from "react";
import './contacts.css';
import axios from 'axios';
const Contact=()=>{
    // const [nameSurname, setNameSurname]=useState('')
    // const [telephone, setTelephone]=useState('')
    // const [email, setEmail]=useState('')
    // const [text, setText=useState('')
    const [nameSurnameDirty, setNameSurnameDirty]=useState(false);
    const [telephoneDirty, setTelephoneDirty]=useState(false);
    const [emailDirty, setEmailDirty]=useState(false);
    const [textDirty, setTextDirty]=useState(false);
    const [nameSurnameError, setNameSurnameError]=useState('Заполните поле!');
    const [telephoneError, setTelephoneError]=useState('Заполните поле!');
    const [emailError, setEmailError]=useState('Заполните поле!');
    const [textError, setTextError]=useState('Заполните поле!');
    const blurHandler=(e)=>{
        switch (e.target.name){
            case 'nameSurname':setNameSurnameDirty(true)
                break
            case 'telephone':setTelephoneDirty(true)
                break
            case 'email':setEmailDirty(true)
                break
            case 'text':setTextDirty(true)
        }
    }
    const [input, setInput]=useState({
        nameSurname:'',
        telephone:'',
        email:'',
        text:''

    });
    let email=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let nameSurname=/^(\S+)[,\s]\s*(\S+)\s*$/;
    let tel= /^(?:\+375|80)\(\d{2}\)\d{3}\d{2}\d{2}$/;
    function handleChange(e){
        console.log(e.target.value);
        (e.target.name==="email")?((!email.test(String(e.target.value).toLowerCase()))?setEmailError('Некорректный email'):setEmailError('')):console.log('errr');
        (e.target.name==="nameSurname")?((!nameSurname.test(String(e.target.value).toLowerCase()))?setNameSurnameError('Некорректный ввод данных! Поле должно содержать Фамилию Имя'):setNameSurnameError('')):console.log('err');
        (e.target.name==="telephone")?((!tel.test(String(e.target.value).toLowerCase()))?setTelephoneError('Некорректный ввод данных! Введите в формате +375(**)***-**-** или 80(**)***-**-**'):setTelephoneError('')):console.log('err');
        (e.target.name==="text")?((e.target.value!=="")?setTextError(""):setTextError("Заполните поле!")):console.log('errr');
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
            nameSurname:input.nameSurname,
            telephone:input.telephone,
            email:input.email,
            text:input.text
        }
        axios.post('/api/contacts',formData);

    }

    return(
        <div style={{position:'relative', top:"70px"}}>
            <h2 className="ab">КОНТАКТЫ</h2>
            <div className="main">
                <div className="mainLeft" style={{background:`url("/img/black.jpg") no-repeat`}}>

                </div>
                <div className="mainRight">
                    <h3>Свяжись с нами</h3>
                    <p>
                        Номера телефонов:<br/>
                        A1 +375(29)1387874<br/>
                        МТС +375(44)1415167<br/>
                        Наша почта:<br/>
                        handymady@gmail.com<br/>
                    </p>
                </div>
            </div>


            <h2 className="ab n">Свяжись с нами</h2>
            <div className="obertka" style={{background:`url('img/rekl.png') no-repeat`,backgroundSize:"cover"}}>
                <form>
                    <div className="wrapper"><span className="fio">Фамилия Имя</span>
                        {(nameSurnameDirty && nameSurnameError) && <div style={{color:'red'}}>{nameSurnameError}</div>}
                        <input type="text"
                               name="nameSurname"
                               value={input.nameSurname}
                               data-rule="text"
                                onChange={handleChange}
                               onBlur={e=>blurHandler(e)}
                        />
                    </div>
                    <br/>
                        <div className="wrapper"><span className="phone">Контактный телефон</span>
                            {(telephoneDirty && telephoneError) && <div style={{color:'red'}}>{telephoneError}</div>}
                            <input type="tel"
                                   name="telephone"
                                   value={input.telephone}
                                   data-rule="tel"
                                   onChange={handleChange}
                                   onBlur={e=>blurHandler(e)}
                            />
                        </div>
                        <br/>
                            <div className="wrapper adres"><span>Адрес электронной почты</span>
                                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                                <input type="email"
                                       name="email"
                                       value={input.email}
                                       data-rule="email"
                                       onChange={handleChange}
                                       onBlur={e=>blurHandler(e)}
                                />
                            </div>
                            <br/>
                    {(textDirty && textError) && <div style={{color:'red'}}>{textError}</div>}
                                <textarea placeholder="Оставьте комментарий"
                                          name="text"
                                          rows="3"
                                          cols="40"
                                          value={input.text}
                                          onChange={handleChange}
                                          onBlur={e=>blurHandler(e)}>
                                </textarea>

                    <br/>
                                <button onClick={handleClick} className="button k">Отправить</button>
                </form>
            </div>


            <h2 className="ab">Где нас найти</h2>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4825.323778867062!2d27.532721196157915!3d52.79240471410967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8312c0e2bc31b%3A0x115c202a4985446!2z0KLQpiDQktC10YHRgg!5e0!3m2!1sru!2sby!4v1607880065071!5m2!1sru!2sby"
                    width="960" height="600" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
        </div>
    )
}
export default Contact;