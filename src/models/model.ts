import type {StaticImageData} from 'next/image';
import type {Icon} from '@phosphor-icons/react';

export enum Backgrounds {
    burgandy = 'burgandy',
    black = 'black',
}

export type Link = {
    title: string;
    id: string;
    url: string;
    icon?: Icon;
    phosphorIcon?: string; // https://github.com/vnphanquang/phosphor-icons-tailwindcss
};


export type HeaderLink = Link & {
    icon: Icon; // make icon required for header links
    phosphorIcon: string; // make icon required for header links
};

export type Config = {
    title: string;
    bio?: string;
    nativeShareTitle: string;
    profileImage?: StaticImageData;
    horizontalLinks?: HeaderLink[];
    verticalLinks: Link[];
};

export const themes = ["burgundy", "silver", "fern", "mulberry", "eggplant", "onyx"];
