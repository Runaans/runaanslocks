import React from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <section className="w-full bg-linear-to-r from-purple-800 to-purple-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center text-center min-h-30">
          <p className="text-3xl font-semibold">
        <CountUp 
        end={2} 
        duration={3}
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
        </p>
    <p>Expert Cappers</p>
    </div>

    <div className='flex flex-col items-center justify-center text-center min-h-30'>
    <p className='text-3xl font-semibold'>
        <CountUp 
        end={150} 
        suffix='+'
        duration={3} 
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
        </p>
    <p>Members</p>
    </div>

    <div className='flex flex-col items-center justify-center text-center min-h-30'>
    <p className='text-3xl font-semibold'>
        <CountUp 
        end={100} 
        suffix='+'
        duration={3} 
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
        </p>
    <p>units won</p>
    </div>

    <div className='flex flex-col items-center justify-center text-center min-h-30'>
    <p className='text-3xl font-semibold'>$
        <CountUp 
        end={10000} 
        separator=','
        suffix='+'
        duration={3} 
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
        </p>
    <p>in total winnings</p>
    </div>
    
    </div>
    </section>
  )
}

export default Statistics