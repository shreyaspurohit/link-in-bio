
import Link from 'next/link';
import Tooltip from './Tooltip';

export default function VCard({downloadUrl}: {downloadUrl: string}) {
  return (
    <Tooltip text="Download vCard">
        <Link href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download vCard"
            title="Download vCard"
            key="vcard"
            className="flex flex-row mx-auto"
            prefetch={false}
            download="contact.vcf">
            <i className="ph ph-[identification-card] opacity-80 transition-opacity duration-100 hover:opacity-100 cursor-pointer text-4xl"></i>
        </Link>
    </Tooltip>
  )
}
