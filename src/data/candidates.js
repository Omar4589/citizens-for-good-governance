import dsPhoto from '../assets/ds-trans.png'
import mcPhoto from '../assets/mc-trans.png'

export const votingInfo = {
  electionDate: 'Tuesday, May 5, 2026',
  electionDayHours: '6:00 a.m. – 6:00 p.m.',
  earlyVotingLocations: [
    {
      name: 'County-City Building',
      address: '227 W. Jefferson Blvd.',
      city: 'South Bend, IN 46601',
    },
    {
      name: 'Mishawaka County Services Building',
      address: '219 Lincoln Way W.',
      city: 'Mishawaka, IN 46544',
    },
  ],
  earlyVotingSchedule: [
    { dates: 'Tue, Apr. 7 – Fri, Apr. 10', hours: '8:00 a.m. – 4:30 p.m.' },
    { dates: 'Mon, Apr. 13 – Fri, Apr. 17', hours: '8:00 a.m. – 4:30 p.m.' },
    { dates: 'Mon, Apr. 20 – Fri, Apr. 24', hours: '8:00 a.m. – 4:30 p.m.' },
    { dates: 'Sat, Apr. 25', hours: '8:00 a.m. – 4:00 p.m.' },
    { dates: 'Sun, Apr. 26', hours: '12:00 p.m. – 4:00 p.m.' },
    { dates: 'Mon, Apr. 27 – Fri, May 1', hours: '8:00 a.m. – 4:30 p.m.' },
    { dates: 'Sat, May 2', hours: '8:00 a.m. – 4:00 p.m.' },
    { dates: 'Sun, May 3', hours: '12:00 p.m. – 4:00 p.m.' },
    { dates: 'Mon, May 4', hours: '8:00 a.m. – 12:00 p.m.' },
  ],
  pollingPlaceUrl: 'https://indianavoters.in.gov/',
  voterMapUrl: 'https://experience.arcgis.com/experience/b54d116d799347a1bc8187c8b8260122',
};

export const candidates = {
  schaetzle: {
    name: 'Dan Schaetzle',
    district: 'District C',
    office: 'St. Joseph County Council',
    fullDistrict: 'St. Joseph County Council – District C',
    photo: dsPhoto,
    tagline: 'A Better Granger, A Better Saint Joseph County',
    bio: [
      'Dan is the current President Pro Tempore of the St. Joseph County Council, representing District C (Granger), where he has built a record of delivering results through fiscal responsibility and practical leadership.',
      'Since taking office, he has co-sponsored tax relief for seniors, voted for three balanced budgets, helped secure raises for sheriff\'s officers, advanced road paving projects, and successfully led the effort to build Anderson Trail Park without raising taxes.',
      'As a husband, father, Penn High School U.S. History teacher, and small business owner, Dan brings real-world experience and a common-sense approach to county government, working across party lines when necessary to get things done for the residents he serves.',
    ],
    closingLine: null,
  },
  clayton: {
    name: 'Matthew Clayton',
    district: 'District B',
    office: 'St. Joseph County Council',
    fullDistrict: 'St. Joseph County Council – District B',
    photo: mcPhoto,
    tagline: null,
    bio: [
      'Matthew Clayton is a Lieutenant Firefighter/Paramedic with more than twenty years of front-line service in emergency response. He has earned a reputation for strong leadership and unwavering integrity, responding to fires, medical emergencies, and disasters while specializing in hazardous materials, technical rescue, dive rescue, and structural collapse response. He holds a Bachelor\'s Degree in Fire Administration and Emergency Management.',
      'Beyond the firehouse, Matthew has coached youth sports, served on community medical teams, and contributed to public safety education initiatives. Two decades of running toward danger have given him direct insight into how government decisions impact working families, public safety professionals, and taxpayers.',
      'Matthew is running for St. Joseph County Council District B because he stands for responsible leadership, fiscal accountability, and the people he serves — committed to protecting taxpayers, supporting county employees, strengthening public safety, and promoting smart, sustainable economic growth.',
    ],
    closingLine: 'Matthew Clayton doesn\'t just fight fires — he fights for you.',
  },
};
