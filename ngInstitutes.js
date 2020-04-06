const institutions = [
  "AAU Ambrose Ali University, Ekpoma",
  "ABU Ahmadu Bello University, Zaria",
  "ACU Ajayi Crowther University, Oyo",
  "ALV Alvan Ikoku College Of Education, Owerri",
  "AMEC college",
  "Abdul Gusau Polytechnic",
  "Abia State University in Uturu (State owned)",
  "Abia State polytechnic",
  "Abraham Adesanya Polytechnic",
  "Abubakar Tafawa Balewa University",
  "Achievers University",
  "Adamawa State University, Mubi",
  "Adamawa State polytechnic, Yola",
  "Adamu Augie College of Education, Argungu",
  "Adekunle Ajasin University",
  "Adeleke University, Ede",
  "Adeniran Ogunsanya College Of Education",
  "Adeyemi College of Education, Ondo.",
  "Administrative Staff College of Nigeria (ASCON) Badagry",
  "Aeroland Aviation School",
  "Afe Babalola University",
  "African Institute Of Science And Technology",
  "African Maritime Academy",
  "African University of Science and Technology",
  "Air Force Institute Of Technology",
  "Akanu Ibiam Federal Polytechnic, Unwana",
  "Akperan Orshi college of Agriculture Yandev",
  "Akwa Ibom State College of Education, Afaha Nsit",
  "Akwa Ibom State Polytechnic",
  "Akwa Ibom State University [Oruk Anam LGA And Mkpat Enin LGA]",
  "Allover Central Polytechnic",
  "Ameer Shehu Idris College of Advanced Studies, Zaria",
  "Aminu Kano College of Islamic And Legal Studies",
  "Anambra State University, Anambra",
  "Apex Polytechnic",
  "Aptech",
  "Association of National Accountants of Nigeria (ANAN)",
  "BAB Babcock University, Ilisan-Remo",
  "BAY Bayero University, Kano",
  "BEN University Of Benin, Benin",
  "BIN Gham University, New Karu",
  "BIU Benson Idahosa University, Benin City",
  "Babcock University",
  "Baptist School of Nursing",
  "Bayelsa State College of Health Technology",
  "Bells Univ. Of Tech. Badagry, Badagry",
  "Bells University of Technology",
  "Bendel State University, Ekpoma",
  "Benin Technical College, Benin City",
  "Benue State Polytechnic, Ugbokolo",
  "Benue State University, Makurdi",
  "Best Legacy College of Education, Ogbomoso",
  "Bingham University, Karu",
  "Bouyeat Computer Training School",
  "Bowen University, Iwo",
  "British Career Training College",
  "Buka Abba Ibrahim University, Damaturu",
  "CEM College Of Education, Minna",
  "CRA Crawford University, Igbesa",
  "Caleb University, Lagos",
  "Caritas University, Amorji-Nike",
  "Certified Institute of Shipping of Nigeria",
  "Chartered Institute of Administration",
  "Chartered Institute of Marketing of Nigeria",
  "Chartered Institute of Purchasing and Supply Management",
  "Christwealth University ifewara",
  "Claretian Institute of Philosophy, Maryland Nekede",
  "College Of Aviation And Management Studies",
  "College Of Education, Port-Harcourt",
  "College for Legal and General Studies, Minna",
  "College of Administrative and Business Studies, Bida",
  "College of Administrative and Business Studies, Kumo",
  "College of Administrative and Business Studies, Potiskum",
  "College of Agriculture, Lafia",
  "College of Arabic and Islamic Studies(cais)Rikkos",
  "College of Art, Science and Remedial Studies",
  "College of Arts & Sciences, Nnung Ukim",
  "College of Arts and Islamic Legal Studies",
  "College of Arts and Science, Ile Ife",
  "College of Arts, Science and Technology, Kurgwi",
  "College of Business and Legal Studies",
  "College of Education - Azare",
  "College of Education Benin",
  "College of Education Kastina Ala.",
  "College of Education Oju",
  "College of Education Waka-Biu",
  "College of Education, Agbor",
  "College of Education, Akwanga",
  "College of Education, Gashua",
  "College of Education, Jos",
  "College of Education, Warri",
  "College of Education,Ikere-Ekiti",
  "College of Health Science and Technology, Amaigbo, Nwangele",
  "College of Health Sciences",
  "College of Health Sciences Aba",
  "College of Health Technology, Iboko, Okpoma, Yala",
  "College of Health Technology, Zawan",
  "College of Immaculate Conception",
  "College of Islamic Science, Gusau",
  "College of Nursing, Ilorin",
  "College of Physical Education, Mosogar",
  "Command Day Secondary School, Ojo",
  "Computer Training Institute",
  "Conarina School of Maritime & Transport Technology, Oria-Abraka",
  "Covenant Polytechnic, Aba",
  "Crescent University, Abeokuta",
  "Cross River State College of Education, akamkpa",
  "Cross River State University of Technology, Calabar",
  "Crown Polytechnic Ado Ekiti",
  "D S Adegbenro Ict Polytechnic, Itoro, Ewekoro",
  "Dalewares Institute of Technology",
  "Delta State Polytechnic, Ogwashi-Uku",
  "Delta State Polytechnic, Otefe-Oghara",
  "Delta State Polytechnic, Ozoro",
  "Delta State School of Marine Technology, Burutu",
  "Delta State University (Abraka Campus, Oleh Campus, Asaba Campus)",
  "Dialogue Computer Institute",
  "Divisional Teacher's Training College, Oye-Ekiti",
  "ECWA School of Nursing (ECWASON)",
  "ECWA Theological Seminary Kagoro",
  "Ebonyi State College of Education Ikwo (EBSCOEI)",
  "Ebonyi State University, Abakaliki (EBSU)",
  "Edo State Institute of Technology and Management Usen",
  "Eha-AmufuCaritas University",
  "Eku Edwin Clark University",
  "Elizade University",
  "Enugu State College of Education Technical, Enugu",
  "Enugu State University of Science & Technology (ESUT)",
  "Excel College",
  "Ezekiel Private College",
  "Ezzamgbo and Federal College of Agriculture, Ishiagu.",
  "FEDPOLYNAS Federal Polytechnic Nasarawa",
  "FGGC Bauchi",
  "FUO Fountain University, Osogbo",
  "FUTO Fed University Of Technology, Owerri",
  "Fantsuam Foundation, Kafanchan",
  "Federal College Of Animal Production and Health",
  "Federal College Of Education, Zaria",
  "Federal College Of Forestry Mechanization",
  "Federal College Of Orthopedic Technology, Igbobi",
  "Federal College of Agriculture, Moor Plantation, Ibadan",
  "Federal College of Chemical and Leather Technology",
  "Federal College of Education",
  "Federal College of Education",
  "Federal College of Education",
  "Federal College of Education (Tech) Gombe",
  "Federal College of Education (Technical), Akoka",
  "Federal College of Education (Technical), Bichi",
  "Federal College of Education (Technical), Omoku",
  "Federal College of Education Abeokuta",
  "Federal College of Education Agasha",
  "Federal College of Education Katsina",
  "Federal College of Education Technical, Asaba",
  "Federal College of Education, Kontagora",
  "Federal College of Education, Okene",
  "Federal College of Education, Pankshin",
  "Federal College of Fisheries and Marine Technology",
  "Federal College of Forestry",
  "Federal College of Wildlife Management, New Bussa",
  "Federal Cooperative College",
  "Federal Cooperative College, Oji River (FCCO)",
  "Federal Polytechnic Auchi",
  "Federal Polytechnic Bida",
  "Federal Polytechnic Damaturu",
  "Federal Polytechnic Ede",
  "Federal Polytechnic Ilaro",
  "Federal Polytechnic Kaura Namoda",
  "Federal Polytechnic Nekede Owerri",
  "Federal Polytechnic Offa",
  "Federal Polytechnic, Ado-Ekiti",
  "Federal Polytechnic, Bauchi",
  "Federal Polytechnic, Ekowe",
  "Federal Polytechnic, Oko",
  "Federal School of Arts and Sciences, Victoria Island",
  "Federal School of Dental Technology & Therapy",
  "Federal School of Occupational Therapy",
  "Federal School of Science",
  "Federal School of Statistics",
  "Federal Science and Technical College",
  "Federal Science and Technical College",
  "Federal Science and Technical College",
  "Federal Training Centre",
  "Federal Training Centre, Ikoyi",
  "Federal Training Centre, Maiduguri",
  "Federal University Dutsin-Ma",
  "Federal University Gusau, Zamfara State",
  "Federal University Kashere",
  "Federal University Ndufu Alike Ikwo (FUNAI)",
  "Federal University Of Lokoja",
  "Federal University Oye Ekiti",
  "Federal University of Agriculture, Makurdi",
  "Federal University of Maiduguri",
  "Federal University of Petroleum Resources, Effurun",
  "Federal University of Technology",
  "Federal University of Technology, Akure",
  "Federal University of Technology, Lafia",
  "Federal University, Dutse",
  "Federal University, Otueke",
  "Fidei polytechnic, Gboko",
  "First Immaculate Computer Institute",
  "GSU Gombe State University Tudun Wada, Tudun Wada",
  "Goethe-Institut",
  "Government Technical College, Ado-Ekiti",
  "Government Technical College, Ado-Soba",
  "Government Technical College, Ikorodu",
  "Grace Polytechnic, Ogun",
  "Gralom Computer Institute",
  "Grano Institute of Catering and Hotel Management",
  "Gregory University Uturu",
  "HIK Al-Hikmah University, Ilorin",
  "Haliru Binji College Of Art and Science",
  "Hassan Usman Katsina Polytechnic",
  "Helpers International College  Institute for Industrial Technology",
  "Heritage Polytechnic, Eket",
  "His Mercy Computer Institute, Ekiti ",
  "Hussaini Adamu Federal Polytechnic Kazaure",
  "IGB Igbinedion University, Okada-Benin",
  "ILO University Of Ilorin, Ilorin",
  "Ibrahim Babangida College of Agriculture, Obubra",
  "Ifo College of Management and Technology",
  "Imo State Polytechnic, Umuagwo",
  "Imo State Technological Skills Acquisition Institution, Orlu",
  "Imo State University, Owerri",
  "Informatics Institute of Information Technology, Kazaure",
  "Innovation Institute of Technology",
  "Institute of Chartered Economists of Nigeria (ICEN)",
  "Institute of Continuing Education, Auchi",
  "Institute of Data Processing Management (IDPM)",
  "Institute of Management and Technology (IMT)",
  "Institute of Science and Technology Yenagoa",
  "Institute of Strategic Management, Nigeria",
  "Interlink Polytechnic",
  "Ipakodo Grammar School, Ikorodu",
  "Isah Kaita College of Education Dutsinma",
  "JOS University Of Jos, Jos",
  "Jigawa State College Of Agriculture, Hadejia",
  "Jigawa State College of Education, Gumel, Dutse",
  "Jigawa State Polytechnic",
  "KAD Kaduna Polytechnic, Kaduna",
  "KAN Federal College Of Education, Kano",
  "KAS Kaduna State University, Kaduna",
  "KSU Kogi State University, Anyigba",
  "KTS Katsina State University, Katsina",
  "KUS Kebbi State Univ. Of Science & Tech. Aliero, Aliero",
  "KUT Kano University Of Technology, Kano",
  "Kaduna State College of Education",
  "Kano State Polytechnic",
  "Kaura Knamoda Polytechnic",
  "Keme Balogun College, Ibeshe",
  "Kiagbodo Eagle Heights University, Omadino",
  "King's College of Commerce, Buguma",
  "Kogi State College of Education",
  "Kogi State College of Nursing",
  "Kogi State Polytechnic, Lokoja",
  "Kwara State College of Arabic and Islamic Legal Studies",
  "Kwara State College of Education",
  "Kwara State College of Health and Technology",
  "Kwara State Polytechnic, Ilorin",
  "Kwara State University (KWASU)",
  "LAG University Of Lagos, Lagos",
  "LIFE Theological Seminary, Ikorodu,",
  "LSU Lagos State University, Ojo Lagos",
  "Ladoke Akintola University Of Technology Ogbomoso",
  "Lagos Business School",
  "Lagos City Computer College (LCC)",
  "Lagos School of Travels and Tourism",
  "Lagos State College of Health Technology, Yaba",
  "Lagos University Teaching Hospital",
  "Lagos state polytechnic",
  "Landmark university omu-aran",
  "Lead City University, Ibadan",
  "Lighthouse Polytechnic, Evbuobanosa",
  "Logos Institute, Maryland",
  "Lys Children School",
  "MAI University Of Maiduguri, Maiduguri",
  "MIN Fed University Of Technology, Minna",
  "Madonna University",
  "Madonna University, Okija",
  "Maritime Academy of Nigeria, Oron",
  "McAdolph Institute Of Information Technology",
  "Michael Okpara University of Agriculture at Umudike (Federally owned)",
  "Michael Otedola College of Primary Education",
  "Miracle Invasion Leadership Institute",
  "Moshood Abiola Polytechnic, Ojere, Abeokuta",
  "Mufutau Lanihun College of Education, Ibadan",
  "NIIT National Institute of Information Technology",
  "NSU Nasarawa State University, Keffi",
  "Nacabs Polytechnic, Akwanga",
  "Nasarawa State Polytechnic, Lafia",
  "National Horticultural Research Institute, Ibadan",
  "National Open University Bauchi",
  "National Open University Of Nigeria",
  "National Open University of Nigeria, Abuja",
  "National Open University of Nigeria, Asaba Study Center, Asaba",
  "National Open University of Nigeria, Imo",
  "National Open University of Nigeria, Kaduna",
  "National Open University of Nigeria, Kwara",
  "National Open University of Nigeria, Lagos",
  "National Open University of Nigeria, Lokoja",
  "National Open University of Nigeria, Maiduguri",
  "National Open University of Nigeria, Osun",
  "National Open University of Nigeria, Oyo",
  "National Open University of Nigeria, Sokoto",
  "National Teacher's Institute",
  "New Horizons Computer Learning Centres",
  "Niger Delta University",
  "Niger State College of Nursing, Bida",
  "Niger State Polytechnic, Zungeru",
  "Nigerian Army School Of Finance And Administration (NASFA)",
  "Nigerian Army School Of Medical Sciences",
  "Nigerian Army School of Nursing and Midwifery",
  "Nigerian College Of Aviation Technology, Zaria",
  "Nigerian College of Accountancy, Jos",
  "Nigerian Defence Academy, Kaduna",
  "Nigerian Institute Of Computer Science And Professional Studies",
  "Nigerian Institute of Journalism  Nigerian Institute Of Management (Chartered)",
  "Nigerian Institute of Leather and Science Technology, Samuru",
  "Nigerian Institute of Safety Professionals, Ikotun",
  "Nigerian Institute of Transport Technology",
  "Nigerian Law School",
  "Nigerian Maritime University, Okerenkoko, Warri",
  "Nigerian Opportunity Industrialization Centre, Gbagada",
  "Nigerian Police Academy, Wudil",
  "Nigerian Turkish Nile University",
  "Nnamdi Azikiwe University",
  "Novena University, Ogume-Amai",
  "Nuhu Bamalli Polytechnic Zaria",
  "Nwafor Orizu University of Education",
  "OAU Obafemi Awolowo University, Ile-Ife",
  "OOU Olabisi Onabanjo University, Ago-Iwoye",
  "OSC Osun State College Of Education Ilesa, Ilesa",
  "OSS college of EDucation, Ila-Orangun",
  "Obafemi Awolowo University Staff School, Ife",
  "Obong University, Obong Ntak Inyang",
  "Oduduwa University",
  "Ogun State College Of Health Technology",
  "Ondo State University of Science and Technology",
  "Osun State College of Technolgy, Esa oke",
  "Osun State Polytechnic, Iree",
  "Osun State University, Osogbo",
  "Our Saviour Institute of Science and Technology, Enugu",
  "Oyo Stae College of Education",
  "PEFTI Film Institute  Portfolio And Debt Management Institute Of Nigeria",
  "PSU Plateau State University, Bokkos",
  "Petroleum Training Institute, Effurun",
  "Plateau State Polytechnic",
  "Ramat Polytechnic Maiduguri",
  "Redeemers University  Ronik Polytechnic",
  "Renaissance University, Ugbawka",
  "Rhema University",
  "Ritman University",
  "Rivers State College Of Arts",
  "Rivers State College of Health Science and Technology",
  "Rivers State University Of Technology, Port-Harcourt",
  "Rivers State polytechnic",
  "Rufus Giwa Polytechnic",
  "SUL Salem University, Lokoja",
  "Sa'adatu Rimi College Of Education, Kumbotso",
  "Saint Finbarr's College, Akoka",
  "Samuel Adegboyega University, Ogwa",
  "Sapele Nigerian Navy Maritime University, Ibusa",
  "Savannah College of Art and Design",
  "School Of Basic Studies",
  "School Of Health Technology, Makarfi",
  "School Of Nursing and Midwifery",
  "School of Basic and Remedial Studies Funtua",
  "School of Health Technology",
  "School of Health Technology Daura",
  "School of Health Technology Kankia",
  "School of Health Technology, Ughelli",
  "School of Health and Technology, Maiduguri",
  "School of Midwifery Malumfashi",
  "School of Nursing",
  "School of Nursing Katsina",
  "School of Nursing Uyo, Eket, Oron, Ikot Ekpene, Etinan",
  "School of Nursing, Agbor",
  "School of Nursing, Imo",
  "School of Nursing, Warri",
  "Seminary of All Saints, Uhiele, Ekpoma ",
  "Shaka Polytechnic, Benin City",
  "Sokoto State Polytechnic",
  "Sokoto State University",
  "Sokoto Teachers' College",
  "St Paul's University, Awka",
  "St. Andrews College Of Education, Oyo",
  "St. Gerard's School of Nursing, Kakuri",
  "St. Luke Anglican School of Nursing, Wusasa, Zaria",
  "St. Winifred Innovative Polytechnic, Ibadan",
  "State School of Midwifery, Asaba",
  "State School of Nursing, Sapele Road, Benin City",
  "Suleiman Barau Technical College, Suleja",
  "Sure Polytechnic, Ukanafun",
  "TAI Tai Solarin College Of Education, Ijebu-Ode",
  "TAR Taraba State University, Jalingo",
  "Taraba State College of Agriculture, Jalingo",
  "Taraba State Polytechnic, Jalingo",
  "Taraba State Polytechnic, Jalingo",
  "Technical college Ugep",
  "Temple Gate Polytechnic, Abayi",
  "The Chartered Institute of Bankers of Nigeria",
  "The Federal College of Chemical and Leather Technology, Zaria",
  "The Federal Polytechnic Idah",
  "The Gateway Polytechnic, Ogun",
  "The Institute of Chartered Accountants of Nigeria",
  "The Nigerian Institute Of Public Relations",
  "The Polytechnic, Ibadan",
  "The Polytechnic, Ibadan",
  "The Polytechnic, Ile-Ife",
  "The Tansian University, Umunya",
  "Times Journalism Institute, Surulere",
  "Tower Polytechnic, Ibadan",
  "UAA University Of Agriculture, Abeokuta",
  "UAD University Of Ado-Ekiti, Ado-Ekiti",
  "UDU Usmanu Danfodio University, Sokoto",
  "Umaru Musa Yaradua University",
  "Universal College of Technology Ile-ife",
  "University Of Ibadan, Ibadan",
  "University Of Port-Harcourt, Port-Harcourt",
  "University Of Science And Technology, Ifaki",
  "University of Abu",
  "University of Calabar",
  "University of Information and Communication Technology, Agbor",
  "University of Medical Sciences, Ondo",
  "University of Mkar, Mkar, Gboko",
  "University of Nigeria, Nsukka",
  "University of Science and Technology, Diobu, Port Harcourt",
  "University of Uyo",
  "Usen Polytechnic",
  "Usmanu Danfodiyo University Teaching Hospital School Of Nursing (UDUTHSON)",
  "Uyo City Polytechnic",
  "Valley View Polytechnic, Aba",
  "Warri Nigerian Naval School",
  "Waziri Umaru Federal Polytechnic",
  "Wellspring University, Benin City",
  "Wesley University of Science and Technology",
  "Western Delta University, Oghara",
  "Wolex Polytechnic",
  "Word of Faith Bible Institute, Imo",
  "World Outreach Bible College",
  "YAB Yaba College Of Technology, Yaba, Lagos",
  "YBU College of Legal and General Studies Daura",
  "Yaba  Speedway Information Technology Institute",
  "Yetkem Institute of Catering and Hotel Management",
  "Yewa Central College of Education",
  "Zulikha Abiola College of Arabic And Islamic Studies",
  "karROX ICT Institute",
  "king's Glory University"
]
