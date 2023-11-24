import React, { useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar';

function Header() {

    const [PopupVisible, setVisible] = useState(false);
    const [SidebarVisible, setSidebarVisible] = useState(false);

    // visible = false;

    const items = [
        {
            label: "User",
            icon: "pi pi-user"
        },
        {
            label: "Edit",
            icon: "pi pi-pencil"
        },
    ];

    const PopUp = () => {
        setVisible(true)
    }
    const NotDisplay = () => {
        setVisible(false)
    }

    const SidebarDisplay = () => {
        setSidebarVisible(true);
    }

    const SidebarHide = () => {
        setSidebarVisible(false)
    }

    return (
        <div>
            <Menubar start={"daw"} model={items} end={
                <Button severity='danger' className='p-button-raised p-button-rounded' label='Sample' onClick={PopUp} />
            } />
            <Button onClick={SidebarDisplay} />

            <Dialog header="Header" visible={PopupVisible} onHide={NotDisplay} 
                draggable={false} position='top'
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
            <Sidebar position='left' visible={SidebarVisible} onHide={SidebarHide} >
                <h4>Sidebar</h4>
            </Sidebar>
        </div>
    )
}

export default Header