import styles from '.ModuleCssEg.module.css';

import React from 'react'

const ModuleCssEg = () => {
  return (
    <div>
      <h2 className={styles.test}>Module Css</h2>
      <p className={styles.para}>username : scott</p>
    </div>
  )
}

export default ModuleCssEg
