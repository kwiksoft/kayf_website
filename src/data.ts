import { ProgramDetail, SportDetail, ValueItem } from './types';

export const valuesData: ValueItem[] = [
  {
    name: 'Discipline',
    description: 'Encouraging responsibility, commitment, consistency, and respect.'
  },
  {
    name: 'Integrity',
    description: 'Promoting fairness, ethics, accountability, and sportsmanship on and off the field.'
  },
  {
    name: 'Excellence',
    description: 'Supporting continuous improvement, learning, growth, and development.'
  },
  {
    name: 'Inclusion',
    description: 'Creating opportunities for participation across diverse backgrounds and communities.'
  },
  {
    name: 'Leadership',
    description: 'Encouraging confidence, responsibility, teamwork, and positive community impact.'
  },
  {
    name: 'Respect & Sportsmanship',
    description: 'Fostering cooperation, empathy, mutual respect, and the true spirit of sports beyond rivalry and aggression.'
  }
];

export const programsData: ProgramDetail[] = [
  {
    id: 'in-school-training',
    num: '01',
    name: 'In-School Training',
    heroTagline: 'Creating Active Campuses. Nurturing Future-Ready Youth.',
    heroSub: 'School sports initiatives designed to encourage participation, discipline, physical wellness, leadership, and holistic student development.',
    overview: 'The In-School Training Program by Kalgreen Youth Foundation (KAYF) integrates professionally guided sports and physical development activities into the academic environment through institutional collaboration. KAYF works with schools to build active, engaged campus ecosystems where students participate, learn, grow, and discover their potential through sports and movement-based development. The program improves physical fitness while strengthening confidence, teamwork, focus, leadership, and overall student well-being.',
    importanceTitle: 'Why School Sports Development Matters',
    importanceList: [
      'Better student engagement and active campus culture',
      'Discipline, teamwork, and leadership opportunities',
      'Physical wellness awareness across the student body',
      'Pathways to identify emerging talent early',
      'Long-term participation habits beyond school years'
    ],
    coverage: [
      {
        title: 'Physical Training Programs',
        items: ['Guided activity sessions designed to improve physical fitness, mobility, coordination, and endurance.']
      },
      {
        title: 'Fundamental Movement Development',
        items: [
          'Agility & Coordination',
          'Balance & Strength',
          'Speed & Reflexes'
        ]
      },
      {
        title: 'School Sports Activities',
        items: [
          'Organised sports participation programs across multiple disciplines.',
          'Cluster & Zonal Programs: Sporting activities and participation opportunities among schools.',
          'Fit India Integration & Khelo India support programs.',
          'Green Schooling Initiatives: Sports-oriented awareness and activities promoting active, healthy lifestyles.'
        ]
      }
    ],
    forWhom: [
      {
        category: 'For Schools',
        description: 'Turnkey sports programming that strengthens campus engagement and student participation without adding to the PE team\'s workload.'
      },
      {
        category: 'For Educational Institutions',
        description: 'Development-focused sports programs that align with holistic student growth objectives and institutional reputation.'
      },
      {
        category: 'For Academic Trusts',
        description: 'Youth development initiatives that support institutional vision, community impact, and board-level reporting.'
      },
      {
        category: 'For Campus Administrators',
        description: 'Professionally coordinated sports activities with execution support that frees up administrative bandwidth.'
      }
    ],
    approach: [
      { title: 'Assess', description: 'Understand institutional requirements and student participation needs.' },
      { title: 'Design', description: 'Create a sports development plan tailored to the campus.' },
      { title: 'Implement', description: 'Execute school sports activities and training programs on schedule.' },
      { title: 'Engage', description: 'Encourage participation, discipline, and active involvement.' },
      { title: 'Develop', description: 'Support long-term student growth and a sustainable sporting culture.' }
    ],
    outcomes: [
      'A measurable sports calendar to present to parents at admissions and parent-teacher meetings.',
      'Student talent your school can nominate to district, state, and zonal sporting platforms.',
      'An active campus culture that strengthens institutional reputation and parent communication.',
      'Documented student participation records for academic and extra-curricular reporting.',
      'Reduced sedentary behaviour and improved physical wellness across the student body.',
      'A repeatable annual programme that runs without administrative overhead on your team.'
    ],
    ecosystemLink: 'Students demonstrating sporting potential through school initiatives may progress into advanced training via KAYF’s Pro Coaching program, and competitive exposure via Events & Competitions.',
    ctaText: 'Build a Strong Sports Culture Within Your Institution.',
    ctaButton: 'Partner With KAYF'
  },
  {
    id: 'pro-coaching',
    num: '02',
    name: 'Pro Coaching',
    heroTagline: 'Structured Coaching. Focused Development. Progressive Growth.',
    heroSub: 'Professional coaching programs designed to support athletes through disciplined training, performance development, and long-term sporting progression.',
    overview: 'KAYF’s Pro Coaching Program provides systematic training opportunities for students, aspiring athletes, and performance-focused individuals seeking guided development in sports. The program combines technical guidance, physical conditioning, tactical understanding, performance discipline, and competitive exposure to help participants grow with confidence and consistency. KAYF’s approach focuses on meaningful athlete development pathways rather than short-term performance outcomes alone.',
    importanceTitle: 'Why Structured Coaching Matters',
    importanceList: [
      'Transforms raw natural ability into consistent performance under pressure',
      'Secures foundational technical growth and prevents uneven development',
      'Establishes proper conditioning and recovery habits to prevent injury',
      'Builds sharp tactical understanding in match situations',
      'Maintains emotional resilience and prevents loss of confidence after setbacks'
    ],
    coverage: [
      {
        title: 'Technical Skill Development',
        items: ['Sport-specific techniques and performance fundamentals, taught and refined over time.']
      },
      {
        title: 'Physical Conditioning',
        items: ['Systematic physical preparation focused on Strength, Endurance, Agility, Mobility, Flexibility, and Speed.']
      },
      {
        title: 'Tactical & Match Intelligence',
        items: ['Decision making under pressure, spatial awareness, match reading, game flow, and strategic execution.']
      }
    ],
    forWhom: [
      {
        category: 'For Students',
        description: 'Sports training that encourages discipline, confidence, and long-term development alongside academic life.'
      },
      {
        category: 'For Aspiring Athletes',
        description: 'Professional coaching pathways designed to support performance improvement and sporting progression from school level upward.'
      },
      {
        category: 'For Parents',
        description: 'A development-focused environment where you can track your child’s growth, participation, and competition readiness.'
      },
      {
        category: 'For Competitive Players',
        description: 'Focused training support aimed at improving consistency, technical depth, and competition readiness.'
      }
    ],
    approach: [
      { title: 'Learn', description: 'Understand techniques, guidelines, and core training principles.' },
      { title: 'Practice', description: 'Develop consistency through disciplined, guided repetition.' },
      { title: 'Improve', description: 'Strengthen performance through guided correction and conditioning.' },
      { title: 'Compete', description: 'Apply learning within active and supportive competitive environments.' },
      { title: 'Progress', description: 'Advance toward higher levels of development, leagues, and selection.' }
    ],
    outcomes: [
      'Documented performance pathway from raw skill development to organised competition.',
      'Comprehensive athlete progress reports that parents and institutions can see and act on.',
      'Visible improvement in technical performance, physical conditioning, and tactical awareness.',
      'Confidence to participate at school, district, and higher levels of competition.',
      'Discipline and healthy training habits that protect long-term athletic health.',
      'A clear personal roadmap for continued sporting development beyond a single season.'
    ],
    ecosystemLink: 'Pro Coaching athletes naturally progress to KAYF Events & Competitions for organised competitive exposure, and may attend Seasonal Camps for focused skill acceleration.',
    ctaText: 'Unlock Greater Potential Through Professional Coaching.',
    ctaButton: 'Join Pro Coaching'
  },
  {
    id: 'events-competitions',
    num: '03',
    name: 'Events & Competitions',
    heroTagline: 'Meaningful Competition. Real Development. Lasting Confidence.',
    heroSub: 'Sporting events and competitions designed to encourage participation, exposure, and athlete progression at every level.',
    overview: 'KAY\'s Events & Competitions Program creates organised sporting opportunities that help athletes experience real participation, performance environments, and developmental exposure. The initiative supports athletes, schools, and institutions through carefully planned competitions, sporting activities, and participation pathways that build confidence, teamwork, discipline, and performance maturity. The objective is not merely organising events, but creating developmental sporting experiences that contribute to long-term athlete growth.',
    importanceTitle: 'Why Competitive Exposure Matters',
    importanceList: [
      'Teaches critical pressure lessons that regular practice alone cannot replicate',
      'Shapes character through the thrill of victory and lessons of defeat',
      'Builds focus, match discipline, and emotional bounds over multiple matches',
      'Provides a transparent framework for objective skill assessment',
      'Creates pathways for talent identification by scouts and institutional selectors'
    ],
    coverage: [
      {
        title: 'Talent & Readiness Assessment',
        items: [
          'Talent Identification: Recognizing emerging athletes through participation and structured observation.',
          'Skill Assessments: Evaluating technical, physical, and tactical capabilities against benchmarks.'
        ]
      },
      {
        title: 'Tournament Preparation',
        items: [
          'Team Formation: Organizing athletes into balanced representation groups.',
          'Tournament Prep: Preparing teams for school, cluster, zonal, district-level, and state matchups.',
          'Match Simulation: Simulating pressure conditions, strategic positioning, and official rule guidelines.'
        ]
      },
      {
        title: 'Exposure & Analytics',
        items: [
          'Performance Reviews: Post-competition video and data analysis to highlight development priorities.',
          'Exposure Opportunities: Pathways to local, state, and advanced national representation platforms.'
        ]
      }
    ],
    forWhom: [
      {
        category: 'For Students',
        description: 'Opportunities to participate, compete, and build confidence in friendly, highly organized, age-appropriate events.'
      },
      {
        category: 'For Schools',
        description: 'Sporting activities that improve institutional status, build active parent networks, and foster campus pride.'
      },
      {
        category: 'For Athletes',
        description: 'Competitive environments that support ranking growth, portfolio development, and visibility among scouts.'
      },
      {
        category: 'For Institutions',
        description: 'Collaborative inter-institutional fixtures that establish a network of sports growth, trust, and common exchange.'
      }
    ],
    approach: [
      { title: 'Identify', description: 'Recognise emerging sporting talent through observation, trial analysis, and tournament data.' },
      { title: 'Prepare', description: 'Support athletes through rigorous match simulated training, conditioning, and rules alignment.' },
      { title: 'Participate', description: 'Encourage disciplined, respectful, and ethical participation in organized tournaments.' },
      { title: 'Evaluate', description: 'Assess competitive performance with structured feedback and clear actionable key indicators.' },
      { title: 'Advance', description: 'Deploy athletes to higher-tier leagues, state networks, and scholarship opportunities.' }
    ],
    outcomes: [
      'Verified match results and performance assessments that construct a sports portfolio.',
      'Documented competitive history useful for scholastic selection, selection trials, and admission weightages.',
      'Sizable improvement in tactical decision-making, pressure tolerance, and collaborative play.',
      'Institutional sporting visibility that strengthens school standing and regional reputation.',
      'Concrete pathways for high-potential players to enter Pro Coaching and Specialized Training Camps.',
      'A real, year-round competition calendar that converts athletic capability into lived experiences.'
    ],
    ecosystemLink: 'Athletes identified through KAYF Events & Competitions may continue their development journey through Pro Coaching programs and Seasonal Camps.',
    ctaText: 'Every Athlete Deserves a Real Competitive Platform.',
    ctaButton: 'Explore Events & Competitions'
  },
  {
    id: 'coach-development',
    num: '04',
    name: 'Coach Development Programs',
    heroTagline: 'Empowering Coaches Who Shape Future Generations.',
    heroSub: 'Coach development initiatives designed to strengthen technical knowledge, mentoring ability, leadership, and modern coaching practices.',
    overview: 'KAYF believes meaningful sports development begins with capable, disciplined, and inspiring coaches. The Coach Development Program supports coaches, trainers, physical education instructors, and sports mentors through guided learning, technical workshops, practical exposure, and progressive coaching methodologies. The initiative improves coaching effectiveness while encouraging athlete-centred development approaches that positively impact students, athletes, institutions, and sporting communities.',
    importanceTitle: 'Why Coach Development Matters',
    importanceList: [
      'Strong, knowledgeable coaches form the bedrock of sustainable sports ecosystems',
      'Modern sports require coaches to understand sports psychology, safety, and athlete behavior',
      'Improves safety standards, scientific recovery, and training session efficiency',
      'Promotes ethical sports citizenship, respect, and character development',
      'Keeps physical education instructors updated with latest pedagogy and technology'
    ],
    coverage: [
      {
        title: 'Technical & Academic Frameworks',
        items: [
          'Technical Coaching Workshops: Sport-specific drills, strategic gameplay modules, and rule changes.',
          'Sports Science Orientation: Introduction to modern conditioning, safe recovery methods, and nutrition.'
        ]
      },
      {
        title: 'Certifications & Practical Training',
        items: [
          'Practical Training Sessions: Hands-on coaching simulations, live peer review, and match coordination.',
          'Coaching Certifications: Guided testing and credentials that mark national and international standard practices.'
        ]
      },
      {
        title: 'Pedagogical & Mental Guidance',
        items: [
          'Athlete Development Awareness: Understanding youth psychology, positive reinforcement, and behavioral traits.',
          'Mentorship & Learning Initiatives: Peer networks and counseling from senior regional experts.'
        ]
      }
    ],
    forWhom: [
      {
        category: 'For Coaches',
        description: 'Professional development credits and pathways that improve coach credibility, strategic skill, and income pathways.'
      },
      {
        category: 'For Physical Education Instructors',
        description: 'Guided curriculum assistance to bring daily PE periods in line with modern youth athletic development frameworks.'
      },
      {
        category: 'For Sports Mentors',
        description: 'Deeper understanding of character-building systems, leadership mentoring, and non-performance indicators.'
      },
      {
        category: 'For Institutions',
        description: 'Guarantees that school sports are led by certified, safety-trained, and behavior-validated physical trainers.'
      }
    ],
    approach: [
      { title: 'Learn', description: 'Understand advanced sports science, training design, and athlete protection protocols.' },
      { title: 'Apply', description: 'Deploy learned drills and pedagogical plans in live KAYF youth cohorts.' },
      { title: 'Observe', description: 'Assess athlete behavior, injury indicators, and general participation metrics.' },
      { title: 'Improve', description: 'Refine instructional styles through constructive review boards and self-evaluations.' },
      { title: 'Lead', description: 'Act as role models, directing school, clinic, and academy setups with discipline.' }
    ],
    outcomes: [
      'Recognised coaching credentials that strengthen professional standings and employability.',
      'Practical methodology improvements visible in student-athlete performance and engagement.',
      'Athlete-centred practices that produce measurable behavioral and wellness outcomes.',
      'Exposure to contemporary coaching frameworks beyond legacy rigid drill instruction.',
      'Substantial confidence to lead, mentor, and influence regional sports systems.',
      'A professional growth pathway with continuous support and resources through KAYF.'
    ],
    ecosystemLink: 'KAYF-trained coaches may contribute to In-School Training programs, Seasonal Camps, and broader youth development initiatives across the ecosystem.',
    ctaText: 'Build Coaching Excellence Through Guided Learning.',
    ctaButton: 'Join Coach Development Programs'
  },
  {
    id: 'seasonal-camps',
    num: '05',
    name: 'Seasonal Camps',
    heroTagline: 'Focused Training. Faster Growth. Lasting Confidence.',
    heroSub: 'Seasonal camps designed to accelerate learning, encourage participation, and create meaningful sports development experiences.',
    overview: 'KAYF Seasonal Camps are specialised short-term development initiatives for students, athletes, coaches, and sports enthusiasts seeking focused training in an immersive learning environment. The camps combine professional coaching, physical activity, skill enhancement, teamwork, conditioning, and development-focused engagement within a motivating and disciplined atmosphere. Camps are designed to encourage participation, confidence, learning, and sporting progression — while creating memorable and impactful experiences participants carry with them well beyond the camp itself.',
    importanceTitle: 'Why Seasonal Camps Matter',
    importanceList: [
      'Immersive training habitats stimulate rapid retention and motor skill adaptation',
      'The highly structured daily schedule fosters deep personal discipline and autonomy',
      'Minimizes external academic distractions, allowing intensive sports immersion',
      'Encourages diverse social mixing, team building, and long-standing regional friendships',
      'Propels physical fitness and stamina to new baselines in a compressed time-frame'
    ],
    coverage: [
      {
        title: 'Camp Modules & Focus Items',
        items: [
          'Athlete Development Camps: Intensive skill acquisition, technical refinement, and match setups.',
          'Intensive Skill Clinics: Focused blocks strictly for technical mechanics (e.g., racquet grips, dribbling stances).',
          'Fitness & Conditioning: Sports agility, speed drills, strength-building activities, and flexibility work.'
        ]
      },
      {
        title: 'Community & Character Enrichment',
        items: [
          'Team Building Activities: Multi-disciplinary matches, leadership games, and active group problem-solving.',
          'Coach Development Camps: Concurrent clinics for coaches to co-train and analyze field setups under mentors.',
          'Performance Evaluation: Initial and closing assessments that track fitness criteria and skill progression.'
        ]
      }
    ],
    forWhom: [
      {
        category: 'For Students',
        description: 'Exciting, highly active holiday experiences that break screen sedentary behaviors and teach lifelong sports values.'
      },
      {
        category: 'For Athletes',
        description: 'A dedicated, rigorous atmosphere to refine weak points, improve competitive edge, and test skills against regional peers.'
      },
      {
        category: 'For Coaches',
        description: 'A platform to earn practical clinical hours, manage varied cohorts, and observe senior tactical coaching guides.'
      },
      {
        category: 'For Institutions',
        description: 'Fills vacation structures with highly productive, safe, institutional sports projects that parent networks trust.'
      }
    ],
    approach: [
      { title: 'Engage', description: 'Onboard and involve every participant into active camp cohorts from day one.' },
      { title: 'Train', description: 'Deliver progressive, structured coaching modules that challenge but build core athlete confidence.' },
      { title: 'Challenge', description: 'Introduce structured matches, timed activities, and competitive drills that require focus.' },
      { title: 'Evaluate', description: 'Perform quantitative assessments on skills, agility, and sportsmanship milestones.' },
      { title: 'Develop', description: 'Draft of custom exit roadmap to guide the player’s sporting steps long after the camp ends.' }
    ],
    outcomes: [
      'Documented skill acquisition and motor coordination gains report card to take home.',
      'Substantial Baselines upgrade in localized fitness, sprint, agility, and overall body balance.',
      'Significant confidence gains born out of meeting challenge modules and active matches.',
      'Strong friendships and a network of shared sports interest across schools and communities.',
      'Refreshed motivation and absolute clarity on next athlete development steps.',
      'A certificate of participation verifying rigorous sports training hours under KAYF.'
    ],
    ecosystemLink: 'Participants in Seasonal Camps may continue their development journey through KAYF Pro Coaching programs and Events & Competitions initiatives.',
    ctaText: 'Experience Focused Sports Development Through Camps.',
    ctaButton: 'Explore Seasonal Camps'
  },
  {
    id: 'sports-arena-services',
    num: '06',
    name: 'Sports Arena Services',
    heroTagline: 'Supporting Sporting Environments That Encourage Growth.',
    heroSub: 'Sports infrastructure planning and coordination services designed to help institutions create safe, functional, and development-focused sporting environments.',
    overview: 'KAYF supports schools, institutions, academies, and organisations in strengthening their sports infrastructure through planning advisory, coordination assistance, and development-oriented implementation guidance. Our role is to help institutions create functional, engaging sports spaces that encourage participation, training, and long-term sporting engagement — working alongside specialist vendors and contractors who execute the physical work. The approach focuses on usability, safety, sound planning, and sustainable sports ecosystem support.',
    importanceTitle: 'Why Sports Infrastructure Matters',
    importanceList: [
      'Safe, professionally laid playing environments vastly reduce severe athlete injuries',
      'Accurate court dimensioning is vital to build correct spatial and strategic habits',
      'Durable and clean grounds invite higher, consistent student and community participation',
      'Transforms underutilized school space into highly functional assets',
      'Strengthens institutional reputation, attracting major regional partnerships and meets'
    ],
    coverage: [
      {
        title: 'Infrastructure Formulation',
        items: [
          'Infrastructure Planning Support: Drafting layout options based on space limits and student count.',
          'Court & Activity Area Guidance: Advisory on layout, directional alignment, safety zones, and drainage rules.'
        ]
      },
      {
        title: 'Material & Vendor Management',
        items: [
          'Turf & Surface Guidance: Advice on choosing materials (wooden, synthetic, mud, natural grass) for maximum safety.',
          'Sports Facility Coordination: Handholding schools through vendor sourcing, compliance matching, and build stages.'
        ]
      },
      {
        title: 'Sustenance & Inspections',
        items: [
          'Maintenance Planning Support: Designing systematic upkeep rosters that extend court and equipment life.',
          'Sports Environment Assistance: Auditing existing grounds for gear cracks, ground wear, and safety compliance.'
        ]
      }
    ],
    forWhom: [
      {
        category: 'For Schools',
        description: 'Advisory that prevents expensive errors in dimensional alignment, material selection, and surface safety.'
      },
      {
        category: 'For Educational Institutions',
        description: 'Strategic planning services to build sports complexes that align with regional sports authority mandates.'
      },
      {
        category: 'For Sports Academies & Clubs',
        description: 'Professional layout guidance to design elite-standard coaching spaces with optimized spectator and training splits.'
      },
      {
        category: 'For Community Organisations',
        description: 'Affordable, ruggedized park soccer, basketball, or multi-sport design templates that prioritize community inclusion.'
      }
    ],
    approach: [
      { title: 'Assess', description: 'Analyze spatial limits, budget brackets, preferred sports, and current infrastructure issues.' },
      { title: 'Plan', description: 'Create and submit detailed dimension templates, safety clearance charts, and material guidelines.' },
      { title: 'Coordinate', description: 'Act as the client liaison with specialist vendors, ensuring strict adherence to standards.' },
      { title: 'Support', description: 'Monitor structural build milestones, surface laying, and sports-rig safety inspections.' },
      { title: 'Strengthen', description: 'Establish daily maintenance regimes and safety checklists to assure arena longevity.' }
    ],
    outcomes: [
      'A professionally formulated sports arena plan tailored to space boundaries and budget.',
      'Minimized vendor administrative workload, enabling internal teams to stay focused on core teaching.',
      'Certified tournament-compliant court layouts ready for district or national qualifications.',
      'Sustained physical durability that preserves initial infrastructure investment.',
      'Highly visible improvement in school aesthetic standards and student recruitment value.',
      'Continuous access to advisory support as the institution expands its facilities.'
    ],
    ecosystemLink: 'Institutions strengthening their sports infrastructure through KAYF may further support participation through In-School Training programs, Camps, and broader youth development activities.',
    ctaText: 'Create Sporting Spaces That Encourage Participation and Growth.',
    ctaButton: 'Explore Arena Support Services'
  }
];

