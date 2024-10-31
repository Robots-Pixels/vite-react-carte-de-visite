import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import ContactLink from './ContactLink'


export default function App(){

  const infos = {
    profileImg: '/profile.webp',
    person: {
      name: 'Robots&Pixels',
      post: 'Etudiant / Youtuber',
      description: "Mon reve est de devenir Roboticien 😎. Actuellement je suis dans le challenge de devenir Dev Web Fullstack en 106 jours 💪💪. Abonnez-vous à ma chaine Youtube 😇"
    },
    profileLinks: {
      youtube: 'http://www.youtube.com/@RobotsPixels',
      tiktok: 'https://www.tiktok.com/@robotsandpixels'
    }
  }

  return (
    <>

    <ProfileImage profileImg = {infos.profileImg}/>
    <ProfileInfo props = {infos.person}/>
    <ContactLink props = {infos.profileLinks}/>

    </>
  )
}
