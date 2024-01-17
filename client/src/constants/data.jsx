import { FaBusinessTime } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdCorporateFare } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IoPeople } from 'react-icons/io5';
import { IoIosPerson } from 'react-icons/io';

export const homeView = {
  title: 'Start Your Journey to Success',
  message: 'Register and Develop Your Business Online Today',
  // message: "From Registration Hurdles to Web Development Challenges – We're Here to Simplify Your Path to Success."
};

export const cards = [
  { icon: <FaBusinessTime />, name: 'Company Registration', price: 70 },
  { icon: <IoIosPerson />, name: 'Business Name Registration', price: 25 },
  { icon: <MdCorporateFare />, name: 'NGO Registration', price: '170,000' },
  { icon: <FaPeopleArrows />, name: 'General Partnership', price: 70 },
  { icon: <IoIosPeople />, name: 'Limited Partnership', price: '70 - 200' },
  {
    icon: <IoPeople />,
    name: 'Limited Liability Partnership',
    price: 70,
  },
  { icon: <CgWebsite />, name: 'Web Development', price: 70 },
];

export const accordion = [
  {
    title: 'Business Registration',
    requirements: [
      '1 Whether you are just starting a small business ',
      '2 Whether you are just starting a small business ',
      '3 Whether you are just starting a small business ',
      '4 Whether you are just starting a small business ',
      '5 Whether you are just starting a small business ',
      '6 Whether you are just starting a small business ',
      '7 Whether you are just starting a small business ',
      '8 Whether you are just starting a small business ',
    ],
  },
  {
    title: 'Company Registration',
    requirements: [
      '1 Whether you are just starting a small business ',
      '2 Whether you are just starting a small business ',
      '3 Whether you are just starting a small business ',
      '4 Whether you are just starting a small business ',
      '5 Whether you are just starting a small business ',
      '6 Whether you are just starting a small business ',
      '7 Whether you are just starting a small business ',
      '8 Whether you are just starting a small business ',
    ],
  },
  {
    title: 'NGO  Registration',
    requirements: [
      '1 Whether you are just starting a small business ',
      '2 Whether you are just starting a small business ',
      '3 Whether you are just starting a small business ',
      '4 Whether you are just starting a small business ',
      '5 Whether you are just starting a small business ',
      '6 Whether you are just starting a small business ',
      '7 Whether you are just starting a small business ',
      '8 Whether you are just starting a small business ',
    ],
  },
];
export const getStartedData = [
  {
    title: 'Your Trusted Partner',
    summary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reiciendis animi veritatis ipsam quidem natus incidunt, maiores possimus corrupti neque illum nam aliquid provident soluta rerum? Dignissimos aspernatur quibusdam laboriosam sed numquam ipsam, aut quis blanditiis modi culpa distinctio quasi fuga voluptatibus ab excepturi, harum facere ullam! Vero, officia aspernatur?',
    biz_list: [
      'Company Registration',
      'Business Registration',
      'NGO Registration',
      'Annual Return Filing',
      'Conversion of Biz to Company',
      'Websites Development',
      'Post Incorporations',
      'List Others',
    ],
  },
];

export const supportData = [
  {
    title: 'Support Before and After Registration',
    summary:
      'Lorem ipsum, dolor maiores possimus corrupti neque illum nam aliquid provident soluta rerum? Dignissimos aspernatur quibusdam laboriosam sed numquam ipsam, aut quis blanditiis modi culpa distinctio quasi fuga voluptatibus ab excepturi, harum facere ullam! Vero, officia aspernatur?',
    biz_list: [
      'Consultation and Legal Guidance',
      'Compliance and Regulatory Support',
      'Website Planning and Development',
      'Legal Documentation and Assistance',
      'Website Development and Testing',
      'Communication and Coordination',
      'Legal Support',
      'Regular Check-ins and Reviews',
      'Free Logo Design for the Biz',
      'Compliance Alert',
    ],
  },
];

import { BiSupport } from 'react-icons/bi';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { TfiBriefcase } from 'react-icons/tfi';
import { TbFreeRights } from 'react-icons/tb';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { CiMoneyCheck1 } from 'react-icons/ci';

