import { TMenu } from "@/models/types/Menu";
import { raleway } from "@/lib/fonts";

interface IMenuIcon {
  card: TMenu;
}

export const MenuIcon = ({ card }: IMenuIcon) => {
  return (
    <div className="w-full flex gap-6 items-center">
      <div
        className="h-100 hidden sm:block w-150 bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
        style={{
          backgroundImage: `url(${card.image})`,
        }}
      />
      <div className="flex grow w-1 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-end">
            <p className="text-xl">{card.name}</p>
            <div className="h-2 grow border-dflt-top border-dotted" />
          </div>
          <p className={`${raleway.className} text-sm text-text-secondary`}>
            {card.title}
          </p>
        </div>
        <p className="text-xl">${card.price}</p>
      </div>
    </div>
  );
};
