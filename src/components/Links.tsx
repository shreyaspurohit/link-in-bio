import { Config } from "@/models/model";
import ShareButton from "./ShareButton";
import VCard from "./VCard";
import Tooltip from "./Tooltip";
import Link from 'next/link';

export default function Links({nativeShareTitle, horizontalLinks, verticalLinks, downloadUrl} : Config & {downloadUrl: string}) {

  return (
    <div className="flex flex-col gap-4 mt-1 items-center box-border"> 
      <div className="flex flex-row flex-nowrap gap-2 mt-1 items-center">        
        <VCard downloadUrl={downloadUrl}/>
        {horizontalLinks?.map((link) => (
          <Tooltip text={link.title} key={link.id}>
            <Link 
              title={link.title}
              key={link.id}
              href={link.url}
              className="flex flex-row mx-auto"
              target="_blank"
              prefetch={false} 
            >
              <link.icon 
                size={36} 
                aria-hidden={true}
                weight="fill"
                className="opacity-80 transition-opacity duration-100 hover:opacity-100 cursor-pointer"
              />
            </Link> 
          </Tooltip>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {verticalLinks?.map((link) => (
          <a
            title={link.title}
            key={link.id}
            href={link.url} //  transition-opacity 
            className="flex items-center border-2 rounded-2xl px-4 py-4 md:w-md text-red-100 gap-12 duration-300 transition-transform hover:scale-105 opacity-80 hover:opacity-100 hover:bg-neutral-50/20 cursor-pointer"
            target="_blank"
          >
            <div className="flex-1 mr-auto">
              {
                link.icon && (
                  <link.icon 
                    size={24} 
                    aria-hidden={true}
                    weight="fill"
                    alt={link.id}
                    className="flex-1"
                  />
                )
              }
            </div>
            <div className="flex-1 font-semibold items-center text-center">{link.title}</div>
            <ShareButton nativeShareTitle={nativeShareTitle} urlTitle={link.title} url={link.url} />
          </a>
        ))}
      </div>
    </div>
  );
    
}
