import templateImg from '../assets/templateImg.svg';
import uploadImg from '../assets/uploadImg.png';
import viewImg from '../assets/viewImg.svg'

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'profiles',
        title: 'Profiles',
    },
    {
        id: 'templates',
        title: 'Templates',
    },
    {
        id: 'guide',
        title: 'Guide',
    },
    {
        id: 'login',
        title: 'Log In',
    },
]

export const stats = [
    {
        id: 1,
        value: 1500,
        title: 'profiles',
        duration: 2
    },
    {
        id: 2,
        value: 300,
        title: 'Users',
        duration: 2
    },
    {
        id: 3,
        value: 12,
        title: 'Countries',
        duration: 2
    },
]

export const features = [
    {
        id: 1,
        img: uploadImg,
        title: 'Upload Profiles With Ease',
        content: 'Upload your professional profile for others to connect with you. Easily upload your employees profile. You can upload unlimited number of profiles.'
    },
    {
        id: 2,
        img: viewImg,
        title: 'View, Search, Share, Save and Connect',
        content: 'View and search from several profiles and find out who fits the job. You can also view profiles of employees from various companies and connect. Share or save a profile for later.'
    },
    {
        id: 3,
        img: templateImg,
        title: 'Use Templates',
        conten: 'Choose from several templates tailored to your profession. You can also request for a template if you can’t find a template that suits your need. Easily bookmark a template for later.'
    },
]