import React from "react"
import Show from "./mods/Show"
import Write from "./mods/Write"
import styles from "./index.less"

export default () => {
    return (
        <div className={styles.pubsub}>
            <h2>Comment Part</h2>
            <Write />
            <Show />
        </div>
    )
}