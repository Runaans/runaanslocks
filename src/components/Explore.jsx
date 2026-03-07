import React from 'react'
import { BsCash } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { SlideLeft } from '../utility/animation';

const WhyChooseData = [
  {
    id: 1,
    title: 'Best Picks',
    desc: 'Our picks are backed by matchup analysis, trends, and advanced statistics to give you a real betting edge.',
    link:'/',
    icon: <BsCash/>,
    bgColor: '#0063ff',
    delay: 0.3,

  },
    {
    id: 2,
    title: 'Best Community',
    desc: 'Join a fast-growing community of bettors sharing insights, strategies, and winning tickets every day.',
    link:'/',
    icon: <FaUserFriends/>,
    bgColor: '#73bc00',
    delay: 0.6,

  },
    {
    id: 3,
    title: 'Full Transparency',
    desc: 'Every pick is tracked publicly with win rates, units, and performance history so you always know the results.',
    link:'/',
    icon: <FaChartBar/>,
    bgColor: "#fa6400",
    delay: 0.9,

  },
    {
    id: 4,
    title: 'Consistent Value',
    desc: 'From player props to game lines, we focus on finding value spots that sportsbooks misprice.',
    link:'/',
    icon: <IoTrendingUpSharp/>,
    bgColor:'#fe6baa',
    delay: 0.9,

    }
];

const Explore = () => {
  return (
    <div className='mt-20 mb-28 py-16'>
    <div className='max-w-7xl mx-auto px-6'>
      {/* header section */}
        <div className='space-y-4 p-6 text-center max-w-125 mx-auto mb-5'>
        <h1 className='text-purple-400 font-semibold uppercase tracking-[0.2em] mb-3'>Features</h1>
        <p className='font-semibold text-3xl'>
        A group where we do smart plays, locking in on bets to try and make you win money!
        </p>
        </div>
      {/*cards section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {WhyChooseData.map((item) => {
          return (
            <motion.div
            variants={SlideLeft(item.delay)}
            whileInView={'visible'}
            className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]'>
              {/* icon section */}
            <div style={{backgroundColor: item.bgColor }}
            className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
              <div className='text-2xl'>{item.icon}</div>
              </div>
                <p className='font-semibold'>{item.title}</p>
                <p className='text-sm text-gray-500'>{item.desc}</p>
                </motion.div>
              );
        })}
              </div>
            </div>
      </div>
  );
};

export default Explore