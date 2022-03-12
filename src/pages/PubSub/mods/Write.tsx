import React, { useState } from 'react'
import PubSub from 'pubsub-js'



export default () => {
    const [content, setContent] = useState('');
    const [nickName, setNickName] = useState('');

    function handleContent(e) {
        //show content in textarea
        const { name, value } = e.target;
        if (name === 'nickName') {
            setNickName(value.trim());
        }
        else if (name === 'content') {
            setContent(value.trim());
        }

    }

    function addComment() {
        const commentInfo = {
            nickName: nickName,
            content: content,
        }
        if (commentInfo.nickName === "" || commentInfo.content === "") {
            alert('please input something')
        } else {
            PubSub.publish('msg', commentInfo)
            setContent('')
            setNickName('')
        }
    }

    return (
        <div>
            <form>
                <b>your name：</b>
                <input type="text" value={nickName} onChange={e => handleContent(e)} name="nickName" />
                <br />
                <b>Comments: </b>
                <textarea rows={4} cols={30} value={content} onChange={e => handleContent(e)} name="content"></textarea>
                <button type="button" onClick={addComment}>Submit</button>
            </form>
        </div>
    )
}