import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './Toolbar.scss';

const Toolbar = (props) => {
    const [isSticky2, setIsSticky2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsSticky2(scrollHeight > 25);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={clsx("mobile-toolbar", isSticky2 ? "toolbar__sticky" : "")}>
            <Link to='/' className='nav-logo2'>
                    <div className='logo-container2'></div>
                </Link>

            <button onClick={props.drawerClickHandler}><AiOutlineMenu /></button>
        </div>
    );
}

export default Toolbar;
