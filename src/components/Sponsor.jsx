import React, { useRef, useEffect} from 'react'
import {Link} from 'react-router-dom';
import InfiniteCarousel from './common/InfiniteCarousel.jsx'

const Mailto = ({ email, subject = '', body = '', children, className = '' }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  return <a href={`mailto:${email}${params}`} className={className}>
    {children}
  </a>;
};

//main
const Sponsor = () => {
  return (
    <div>
      <section className=" bg-white min-h-screen w-full">{/*Start page */}
        {/*Header image*/}
      <section
        className="relative h-[65vh] w-full bg-cover bg-center bg-fixed "
        style={{
          backgroundImage: 'url(/photos/jpmc-gbm-wideshot.JPEG)', 
        }}
      >
      </section>

        <section className = " bg-white min-h-screen w-full mx-auto pb-24">
          <div className="pt-12">
            <h1 className="text-5xl font-extrabold text-black">
              Thank you to our Sponsors!
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full my-8" />

          </div>
          <section className="flex items-center justify-center mt-10 max-w-[80%] mx-auto ">
            <InfiniteCarousel/>
          </section> 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className= "p-6">
              <h2 className = " text-black font-semibold text-2xl text-left max-w-[70%] ml-auto mr-0">The SHPE UTD Chapter deeply appreciates the generosity and support of our corporate
                partners. Your contributions help us grow as an organization, empower future Hispanic
                leaders in STEM, and promote a more inclusive and innovative community.
              </h2>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div className ="max-w-[70%] flex flex-col gap-4 mr-auto ml-0">
                {/*Sponsorship interest text*/}   
                          
                  <p className = "text-black text-left">
                    Interested in partnering with us? Email our Corporate Liason at{' '}
                    <Mailto 
                      email="utdshpe@gmail.com" subject="" body="" className="underline text-blue-600">utdshpe@gmail.com
                    </Mailto>.
                    <p className = "text-gray-500 text-xs max-w-[100%] text-left mt-1 mx-auto">
                      SHPE is a non-profit 501(c)3 organization. Contributions to SHPE are tax deductible.
                    </p>
                  </p>
                {/*Button*/}
                <a href = "/files/SponsorshipPacket.pdf" target="_blank"
                  rel = "noopener noreferrer" 
                  className=" w-40 h-40 rounded-full bg-shpe-blue text-white text-center 
                  flex items-center mx-auto
                  text-lg font-semibold shadow-lg hover:bg-shpe-blue2 transition-colors">
                  View Corporate Packet
                </a>
              
              </div>
            </div>
          </div>

          <h1 className="text-4xl mt-10 font-extrabold text-black">
              Sponsorship Tiers
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full my-8" />

          
      {/*Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 py-10">
            {/* Bronze Card*/}
            <div className="bg-shpe-red rounded-md p-1 ">
              {/* Inner white-bordered content box */}
              <div className="border border-white mx-auto text-white flex flex-col items-center justify-center text-center min-h-[180px]">
                <h3 className="text-2xl font-extrabold text-blue mb-2">Bronze Tier</h3>
                <p className="text-lg font-semibold mb-1">$500+</p>
                <p className="text-sm">General Body Meeting Presentation, Social Media Spotlight, Invitation to Annual Gala</p>
              </div>
            </div>
            <div className="bg-shpe-red rounded-md p-1 ">
              {/* Inner white-bordered content box */}
              <div className="border border-white mx-auto text-white flex flex-col items-center justify-center text-center min-h-[180px]">
                <h3 className="text-2xl font-extrabold text-blue mb-2">Silver Tier</h3>
                <p className="text-lg font-semibold mb-1">$1000+</p>
                <p className="text-sm"> Website Recognition, Invitation to Señoritas Dinner</p>
              </div>
            </div>
            <div className="bg-shpe-red rounded-md p-1 ">
              {/* Inner white-bordered content box */}
              <div className="border border-white mx-auto text-white flex flex-col items-center justify-center text-center min-h-[180px]">
                <h3 className="text-2xl font-extrabold text-blue mb-2">Gold Tier</h3>
                <p className="text-lg font-semibold mb-1">$1500+</p>
                <p className="text-sm"> Access to ResumeBook, UTD SHPE internal recruiting tool </p>
              </div>
            </div>
            <div className="bg-shpe-red rounded-md p-1 ">
              {/* Inner white-bordered content box */}
              <div className="border border-white mx-auto text-white flex flex-col items-center justify-center text-center min-h-[180px]">
                <h3 className="text-2xl font-extrabold text-blue mb-2">Platinum Tier</h3>
                <p className="text-lg font-semibold mb-1">$2000+</p>
                <p className="text-sm"> Keynote speech at Gala, Networking Mixer/Presentation</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 text-center ">
            Each tier includes the benefits of the previously listed tiers.
          </p>


        </section>{/*White section */}
        </section>{/*Grey Section */}
    </div>
  );
}


export default Sponsor