export const trust_card_data = [
  {
    icon: <AiOutlineDeliveredProcedure />,
    title: 'Free Delivery',
    description:
      'We scan and upload all filed documents into your Account Dashboard. Saves postage and saves time!',
  },

  {
    icon: <CiMoneyCheck1 />,
    title: 'Easy Payment Options',
    description:
      'Our easy payment plan allows you to make payment either in full and by installment. Your convenience is what matters us',
  },

  {
    icon: <TbFreeRights />,
    title: 'Free Consultation',
    description:
      'Our exclusive free consultation is personalized to help and guides you step-by-step through the setup of your company.',
  },
  {
    icon: <HiOutlineBellAlert />,
    title: 'Lifetime Company Alerts',
    description:
      "Relax and never miss an important filing date! We'll remind you of important filings like Annual Reports and other deadlines.",
  },

  {
    icon: <TfiBriefcase />,
    title: 'Online Order Briefing',
    description:
      'Real-time access to your order status 24/7. View your orders for an unlimited amount of companies in one place.',
  },

  {
    icon: <LiaChalkboardTeacherSolid />,
    title: 'Consultation and Guidance',
    description:
      "Offer initial consultations to understand the business's needs and goals. Provide guidance on the legal structure, business registration process, and website requirements.",
  },
  {
    icon: <BiSupport />,
    title: 'Compliance and Regulatory Support',
    description:
      'Assist with understanding and complying with relevant laws, regulations, and industry standards. Guide them in obtaining necessary licenses, permits, and certifications.',
  },
  {
    icon: '',
    title: 'Website Planning and Development',
    description:
      "Collaborate with the business to plan and design their website. Define the website's objectives, target audience, and desired functionalities.",
  },
  {
    icon: '',
    title: 'Legal Documentation and Assistance',
    description:
      'Prepare and review legal documents related to business registration, website ownership, and intellectual property protection.',
  },
  {
    icon: '',
    title: 'Website Development and Testing',
    description:
      'Develop the website according to the agreed-upon specifications, ensuring it is functional, user-friendly, and optimized for search engines.',
  },
  {
    icon: '',
    title: 'Communication and Coordination',
    description:
      'Maintain open communication with the business throughout the process, addressing concerns and providing updates promptly.',
  },
  {
    icon: '',
    title: 'Ongoing Legal Support',
    description:
      'Provide ongoing legal advice and representation as the business operates. Assist with contracts, agreements, and dispute resolution.',
  },
  {
    icon: '',
    title: 'Website Maintenance and Updates',
    description:
      "Offer website maintenance services, including bug fixes, updates, and security patches. Keep the website aligned with the business's evolving needs.",
  },
  {
    icon: '',
    title: 'Digital Marketing Support',
    description:
      'Assist with digital marketing strategies, such as search engine optimization (SEO), social media marketing, and email marketing.',
  },
  {
    icon: '',
    title: 'Regular Check-ins and Reviews',
    description:
      'Schedule regular check-ins with the business to review their website performance, address any issues, and suggest improvements.',
  },
  {
    icon: '',
    title: 'Same Business Day Processing',
    description:
      "Submit your order by 3pm EST and we'll process it the same business day! Orders after 3pm will be processed the next business day.",
  },
];

export const packages = [
  {
    title: 'Company Limited by Shares ',
    price: '60,000',
    benefits: [
      'Free pre-registration consulting',
      'Company name search and reservation',
      'Memorandum and Articles of Association',
      'Share Capital of ₦1million',
      'Status report and Tax Identification Number (TIN)',
      'Incorporation Certificate',
      'Free Bank Account opening support',
      '15% discount on all follow-up services',
    ],
  },
  {
    title: 'Company Limited by Guarantee',
    price: '200,000',
    benefits: [
      'Company name search and reservation',
      'Incorporation Certificate',
      'Memorandum and Article of Association',
      'Share Capital of ₦ 1million',
      'Status report and Tax Identification Number(TIN)',
      'Free 20 minutes pre-registration Consulting',
      'Free Bank Account opening support',
      '20% discount on all follow-up services',
    ],
  },

  {
    title: 'Incorporated Trustees',
    price: '180,000',
    benefits: [
      'Name search and reservation',
      'Registration documents',
      'Free 20 minutes pre-registration consulting',
      'First priority for our B2B Trade events',
      'Free Secretarial service in the first 60 days',
      'Free Bank Account Opening Support',
      '20% discount on all follow-up services',
    ],
  },
  {
    title: 'Others',
    price: 'From 150,000',
    benefits: [
      'Company name search and reservation',
      'Incorporation Certificate shareholders',
      'Memorandum and Articles of Association',
      'Share Capital of ₦ 1million',
      'Status report and Tax Identification Number (TIN)',
      'Free 20 minutes pre-registration consulting',
      'Free Bank Account opening support',
      'Free Company Secretarial service in the first 60 days',
      '20% discount on all follow-up services',
    ],
  },

  {
    title: 'Business Name',
    price: '25,000',
    benefits: [
      'Business Name search and reservation',
      'Incorporation Certificate',
      'Status report',
      'Tax Identification Number (TIN)',
      'Free 20 minutes pre-registration consulting',
      'Free Business Account opening support',
      '20% discount on all follow-up services',
    ],
  },
];

