import React from "react";
import styles from './index.less';
import {NavLink , Link } from "react-router-dom"

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
      i am Home/index.tsx
      </div>
      <div  className={styles.text}>
        {/* 存在历史记录，点击浏览器后退按钮能返回上一个页面 */}
        <Link to="/Board"> (link) go to Board</Link>
        <br></br>
        {/* 点击后浏览器后退按钮后仍停留在Board页面 */}
        <NavLink to="/Board" replace> (navlink) go to Board</NavLink>
        <br />
        <Link to="/Square"> (link) go to Square</Link>
        <br></br>
        {/* 点击后返回上一级路由页面，直到‘/’之后第一个的页面 */}
        <NavLink to="/Square" replace> (navlink) go to Square</NavLink>
      </div>
    </div>
  );
}