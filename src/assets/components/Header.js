import React, { useState } from 'react'

const Header = () => {
    const [username, setusername] = useState(localStorage.getItem('username'));
    const fetchData = async () => {

        try {
            const response = await (await fetch('https://randomuser.me/api/')).json();
            const username = response.results[0].login.username
            localStorage.setItem("username", username)
            setusername(username)
        } catch (error) {
            console.log(error);
        }
    }
    const close = () => {
        document.getElementsByClassName('sidebar')[0].style.marginRight = "0%"
    }
    const open = () => {
        document.getElementsByClassName('sidebar')[0].style.marginRight = "100%"
    }
    return (
        <>
            <div className="Header " >
                <div className="p-3">
                    {
                        localStorage.getItem('username') ? username : (<button className='btn btn-primary' onClick={fetchData}>
                            Login
                        </button>)
                    }
                </div>
                <div className="logo">
                    <h3>Intrsite</h3>
                </div>
                <div className="hampBurger p-3" onClick={open}>
                    <button className='btn btn-primary'>
                    <i class="fa-solid fa-bars"></i>
                    </button>
                </div>

            </div>
            <div className="sidebar">
                <div className="crossicon" onClick={close}>
                    <i class="fa-solid fa-x"></i>
                </div>
                <br />
                <div className="heading">
                    <h1>Sidebar</h1>
                </div>
                <div className="data">
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </div>

            </div>
        </>
    )
}

export default Header