export const sportsData: SportDetail[] = [
  {
    id: 'athletics',
    num: '01',
    name: 'Athletics',
    heroTagline: 'Building Speed, Strength, Discipline, and Endurance.',
    heroSub: 'Athletics development programs designed to improve fitness, performance, confidence, and long-term sporting growth.',
    overview: 'Athletics forms the foundation of physical development and sporting excellence. KAYF’s Athletics Program focuses on improving speed, endurance, strength, agility, coordination, and discipline through guided track and field development activities. The program encourages students and athletes to build strong physical foundations while developing confidence, focus, resilience, and competitive spirit. Athletics also creates opportunities for participation across school, district, state, and advanced competitive platforms.',
    importanceTitle: 'Why Athletics Matters',
    importanceList: [
      'Athletics builds the physical engine that supports performance across nearly every other sport.',
      'It is one of the most measurable sporting disciplines, where progress can be tracked clearly through timing, distance, endurance, and performance records.',
      'Improves stamina, speed, aerobic capacity, and muscular-skeletal health.',
      'Builds high resilience, patience, mental grit, and self-discipline.'
    ],
    focusAreas: [
      { title: 'Running & Sprint Training', description: 'Improving speed, acceleration mechanics, running rhythm, and endurance thresholds.' },
      { title: 'Strength & Conditioning', description: 'Building physical strength, body stamina, skeletal mobility, and custom athletic fitness.' },
      { title: 'Agility & Coordination', description: 'Enhancing body control, weight balance, movement efficiency, and rapid reflexes.' },
      { title: 'Track & Field Activities', description: 'Structured participation and strategy across standard running and throwing disciplines.' },
      { title: 'Endurance Development', description: 'Cardio-vascular conditioning and lung stamina expansion over medium to long distances.' },
      { title: 'Competition Preparation', description: 'Aligning running plans with cluster, district, zonal, and state track and field events.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'A strong athletic foundation that improves fitness, discipline, confidence, and active participation.' },
      { category: 'For Aspiring Athletes', description: 'Athletics pathways focused on measurable performance growth and competition readiness.' },
      { category: 'For Schools', description: 'Athletics initiatives that strengthen campus sports culture, student participation, and inter-school representation.' },
      { category: 'For Parents', description: 'A disciplined sporting environment where physical progress and athletic improvement can be visibly tracked over time.' }
    ],
    approach: [
      'Train: Build strong physical foundations through progressive, scientifically guided physical activities.',
      'Improve: Strengthen speed, aerobic and anaerobic endurance, and body coordination incrementally.',
      'Participate: Encourage active involvement, sportsmanship manners, and strict training discipline.',
      'Compete: Refine mechanics and mindsets to enter timed trials and structured competitive grids.',
      'Progress: Align with long-term athletic goals, guiding athletes with proper college and league scouts.'
    ],
    outcomes: [
      'Documented timing and performance records that show measurable athletic progress.',
      'Eligibility pathways for district, zonal, and state athletics participation.',
      'Improved stamina, movement efficiency, and physical conditioning.',
      'A strong athletic foundation that benefits participation in multiple sports.',
      'Visible growth in confidence, discipline, and competitive readiness.',
      'Structured progression opportunities for long-term athlete development.'
    ],
    ecosystemLink: 'Athletes participating in Athletics programs may progress into specialised sprint and endurance-focused Seasonal Camps, Pro Coaching pathways, and organised competitive exposure through KAYF Events & Competitions.',
    whyThisSport: 'Athletics builds the foundational biological machine that supports performance across almost all team sports, combining measurable targets with strong self-discipline.',
    ctaText: 'Build Strong Foundations Through Athletics.',
    ctaButton: 'Enquire About Athletics Program'
  },
  {
    id: 'football',
    num: '02',
    name: 'Football',
    heroTagline: 'Building Teamwork, Discipline, Strategy, and Competitive Spirit.',
    heroSub: 'Football development programs designed to encourage participation, teamwork, skill growth, and long-term sporting progression.',
    overview: 'Football is one of the world’s most dynamic and widely followed sports, combining athletic ability, teamwork, strategy, discipline, and decision-making under pressure. KAYF’s Football Program creates guided development pathways for students and athletes through technical training, conditioning, match preparation, and organised competitive exposure. The program encourages players to build confidence, communication, leadership, tactical understanding, and sporting discipline while strengthening both individual and team performance.',
    importanceTitle: 'Why Football Matters',
    importanceList: [
      'Teaches deep collective responsibility in a way very few other sports can.',
      'Translates eleven distinct players working toward one outcome into values of accountability, communication, and trust under pressure.',
      'Fosters high motivation and consistent physical exercise due to its worldwide appeal.',
      'Improves cardiovascular strength, foot dexterity, team coordination, and match intellect.'
    ],
    focusAreas: [
      { title: 'Technical Skill Development', description: 'Improving passing accuracy, close ball control, ball protection, shooting, and technical footwork.' },
      { title: 'Tactical Understanding', description: 'Understanding spatial positions, offensive/defensive transitions, team coordination, and match strategies.' },
      { title: 'Physical Conditioning', description: 'Building leg strength, dynamic endurance, short-burst speed, agility steps, and stamina.' },
      { title: 'Team Coordination', description: 'Enforcing cooperative gameplay, clear field communication, defensive lines, and positioning.' },
      { title: 'Match Preparation', description: 'Tactical drill simulations, scrimmages, and penalty or corner organization.' },
      { title: 'Competitive Exposure', description: 'Representing KAYF in local, district, zonal, and association leagues or tournaments.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'A fantastic, energetic sport that builds strong cooperative values, endurance, and focus.' },
      { category: 'For Aspiring Football Players', description: 'Guided technical classes and game analyses designed to match state and national academy entry targets.' },
      { category: 'For Schools', description: 'Builds a distinctive school football team, boosting institutional prestige and community engagement.' },
      { category: 'For Parents', description: 'Provides a safe, expert-coached medium for active physical development, teamwork skill growth, and disciplined fitness.' }
    ],
    approach: [
      'Learn: Teach basic technical layouts, ball touches, and official game rules.',
      'Train: Practice coordinated technical drills, stamina tests, and positional play.',
      'Coordinate: Align players into cohesive tactical rosters, holding practice scrimmage matches.',
      'Compete: Introduce squad to structured tournaments, focusing on team spirit and fair play.',
      'Progress: Detail elite individual pathways for outstanding squad talent into association trials.'
    ],
    outcomes: [
      'Match participation opportunities in organised school and zonal football competitions.',
      'Position-specific skill development with documented coaching feedback.',
      'Improved teamwork, tactical awareness, and decision-making under pressure.',
      'Enhanced endurance, fitness, and match discipline.',
      'Eligibility pathways into district and advanced football trials.',
      'A structured progression route for long-term football development.'
    ],
    ecosystemLink: 'Football participants may progress into organised KAYF football leagues, advanced Pro Coaching pathways, and specialised Seasonal Camps focused on match conditioning.',
    whyThisSport: 'Football acts as an incredibly powerful platform for teaching collective responsibility, strategic depth, and persistent work ethics.',
    ctaText: 'Develop Skill, Teamwork, and Competitive Confidence Through Football.',
    ctaButton: 'Enquire About Football Program'
  },
  {
    id: 'basketball',
    num: '03',
    name: 'Basketball',
    heroTagline: 'Developing Speed, Coordination, Confidence, and Team Performance.',
    heroSub: 'Basketball programs designed to encourage active participation, technical development, teamwork, and sporting excellence.',
    overview: 'Basketball is a fast-paced sport that combines athletic movement, quick decision-making, teamwork, coordination, and strategic thinking. KAYF’s Basketball Program provides guided training opportunities that help students and athletes improve technical ability, fitness, confidence, and competitive readiness. The program focuses on creating disciplined and confident players through systematic coaching, game understanding, and active sporting participation.',
    importanceTitle: 'Why Basketball Matters',
    importanceList: [
      'Compresses decision-making cycles under highly pressured spatial and time limits.',
      'Demands split-second teamwork, fast hands-eye synchronization, and high communication skill.',
      'Highly adaptable to limited campus spaces and indoor setups, ensuring year-round, safe play.',
      'Generates outstanding agility, leg spring, muscular reflexes, and explosive stamina.'
    ],
    focusAreas: [
      { title: 'Technical Skills Training', description: 'Improving hand dribbling, jump shooting, tactical passing, active defense blocks, and ball handling.' },
      { title: 'Tactical Awareness', description: 'Developing core game layout knowledge, pick-and-roll plays, zone defenses, and spacing rules.' },
      { title: 'Agility & Speed Development', description: 'Improving quick court pivots, explosive vertical jumps, high speed reflexes, and leg coordination.' },
      { title: 'Team Play & Communication', description: 'Creating vocal, supportive field layouts where guard-to-center passes flow dynamically.' },
      { title: 'Match Preparation', description: 'Active court scrimmages, half-court execution guidelines, and free throw stability.' },
      { title: 'Competitive Participation', description: 'Sponsoring friendly school matchups, regional cluster meets, and association credentials.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'An engaging, high-energy sport that rapidly builds motor reflexes, agility, and dynamic confidence.' },
      { category: 'For Aspiring Basketball Players', description: 'Comprehensive skills progression to excel in school, club, and administrative selection environments.' },
      { category: 'For Schools', description: 'Turnkey training and tournament setups that construct an active school basketball culture.' },
      { category: 'For Parents', description: 'An excellent environment to track key motor developments, spatial coordination, and positive competitive mindsets.' }
    ],
    approach: [
      'Learn: Introduce ball manipulation, stance, basic court rules, and shooting mechanics.',
      'Practice: Develop consistency in layout drills, rebound timing, and dribble patterns.',
      'Coordinate: Integrate players into tactical gameplays, working on court communications.',
      'Participate: Sponsor friendly court play, zonal fixtures, and association tourneys.',
      'Progress: Steer top athletes to sports authority selection trials and specialized camps.'
    ],
    outcomes: [
      'Documented court minutes in organised inter-school basketball competitions.',
      'Skill-specific progress reports tracking shooting accuracy, defensive metrics, and team contribution.',
      'Position-aware development — guard, forward, or centre — with coach-led role specialisation.',
      'Eligibility pathways into district basketball trials and state-level selection camps.',
      'Improved decision speed and on-court confidence in fast-paced competitive environments.',
      'Stronger physical conditioning, agility, and sporting discipline.'
    ],
    ecosystemLink: 'Basketball participants may continue their growth through advanced Pro Coaching pathways, inter-school basketball competitions, and basketball-focused Seasonal Camps under KAYF.',
    whyThisSport: 'Basketball matches physical burst with spatial quickness, teaching athletes how to navigate pressure choices together.',
    ctaText: 'Build Confidence, Coordination, and Team Spirit Through Basketball.',
    ctaButton: 'Enquire About Basketball Program'
  },
  {
    id: 'volleyball',
    num: '04',
    name: 'Volleyball',
    heroTagline: 'Developing Coordination, Communication, and Team Excellence.',
    heroSub: 'Volleyball programs designed to encourage active participation, teamwork, athletic growth, and competitive confidence.',
    overview: 'Volleyball is a dynamic team sport that encourages coordination, communication, agility, teamwork, and strategic thinking. KAYF’s Volleyball Program provides guided training opportunities that help students and athletes improve technical skills, physical conditioning, match understanding, and collaborative performance. The program promotes discipline, confidence, and active sporting participation within a supportive and development-focused environment.',
    importanceTitle: 'Why Volleyball Matters',
    importanceList: [
      'Requires constant verbal and tactile interaction among teammate rows.',
      'Develops instant ball placement judgment, high-limb agility, and reaction reflexes.',
      'Provides a safe, non-contact team sport setup with minimal chance of severe training collisions.',
      'Builds excellent team synergy, vertical leap capabilities, and lateral court speed.'
    ],
    focusAreas: [
      { title: 'Technical Skills Training', description: 'Perfecting ball serve, pass digs, overhead sets, attack spikes, and net blocks.' },
      { title: 'Team Coordination', description: 'Advising court layout position, rotation structures, set setups, and defense coverage.' },
      { title: 'Physical Conditioning', description: 'Developing dynamic foot leaps, shoulder flexibility, wrist mechanics, and swift foot movements.' },
      { title: 'Tactical Understanding', description: 'Reading match flow, opponent gaps, spike angles, block lines, and serve tactics.' },
      { title: 'Match Preparation', description: 'Six-to-six scrimmage practices, court position habits, and transition defense layouts.' },
      { title: 'Competitive Participation', description: 'Entering regional school networks, district divisions, and corporate cups.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'An amazing, friendly sport building exceptional hand coordination, stamina, and team joy.' },
      { category: 'For Aspiring Volleyball Players', description: 'Technical development focused on position specialization (setter, liberos, attackers) for state level play.' },
      { category: 'For Schools', description: 'Establishes cost-effective, high-participation sports environments on outdoor and indoor fields.' },
      { category: 'For Parents', description: 'Supports physical wellness, agility, social synchronization, and disciplined play in a highly protective framework.' }
    ],
    approach: [
      'Learn: Review court spacing, stance, ball touch rules, pass mechanics, and hand-sets.',
      'Practice: Work on service consistency, setter coordination, and repetitive digging drills.',
      'Coordinate: Integrate rotation patterns, setter-spiker combinations, and cover rules.',
      'Participate: Enter cohorts into friendly matchups, cluster events, and structural setups.',
      'Progress: Deploy elite players into district rosters, specialized camps, and sports schools.'
    ],
    outcomes: [
      'Match minutes in inter-school and district volleyball competitions.',
      'Position-specific skill development — setter, attacker, libero — with coach-led role specialisation.',
      'Documented team-coordination metrics and communication-skill growth.',
      'Eligibility pathways into district volleyball trials and state selection.',
      'Improved agility, reflexes, and tactical awareness on the court.',
      'Stronger discipline, collaboration, and sporting responsibility.'
    ],
    ecosystemLink: 'Volleyball participants may continue their development through KAYF inter-school competitions, Pro Coaching pathways, and volleyball-focused Seasonal Camps.',
    whyThisSport: 'Volleyball isolates contact to ball manipulation over a net, emphasizing ultimate coordination, reflex steps, and verbal camaraderie.',
    ctaText: 'Build Teamwork, Coordination, and Sporting Confidence Through Volleyball.',
    ctaButton: 'Enquire About Volleyball Program'
  },
  {
    id: 'tennis',
    num: '05',
    name: 'Tennis',
    heroTagline: 'Developing Precision, Focus, Agility, and Competitive Confidence.',
    heroSub: 'Tennis programs designed to support technical development, discipline, fitness, and long-term sporting growth.',
    overview: 'Tennis is a sport that combines technical skill, mental focus, agility, discipline, and strategic thinking. KAYF’s Tennis Program provides guided development opportunities through coaching, fitness training, technical improvement, and organised participation pathways. The program encourages participants to build confidence, concentration, sporting discipline, and consistent performance through progressive learning and active engagement. Tennis activities may be conducted through school facilities and partner training venues depending on infrastructure availability.',
    importanceTitle: 'Why Tennis Matters',
    importanceList: [
      'Builds extraordinary self-reliance, emotional maturity, and personal responsibility as an individual sport.',
      'Sharpens visual hand-eye tracking, foot sprint recovery, and physical endurance baselines.',
      'Integrates tactical shot strategy (spin, depth, angle) with instantaneous reflex choices.',
      'Establishes a premium, lifelong sport that yields massive cardiovascular and coordination dividends.'
    ],
    focusAreas: [
      { title: 'Technical Skill Development', description: 'Perfecting forehand, backhand, serve mechanics, net volleys, foot slide, and slice spins.' },
      { title: 'Fitness & Agility Training', description: 'Strengthening short-burst sprint acceleration, lateral pivots, balance, and arm stamina.' },
      { title: 'Tactical Understanding', description: 'Deconstruct opponent weaknesses, select strategic depths, manage game pacing, and apply angles.' },
      { title: 'Mental Preparedness', description: 'Encouraging focus, self-coaching under setback pressure, composure, and concentration.' },
      { title: 'Match Preparation', description: 'Singles and doubles practice match play, baseline rallies, and serve recovery drills.' },
      { title: 'Competitive Participation', description: 'Guiding entry to school meets, local tennis association grids, and state tournaments.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'A highly engaging sport fostering immense visual tracking, personal confidence, and agility.' },
      { category: 'For Aspiring Tennis Players', description: 'Rigorous strokes correction and physical build to pass junior academy qualifying trials.' },
      { category: 'For Schools', description: 'Showcases specialized sport provision, adding elite athletics tracks onto campus facilities.' },
      { category: 'For Parents', description: 'Guarantees child experiences structured individual milestones, physical grit, and sharp visual metrics.' }
    ],
    approach: [
      'Learn: Study racket grip variations, basic court lines, ball bounce, and groundstrokes.',
      'Practice: Conduct repetitive swing training, ball machine feeds, and court movement drills.',
      'Improve: Correct swing angles, spin controls, foot recovery slide, and court tactics.',
      'Participate: Play standard set schedules, local internal ladders, and open clinics.',
      'Progress: Prepare athletes to secure association rankings, advanced setups, and sports camps.'
    ],
    outcomes: [
      'Documented match performance with shot-accuracy and rally-length tracking.',
      'Tournament participation in school, district, and state-level tennis circuits.',
      'Personalised stroke and footwork progress reports across the training cycle.',
      'A lifetime tennis foundation — ratings and skill levels you can carry into adult play.',
      'Improved concentration, emotional discipline, and match confidence.',
      'Enhanced agility, coordination, and athletic performance.'
    ],
    ecosystemLink: 'Tennis participants may continue their development through advanced KAYF coaching pathways, organised tournaments, and specialised Seasonal Camps focused on technical improvement.',
    whyThisSport: 'Tennis matches physical endurance with mental geometry, testing an athlete’s individual poise and tactical precision with every rally.',
    ctaText: 'Build Focus, Skill, and Competitive Confidence Through Tennis.',
    ctaButton: 'Enquire About Tennis Program'
  },
  {
    id: 'pickleball',
    num: '06',
    name: 'Pickleball',
    heroTagline: 'Fast. Fun. Inclusive. Future-Forward.',
    heroSub: 'KAYF embraces Pickleball as a rapidly growing global sport that offers accessibility, inclusivity, and dynamic engagement for young participants. Combining elements of tennis, badminton, and table tennis, Pickleball is one of the fastest-growing sports worldwide — and KAYF is committed to introducing it as part of structured youth sports development.',
    overview: 'KAYF approaches Pickleball as an entry-friendly, skill-progressive sport ideal for building hand-eye coordination, agility, strategic thinking, and confidence in a non-intimidating sporting environment. The focus is on accessible participation, structured skill development, and competitive readiness. Pickleball sessions may be conducted through partner sports facilities, school courts, or dedicated Pickleball venues. The sport requires standard court infrastructure (tennis or badminton court dimensions are commonly adaptable) and KAYF coordinates with venues for organised sessions.',
    importanceTitle: 'Why Pickleball at KAYF',
    importanceList: [
      'Pickleball reflects KAYF’s commitment to evolving sports culture and inclusive participation.',
      'One of the fastest-growing sports globally and in India, offering dynamic youth engagement.',
      'Excellent for rapid reflexes, hand-eye coordination, and tactical dinking.',
      'Highly inclusive, letting students of varying physical levels play together without frustration.'
    ],
    focusAreas: [
      { title: 'Hand-Eye Coordination & Reflexes', description: 'Building fast visual tracking and responsive racket maneuvers at the non-volley zone line.' },
      { title: 'Court Positioning & Movement', description: 'Understanding paddle placement, kitchen boundary rules, and lateral quick-steps.' },
      { title: 'Stroke Fundamentals', description: 'Fostering soft dinks, hard baseline drives, mid-court volleys, and strategic underhand serves.' },
      { title: 'Strategic Play & Shot Selection', description: 'Reading paddle angles, target spacing, drop shots, lob setups, and third-shot-drops.' },
      { title: 'Doubles & Singles Awareness', description: 'Row pacing, communications in doubles play, court coverage, and server rotations.' },
      { title: 'Sportsmanship & Game Etiquette', description: 'Upholding code of conduct, positive calls, self-validation, and respectful court behavior.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'An extremely fun, responsive racquet sport with a rapid success curve and direct athletic rewards.' },
      { category: 'For Athletes', description: 'Uniquely builds paddle-manipulation skills, swift visual reflexes, and spatial focus that transfers to other sports.' },
      { category: 'For Coaches', description: 'Familiarizes trainers with modern globally emerging sports metrics, expanding professional class offerings.' },
      { category: 'For Institutions', description: 'Leverages existing badminton or tennis court lines to deploy a modern, highly popular youth sports module.' }
    ],
    approach: [
      'Learn: Teach standard paddle grips, underhand serves, double-bounce guidelines, and the "Kitchen" rules.',
      'Practice: Repeated soft dinking mechanics, fast hand-volleys, and quick coordination play.',
      'Improve: Tactical shot choice, third-shot drops, spatial positioning, and lob strategies.',
      'Participate: Host dynamic campus leagues, open paddles clinics, and doubles tournaments.',
      'Progress: Drive top players into national structures, specialized clinics, and advanced camps.'
    ],
    outcomes: [
      'Measurable boost in high-speed visual reflexes and spatial hands dexterity.',
      'Full technical grasp of paddle control, dinks, drives, lobs, and spin serves.',
      'Positive confidence built through quick-success rally execution.',
      'Rapport and collaboration through highly active doubles coordination.',
      'Active physical workout that improves leg agility, stamina, and posture.',
      'Eligibility for growing regional and upcoming state Pickleball junior tournaments.'
    ],
    ecosystemLink: 'Participants in Pickleball may continue their development journey through KAYF Pro Coaching programs, school meets, and specialized Seasonal Camps.',
    whyThisSport: 'Pickleball makes racquet play highly accessible while maintaining exceptional reflex demands, strategic depth, and positive active gameplay.',
    facilityNote: 'Adaptable to existing court grounds such as tennis or badminton courts, requiring affordable net rigs and lightweight composite paddles.',
    ctaText: 'Step onto the court and experience the world’s fastest-growing sport.',
    ctaButton: 'Enquire About Pickleball Program'
  },
  {
    id: 'kabaddi',
    num: '07',
    name: 'Kabaddi',
    heroTagline: 'Building Strength, Strategy, Courage, and Team Discipline.',
    heroSub: 'Kabaddi programs designed to encourage physical fitness, tactical awareness, confidence, and competitive participation.',
    overview: 'Kabaddi is a traditional sport that combines strength, speed, strategy, reflexes, teamwork, and mental discipline. KAYF’s Kabaddi Program focuses on athlete growth through technical training, conditioning, tactical learning, and organised participation opportunities. The program encourages students and athletes to build confidence, resilience, physical fitness, and sporting discipline while preserving and promoting one of India’s most culturally rooted sports.',
    importanceTitle: 'Why Kabaddi Matters',
    importanceList: [
      'Encourages intense teamwork, holding single breath focus, and massive tactile coordination.',
      'Fosters high muscular speed, lung volume capacities, reflexes, and body agility.',
      'Grounded deeply in regional heritage, providing highly accessible sport access across rural fields.',
      'Requires zero expensive equipment setups, making it the most inclusive team sport.'
    ],
    focusAreas: [
      { title: 'Technical Skill Training', description: 'Improving raider foot-touches, hand touches, defensive ankle-holds, waist-grips, and exits.' },
      { title: 'Strength & Conditioning', description: 'Fostering immense body power, core resilience, physical endurance, and safe falling habits.' },
      { title: 'Tactical Awareness', description: 'Evaluating rider spacing, defenders positioning, coordination lines, and match strategies.' },
      { title: 'Reflex & Agility Development', description: 'Swift side maneuvers, fast visual reflexes, balance control, and sudden escapes.' },
      { title: 'Match Preparation', description: 'Simulated 7-player court lineups, timing parameters, and raiding strategies under Net-rules.' },
      { title: 'Competitive Exposure', description: 'Placing students into school clusters, district cups, and regional athletic networks.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'An exceptionally active, heritage-rooted team sport, building immense courage and core power.' },
      { category: 'For Aspiring Kabaddi Players', description: 'Structured tactical guidance aligned with Pro Kabaddi League development and state standards.' },
      { category: 'For Schools', description: 'Builds a deeply rooted, highly competitive team that connects with regional sports heritage.' },
      { category: 'For Parents', description: 'Guarantees the child develops superb strength, mental grit, community bonding, and respect for culture.' }
    ],
    approach: [
      'Learn: Teach court divisions, Cant mechanics, basic raid touches, and active catch tactics.',
      'Practice: Implement strength drills, speed evasion sprints, and ankle capture maneuvers.',
      'Coordinate: Synchronize defender rows, coordination lines, and rider timings.',
      'Participate: Host local cluster fixtures, rural-heritage cups, and institutional setups.',
      'Progress: Prepare athletes to excel in association selections, camps, and corporate teams.'
    ],
    outcomes: [
      'Match readiness for inter-school, district, and state-level Kabaddi competitions.',
      'Improved strength, reflexes, stamina, and tactical execution.',
      'Greater confidence and resilience during competitive situations.',
      'Recognition opportunities within regional Kabaddi participation circuits.',
      'Stronger teamwork, discipline, and physical conditioning.',
      'Structured progression pathways toward advanced Kabaddi participation.'
    ],
    ecosystemLink: 'Kabaddi participants may further strengthen their development through specialised conditioning camps, Pro Coaching pathways, and organised KAYF competitive events.',
    whyThisSport: 'Kabaddi merges raw physical power with precise tactical teamwork, demanding maximum respiratory poise and courage under contact.',
    ctaText: 'Build Strength, Confidence, and Competitive Spirit Through Kabaddi.',
    ctaButton: 'Enquire About Kabaddi Program'
  },
  {
    id: 'silambam',
    num: '08',
    name: 'Silambam',
    heroTagline: 'Tradition. Discipline. Movement. Strength.',
    heroSub: 'KAYF promotes Silambam as part of its commitment to cultural rootedness and youth development through traditional sports. Silambam offers young participants a structured pathway to physical fitness, coordination, discipline, and a meaningful connection to Tamil heritage.',
    overview: 'KAYF approaches Silambam as a developmental sport that combines physical conditioning, focus, balance, and cultural learning. The focus is on structured participation, age-appropriate progression, and safe institutional environments — not aggressive combat training. Silambam represents the convergence of physical development, cultural heritage, and disciplined growth. At KAYF, it is positioned alongside contemporary sports as part of a comprehensive multi-sport ecosystem — honouring traditional Tamil sporting heritage while contributing meaningfully to modern youth development.',
    importanceTitle: 'Why Silambam at KAYF',
    importanceList: [
      'Deeply rooted in traditional sporting heritage, showcasing Modern Tamil-rooted institutional design.',
      'Silambam builds superb bi-lateral motor coordination, reflexes, balance, and core power.',
      'Integrates strict breathing discipline, mental concentration, and movement posture.',
      'Provides a culturally grounding athletic track that connects youth to heritage.'
    ],
    focusAreas: [
      { title: 'Body Coordination & Balance', description: 'Developing stable stances, symmetrical weight shifts, and bi-lateral foot maneuvers.' },
      { title: 'Footwork, Agility, & Reflexes', description: 'Practicing traditional linear, diagonal, and circular movement patterns dynamically.' },
      { title: 'Staff Handling Fundamentals', description: 'Perfecting single-stick spin mechanics, forward/reverse circles, and grip transitions.' },
      { title: 'Posture, Focus, & Breathing', description: 'Integrating rhythmic breath control with stick speed and steady mental focus under motion.' },
      { title: 'Strength Building & Endurance', description: 'Fostering core power, forearm/shoulder stamina, elastic muscle health, and body balance.' },
      { title: 'Cultural Heritage Vocabulary', description: 'Honoring traditional salutes, naming forms, and movement ethics of Silambam.' }
    ],
    forWhom: [
      { category: 'For Students', description: 'An amazing, culturally grounding physical art that improves full-body balance, focus, and agility.' },
      { category: 'For Athletes', description: 'Develops exceptional bi-lateral coordination, custom reflexes, wrist power, and dynamic core strength.' },
      { category: 'For Schools', description: 'Honors local traditions, presenting Silambam as a safe, highly disciplined institutional athletic track.' },
      { category: 'For Parents', description: 'Establishes a safe training path that fosters cultural pride, muscle health, and mental composure.' }
    ],
    approach: [
      'Learn: Study traditional salutes, standard stick sizing, core stance posture, and basic spin circles.',
      'Practice: Drill rhythmic footprints, stick rotation routines, and symmetrical wrist pivots.',
      'Build: Refine intermediate spin structures, posture forms, and speed controls.',
      'Participate: Exhibit skills in civic gatherings, school sports arrays, and friendly meets.',
      'Progress: Advance dedicated practitioners to state associations, technical certifications, and camps.'
    ],
    outcomes: [
      'Unmatched bi-lateral motor coordination, balance, and wrist grip strength.',
      'Thorough expertise in core Silambam staff handling, foot patterns, and posturing routines.',
      'Deeper connection to regional Tamil heritage and structured athletic values.',
      'Sharpened visual-spatial focus, posture composure, and mental agility.',
      'Strong physical base of core power, shoulder flexibility, and cardiovascular fitness.',
      'Qualifying pathways for school representational boards and state Silambam demonstrations.'
    ],
    ecosystemLink: 'Silambam participants may continue their development journey through KAYF camps, performance demonstrations, and associated sport networks.',
    whyThisSport: 'Silambam fuses heritage with athletic craftsmanship, transforming stick manipulation into an art of utmost balance, focus, and cultural stamina.',
    facilityNote: 'Conducted in safe, structured environments—typically school grounds, indoor halls, or partner training venues—under qualified instructors with strict adherence to safety protocols and protective logs.',
    ctaText: 'Build strength, balance, and cultural confidence through Silambam.',
    ctaButton: 'Enquire About Silambam Program'
  }
];