export const partnerships = [
  {
    title: 'General Partnership',
    price: '25,000-35,000',
    benefits: [
      'Company name search and reservation',
      'Incorporation Certificate',
      'Memorandum and Article of Association',
      'Status report and Tax Identification Number(TIN)',
      'Free Annual returns for the first year',
      'Free Bank Account opening support',
      'Free virtual office address for 60 days',
      '20% discount on all follow-up services',
    ],
  },
  {
    title: 'Limited Partnership',
    price: '80,000',
    benefits: [
      'Partnership name search and reservation',
      'Registration documents',
      'Partnership Agreement',
      'Free 20 minutes pre-registration consulting',
      'Free Bank Account Opening Support',
      'Free virtual office address for 60 days',
      '20% discount on all follow-up services',
      'Start Now',
    ],
  },
  {
    title: 'Limited Liability Partnership',
    price: '80,000',
    benefits: [
      'Partnership name search and reservation',
      'Registration documents',
      'Partnership Agreement',
      'Free 20 minutes pre-registration consulting',
      'Free Bank Account opening support',
      'Free virtual office address for 60 days',
      '20% discount on all follow-up services',
    ],
  },
];

export const pre_inc_service = [
  {
    title: 'Company Limited by Shares ',
    price: '60,000',
  },
  {
    title: 'Company Limited by Guarantee',
    price: '200,000',
  },
  {
    title: 'Business Name',
    price: '25,000',
  },
  {
    title: 'Incorporated Trustees',
    price: '180,000',
  },
  {
    title: 'Website Development',
    price: '100,000',
  },
  {
    title: 'Others',
    price: 'From 150,000',
  },
];

export const post_inc_services = [
  {
    serviceName: 'Convert Business Name to LLC',
    price: '₦95,000',
  },
  {
    serviceName: 'Change Company Name',
    price: '₦25,000',
  },
  {
    serviceName: 'File Company Annual Returns',
    price: '₦25,000/year',
  },
  {
    serviceName: 'Resolve Pending Queries',
    price: '₦15,000',
  },
  {
    serviceName: 'Recover Lost CAC Documents',
    price: '₦10,000/document',
  },
  {
    serviceName: 'Increase Share Capital',
    price: 'From ₦25,000',
  },
  {
    serviceName: 'Add/Change Directors',
    price: '₦25,000',
  },
  {
    serviceName: 'Register Trademark or Patent',
    price: '₦75,000',
  },
];

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpeg';

export const blogPosts = [
  {
    id: 1,
    img: image1,
    title: 'Exploring the Wilderness',
    description:
      'Discover the beauty of untouched landscapes and the serenity of nature.',
    date: '2023-08-15',
    time: '10 mins',
    author: 'John Doe',
    comments: [
      'Great article! I loved the photos.',
      'Very informative, thanks for sharing!',
      'Looking forward to more posts like this.',
    ],
    views: 1020,
    likes: 350,
  },
  {
    id: 2,
    img: image2,
    title: 'Mastering Culinary Arts',
    description:
      'Unveil the secrets behind creating exquisite dishes from around the world.',
    date: '2023-09-05',
    time: '8 mins',
    author: 'Jane Smith',
    comments: [
      "Fantastic read! Can't wait to try out the recipes.",
      'The content was well organized and easy to follow.',
    ],
    views: 1520,
    likes: 420,
  },
  {
    id: 3,
    img: image5,
    title: 'Art of Mindfulness',
    description:
      'Embrace tranquility through mindfulness practices and mental well-being.',
    date: '2023-07-25',
    time: '12 mins',
    author: 'Emily Johnson',
    comments: [
      "Fantastic read! Can't wait to try out the recipes.",
      'The content was well organized and easy to follow.',
    ],
    views: 880,
    likes: 290,
  },
  {
    id: 4,
    img: image3,
    title: 'Traveling Through Time',
    description:
      'Journey through history and explore the wonders of different eras.',
    date: '2023-10-10',
    time: '15 mins',
    author: 'Michael Anderson',
    comments: [
      "Fantastic read! Can't wait to try out the recipes.",
      'The content was well organized and easy to follow.',
    ],
    views: 2000,
    likes: 600,
  },
  {
    id: 5,
    img: image4,
    title: 'Fitness for Everyone',
    description:
      'Embark on a fitness journey tailored for all ages and body types.',
    date: '2023-11-02',
    time: '6 mins',
    author: 'Sophia Lee',
    comments: [
      "Fantastic read! Can't wait to try out the recipes.",
      'The content was well organized and easy to follow.',
    ],
    views: 1200,
    likes: 400,
  },
];
