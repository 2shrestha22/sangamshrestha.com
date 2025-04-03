export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Sangam Shrestha',
    subtitle: 'Mobile App Developer',
    description: 'I develop mobile apps, write backend APIs and tinker with my Linux machine.',
    image: {
        src: '/sangam512.jpg',
        alt: 'Sangam Shrestha'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: 'https://sangams.com.np'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/2shrestha22'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/2shrestha22'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/2shrestha22'
        }
    ],
    hero: {
        title: 'Hi  👋',
        text: 'I am a mobile app developer with 5+ years of experience building high-performance apps. I also contribute to open-source projects and mentor developers.',
        image: {
            src: '/sangam512.jpg',
            alt: 'Image of Sangam Shrestha'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
