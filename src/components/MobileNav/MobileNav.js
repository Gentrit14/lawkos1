import React, {useState} from 'react';
import './MobileNav.scss';
import Toolbar from './Toolbar/Toolbar';
import Sidebar from './Sidebar/Sidebar';

const MobileNav = () => {
   const [openSideDrawer, setOpenSideDrawer] = useState(false);
   function showDrawer(){
        setOpenSideDrawer(!openSideDrawer);
   }

   function backdropClickHandler(){
    setOpenSideDrawer(false);
  }
  
  let sideDrawer;

  if(openSideDrawer){
    sideDrawer = <Sidebar click={backdropClickHandler}/>;
  } 
  return (
    <div className='mobile-nav'>
          <Toolbar drawerClickHandler={showDrawer} iconHandler={openSideDrawer} />
          {sideDrawer}
      </div>
  )
}

export default MobileNav