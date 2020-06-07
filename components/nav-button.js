import React from "react"
import styles from "./nav-button.module.css"
import Button from "./button"
import cn from "classnames"

function NavigationButton({ selected, notify, children, ...props }) {
    return <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>        
        {children}
        {notify && <span className={styles.notify}>{notify}</span>}        
    </Button>
}

export default NavigationButton

// cn(styles.navButton, selected && styles.navButtonSelected)