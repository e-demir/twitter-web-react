import React from "react"
import NavigationButton from "./nav-button"
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from "./icons"
import styles from "./navigation.module.css"
import TitleBold from "./title-bold"

function Navigation({selectedKey}) {
    return <nav className={styles.nav}>
        {/* Logo */}
        <NavigationButton>
            <Twitter />
        </NavigationButton>

        {/* Home */}
        <NavigationButton selected={selectedKey === "home"}>
            <Home />
            <TitleBold>Home</TitleBold>
        </NavigationButton>

        {/* Explore */}
        <NavigationButton selected={selectedKey === "explore"}>
            <Explore />
            <TitleBold>Explore</TitleBold>
        </NavigationButton>

        {/* Notification */}
        <NavigationButton notify={17} selected={selectedKey === "notification"}>
            <Notification />
            <TitleBold>Notification</TitleBold>
        </NavigationButton>

        {/* Messages */}
        <NavigationButton selected={selectedKey === "messages"}>
            <Messages />
            <TitleBold>Messages</TitleBold>
        </NavigationButton>

        {/* Bookmark */}
        <NavigationButton selected={selectedKey === "bookmark"}>
            <Bookmark />
            <TitleBold>Bookmark</TitleBold>
        </NavigationButton>

        {/* Lists */}
        <NavigationButton selected={selectedKey === "lists"}>
            <Lists />
            <TitleBold>Lists</TitleBold>
        </NavigationButton>

        {/* Profile */}
        <NavigationButton selected={selectedKey === "profile"}>
            <Profile />
            <TitleBold>Profile</TitleBold>
        </NavigationButton>

        {/* More */}
        <NavigationButton>
            <More />
            <TitleBold>More</TitleBold>
        </NavigationButton>
    </nav>
}

export default Navigation