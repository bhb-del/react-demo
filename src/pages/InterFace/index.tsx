import React, { useRef, useState } from 'react'
import axios from 'axios'
import styles from "./index.less"
export default () => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserId] = useState()
    const [msg, setMsg] = useState()
    const api = 'https://www.fastmock.site/mock/4f2f543c48ec3d334a328af2e83239e6/MockData/api/mock'

    const getApi = () => {
        axios.get(api)
            .then(function (response) {
                //handle success data
                const result = response.data.data
                setUserName(result.userName);
                setEmail(result.email);
                setUserId(result.userId);
                setMsg(response.data.msg);
            })
            .catch(function (error) {
                //handle error satuation
                console.log(error)
            })
    }

    const [PostVal, setPostValue] = useState();
    const postContent = useRef(null);

    const posts_ = 'https://www.fastmock.site/mock/4f2f543c48ec3d334a328af2e83239e6/MockData/api/postDemo'
    function postApi() {
        if (postContent.current.value.trim() !== '') {
            //the second program uses to get post content
            axios.post(posts_, PostVal)
                .then(function (response) {
                    //response.config.data 获取表单值的地方
                    console.log(response.config.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        else {
            alert('please input something!')
        }

    }

    function handleSubmit() {
        if (postContent.current.value.trim() !== '') {
            return setPostValue(postContent.current.value.trim());
        }
        alert('please input something!')
    }

    return (
        <div className={styles.InterFace}>
            <h3>Get 请求获取接口数据</h3>
            <button type="button" onClick={getApi}>Get api</button>
            <div>
                <p> <b>userName: </b>{userName}</p>
                <p><b>userId: </b>{userId}</p>
                <p><b>email: </b>{email}</p>
                <p><b>msg: </b>{msg}</p>
            </div>
            <h3>Post 请求获取接口数据</h3>
            <div>
                <input type="text" ref={postContent} />
                <p><b>post value: </b>{PostVal}</p>
                <button type="button" onClick={handleSubmit}>Submit</button>

                <button type="button" onClick={postApi}>Post api</button>
            </div>
        </div>
    )
}