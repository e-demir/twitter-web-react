import React from "react"
import styles from "./nav-button.module.css"
import Button from "./button"
 
function NavigationButton({ children }) {
    return <Button className={styles.navButton}>{children}</Button>
}

export default NavigationButton