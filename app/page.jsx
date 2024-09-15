import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// comp
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex  flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-2">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Graphic Designer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Dwiki</span>
            </h1>
            <h3 className="h3">
              Selamat Datang di Dunia Visual yang{" "}
              <span className="text-accent">Elegan</span>
            </h3>
            <p className="max-w-[500px] mb-9 text-white/80">
              <br />
              Saya adalah seorang desainer grafis yang berkomitmen untuk
              menghadirkan karya visual yang menggugah, memikat, dan
              menyampaikan esensi cerita di setiap goresannya.
            </p>

            {/* btn & social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border 
              border-accent rounded-full flex justify-center items-center
              text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
