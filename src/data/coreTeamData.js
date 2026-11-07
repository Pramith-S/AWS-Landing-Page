/**
 * AWS Student Builder Group (SBG) - JSSATEB
 * Core Team, Mentors, Leadership & Group Archive Data
 * Using original photos with natural backgrounds intact and custom face framing
 */

export const coreTeamData = {
  // AWS SBG Lead Details (Clean minimal profile)
  chapterLead: {
    id: 'kumar-r-shet',
    name: 'Kumar R Shet',
    role: 'AWS SBG Lead',
    photos: [
      {
        src: '/images/core-team/members/kumar-r-shet.jpg',
        alt: 'Kumar R Shet - AWS SBG Lead Portrait',
        position: 'center 15%'
      },
      {
        src: '/images/core-team/kumar-r-shet-stage.jpg',
        alt: 'Kumar R Shet - Keynote Address on Stage',
        position: 'center 20%'
      }
    ],
    socials: {
      portfolio: 'https://imkumar80.github.io/KumarShet/',
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/kumar-r-shet-9952a2223',
      github: 'https://github.com/imkumar80'
    }
  },

  // Faculty Mentors (Clean minimal profile: Name, Role, Dept, Instagram & LinkedIn)
  mentors: [
    {
      id: 'mentor-abhilash',
      name: 'Abhilash CB',
      role: 'Faculty Mentor',
      department: 'Dept. of Computer Science & Engineering, JSSATEB',
      photo: '/images/mentors/abhilash-cb.jpg',
      position: 'center 20%',
      socials: {
        instagram: '',
        linkedin: 'https://www.linkedin.com'
      }
    },
    {
      id: 'mentor-sukrutha',
      name: 'Sukrutha C Basappa',
      role: 'Faculty Mentor',
      department: 'Dept. of Computer Science & Engineering, JSSATEB',
      photo: '/images/mentors/sukrutha-c-basappa.png',
      position: 'center 25%',
      socials: {
        instagram: '',
        linkedin: 'https://www.linkedin.com'
      }
    }
  ],

  // Group Archive Photos (Removed location & attendee stats)
  groupPhotos: [
    {
      id: 'grand-stage',
      title: 'Community Grand Stage',
      name: 'COMMUNITY GRAND STAGE',
      caption: 'AWS Student Builder Group launch & congregation with institutional leadership, faculty mentors, and student builders across JSSATEB.',
      src: '/images/core-team/group-auditorium.jpg',
      badge: 'GRAND STAGE'
    },
    {
      id: 'hand-sign',
      title: 'AWS Hand-Sign Formation',
      name: 'AWS HAND-SIGN FORMATION',
      caption: 'AWS SBG JSSATEB builders forming the iconic "A - W - S" hand gesture formation on stage.',
      src: '/images/core-team/group-team.jpg',
      badge: 'AWS HAND FORMATION'
    }
  ],

  // Domain Teams (Original photos, verified face positioning, instagram & linkedin ready)
  teams: [
    {
      id: 'tech',
      name: 'Tech Team',
      badge: 'Cloud & Infrastructure',
      accentColor: '#8B5CF6',
      description: 'Architecting scalable cloud deployments, building web portals, and running hands-on AWS developer workshops.',
      members: [
        {
          id: 'tech-1',
          name: 'Pramith S',
          role: 'Tech Lead',
          isLead: true,
          photo: '/images/core-team/members/pramith.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'tech-2',
          name: 'Chirag NS',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/chirag-ns.jpg',
          position: 'center 18%',
          instagram: 'https://www.instagram.com/chirag_ns?dlrf=MXQ0cmN0dTNrMWtm',
          linkedin: 'https://www.linkedin.com/in/chirag-n-s-a3ab70372'
        },
        {
          id: 'tech-3',
          name: 'Kushal Kumar',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/kushal-kumar.jpg',
          position: 'center 30%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'tech-4',
          name: 'Parth',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/parth.jpg',
          position: 'center 35%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'tech-5',
          name: 'Raksha R',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/raksha-r.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'tech-6',
          name: 'Adarsh VH',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/adarsh-vh.jpg',
          position: '53% 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'tech-7',
          name: 'Shriya Sharma',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/shriya-sharma.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        }
      ]
    },
    {
      id: 'events',
      name: 'Events Team',
      badge: 'Hackathons & Community',
      accentColor: '#FF9900',
      description: 'Orchestrating 24-hour hackathons, certified AWS speaker sessions, community bootcamps, and venue experiences.',
      members: [
        {
          id: 'events-1',
          name: 'Nallaapeta Sai Dhyan Santosh',
          role: 'Events Lead',
          isLead: true,
          photo: '/images/core-team/members/sai-dhyan-santosh.jpg',
          position: 'center 42%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-2',
          name: 'Lakshitha R',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/lakshitha-r.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-3',
          name: 'Ayushi Anand',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/ayushi-anand.jpg',
          position: 'center 48%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-4',
          name: 'Afiya',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/afiya.png',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-5',
          name: 'Harshith Naveen',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/harshith-naveen.png',
          position: 'center 42%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-6',
          name: 'Gourav',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/gourav.png',
          position: 'center 48%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-7',
          name: 'Amulya',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/amulya.jpg',
          position: 'center 28%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-8',
          name: 'Apurva R Kumar',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/apurva-r-kumar.jpg',
          position: 'center 35%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-9',
          name: 'Tejus AR',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/tejas-ar.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'events-10',
          name: 'Mouna',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/mouna.jpg',
          position: 'center 52%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Team',
      badge: 'Brand & Creative Strategy',
      accentColor: '#EC4899',
      description: 'Crafting the visual identity, viral social reels, graphic design banners, and builder spotlight campaigns.',
      members: [
        {
          id: 'marketing-1',
          name: 'Preethi',
          role: 'Marketing Lead',
          isLead: true,
          photo: '/images/core-team/members/preethi.jpg',
          position: 'center 38%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-2',
          name: 'Bhumika HG',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/bhumika-hg.jpg',
          position: 'center 32%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-3',
          name: 'Aadi Madhok Prasad',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/aadi-madhok-prasad.png',
          position: 'center 32%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-4',
          name: 'Disha R',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/disha-r.jpg',
          position: 'center 38%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-5',
          name: 'Sagar Kumar',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/sagar-kumar.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-6',
          name: 'Devansh S Mukka',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/devansh-s-mukka.jpg',
          position: 'center 45%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'marketing-7',
          name: 'Tofail',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/tofail.png',
          position: 'center 38%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operational Team',
      badge: 'Management & Partnerships',
      accentColor: '#10B981',
      description: 'Fueling club logistics, institutional permissions, budget tracking, sponsor relations, and volunteer mobilization.',
      members: [
        {
          id: 'operations-1',
          name: 'Pramath',
          role: 'Operational Lead',
          isLead: true,
          photo: '/images/core-team/members/pramath.jpg',
          position: 'center 25%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'operations-2',
          name: 'Disha Varanashi',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/disha-varanashi.jpg',
          position: 'center 48%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'operations-3',
          name: 'Pratheeksha V',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/pratheeksha-v.jpg',
          position: 'center 38%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        },
        {
          id: 'operations-4',
          name: 'Dimple',
          role: 'Member',
          isLead: false,
          photo: '/images/core-team/members/dimple.jpg',
          position: 'center 48%',
          instagram: '',
          linkedin: 'https://www.linkedin.com'
        }
      ]
    }
  ]
};
