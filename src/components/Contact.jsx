import React, { useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";




  const ContactCard = ({ title, info, icon, bgColor = 'bg-blue-600', link }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center ">
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ml-16 text-left  text-blue-600 hover:text-blue-800 transition-colors duration-200 block">
          {info}
        </a>
      ) : (
        <p className=" ml-16 text-left text-gray-700 leading-relaxed">{info}</p>
      )}
    </div>
  );

  const SocialCard = ({ platform, handle, icon, gradient, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className={`w-14 h-14 ${gradient} rounded-2xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{platform}</h3>
      <p className="text-gray-600">{handle}</p>
    </a>
  );

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-interTight pb-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Contact Us!
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Ready to join the #SHPEfamilia or have questions about our chapter?
            We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>


          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-16 h-1 bg-blue-600"></div>
            </div>

            <div className="space-y-6">
              <ContactCard
                title="Email"
                info="shpe@utdallas.edu"
                icon={<FaEnvelope className="text-white" size={20} />}
                bgColor="bg-blue-600"
                link="mailto:shpe@utdallas.edu"
              />

              <ContactCard
                title="Location"
                info="University of Texas at Dallas, Richardson, TX 75080"
                icon={<FaMapMarkerAlt className="text-white" size={20} />}
                bgColor="bg-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Stay connected with SHPE at UTD through our social media channels for updates, events, and community highlights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SocialCard
              platform="Instagram"
              handle="@shpeutd"
              icon={<FaInstagram className="text-white" size={24} />}
              gradient="bg-gradient-to-br from-pink-500 to-purple-600"
              link="https://instagram.com/shpeutd"
            />

            <SocialCard
              platform="LinkedIn"
              handle="SHPE at UTD"
              icon={<FaLinkedin className="text-white" size={24} />}
              gradient="bg-gradient-to-br from-blue-600 to-blue-700"
              link="https://linkedin.com/company/shpe-utd"
            />

            <SocialCard
              platform="Discord"
              handle="Join our server"
              icon={<FaDiscord className="text-white" size={24} />}
              gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
              link="https://discord.gg/kAu8JpeUGB"
            />
          </div>
        </div>

        
    </div>
    
  );
};
export default Contact;