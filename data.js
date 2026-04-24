var familyData = [
    {
        id: '1',
        data: { 
            first_name: 'Smt Ram Devi', 
            last_name: 'Gupta', 
            nickname: 'Mamma', 
            avatar: 'images/mummy.jpeg', 
            bio: '', 
            occupation: 'Homemaker', 
            education: '', 
            college: '', 
            gender: 'F', 
            location: { lat: 23.521969489272106, lng: 87.31579737545253, label: 'Durgapur, West Bengal' } 
        },
        rels: { spouses: ['2'], children: ['3', '4', '5', '6', '7', '8', '9', '10'] }
    },
    {
        id: '2',
        data: { 
            first_name: 'Late Shri Siya Sharan', 
            last_name: 'Gupta', 
            nickname: 'Papa', 
            avatar: 'images/papa.jpeg', 
            bio: '', 
            occupation: 'Ayurvedic Doctor', 
            education: '', 
            college: '', 
            gender: 'M',
            deceased: true,
        },
        rels: { spouses: ['1'], children: ['3', '4', '5', '6', '7', '8', '9', '10'] }
    },
    {
        id: '3',
        data: {    
            first_name: 'Sushma', 
            last_name: 'Gupta', 
            nickname: 'Guddan', 
            avatar: 'images/sushma.jpeg', 
            bio: '', 
            occupation: 'Teacher', 
            education: '', 
            college: '', 
            gender: 'F',
            location: { lat: 25.888681623911594, lng: 78.33799780291153, label: 'Dabra, Madhya Pradesh' }  
        },
        rels: { spouses: ['11'], children: ['19', '22'], parents: ['1', '2'] }
    },
    {
        id: '4',
        data: { 
            first_name: 'Rupa', 
            last_name: 'Gupta', 
            nickname: 'Rupa', 
            avatar: 'images/rupa.jpeg', 
            bio: '', 
            occupation: 'Homemaker', 
            education: 'MA Economics',
            college: 'KRG College, Gwalior',
            gender: 'F',
            location: { lat: 22.080488903710563, lng: 82.1422025991808, label: 'Bilaspur, Chhattisgarh' }  
        },
        rels: { spouses: ['12'], children: ['23', '24'], parents: ['1', '2'] }
    },
    {
        id: '5',
        data: { 
            first_name: 'Dr Sanjay', 
            last_name: 'Gupta', 
            nickname: 'Sanjay', 
            avatar: 'images/sanjay.jpg', 
            bio: '', 
            occupation: 'Dean, Medical School', 
            education: 'MBBS, MD', 
            college: 'GRMC Gwalior, GMC Bhopal', 
            gender: 'M',
            location: { lat: 23.270595658654354, lng: 77.41481441949732, label: 'Bhopal, Madhya Pradesh' }  
        },
        rels: { spouses: ['13'], children: ['25', '26'], parents: ['1', '2'] }
    },
    {
        id: '6',
        data: { 
            first_name: 'Manoj', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/manoj.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BE (Electronics), MTech', 
            college: 'LNCT Bhopal, IIT BHU Varanasi', 
            gender: 'M',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' }  
        },
        rels: { spouses: ['14'], children: ['27', '28'], parents: ['1', '2'] }
    },
    {
        id: '7',
        data: { 
            first_name: 'Mamta', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/mamta.jpeg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BE (CSE)', 
            college: 'BIT Durg', 
            gender: 'F',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' }
        },
        rels: { spouses: ['15'], children: ['29'], parents: ['1', '2'] }
    },
    {
        id: '8',
        data: { 
            first_name: 'Shrikant', 
            last_name: 'Gupta', 
            nickname: 'Rinku', 
            avatar: 'images/rinku.jpeg', 
            bio: '', 
            occupation: 'DGM, NSPCL India', 
            education: 'BE (Electronics)', 
            college: 'MITS Gwalior', 
            gender: 'M',
            location: { lat: 23.521969489272106, lng: 87.31579737545253, label: 'Durgapur, West Bengal' }  
        },
        rels: { spouses: ['16'], children: ['30', '31'], parents: ['1', '2'] }
    },
    {
        id: '9',
        data: { 
            first_name: 'Mahesh', 
            last_name: 'Gupta', 
            nickname: '',
            avatar: 'images/mahesh.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BTech(IT), MS (CS)', 
            college: 'NIT Bhopal, UT Arlington', 
            gender: 'M',
            location: { lat: 37.33536104851249, lng: -121.8597298496179, label: 'San Jose, California' } 
        },
        rels: { spouses: ['17'], children: ['32'], parents: ['1', '2'] }
    },
    {
        id: '10',
        data: { 
            first_name: 'Ruchi', 
            last_name: 'Gupta', 
            nickname: 'Puchi',
            avatar: 'images/ruchi.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BE(CSE)', 
            college: 'OIST Bhopal', 
            gender: 'F',
            location: { lat: 17.41948789529526, lng: 78.49660674677266, label: 'Hyderabad, Telangana' }  
        },
        rels: { spouses: ['18'], children: ['33'], parents: ['1', '2'] }
    },
    {
        id: '11',
        data: { 
            first_name: 'Vinod', 
            last_name: 'Gupta', 
            nickname: '',
            avatar: 'images/vinod.png', 
            bio: '', 
            occupation: 'Businessman', 
            education: '', 
            college: '', 
            gender: 'M',
            location: { lat: 25.888681623911594, lng: 78.33799780291153, label: 'Dabra, Madhya Pradesh' } 
        },
        rels: { spouses: ['3'], children: ['19', '22'] }
    },
    {
        id: '12',
        data: { 
            first_name: 'Satish', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/satish.jpg', 
            bio: '', 
            occupation: 'Sr Manager, Coal India', 
            education: 'AMIE (Mechanical Engineering)', 
            college: 'AMIE Kolkata', 
            gender: 'M',
            location: { lat: 22.080488903710563, lng: 82.1422025991808, label: 'Bilaspur, Chhattisgarh' }
        },
        rels: { spouses: ['4'], children: ['23', '24'] }
    },
    {
        id: '13',
        data: { 
            first_name: 'Rakhi', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/rakhi.jpg', 
            bio: '', 
            occupation: 'Homemaker, Social Worker', 
            education: 'BSc, MBA', 
            college: 'Nutan College Bhopal, SIBM Pune', 
            gender: 'F',
            location: { lat: 23.270595658654354, lng: 77.41481441949732, label: 'Bhopal, Madhya Pradesh' } 
        },
        rels: { spouses: ['5'], children: ['25', '26'] }
    },
    {
        id: '14',
        data: { 
            first_name: 'Pooja', 
            last_name: 'Gupta', 
            nickname: 'Honey',
            avatar: 'images/pooja.jpg', 
            bio: '', 
            occupation: 'Homemaker', 
            education: 'BSc, C-DAC', 
            college: 'Jabalpur University', 
            gender: 'F',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' } 
        },
        rels: { spouses: ['6'], children: ['27', '28'] }
    },
    {
        id: '15',
        data: { 
            first_name: 'Ankush', 
            last_name: 'Garg', 
            nickname: '',
            avatar: 'images/ankush.jpg', 
            bio: '', 
            occupation: 'Director, Consulting, Deloitte India', 
            education: 'BE, MBA', 
            college: 'University of Mumbai, Temple University', 
            gender: 'M',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' } 
        },
        rels: { spouses: ['7'], children: ['29'] }
    },
    {
        id: '16',
        data: { 
            first_name: 'Vidhi', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/vidhi.jpeg', 
            bio: '', 
            occupation: 'Homemaker', 
            education: 'BSc, MCA', 
            college: 'ITM Gwalior', 
            gender: 'F',
            location: { lat: 23.521969489272106, lng: 87.31579737545253, label: 'Durgapur, West Bengal' } 
        },
        rels: { spouses: ['8'], children: ['30', '31'] }
    },
    {
        id: '17',
        data: { 
            first_name: 'Rupal', 
            last_name: 'Gupta', 
            nickname: 'Anu', 
            avatar: 'images/rupal.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BE(CSE)', 
            college: 'OIST Bhopal', 
            gender: 'F',
            location: { lat: 37.33536104851249, lng: -121.8597298496179, label: 'San Jose, California' } 
        },
        rels: { spouses: ['9'], children: ['32'] }
    },
    {
        id: '18',
        data: { 
            first_name: 'Varun', 
            last_name: 'Prakash', 
            nickname: '', 
            avatar: 'images/varun.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BE, MTech', 
            college: 'JNTU Hyderabad', 
            gender: 'M',
            location: { lat: 17.41948789529526, lng: 78.49660674677266, label: 'Hyderabad, Telangana' }
        },
        rels: { spouses: ['10'], children: ['33'] }
    },
    {
        id: '19',
        data: { 
            first_name: 'Shikha', 
            last_name: 'Gupta', 
            nickname: 'Rani',
            avatar: 'images/shikhu.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BSc, MCA',
            college: 'JEC Jabalpur',
            gender: 'F',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' }
        },
        rels: { spouses: ['20'], children: ['21'], parents: ['3', '11'] }
    },
    {
        id: '20',
        data: { 
            first_name: 'Saurabh', 
            last_name: 'Johri', 
            nickname: '', 
            avatar: 'images/saurabh.jpeg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'BSc, MCA',
             college: 'NIT Surathkal', 
            gender: 'M',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' } 
        },
        rels: { spouses: ['19'], children: ['21'] }
    },
    {
        id: '21',
        data: { 
            first_name: 'Sudhiksha', 
            last_name: 'Johri', 
            nickname: 'Sudhi', 
            avatar: 'images/sudhi.jpeg', 
            bio: '', 
            occupation: 'Boss Baby', 
            education: '', 
            gender: 'F',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' } 
        },
        rels: { parents: ['19', '20'] }
    },
    {
        id: '22',
        data: { 
            first_name: 'Late Shubham', 
            last_name: 'Gupta', 
            nickname: 'Sunny', 
            avatar: 'images/shubham.jpg', 
            bio: '', 
            occupation: 'Sales and Marketing, OLX India', 
            education: 'BSc, MBA',
            college: 'SBES Pune', 
            gender: 'M',
            deceased: true, 
        },
        rels: { parents: ['3', '11'] }
    },
    {
        id: '23',
        data: { 
            first_name: 'Adarsh', 
            last_name: 'Gupta', 
            nickname: 'Prince', 
            avatar: 'images/adarsh.jpg', 
            bio: '', 
            occupation: 'Software Engineer', 
            education: 'B Tech',
            college: 'IIIT Bhubaneswar',  
            gender: 'M',
            location: { lat: 17.41948789529526, lng: 78.49660674677266, label: 'Hyderabad, Telangana' }
        },
        rels: { parents: ['4', '12'] }
    },
    {
        id: '24',
        data: { 
            first_name: 'Dr Akansha', 
            last_name: 'Gupta', 
            nickname: 'Akku', 
            avatar: 'images/akku.jpg', 
            bio: '', 
            occupation: 'Medical Student', 
            education: 'MBBS',
            college: 'PT JNM Medical College Raipur', 
            gender: 'F',
            location: { lat: 21.253566502049278, lng: 81.63108567665014, label: 'Raipur, Chhattisgarh' } 
        },
        rels: { parents: ['4', '12'] }
    },
    {
        id: '25',
        data: { 
            first_name: 'Dr Eshita', 
            last_name: 'Gupta', 
            avatar: 'images/gunn.jpg', 
            bio: '', 
            occupation: 'Medical Student', 
            education: 'MBBS', 
            gender: 'F',
            college: 'DY Patil Medical University, Pune',
            location: { lat: 18.52928071245661, lng: 73.8787397952776, label: 'Pune, Maharashtra' } 
        },
        rels: { parents: ['13', '5'] }
    },
    {
        id: '26',
        data: { 
            first_name: 'Eshan', 
            last_name: 'Gupta', 
            nickname: 'Kishna', 
            avatar: 'images/eshan.jpg', 
            bio: 'I wanna play cricket for India.', 
            occupation: 'Student', 
            education: '', 
            gender: 'M',
            location: { lat: 23.270595658654354, lng: 77.41481441949732, label: 'Bhopal, Madhya Pradesh' }  
        },
        rels: { parents: ['13', '5'] }
    },
    {
        id: '27',
        data: { 
            first_name: 'Aryan', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/aryan.png', 
            bio: '', 
            occupation: 'Engineering Student', 
            education: '',
            college: 'IIIT Dharwad', 
            gender: 'M',
            location: { lat: 15.460601365979242, lng: 75.01259933339826, label: 'Dharwad, Karnataka' }
        },
        rels: { parents: ['14', '6'] }
    },
    {
        id: '28',
        data: { 
            first_name: 'Aarav', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/aarav.jpg', 
            bio: '', 
            occupation: 'Student', 
            education: '', 
            gender: 'M',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' }
        },
        rels: { parents: ['14', '6'] }
    },
    {
        id: '29',
        data: { 
            first_name: 'Ansh', 
            last_name: 'Garg', 
            nickname: '', 
            avatar: 'images/ansh.jpg', 
            bio: '', 
            occupation: 'Student', 
            education: '', 
            gender: 'M',
            location: { lat: 12.973350843644926, lng: 77.59315049123066, label: 'Bangalore, Karnataka' } 
        },
        rels: { parents: ['7', '15'] }
    },
    {
        id: '30',
        data: { 
            first_name: 'Sanvi', 
            last_name: 'Gupta', 
            nickname: 'Kuhu', 
            avatar: 'images/kuhu.jpeg', 
            bio: '', 
            occupation: 'Student', 
            education: '', 
            gender: 'F',
            location: { lat: 23.521969489272106, lng: 87.31579737545253, label: 'Durgapur, West Bengal' } 
        },
        rels: { parents: ['16', '8'] }
    },
    {
        id: '31',
        data: { 
            first_name: 'Samarth', 
            last_name: 'Gupta', 
            nickname: '', 
            avatar: 'images/samarth.jpeg', 
            bio: 'Samarth Loves Cars', 
            occupation: 'Student', 
            education: '', 
            gender: 'M',
            location: { lat: 23.521969489272106, lng: 87.31579737545253, label: 'Durgapur, West Bengal' } 
        },
        rels: { parents: ['16', '8'] }
    },
    {
        id: '32',
        data: { 
            first_name: 'Vedant', 
            last_name: 'Gupta', 
            nickname: 'Vedu', 
            avatar: 'images/vedant.jpg', 
            bio: 'Vedant loves cars.', 
            occupation: 'Boss Baby', 
            education: '', 
            gender: 'M',
            location: { lat: 37.33536104851249, lng: -121.8597298496179, label: 'San Jose, California' } 
        },
        rels: { parents: ['17', '9'] }
    },
    {
        id: '33',
        data: { 
            first_name: 'Coming', 
            last_name: 'Soon', 
            nickname: 'Puchi Junior', 
            avatar: '', 
            bio: '', 
            occupation: 'Boss Baby', 
            education: '', 
            gender: '?',
            location: { lat: 17.41948789529526, lng: 78.49660674677266, label: 'Hyderabad, Telangana' }
        },
        rels: { parents: ['10', '18'] }
    }
];