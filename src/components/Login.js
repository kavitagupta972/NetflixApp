import React from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

 const Login = () => {
   return (
     <>
     <Header/>
     <div>
        <img src = {BG_URL} alt = "netflix-bg"/>
     </div>
     </>
   )
 }

export default Login