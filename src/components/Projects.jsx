import React from 'react'
const Projects = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
        return images;
    }

    const images = importAll(require.context('../assets/CLIimages/', false, /\.(PNG|png|jpe?g|svg)$/));
    const Nimms = importAll(require.context('../assets/Nimms/', false, /\.(PNG|png|jpe?g|svg)$/));
    const Recruitment = importAll(require.context('../assets/Recruitment/', false, /\.(PNG|png|jpe?g|svg)$/));
    const SabongExpress = importAll(require.context('../assets/SabongExpress/', false, /\.(PNG|png|jpe?g|svg)$/));
    const Swertres = importAll(require.context('../assets/Swertres app/', false, /\.(PNG|png|jpe?g|svg)$/));
    const Extras = importAll(require.context('../assets/Extras/', false, /\.(PNG|png|jpe?g|svg)$/));
    const AMS = importAll(require.context('../assets/AMS/', false, /\.(PNG|png|jpe?g|svg)$/));

    return (
        <div name='projects' className='w-full py-16 bg-white px-4'>
            <section tabIndex="-1" className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
                <div>
                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 '>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 rounded-lg p-3 dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full left-4 -top-5 border-solid border-8 border-[#00df9a] h-full'></div>
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={images['CLIlogin.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={images['adminDashboard.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={images['EmployeeIdentity.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={images['Homepage.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                        <div className='flex flex-col justify-center w-full'>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   HUMAN HRIS
                                   
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                Human Resource Information System (HRIS) for your organization will improve the efficiency of your internal HR processes. These powerful tools help streamline common workflows and reduce administrative overhead like data entry.
                                </p>
                                <div className='md:text-left text-center'>
                                    <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-w-[1240px] mx-auto flex flex-col-reverse md:grid md:grid-cols-2   '>
                    <div className='flex flex-col justify-center w-full '>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   Online Recruitment
                                   
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                A manpower recruitment website which can be modified for different types of businesses recruitment workflows. This help both the business recruiter and applicants communicate more effectively on its beginning phase. 
                                </p>
                                <div className='md:text-left text-center'>
                                    <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 p-3 rounded-3xl dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full right-4 -bottom-5 border-solid border-8  border-pink-500 h-full'></div>
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={Recruitment['Recruits.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={Recruitment['applicantInfo.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={Recruitment['Reference.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={Recruitment['manpowerRequest.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                    </div>


                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 '>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 rounded-lg p-3 dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full left-4 -bottom-5 border-solid border-8 border-[#00df9a] h-full'></div>
                            <img src={Extras['birdred.png']} className="absolute w-[50%] -left-4 -top-14 animate-peck  h-[40%]" alt="..." />
                            <img src={Extras['birdblue.png']} className="absolute w-[50%] right-4 -bottom-14 animate-peck2  h-[40%]" alt="..." />
                                 
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={SabongExpress['Login.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={SabongExpress['Screen.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={SabongExpress['Director.PNG']} className="block absolute top-1/2 left-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={SabongExpress['Monton.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={SabongExpress['AgentView.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                        <div className='flex flex-col justify-center w-full'>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   Orange Gamefowl
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                Electronic Web-based Sabong for THE COCK FIGHTERSSS!!! Well yeah, super fun while developing this. I have gained a lot of sabong knowledge and secrets that I discovered throughout the project timeline hehe. 
                                </p>
                                <div className='md:text-left text-center'>
                                <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-w-[1240px] mx-auto flex flex-col-reverse md:grid md:grid-cols-2   '>
                    <div className='flex flex-col justify-center w-full '>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   Tricoins
                                   
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                A mobile android-based Swertres app that can collect and display data entries from different ticket agent users.  
                                </p>
                                <div className='md:text-left text-center'>
                                <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 rounded-lg p-3 dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full left-4 -top-5 border-solid border-8 border-pink-500 h-full'></div>
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={Swertres['Login.PNG']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={Swertres['AdminNav.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={Swertres['AdminWinning.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={Swertres['AgentView.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={Swertres['AdminStatistics.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                    </div>


                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 '>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 rounded-lg p-3 dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full right-4 -top-5 border-solid border-8 border-[#00df9a] h-full'></div>
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={Nimms['Home.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={Nimms['Login.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={Nimms['Info.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                                            <img src={Nimms['PetInfo.jpg']} className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                        <div className='flex flex-col justify-center w-full'>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   NIMS
                                   
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                    National Integrated Microchip System (NIMS) a mobile android-based inventory system for veterinarians to efficiently allocate and manage microchips for their patients.
                                </p>
                                <div className='md:text-left text-center'>
                                <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-w-[1240px] mx-auto flex flex-col-reverse md:grid md:grid-cols-2   '>
                    <div className='flex flex-col justify-center w-full '>
                            <div className=''>
                                <h1 className=' md:text-5xl sm:text-5xl text-4xl font-bold py-2 md:text-left text-center'>
                                   AMS
                                   
                                </h1>
                                <p className=' md:text-2xl sm:text-1xl text-1xl py-2 md:text-left text-center'>
                                  Attendance Management System (AMS) allows employees to directly punch their timelogs from biometric device to the HRIS realtime.
                                </p>
                                <div className='md:text-left text-center'>
                                <button className='border-black bg-black border-solid border-2 rounded-md font-medium my-6 mx-auto md:mx-0 p-3'><svg className="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-10'>
                        <figure className="relative w-full flex flex-col-reverse bg-slate-50 rounded-lg p-3 dark:bg-black dark:highlight-white/5">
                            <div className='absolute w-full left-4 -bottom-5 border-solid border-8 border-pink-500 h-full'></div> 
                            <figcaption className="">
                                <div id="animation-carousel" className="relative " data-carousel="static">
                                    <div className="overflow-hidden relative h-48 rounded-lg  sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item>
                                            <img src={AMS['amsDesign.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 " alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10 " data-carousel-item>
                                            <img src={AMS['Choosing.PNG']} className="block absolute top-1/2 left-1/2  p-5 -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={AMS['RunningAppAms.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                        <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                                            <img src={AMS['RunningAppAms.PNG']} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>
                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Projects