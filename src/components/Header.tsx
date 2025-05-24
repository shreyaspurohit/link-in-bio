import { StaticImageData } from "next/image";
import Image from 'next/image';

export default function Header({profileImage, title, bio}: {profileImage: StaticImageData | undefined, title: string, bio?: string}) {
  return(
    <header className="flex flex-col items-center box-border">
        <div className="flex overflow-hidden">
            {profileImage && <Image src={profileImage} alt={title} className="w-55 h-auto object-scale-down rounded-full"/>}
        </div>
        <div className="flex flex-col items-center md:w-md sm:w-sm mb-1">
            {bio && <h1 className="text-md font-medium text-red-100 mt-2">{bio}</h1>}
        </div>
    </header>
)
}
