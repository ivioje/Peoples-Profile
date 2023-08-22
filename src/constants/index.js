import { BsBag, BsBuilding, BsPerson } from 'react-icons/bs';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';


export const navLinks = [
    {
        id: '',
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

export const signupInputs = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Username'
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email address'
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Create a password'
    },

]

export const loginInputs = [
    {
        name: 'name',
        type: 'email',
        placeholder: 'Email address'
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password'
    },

]


export const testimonials = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum cursus sed commodo habitant scelerisque egestas et facilisi. Risus cras at diam, magna urna mollis proin amet et. Vel vulputate consequat enim ullamcorper nulla orci tempor nulla.',
        name: 'Taylor Lee',
        photo: person1
    },
    {
        id: 2,
        content: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies',
        name: 'Lynda Lee',
        photo: person2
    },
    {
        id: 3,
        content: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program',
        name: 'Richard Smith',
        photo: person3
    },
]

export const quickLinks = [
    {
        id: '',
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
        id: 'about',
        title: 'About',
    },
    {
        id: 'dashboard',
        title: 'Upload Profile',
    },
    {
        id: 'profiles',
        title: 'View Profile',
    },
    {
        id: 'templates',
        title: 'Templates',
    },
]

export const filterButtons = [
    {
        id: 1,
        name: 'Organization',
        icon: BsBuilding
    },
    {
        id: 2,
        name: 'Work',
        icon: BsBag
    },
    {
        id: 3,
        name: 'Education',
        icon: ''
    },
    {
        id: 4,
        name: 'Gender',
        icon: BsPerson
    }
]

