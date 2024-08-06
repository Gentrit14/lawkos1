import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom';
import { FooterData } from './data'

const Footer = () => {
  return (
    <div className='footer'>
         {FooterData.map((props) => {
            return(
                <div className='col'>
                    <h6>{props.category}</h6>
                    {props.links.map((l) =>{
                       return(
                          <Link key={l.to} to={l.to}>{l.link}</Link>
                       )
                    })}
                </div>
            )
         })}
    </div>
  )
}

export default Footer