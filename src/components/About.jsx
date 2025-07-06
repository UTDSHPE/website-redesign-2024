import React from 'react';
import shpeUTD from '/logos/chapter-logos-vertical-pngs/SHPE_logo_vert_University of Texas Dallas_KO.png'
import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiChartLineUpBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const About = () => {
  const SectionCard = ({ title, description, icon, bgColor = 'bg-blue-600' }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-10 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg text-left">{description}</p>
    </div>
  );

  const PillarCard = ({ title, description, icon, gradient }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const HistoryCard = ({ title, description, imageSrc, gradient }) => (
    <div className="flex items-start space-x-6">
      <div className={`w-24 h-24 ${gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
        <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 ">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
  

  return (
    <div className="min-h-screen bg-gray-50 font-interTight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About <span className="text-blue-600">SHPE</span> at UTD
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            The Society of Hispanic Professional Engineers is the nation's largest association
            for Hispanics in STEM, empowering students and professionals through mentorship,
            training, and strategic programming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <SectionCard
            title="Our Mission"
            description="SHPE changes lives by empowering the Hispanic community to realize its fullest potential and impact the world through STEM awareness, access, support, and development."
            icon={<FaCheckCircle />}
            bgColor="bg-blue-600"
          />
          <SectionCard
            title="Our Vision"
            description="SHPE envisions a world where Hispanics are highly valued and influential as leading innovators, scientists, mathematicians, and engineers."
            icon={<FaRegLightbulb/>}
            bgColor="bg-indigo-600"
          />
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              The Five Pillars of <span className="text-blue-600">SHPE at UTD</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PillarCard
              title="Academic Advancement"
              description="Commits the chapter to host events that help members succeed academically through tutoring, study groups, and educational workshops."
              icon={<IoBookOutline size ={25}/>}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <PillarCard
              title="Leadership Development"
              description="Focuses on members' opportunities to develop leadership skills and achieve common goals through collaborative projects and initiatives."
              icon={<FaPeopleGroup size={25} />}
              gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
            />
            <PillarCard
              title="Networking & Chapter Growth"
              description="Focuses on expanding opportunities for members through networking events, partnerships, and building lasting professional connections."
              icon={<PiChartLineUpBold size={25} />}
              gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            <PillarCard
              title="Community Outreach"
              description="Focuses on giving back to the community, especially when it comes to spreading STEM awareness through educational programs and volunteer work."
              icon={<CiHeart size={25} />}
              gradient="bg-gradient-to-br from-orange-500 to-orange-600"
            />
            <PillarCard
              title="Professional Growth"
              description="Helps members become professionals in their industry through career development, internship opportunities, and industry connections."
              icon={<IoBriefcaseOutline size={25} />}
              gradient="bg-gradient-to-br from-red-500 to-red-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-12">
            <HistoryCard
              title="National Foundation"
              description="The Society of Hispanic Professional Engineers (SHPE) was founded in 1974 in Los Angeles, California, by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community."
              imageSrc={'/logos/chapter-logos-vertical-pngs/SHPE_logo_vert_notext_white.png'}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <HistoryCard
              title="SHPE at UTD"
              description="The University of Texas at Dallas chapter continues this legacy by creating an organization where Hispanic engineers can come together. Since our founding in 1981, we have nurtured a diverse group of students, united in our heritage and our studies. Members become part of the #SHPEfamilia while participating in activities that help them grow personally and professionally."
              imageSrc={'/logos/utd_logo.png'}
              gradient="bg-gradient-to-br from-orange-500 to-orange-600"
            />
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Join the #SHPEfamilia</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Become part of a community that's changing lives and shaping the future of STEM.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNSkWcBB6opW8gAc_o1UDilWk-7-natRsv6SOw9trSCN5f1A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
