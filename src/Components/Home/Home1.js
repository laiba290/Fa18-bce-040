import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import video from '../../videos/1.mp4'
import { NavBtn } from '../Navbar/NavbarElements'
import { NavBtnLink } from '../Navbar/NavbarElements'
const Hero = () => {
    return (    
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg src={video} type="video/mp4" autoPlay loop
                    muted playsInline></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroItems>
                        <HeroH1> Travel with Us</HeroH1>
                        <HeroP>Get Ready to Explore your Dream Destinations with variety of Travel Packages</HeroP>
                        <NavBtn>
                   <NavBtnLink to='Packages'>
                       Explore Us 
                   </NavBtnLink>
               </NavBtn>
                    </HeroItems>
                   
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero


const HeroContainer = styled.div`

background: #0c0c0c;
display: flex;
justify-content : center;
color : #fff; 
height: 100vh;
padding : 0 1rem;
position: relative;


:before{

    content: "";
    position: absolute;
    top: 0;
    bottom : 0;
    right : 0;
    left : 0;
    z-index: 2;
    background: linear-gradient(
     180deg,
     rgba(0,0,0,0.2) 0%,
     rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
}

`

const HeroBg = styled.div`
position : absolute;
top: 0;
bottom : 0;
right : 0;
left : 0;
width : 100%;
height : 100%;
overflow: hidden;
`

const VideoBg = styled.video`
width : 100%;
height: 100%;
-o-object-fit : cover;
object-fit: cover;
`

const HeroContent = styled.div`
z-index  : 3;
height : calc(100vh - 80px);
max-height : 100%;
padding : 0rem calc((100vw - 1300px)/2);

`

const HeroItems = styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items : center;
text-align : center;
height: 100vh;
max-height: 100%;
padding : 0;
color : #fff;
line-height: 1.1;
font-weight : bold;     

`


const HeroH1 = styled.h1`
font-size: clamp(1rem, 4vw , 3rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
font-family : 'Poppins';
`


const HeroP = styled.p`
font-size: clamp(1rem, 2vw , 3rem);
margin-bottom: 2rem;
font-weight: 400;
font-family : 'Poppins';
`