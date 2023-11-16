import React, { useState } from "react";
import {HiCheckCircle,HiXCircle,HiOutlineExclamation} from 'react-icons/hi';

function Forms () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [area,setArea] = useState('');
     
    return(
        <div className="rounded-2xl shadow-2xl shadow-green-300 p-5 md:w-80">
            <form action="" className="flex flex-col space-y-4">
                <label className="form-label text-sm font-Inter">Name</label>
                <input type="text" 
                       placeholder="Your Name" 
                       className="form-control ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
                       value={name}
                       onChange={(e)=> setName(e.target.value)}/>

                <label className="form-label text-sm font-Inter">Email Address</label>
                <input type="email" 
                       placeholder="Enter your email address" 
                       className="form-control ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300" 
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}/>

                <label className="form-label text-sm font-Inter">Subject</label>
                <input type="subject"
                       placeholder="Subject"
                       className="form-control ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
                       value={subject}
                       onChange={(e)=> setSubject(e.target.value)}/>

                <label className="form-label text-sm font-Inter">Message</label>
                <textarea rows="5" 
                          placeholder="Leave us a message"
                          className="form-control text-sm font-Inter ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
                          value={area}
                          onChange={(e)=>setArea(e.target.value)}></textarea>

                <button className="btn btn-warning inline-blok self-end bg-green-500
                         text-white font-Inter font-bold uppercase text-sm
                         rounded-lg px-6 py-2">Send
                </button>
                
            </form>
        </div>
    )
}

export default Forms;