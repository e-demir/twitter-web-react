import React from "react"
import NavigationButton from "./nav-button"
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from "./icons"
import styles from "./navigation.module.css"

function Navigation() {
    return <nav className={styles.nav}> 
        {/* Logo */}
        <NavigationButton>
            <Twitter />
        </NavigationButton>

        {/* Home */}
        <NavigationButton>
            <Home />
            <span>Home</span>
        </NavigationButton>

        {/* Explore */}
        <NavigationButton>
            <Explore />
            <span>Explore</span>
        </NavigationButton>

        {/* Notification */}
        <NavigationButton>
            <Notification />
            <span>Notification</span>
        </NavigationButton>
        
        {/* Messages */}
        <NavigationButton>
            <Messages />
            <span>Messages</span>
        </NavigationButton>

        {/* Bookmark */}
        <NavigationButton>
            <Bookmark />
            <span>Bookmark</span>
        </NavigationButton>

       {/* Lists */}
       <NavigationButton>
            <Lists />
            <span>Lists</span>
        </NavigationButton>

        {/* Profile */}
        <NavigationButton>
            <Profile />
            <span>Profile</span>
        </NavigationButton>

        {/* More */}
        <NavigationButton>
            <More />
            <span>More</span>
        </NavigationButton>
    </nav>
}

export default Navigation