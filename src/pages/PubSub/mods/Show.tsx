import React, { useEffect, useState } from "react";
import PubSub from 'pubsub-js'
import styles from '../index.less'

export default () => {
    const comments = [
        {
            nickName: 'Jack',
            content: 'good',
        },
        {
            nickName: 'Any',
            content: 'excellent',
        },
        {
            nickName: 'Jully',
            content: 'awful'
        }
    ]
    const [textData, change] = useState(comments)


    useEffect(() => {
        PubSub.subscribe('msg', (msg, data) => {
            // slice(): ensure comments array wouldn't be changed 
            const newComments = textData.slice();
            // recevie new comment and push in newComments
            newComments.push(data)
            // push newComments to old array to ensure DOM's update
            change(newComments)
        })
    })


    return (
        <div className={styles.ShowComments}>
            {/* like 'v-for' */}
            {textData.map((item, index) => {
                return (
                    <div key={index} >
                        <span> <b>{item.nickName}</b>：</span>
                        <span>{item.content}</span>
                    </div>
                )
            })}
        </div>
    )
}