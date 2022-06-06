import React from 'react'
import MyFace from '../assets/Extras/MyFace.png'

const Analytics = () => {
  

  return (
    <div name="me" className='w-full bg-white py-16 px-4'>
        <div id='dasd' className='mx-w-[1240px] mx-auto grid md:grid-cols-2 '>
             <div className='relative w-full '>
                
             <img className=' md:w-[400px] w-[300px] mx-auto my-4 border-solid border-4 border-black  rounded-full' src={MyFace} alt="none"/>
           
                <div className='absolute  top-0 -left-10 w-32 h-52 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'>

                </div>
                <div className='absolute  top-0 -right-0 w-32 h-52 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'>

                </div>
                <div className='absolute  -bottom-8 left-20 w-32 h-52 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000'>

                </div>
             </div>
            <div className='flex flex-col justify-center '>
                  <p  className='text-[#00df9a] font-bold md:text-left text-center'>“If at first you don’t succeed; call it version 1.0”</p>
                  <h1 className='md:text-1xl sm:text-1xl text-1xl font-bold py-2 md:text-left text-center'>
                  <button className='bg-black p-2 rounded-md mr-2'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></button>
                  <button className='bg-black p-2 rounded-md'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                  <span className='p-2'>Download my</span>
                  <a href={require("../assets/ResumeFile/HehersonAmit_Resume.pdf")} download="HehersonAmit_Resume" className='bg-black rounded-md text-white px-5 pt-3 pb-1 items-center inline-flex'>RESUME &nbsp;<svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg></a>
                  
                 </h1>
                 <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="mr-2" role="presentation">
                          <button className="font-bold inline-block p-4 border-b-2 text-blue-600 hover:bg-pink-500 focus:hover:text-white focus:bg-pink-500 focus:text-white hover:text-white" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">About</button>
                        </li>
                        <li className="mr-2" role="presentation">
                          <button className="font-bold inline-block p-4 border-b-2 text-blue-600 hover:bg-pink-500 focus:hover:text-white hover:text-white focus:bg-pink-500 focus:text-white" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Education</button>
                        </li>
                        <li className="mr-2" role="presentation">
                          <button className="font-bold inline-block p-4  border-b-2 text-blue-600 hover:bg-pink-500 focus:hover:text-white hover:text-white focus:bg-pink-500 focus:text-white" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Work</button>
                        </li>
                      </ul>
                    </div>
                    <div id="myTabContent">
                      <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400"> <strong className="font-medium text-gray-800 dark:text-white">Working in the industry for 3 years with a passion for everything front-end and (mostly) back-end. I am also passionate about solving business problems through human-centered designs. My curiosity is my greatest guide for it always seeks challenges which lead me to some unusual website and software projects that surprisingly developed my skills XD</strong>.</p>
                      </div>
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                      <p className="text-sm text-gray-500 dark:text-gray-400"><strong className="font-medium text-gray-800 dark:text-white">Year 2019: UCLM Graduated with a bachelor's degree in Information Technology.</strong>.</p>
                      </div>
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                      <p className="text-sm text-gray-500 dark:text-gray-400"><strong className="font-medium text-gray-800 dark:text-white">Year 2019-2022: Meshnetworks Inc. -as a Web developer programmer</strong>.</p>
                      </div>
                    </div>
                                  
                   

                 <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>02. SKILLS</button>
             </div>
        </div>
    </div>
  )
}

export default Analytics