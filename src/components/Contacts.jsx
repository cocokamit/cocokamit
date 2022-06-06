import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadVal(true);
    emailjs.sendForm('service_57d8cnp', 'template_598goas', form.current, 'TgxtXbowzJwaXRhR_')
      .then((result) => {
        console.log("aa" + result.text);
        form.current.reset();
        setLoadVal(false);
        setAlertVal('success');
      }, (error) => {
        setLoadVal(false);
        console.log("bb" + error.text);
        setAlertVal('failed');
      });


  };

  const [loadVal, setLoadVal] = useState(false);
  const [alertVal, setAlertVal] = useState('');


  return (

    <div name="contacts" className='w-full py-16 text-white px-4'>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-3 md:px-5">

        <h4 className=" text-3xl py-4 text-gray-500">Contact &nbsp;
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 hover:before:-skew-y-3 before:bg-pink-800 relative inline-block">
            <span className="relative text-white">ME</span>
          </span>
        </h4>

        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:w-[500px] w-full gap-5 text-black">

            <input
              type="email"
              className="border border-gray-500  px-4 py-2 focus:outline-none focus:border-[#00df9a] "
              placeholder="Email"
              name='from_name'
              required
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#00df9a] "
              placeholder="subject_text"
              required
            />
            <textarea
              cols="10"
              rows="5"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#00df9a] "
              placeholder="Write your message..."
              name='message'
              required
            ></textarea>

          </div>
          <svg role="status" className={loadVal ? "inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#00df9a]" : "hidden"} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <input
            type="submit"
            value={loadVal ? "Sending..." : "Send Message"}
            className="focus:outline-none rounded-full mt-5 border-solid border-2 border-[#00df9a] px-4 py-2 text-white font-bold"
          />
          {alertVal === "success" ?
            <div className="inline p-4 mx-4 text-sm text-green-700 bg-green-100 rounded-lg " role="alert">
              <span className="font-medium">Success!</span>
            </div> :
            alertVal === "failed" ?
              <div className="inline p-4 mx-4 text-sm text-red-700 bg-red-100 rounded-lg " role="alert">
                <span className="font-medium">Failed!</span>
              </div> : <div></div>

          }
        </form>
          <div className='mt-5'> 
            <svg class="inline h-4 w-4 text-gray-500 mb-[0.15rem]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M14.5 9a3.5 4 0 1 0 0 6" /></svg>
            <span className='text-gray-500 pt-2 mt-2 pl-2'>
               2022 Heherson Amit
            </span>
          </div>
      </div>

    </div>


  )
}

export default Contacts