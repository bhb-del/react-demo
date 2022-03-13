import React, { useRef } from 'react'
import PubSub from 'pubsub-js'



export default () => {
    const currentName = useRef(null);
    const currentContent = useRef(null);
    function addComment() {
        const commentInfo = {
            nickName: currentName.current.value.trim(),
            content: currentContent.current.value.trim(),
        }
        if (commentInfo.content === "" || commentInfo.nickName === "") {
            alert('please input something')
        } else {
            PubSub.publish('msg', commentInfo)
            currentName.current.value = ''
            currentContent.current.value = ''
        }
    }

    return (
        <div>
            <form>
                <b>your name：</b>
                <input type="text" ref={currentName} name="nickName" />
                <br />
                <b>Comments: </b>
                <textarea rows={4} cols={30} ref={currentContent} name="content"></textarea>
                <button type="button" onClick={addComment}>Submit</button>
            </form>
        </div>
    )
}