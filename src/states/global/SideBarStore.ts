import { useState } from "react";

export interface SideBarStates {
    sidebarToggle: boolean;
}

export interface SideBarStore extends SideBarStates {
    toggleSidebar: () => void
    closeSidebar: () => void
}

export function SideBarStore(): SideBarStore {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    };
    const closeSidebar = () => {
        setSidebarToggle(false);
    };
    return {
        sidebarToggle,
        toggleSidebar,
        closeSidebar
    }
}
