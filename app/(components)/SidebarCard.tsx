import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Corner } from "./Corner";
import { ArrowHover } from "./UI";
import { forum } from "@/lib/fonts";

interface ISidebarCard {
  href: string;
  name: string;
  image: StaticImageData;
}

export const SidebarCard = ({ href, name, image }: ISidebarCard) => {
  return (
    <Link
      href={href}
      className="rounded-2xl w-full grow lg:w-full md:w-1 bg-default lg:h-1 overflow-hidden relative group"
    >
      <Image
        src={image}
        alt="name"
        className="bg-dflt transition-all duration-300 opacity-75 group-hover:opacity-100 object-cover"
      />
      <Corner>
        <div className="flex gap-2 items-center">
          <div className={`${forum.className} text-base`}>{name}</div>
          <ArrowHover />
        </div>
      </Corner>
    </Link>
  );
};
