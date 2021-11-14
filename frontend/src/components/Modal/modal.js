import React, {useState} from "react";
import "./modal.css";
import axios from "axios";
const ModalAct=({active,setActive})=>{
    const [nameSurnameCommentsDirty, setnameSurnameCommentsDirty]=useState(false);
    const [emailCommentsDirty, setEmailCommentsDirty]=useState(false);
    const [commentDirty, setcommentDirty]=useState(false);
    const [nameSurnameCommentsError, setNameSurnameCommentsError]=useState('Заполните поле!');
    const [emailCommentsError, setEmailCommentsError]=useState('Заполните поле!');
    const [commentError, setcommentError]=useState('Заполните поле!');
    const blurHandler=(e)=>{
        switch (e.target.name){
            case 'nameSurnameComments':setnameSurnameCommentsDirty(true)
                break
            case 'emailComment':setEmailCommentsDirty(true)
                break
            case 'commentEl':setcommentDirty(true)
        }
    }
    const [input, setInput]=useState({
        nameSurnameComments:'',
        emailComment:'',
        commentEl:''
    });
    let email=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let nameSurname=/^(\S+)[,\s]\s*(\S+)\s*$/;
    let tel= /^(?:\+375|80)\(\d{2}\)\d{3}\d{2}\d{2}$/;
    function handleChange(e){
        console.log(e.target.value);
        (e.target.name==="emailComment")?((!email.test(String(e.target.value).toLowerCase()))?setEmailCommentsError('Некорректный email'):setEmailCommentsError('')):console.log('errr');
        (e.target.name==="nameSurnameComments")?((!nameSurname.test(String(e.target.value).toLowerCase()))?setNameSurnameCommentsError('Некорректный ввод данных! Поле должно содержать Фамилию Имя'):setNameSurnameCommentsError('')):console.log('err');
        (e.target.name==="commentEl")?((e.target.value!=="")?setcommentError(""):setcommentError("Заполните поле!")):console.log('errr');
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
            nameSurnameComments:input.nameSurnameComments,
            emailComments:input.email,
            commentEl:input.commentEl
        }
        axios.post('/api/comments',formData);

    }
return(
    <div className={active ? "modal active":"modal"} onClick={()=>setActive(false)}>
        <div className={active ? "modalContent active":"modalContent"} onClick={e=>e.stopPropagation()}>
            <form className="modalForm">
                <span className="elem">Введите имя</span>
                {(nameSurnameCommentsDirty && nameSurnameCommentsError) && <div style={{color:'red'}}>{nameSurnameCommentsError}</div>}
                <input
                    value={input.nameSurnameComments}
                    className="inputSt"
                    type="text"
                    name="nameSurnameComments"
                    onChange={handleChange}
                    onBlur={e=>blurHandler(e)}
                />
                <span className="elem">Введите email</span>
                {(emailCommentsDirty && emailCommentsError) && <div style={{color:'red'}}>{emailCommentsError}</div>}
                <input className="inputSt"
                       value={input.emailComment}
                       type="email"
                        name="emailComment"
                       onChange={handleChange}
                       onBlur={e=>blurHandler(e)}
                />
                <span className="elem">Оставьте комментарий</span>
                {(commentDirty && commentError) && <div style={{color:'red'}}>{commentError}</div>}
                <input className="inputSt"
                       value={input.commentEl}
                       type="text"
                        name="commentEl"
                       onChange={handleChange}
                       onBlur={e=>blurHandler(e)}
                />
                <button onClick={handleClick} className="button k">Отправить</button>
            </form>
        </div>
    </div>
)
}
export default ModalAct;