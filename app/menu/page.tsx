import PageLayout from "../(components)/PageLayout";
import img from "../../public/menu-icon.webp";
import MenuIcon from "../(components)/UI/MenuIcon";
import { Raleway } from "next/font/google";
import PageComponent from "../(components)/PageComponent";
import HeaderText from "../(components)/UI/HeaderText";
import Link from "next/link";
import { TMenu } from "@/models/types/Menu";

interface MenuData {
  menu: TMenu[];
}

const releway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

const getMenu = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Menu", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const page = async () => {
  const data = await getMenu();

  function sortMenuByType(menuData: MenuData): TMenu[][] {
    let sortedMenu: { [key: string]: TMenu[] } = {};

    menuData.menu.forEach((item) => {
      if (sortedMenu[item.type]) {
        sortedMenu[item.type].push(item);
      } else {
        sortedMenu[item.type] = [item];
      }
    });

    let sortedMenuArray: TMenu[][] = Object.values(sortedMenu);

    sortedMenuArray.forEach((array) => {
      array.sort((a, b) => a.sort - b.sort);
    });

    return sortedMenuArray;
  }

  const sorted = sortMenuByType(data);

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
                className={`${releway.className} text-xs px-2 py-6px border-dflt rounded-md tracking-wide hover:border-border-hover cursor-pointer transition-all duration-300`}
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

//and here data of menu
const menuData = {
  menu: [
    {
      _id: "6647d7aa97c2c2ac0a3820cc",
      type: "maki",
      name: "SPICY TUNA MAKI",
      title:
        "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: 5,
      image:
        "https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp",
    },
    {
      _id: "6647d7b897c2c2ac0a384e17",
      type: "maki",
      name: "MANGO MAKI",
      title:
        "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: 5,
      image:
        "https://framerusercontent.com/images/fhMMbGkmrMBjUIswKIN5x3w.webp",
    },
    {
      _id: "6647d7c397c2c2ac0a38737b",
      type: "maki",
      name: "SALMON MAKI",
      title:
        "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: 5,
      image:
        "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
    },
    {
      _id: "6647d7cb97c2c2ac0a388ed5",
      type: "maki",
      name: "TUNA MAKI",
      title:
        "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: 5,
      image:
        "https://framerusercontent.com/images/quqbVpcYdgH65rZqF71BSohYQ.webp",
    },
    {
      _id: "6647d7d597c2c2ac0a38af2c",
      type: "uramaki",
      name: "VOLCANO DELIGHT",
      title:
        "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
      price: 12,
      image:
        "https://framerusercontent.com/images/quqbVpcYdgH65rZqF71BSohYQ.webp",
    },
    {
      _id: "6647d7de97c2c2ac0a38d028",
      type: "uramaki",
      name: "RAINBOW FUSION",
      title:
        "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
      price: 12,
      image:
        "https://framerusercontent.com/images/05utisiCSaVR87iUNMsXid3Jgs.webp",
    },
    {
      _id: "6647d7ec97c2c2ac0a390203",
      type: "uramaki",
      name: "DRAGON ELEGANCE",
      title:
        "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
      price: 12,
      image:
        "https://framerusercontent.com/images/Ed2EhaCAbs1wRkDTc5vxXiOczE4.webp",
    },
    {
      _id: "6647d7f897c2c2ac0a392622",
      type: "uramaki",
      name: "SUNSET SERENITY",
      title:
        "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
      price: 12,
      image:
        "https://framerusercontent.com/images/dewXkdK3qGBrcu5aDMswBstC4c.webp",
    },
    {
      _id: "6647d80597c2c2ac0a395a2e",
      type: "uramaki",
      name: "MYSTIC GARDEN",
      title:
        "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
      price: 12,
      image:
        "https://framerusercontent.com/images/IioQcyucvy3RI3a1KSX7R95jxO4.webp",
    },
    {
      _id: "6647d80e97c2c2ac0a397dbf",
      type: "uramaki",
      name: "OCEAN BREEZE",
      title:
        "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
      price: 12,
      image: "https://framerusercontent.com/images/KrDf3YKIs1qO70tsAQ00Ws.webp",
    },
    {
      _id: "6647d81797c2c2ac0a399db6",
      type: "uramaki",
      name: "TOKYO BLOSSOM",
      title:
        "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
      price: 12,
      image:
        "https://framerusercontent.com/images/cOFzDBu3VcpPMyZrfpoqGTFdA4.webp",
    },
    {
      _id: "6647d82197c2c2ac0a39c282",
      type: "special rolls",
      name: "SUNRISE BLISS",
      title:
        "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
      price: 16,
      image:
        "https://framerusercontent.com/images/27vE5qIMgg0IarFBK9fDPTLr9ZA.webp",
    },
    {
      _id: "6647d82997c2c2ac0a39df9d",
      type: "special rolls",
      name: "MANGO TANGO",
      title:
        "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
      price: 16,
      image:
        "https://framerusercontent.com/images/bCZ9FLkc5BuH3LlY2ajVeE5Cb4o.webp",
    },
    {
      _id: "6647d83297c2c2ac0a3a00d1",
      type: "special rolls",
      name: "TRUFFLE INDULGENCE",
      title:
        "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
      price: 16,
      image:
        "https://framerusercontent.com/images/obWS2NDDG7Rnd4D7xOGDyh4FCA.webp",
    },
    {
      _id: "6647d84d97c2c2ac0a3a61d4",
      type: "special rolls",
      name: "ETERNAL EEL",
      title:
        "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
      price: 16,
      image:
        "https://framerusercontent.com/images/zoCG6siF05pS2bpapbv0gEtdPqE.webp",
    },
  ],
};
