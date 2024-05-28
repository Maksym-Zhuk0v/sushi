import SidebarCard from "./(components)/SidebarCard";
import sidebar1 from "../public/person-bring-plate.webp";
import sidebar2 from "../public/woman-sitting-at-table.webp";
import sidebar3 from "../public/modern-cafe-interior.webp";
import instagramIcon from "../public/ph_instagram-logo-light.png";
import twitterIcon from "../public/ph_twitter-logo-light.png";
import facebookIcon from "../public/ph_facebook-logo-light.png";
import Corner from "./(components)/Corner";
import PageLayout from "./(components)/PageLayout";

export default async function Home() {
  return (
    <div className="h-full page-style">
      <PageLayout text="SUSHI SENSATION">
        <video
          controls={false}
          muted
          loop
          autoPlay
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/mainPageVideo.mp4" type="video/mp4" />
          <track kind="subtitles" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-20 bottom-0 right-0">
          <Corner>
            <div className="flex gap-2">
              <a
                target="_blank"
                rel="noopener"
                href={"https://www.instagram.com"}
                className="link-icon link-icon--main-page"
                style={{
                  backgroundImage: `url(${instagramIcon.src})`,
                }}
              ></a>
              <a
                target="_blank"
                rel="noopener"
                href={"https://www.twitter.com"}
                className="link-icon link-icon--main-page"
                style={{
                  backgroundImage: `url(${facebookIcon.src})`,
                }}
              ></a>
              <a
                target="_blank"
                rel="noopener"
                href={"https://www.facebook.com"}
                className="link-icon link-icon--main-page"
                style={{
                  backgroundImage: `url(${twitterIcon.src})`,
                }}
              ></a>
            </div>
          </Corner>
        </div>
      </PageLayout>
      <div className="lg:h-screen px-4 pb-4 lg:pl-0 lg:py-4 xl:py-6 xl:pr-6">
        <div className="w-full flex flex-col md:flex-row lg:w-sidebar-xl xl:w-sidebar-lg  h-full md:flex gap-4 lg:flex lg:flex-col">
          <SidebarCard name="MENU" image={sidebar1} href="/menu" />
          <SidebarCard
            name="RESERVATION"
            href="/reservation"
            image={sidebar2}
          />
          <SidebarCard name="OUR RESTAURANT" href="/about" image={sidebar3} />
        </div>
      </div>
    </div>
  );
}
