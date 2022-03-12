import React, { useState } from 'react'
import axios from 'axios'
import styles from "./index.less"
export default () => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserId] = useState()
    const getApi = () => {
        const api = 'https://www.fastmock.site/mock/4f2f543c48ec3d334a328af2e83239e6/MockData/api/mock'
        axios.get(api)
            .then(function (response) {
                //handle success data
                const result = response.data.data
                setUserName(result.userName);
                setEmail(result.email);
                setUserId(result.userId);
                console.log(result)
            })
            .catch(function (error) {
                //handle error satuation
                console.log(error)
            })
    }

    return (
        <div className={styles.InterFace}>
            <h3>Get 请求获取接口数据</h3>
            <button type="button" onClick={getApi}>Get api</button>
            <div>
                <p> <b>userName: </b>{userName}</p>
                <p><b>userId: </b>{userId}</p>
                <p><b>email: </b>{email}</p>
            </div>
        </div>
    )
}