import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

const USERLIST = () => {
    const [listofUser,setlistofUser]=useState()
    useEffect (()=>{
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res=>{setlistofUser(res);console.log(res.data)})
    },[])
  return (
    <div>
        {(listofUser)? listofUser.data.map(el=><User user={el}/>) :<h1>wait</h1>}
    </div>
  )
}

export default USERLIST