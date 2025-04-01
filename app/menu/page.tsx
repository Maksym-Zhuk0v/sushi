import img from "../../public/menu-icon.webp";
import Link from "next/link";
import { menuData } from "@/constants";
import { TMenu } from "@/models/types/Menu";
import { PageComponent, PageLayout } from "../(components)";
import { HeaderText, MenuIcon } from "../(components)/UI";

const page = async () => {
  const sortMenuByType = (menuData: TMenu[]) => {
    let sortedMenu: { [key: string]: TMenu[] } = {};

    menuData.forEach((item) => {
      if (sortedMenu[item.type]) {
        sortedMenu[item.type].push(item);
      } else {
        sortedMenu[item.type] = [item];
      }
    });

    let sortedMenuArray: TMenu[][] = Object.values(sortedMenu);

    sortedMenuArray.forEach((array) => {
      array.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
    });

    return sortedMenuArray;
  };

  const sorted = sortMenuByType(menuData);

  return (
    <div className="page-style">
      <PageLayout text="Menu">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container h-full px-6 md:px-12 lg:px-6 xl:px-12 2xl:px-24 py-12">
          <div className="w-full flex gap-1 p-2 justify-center">
            {sorted.map((theme) => (
              <Link
                replace
                href={`#${theme[0].type.split(" ").join("-")}`}
                key={theme[0].type}
                className="font-raleway text-xs px-2 py-6px border-dflt rounded-md tracking-wide hover:border-border-hover cursor-pointer transition-all duration-300"
              >
                {theme[0].type.toUpperCase()}
              </Link>
            ))}
          </div>
          {sorted.map((theme) => (
            <div
              id={theme[0].type.split(" ").join("-")}
              className="w-full flex flex-col pt-16 pb-4"
              key={theme[0].type}
            >
              <HeaderText className="text-center mx-auto text-about-info-main">
                {theme[0].type.toUpperCase()}
              </HeaderText>
              <div className="flex flex-col gap-6 pt-12">
                {theme.map((item) => (
                  <MenuIcon key={item.name} card={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
