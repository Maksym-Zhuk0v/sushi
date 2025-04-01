import { workTime, contactInfo } from "@/constants";
import bg from "../../public/black-plate-sushi.webp";
import ricePlate from "../../public/rice-plate.webp";
import salmonPlate from "../../public/salmon-plate.webp";
import herbsPlate from "../../public/herbs-plate.webp";
import {
  ArrowHover,
  WorkTime,
  ContactImageIcon,
  HeaderText,
} from "../(components)/UI";
import {
  Corner,
  MapComponent,
  PageComponent,
  PageLayout,
} from "../(components)";

function page() {
  return (
    <div className="page-style">
      <PageLayout text="Contact">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="h-auto md:min-full lg:h-full w-full flex flex-col gap-4">
          <div className="h-screen md:grow w-full md:h-full lg:h-0 gap-4 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="w-full h-full border-dflt rounded-2xl px-12 py-14 overflow-hidden 2xl:px-12 2xl:py-14 flex flex-col justify-between">
              <HeaderText className="text-2xl text-center mx-auto">
                OPENING HOURS
              </HeaderText>
              <div className="flex flex-col gap-2">
                {workTime.map((item) => (
                  <WorkTime key={item.name} name={item.name} time={item.time} />
                ))}
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-4">
              <ContactImageIcon img={bg} />
              <ContactImageIcon img={ricePlate} />
              <ContactImageIcon img={salmonPlate} />
              <ContactImageIcon img={herbsPlate} />
            </div>
          </div>
          <div className="h-screen md:grow w-full md:h-full lg:h-0 gap-4 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <MapComponent />
              <Corner>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.google.com/maps/dir//Bern+Schweiz/@46.9479739,7.4474468,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478e39c0d43a1b77:0xcb555ffe0457659a!2m2!1d7.4474468!2d46.9479739?entry=ttu"
                  }
                  className="flex items-center gap-4"
                >
                  <p className="text-base">SHOW ROUTE</p>
                  <ArrowHover />
                </a>
              </Corner>
            </div>
            <div className="w-full h-full border-dflt rounded-2xl overflow-hidden px-12 py-14 flex flex-col justify-between">
              <HeaderText className="text-2xl text-center mx-auto">
                GET IN TOUCH
              </HeaderText>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.name}
                    className="w-full flex justify-between text-sm"
                  >
                    <p className="grow w-1">{item.name}</p>
                    <p className="grow w-1 text-end">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageComponent>
    </div>
  );
}

export default page;
