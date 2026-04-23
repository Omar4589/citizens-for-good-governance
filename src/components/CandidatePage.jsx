import React from 'react';
import { votingInfo } from '../data/candidates';

export default function CandidatePage({ candidate }) {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Announcement bar */}
      <div className="bg-navy-dark py-2.5 px-4">
        <p className="text-center text-xs font-medium text-white/60 tracking-widest uppercase">
          Citizens for Good Governance &mdash; St. Joseph County, Indiana
        </p>
      </div>

      {/* Hero — two-column on desktop */}
      <header className="bg-navy text-white relative">
        <div className="h-1 bg-civic-red w-full" />

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
          <div className="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center">

            {/* Left: Candidate */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
                {candidate.office}
              </p>

              <img
                src={candidate.photo}
                alt={candidate.name}
                className="mx-auto mb-6 w-56 h-56 md:w-60 md:h-60 object-cover object-top rounded-full"
              />

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-3">
                {candidate.name}
              </h1>
              <p className="text-base text-white/65 mb-8 tracking-wide">
                {candidate.fullDistrict}
              </p>

              {/* Election date callout */}
              <div className="inline-block bg-civic-red px-7 py-4 rounded-xl mb-7">
                <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Election Day</p>
                <p className="text-xl font-bold leading-none">Tuesday, May 5, 2026</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={votingInfo.pollingPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white text-navy font-semibold rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Find Your Polling Place
                </a>
                <a
                  href="#early-voting"
                  className="px-6 py-3.5 border-2 border-white/35 text-white font-semibold rounded-lg text-sm hover:border-white/70 hover:bg-white/10 transition-colors"
                >
                  View Early Voting Hours
                </a>
              </div>
            </div>

            {/* Right: About */}
            <div className="md:border-l md:border-white/20 md:pl-10">
              <p className="text-5xl md:text-6xl font-black tracking-widest text-civic-red mb-3">
                VOTE.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                About {candidate.name}
              </h2>

              {candidate.tagline && (
                <p className="text-civic-red font-semibold italic mb-6 text-base">
                  {candidate.tagline}
                </p>
              )}

              <div className="space-y-4 text-white/80 leading-relaxed text-sm">
                {candidate.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {candidate.closingLine && (
                <p className="mt-6 pt-6 border-t border-white/15 text-white font-bold text-base">
                  {candidate.closingLine}
                </p>
              )}
            </div>

          </div>
        </div>

        <div className="h-1 bg-civic-red w-full" />
      </header>

      {/* Election Day info bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <p className="text-center text-gray-600 text-sm max-w-xl mx-auto">
          Polls are open{' '}
          <span className="font-semibold text-gray-900">6:00 a.m. – 6:00 p.m.</span>{' '}
          on Election Day. All Indiana voters must present a{' '}
          <span className="font-semibold text-gray-900">valid photo ID</span> to vote.
        </p>
      </div>

      {/* Polling place CTA section */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">
            Where Do I Vote?
          </h2>
          <p className="text-gray-500 text-sm text-center mb-7 max-w-md mx-auto">
            Your Election Day polling place is assigned by your home address. Use the official tools below to confirm where to vote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={votingInfo.pollingPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-4 bg-navy text-white font-semibold rounded-xl text-sm hover:bg-navy-dark transition-colors"
            >
              Indiana Voter Portal
              <span className="block text-white/60 font-normal text-xs mt-0.5">Find my polling place</span>
            </a>
            <a
              href={votingInfo.voterMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-4 border-2 border-navy text-navy font-semibold rounded-xl text-sm hover:bg-navy/5 transition-colors"
            >
              St. Joseph County Voter Map
              <span className="block text-navy/50 font-normal text-xs mt-0.5">Official county resource</span>
            </a>
          </div>
        </div>
      </div>

      {/* Early Voting */}
      <div id="early-voting" className="bg-gray-50 border-t border-gray-200 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-1">Early Voting</h2>
          <p className="text-gray-500 text-sm mb-8">
            Early in-person voting begins{' '}
            <span className="font-semibold text-gray-700">April 7, 2026</span>{' '}
            at two locations in St. Joseph County.
          </p>

          {/* Locations */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {votingInfo.earlyVotingLocations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-civic-red mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy text-sm">{loc.name}</p>
                    <p className="text-gray-500 text-sm">{loc.address}</p>
                    <p className="text-gray-500 text-sm">{loc.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule table */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Early Voting Hours
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {votingInfo.earlyVotingSchedule.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 py-3.5 border-b border-gray-100 last:border-b-0 ${
                  i % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'
                }`}
              >
                <span className="text-sm font-medium text-gray-800">{row.dates}</span>
                <span className="text-sm text-gray-500 tabular-nums">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Disclaimer */}
      <footer className="bg-navy-dark px-6 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2">Paid for by</p>
          <p className="text-white font-bold text-xl mb-5">Citizens for Good Governance</p>
          <div className="h-px bg-white/10 mb-5" />
          <p className="text-white/35 text-xs leading-relaxed">
            Paid for by Citizens for Good Governance. Not authorized by any candidate or candidate&apos;s committee.
          </p>
        </div>
      </footer>

    </div>
  );
}
