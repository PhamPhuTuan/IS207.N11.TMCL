import React from "react";
import ReactDOM from "react-dom";
import { Card, Avatar } from 'antd';
import "antd/dist/antd.css"

const { Meta } = Card;

const card = {
    title: 'Elon Musk',
    description: 'Elon is richest',
    avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg'
};

const element = (
    <div>
        <h1>{card.title}</h1>
        <h2>{card.description}</h2>
        <Avatar>{card.avatar}</Avatar>
    </div>
)

ReactDOM.render(element, document.getElementById('root'));