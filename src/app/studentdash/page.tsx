"use client";



import React from "react";

export default function  StudentDash(){
    return(
        console.log("admin dashboard"),
        <div className="flex flex-col items-center  h-screen bg-black">
            <div>
                <p className="text-3xl">Pass valid for 5 more days</p>
            </div>
           <div className="mt-10">
            <div className="qr-container bg-white h-100 w-100 text-black flex justify-center items-center text-3xl "> Generate  Qr code</div>
            <div className=""> </div>
           </div>

           <div className="flex gap-4">
           
           
           <div className="flex justify-center items-center flex-col mt-16 bg-blue-600 p-4 rounded-2xl">
                <p>Recharge the current bus pass</p>
                <button className="bg-gray-900  px-4 py-2 rounded shadow mt-6">
                    Recharge
                </button>
           </div>
           </div>

        

        </div>
    )
}