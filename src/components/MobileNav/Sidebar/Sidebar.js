import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GoLaw } from "react-icons/go";
import { CgClose } from 'react-icons/cg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { AboutData } from '../MobileData';
import { AboutData2 } from '../MobileData';

const Sidebar = (props) => {
    const [list,showList] = useState(false);
    const [list2,showList2] = useState(false);
    function show(){
        showList(!list);
    }
    function show2(){
        showList2(!list2);
    }
  return (
    <div className='mobile-sidebar'>
    <div className='mobile-sidebar-links'>
        <div className='sidebar-logo-row'>
        <Link to='/' className='title'><GoLaw />LAWKOS</Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='nav-link1'>
                        <Link to='/' className='inner-link'>About</Link>
            </div>

            
            <div className='sidebar-dropdown'  onClick={show} >
            <div className="inner-link">
                Service
                <RiArrowDropDownLine />
            </div>
            
            {list===true &&
                        <div className="mobile-dopdown">
                            {AboutData.map((props) => {
                                return(                         
                                    <div className="inner-links">
                                        <Link to={props.to}>{props.title}</Link>
                                    </div>                            
                                )                            
                            })}
                        </div>
                    } 
                    
                    
                    
                </div>
        

        {/* Resources Megamenu */}
        <div className='sidebar-dropdown'  onClick={show2} >
            <div className="inner-link">
                Resources
                <RiArrowDropDownLine />
            </div>
            
            {list2===true &&
                        <div className="mobile-dopdown">
                            {AboutData2.map((props) => {
                                return(                         
                                    <div className="inner-links">
                                        <Link to={props.to}>{props.title}</Link>
                                    </div>                            
                                )                            
                            })}
                        </div>
                    } 
                    
                    
                    
                </div>
        

                <div className='nav-link1'>
                        <Link to='/' className='inner-link'>News</Link>
            </div>
            <div className='nav-link1'>
                        <Link to='/' className='inner-link'>Careers</Link>
            </div>
             
             

            </div>
            <div className='sidebar-auth'>
            <div className='number'>
                            <LuPhoneCall />
                            <div className='number-detail'>
                                <h6>+383 123 456 789</h6>
                                <p>Call our office</p>
                            </div>
                        </div>
                        <Link to='/' className='contact'>Contact us</Link>
            </div>
            
        </div>
        
  );
};

export default Sidebar