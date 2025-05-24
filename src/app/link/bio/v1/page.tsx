import Links from "@/components/Links";
import { shreyConfig } from "@/*/../../shrey-link-in-bio";
import Header from "@/components/Header";
import ParticlesComponent from "@/components/Particles";

export default function Home() {
  
  return (
    <div className="items-center justify-items-center min-h-screen p-4 pb-5 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-burgandy to-neutral-950">
      <ParticlesComponent />
      <Header profileImage={shreyConfig.profileImage} title={shreyConfig.title} bio={shreyConfig.bio} />
      <Links title={shreyConfig.title} nativeShareTitle={shreyConfig.nativeShareTitle} verticalLinks={shreyConfig.verticalLinks}  horizontalLinks={shreyConfig.horizontalLinks} downloadUrl="/api/vcard/gzip"/>
    </div>
  );
}
