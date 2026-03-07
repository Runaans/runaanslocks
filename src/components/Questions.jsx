import React from 'react'

const faqData = [
    {
        question: 'What is Runaans Locks?',
        answer:
        `Runaans Locks is a premium sports betting community focused on delivering sharp, data-driven picks 
        and consistent long-term profitability. We are built around disciplined unit tracking and transparent recaps.`,
    },
    {
        question: 'How do I join?',
        answer:
        `Simply click the “Join Now” button on this page, and you’ll be instantly granted access to our 
        Discord server.`,
    },
    {
        question: 'Where and how often are picks posted?',
        answer:
        `Picks are posted everyday by our cappers before matches start for the various 
        sport leagues. They will be posted through different Discord channels. Once joined, you
        will be able to choose which capper you want to tail`,
    },    
    {
        question: 'What betting sites do you guys use?',
        answer:
    `Most of our slips are designed with major sportsbooks in mind, including FanDuel, DraftKings, BetMGM, 
    ESPN Bet, and Bet365. However, many of our picks can be found on most sportsbooks. Availability may vary 
    depending on your location, and certain picks may not be offered in every market.`
    },              
];

const Faq = () => {
    const [active, setActive] = React.useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    };

  return (
    <section className="max-w-4xl mx-auto mt-20 mb-28 px-6">
      <div className="text-center mb-10">
        <p className="text-purple-400 font-semibold uppercase tracking-[0.2em] mb-3">
          FAQ
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Everything you need to know about Runaans Locks and how the community works.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => handleClick(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                {item.question}
              </h3>

              <span className="text-2xl text-purple-400 font-bold">
                {active === index ? '−' : '+'}
              </span>
            </button>

            <div
              className={`px-6 transition-all duration-300 ease-in-out ${
                active === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq