import {
    EnvelopeIcon,
    InstagramLogoIcon,    
    LinkedinLogoIcon,
    GithubLogoIcon,
    ReadCvLogoIcon
} from '@phosphor-icons/react/dist/ssr';
import type {Config} from '@/models/model';
import profileImage from './public/shrey.jpg';

// from https://phosphoricons.com/
export const shreyConfig: Config = {
    title: 'Shreyas Purohit',
    bio: 'I am a Software Engineer by trade, crafting scalable and elegant code with care. A dance enthusiast exploring the world of partner moves and joyful rhythms, on a mission to turn flour into flavorful experiments, and a nature-loving traveler fueled by hikes, campfires, and curiosity.',
    nativeShareTitle: 'Share Link',
    profileImage: profileImage,
    horizontalLinks: [
        {
            title: 'Email',
            id: 'email',
            url: process.env.ENC_MAILTO_URL || 'mailto:',
            icon: EnvelopeIcon,
            phosphorIcon: 'ph-envelope', 
        },
        {
            title: 'Public Resume',
            id: 'public-resume',
            url: process.env.ENC_PUBLIC_RESUME || '/public-resume.pdf',
            icon: ReadCvLogoIcon,
            phosphorIcon: 'read-cv-logo',
        },
    ],
    verticalLinks: [
        {
            title: 'GitHub',
            id: 'github',
            url: process.env.ENC_GITHUB_URL || 'https://github.com/',
            icon: GithubLogoIcon,
            phosphorIcon: 'ph-github-logo',
        },
        {
            title: 'LinkedIn',
            id: 'linkedin',
            url: process.env.ENC_LINKEDIN_URL ||'https://www.linkedin.com/',
            icon: LinkedinLogoIcon,
            phosphorIcon: 'ph-linkedin-logo',
        },
        {
            title: 'Instagram',
            id: 'instagram',
            url: process.env.ENC_INSTAGRAM_URL ||'https://www.instagram.com/',
            icon: InstagramLogoIcon,
            phosphorIcon: 'ph-instagram-logo',
        },
    ]
}

export const vCard = process.env.ENC_VCARD || 'BEGIN:VCARD\nVERSION:3.0\nN:Purohit;Shreyas;;;\nEND:VCARD'
export const vCardGzip = process.env.ENC_VCARD_GZIP || ''
