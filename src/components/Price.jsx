import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    period: '/month',
    features: [
      'Free picks every day',
      'Access to the community Discord',
      'Basic betting discussion and insights',
    ],
  },
  {
    title: 'Monthly',
    price: '$4.99',
    period: '/month',
    comingSoon: true,
    features: [
      'Premium picks and deeper analysis',
      'Exclusive Discord channels',
      'Full player prop coverage',
    ],
  },
  {
    title: 'Yearly',
    price: '$49.99',
    period: '/year',
    comingSoon: true,
    features: [
      'Best value for long-term members',
      'All premium monthly features included',
      'Priority access to future perks',
    ],
  },
]

const Price = () => {
  return (
    <section className="mt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold uppercase tracking-[0.2em] mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Simple pricing for every bettor
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Start free today and unlock more as Runaans Locks grows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 flex flex-col min-h-130 ${
                option.title === 'Free'
                  ? 'border-purple-500/40 bg-zinc-900/90 shadow-[0_0_35px_rgba(168,85,247,0.12)]'
                  : 'border-white/10 bg-zinc-950/80'
              }`}
            >
              <div>
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  <h3 className="text-3xl font-semibold text-white">
                    {option.title}
                  </h3>

                  {option.comingSoon && (
                    <span className="text-sm font-medium px-3 py-1 rounded-full 
bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    {option.price}
                  </span>
                  <span className="text-neutral-400 tracking-tight ml-2">
                    {option.period}
                  </span>
                </div>

                <ul className="space-y-5">
                  {option.features
                    .filter((feature) => feature.trim() !== '')
                    .map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-400 shrink-0" />
                        <span className="ml-3 text-gray-200">{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mt-auto pt-10">
                <a
                  href="https://whop.com/runaans-locks/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`inline-flex justify-center items-center text-center w-full h-12 px-5 text-lg font-medium rounded-lg transition duration-200 ${
                    option.comingSoon
                      ? 'border border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
                      : 'bg-linear-to-r from-purple-500 to-purple-800 text-white hover:opacity-90'
                  }`}
                >
                  {option.comingSoon ? 'Coming Soon' : 'Join Free'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price