export const pageItems = {
    // profile: [
    //     {
    //         id: 1,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: person1,
    //         gender: 'female',
    //         org: 'Kuda',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 2,
    //         name: 'Esther Smith',
    //         work: 'Backend Developer',
    //         photo: '',
    //         gender: 'female',
    //         org: 'Microsoft Corporation',
    //         job: 'Product designer',
    //         edu: 'B.Sc Mathematics',
    //     },
    //     {
    //         id: 3,
    //         name: 'Christopher Stone',
    //         work: 'Developer',
    //         photo: person2,
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Fullstack developer',
    //         edu: 'PhD Robotics engineering',
    //     },
    //     {
    //         id: 4,
    //         name: 'John Doe',
    //         work: 'Data Scientist',
    //         photo: person1,
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Senior analyst',
    //         edu: 'HND Civil engineering',
    //     },
    //     {
    //         id: 5,
    //         name: 'Clarie Thompson',
    //         work: 'Developer',
    //         photo: '',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Senior analyst',
    //         edu: 'HND Civil engineering',
    //     },
    //     {
    //         id: 6,
    //         name: 'Taylor Lee',
    //         work: 'Senior Frontend Developer',
    //         photo: person3,
    //         gender: 'male',
    //         org: 'Google',
    //         job: 'ML engineer',
    //         edu: 'PhD Biology',
    //     },
    //     {
    //         id: 7,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: person3,
    //         gender: 'male',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 8,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: '',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 9,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: '',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 10,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-11b8a47631165955edc2a83fa4f9ed8d.jpg',
    //         gender: 'male',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 11,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: person1,
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 12,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-1139dcbbb1b97fc177e6bf8e7949d443.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 13,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-114312d7e9a06a78a385c26ab0571566.jpg',
    //         gender: 'male',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',

    //     },
    //     {
    //         id: 14,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-1178f9de9d3fa62aa3ad5f858d71ca20.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 15,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-11178d033ef0fb4f2f19479545cdf5cf.jpg',
    //         gender: 'male',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 16,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-1123308c0acd7458671039b832d09a3e.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 17,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-110e92386c7486f714018fe28fc4748b.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 18,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-11123ea0e2056b6b95bb23550f1ab143.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 19,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-115a512504bd8c37edfebf778a026652.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 20,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-11b8fdb4692c80dfac10eb50a2947aa0.jpg',
    //         gender: 'female',
    //         org: 'Google',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    //     {
    //         id: 21,
    //         name: 'Taylor Lee',
    //         work: 'Developer',
    //         photo: 'https://this-person-does-not-exist.com/gen/avatar-116b7531c2acb7425e72f389f4d43d94.jpg',
    //         gender: 'female',
    //         org: 'PiggyVest',
    //         job: 'Software engineer',
    //         edu: 'B.Sc Computer science',
    //     },
    // ],

    profile: [
    ],
    templates: [
        {
            id: 0,
            type: 'Basic',
            color: '#3D80AD',
            slug: 'basic',
            description: 'A basic template for any purpose',
            thumbnail: 'https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
        {
            id: 1,
            type: 'Professional Portfolio',
            color: 'rgba(0, 51, 204, 0.75)',
            slug: 'professional-portfolio',
            description: 'A sleek and modern design for you to create a professional profile',
            thumbnail: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
            state: true
        },

        {
            id: 2,
            type: 'Creative Portfolio',
            color: 'rgba(51, 153, 255, 0.85)',
            slug: 'project-manager',
            description: 'A colorful and creative design for you to showcase your creative work',
            thumbnail: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            state: false
        },
        {
            id: 3,
            type: 'Minimalist Resume',
            color: 'rgba(107, 107, 107, 0.82)',
            slug: 'ui-ux-designer',
            description: ' A simple and minimalist design for you to create a concise and effective resume',
            thumbnail: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
        {
            id: 4,
            type: 'Social Media Profile',
            color: 'rgba(204, 51, 255, 0.85)',
            slug: 'ml-engineer',
            description: 'A bold and vibrant design for you to create a social media profile',
            thumbnail: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            state: false
        },
        {
            id: 5,
            type: 'Academic Profile',
            color: 'rgba(0, 0, 255, 0.80)',
            slug: 'cloud-engineer',
            description: ' A scholarly and professional design for you to create an academic profile',
            thumbnail: 'https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80',
            state: false
        },
        {
            id: 6,
            type: 'Personal Branding',
            color: 'rgba(61, 147, 153, 0.85)',
            slug: 'data-scientist',
            description: 'A colorful and engaging design for you to create a personal brand profile',
            thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            state: false
        },
        {
            id: 7,
            type: 'Executive Profile',
            color: 'rgba(255, 102, 102, 0.82)',
            slug: 'sales-manager',
            description: 'A sophisticated and refined design for you to create an executive profile',
            thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            state: false
        },
        {
            id: 8,
            type: 'Career Changer',
            color: 'rgba(255, 0, 102, 0.82)',
            slug: 'data-analyst',
            description: 'A template with a dynamic and flexible design for you to create a career change profile',
            thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
            state: false
        },
        {
            id: 9,
            type: 'ShopSpace',
            color: 'rgba(191, 53, 103, 0.82)',
            slug: 'social-media-manager',
            description: 'A customizable e-commerce template for small business owners',
            thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
        {
            id: 10,
            type: 'EventExpress',
            color: 'rgba(255, 26, 26, 0.82)',
            slug: 'social-media-manager',
            description: 'A dynamic and customizable template for event planners',
            thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
        {
            id: 11,
            type: 'TravelTribe',
            color: 'rgba(0, 153, 0, 0.85)',
            slug: 'social-media-manager',
            description: 'A customizable template for travel bloggers',
            thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
        {
            id: 12,
            type: 'RecipeRealm',
            color: 'rgba(221, 165, 44, 0.82)',
            slug: 'social-media-manager',
            description: 'A customizable template for food bloggers',
            thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            state: false
        },
    ]


}

export const stats = [
    {
        id: 1,
        value: 10,
        title: 'Profiles',
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

export const tempItems = [
    {
        id: 1,
        type: 'Developer',
        color: '#8271B2',
    },

    {
        id: 2,
        type: 'Project Manager',
        color: '#548CA8',
    },
    {
        id: 3,
        type: 'UI/UX Designer',
        color: '#8197A8',
    },
    {
        id: 4,
        type: 'ML Engineer',
        color: '#0A66C2D1',
    },
    {
        id: 5,
        type: 'Cloud Engineer',
        color: '#334257',
    },
    {
        id: 6,
        type: 'Data Scientist',
        color: 'rgba(61, 147, 153, 0.85)',
    },
    {
        id: 7,
        type: 'Sales Manager',
        color: 'rgba(21, 147, 124, 0.82)',
    },
    {
        id: 8,
        type: 'Data Analyst',
        color: 'rgba(181, 78, 139, 0.82)',
    },
    {
        id: 9,
        type: 'Social Media Manager',
        color: 'rgba(191, 53, 103, 0.82)',
    },
]

export const organizations = [
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Microsoft Corporation',
        job: 'Product designer',
        edu: 'B.Sc Mathematics',
    },
    {
        org: 'Google',
        job: 'Fullstack developer',
        edu: 'PhD Robotics engineering',
    },
    {
        org: 'Google',
        job: 'Senior analyst',
        edu: 'HND Civil engineering',
    },
    {
        org: 'Google',
        job: 'ML engineer',
        edu: 'PhD Biology',
    },
    {
        org: 'Google',
        job: 'Data Analyst',
        edu: 'PhD Economics',
    },
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Google',
        job: 'Software engineer',
        edu: 'B.Sc Computer science',
    },
    {
        org: 'Google',
        job: 'Software engineer',
    },
    {
        org: 'Google',
        job: 'Software engineer',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },

    {
        org: 'Google',
    },

    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
    {
        org: 'Google',
    },
]

export const sidenavItems = [
    {
        id: 'overview',
        title: 'Overview',
    },
    {
        id: 'uploads',
        title: 'Uploaded profiles',
    },
    {
        id: 'saved',
        title: 'Saved profiles',
    },
    {
        id: 'bookmarks',
        title: 'Bookmarked templates',
    },
    {
        id: 'shared',
        title: 'Shared profiles',
    },
    {
        id: 'trash',
        title: 'Trash',
    },
]