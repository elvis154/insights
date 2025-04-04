import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? ">" : "<"}
            </button>
            {!collapsed && (
                <ul>
                    <li>Dashboard</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
