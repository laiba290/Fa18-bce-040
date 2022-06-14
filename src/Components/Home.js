import React from 'react'
import vid from '../videos/1.mp4'
import './Home.css'
import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll' 
function Home() {
    return (
        <>
        <div className="containerx">
           
            <video className='videoTag' autoPlay loop muted>
               <source src={vid} type='video/mp4' />
           </video>
          
          <div className="homecontent">
              <h1>
                  Safarnama
              </h1>
              <p>
                  Get Ready to Explore your Dream Destinations with variety of Travel Packages
              </p>
              
          </div>
            
        </div>
        </>
    )
}

export default Home

