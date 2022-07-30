import { Component } from "react";
import {contacts } from './contact';
import "../../App.css"

const children = new URL ("../../photo/children.jpg", import.meta.url);

export default class User extends Component{

    render(){
const index = this.props.match.params.id
const user = contacts[index]
        return (
       <div className="user">
       <div className="photo_user"> <img src={children} alt="" /> </div>
        <div className="fullName">{user.firstName}  {user.lastName}</div>
            <div className="phone">{user.phone}</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis magni, ratione deleniti inventore quasi cupiditate, nisi error optio voluptate debitis at quo quam nostrum nihil eius omnis accusantium quis dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem voluptates aut unde hic voluptatem dignissimos asperiores pariatur nemo beatae iusto, soluta consequuntur nostrum? Ipsum tempora necessitatibus dolorem consequuntur autem.</p>

        <span className="span">
            <p style={{color:"blue"}}>Natali</p>
            <p> Привіт. Как дела?</p>
            <div className="answer" > <p style={{color:"blueviolet"}}>{user.firstName}</p>
            <p>Все ок. А у тебе?</p></div>
            
            <p style={{color:"blue"}}>Natali</p>
            <p> Теж ок, наразі навчаюсь</p>
            <div className="answer" > <p style={{color:"blueviolet"}}>{user.firstName}</p>
            <p>Це добре я теж буду навчатись.</p></div>

        </span>
       </div>
          );
    }
}