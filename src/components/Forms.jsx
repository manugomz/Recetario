import React from "react";

function Forms () {
    return(
        <div className="rounded-2xl shadow-2xl shadow-green-300 p-5">
            <form action="" className="flex flex-col space-y-4">
                <div>
                   <label className="text-sm font-Inter">Name</label>
                   <input type="text" 
                          placeholder="Your Name" 
                          className="ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"/>
                </div>

                <div>
                   <label htmlFor="">Email Address</label>
                   <input type="email" 
                          placeholder="Enter your email address"
                          className="ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"/>
                </div>

                <div>
                    <label htmlFor="">Massage</label>
                    <textarea
                    placeholder="Leave us a message" 
                    rows="10"
                    className="ring-1 ring-green-100 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-green-300">
                    </textarea>
                </div>

                <button 
                    className="inline-blok self-end bg-green-500
                         text-white font-Inter font-bold uppercase text-sm
                         rounded-lg px-6 py-2 ">Send
                </button>
            </form>
        </div>
    )
}

export default Forms;