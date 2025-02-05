import { useMemo } from "react";
import SlidingButton from "../Button/SlidingButton";
import Globe from "../Globe";
import { Link } from "react-router-dom";
// import CountDownTimer from "../CountDownTimer";

const LandingPart = () => {
  const MemoizedGlobe = useMemo(
    () => (
      <Globe className="w-[450px] sm:w-[500px] overflow-hidden aspect-square absolute -right-52 sm:-right-48 top-32 sm:top-32" />
    ),
    []
  );

  return (
    <>
      <div className="w-full h-[90vh] max-h-[900px] sm:h-screen flex flex-col items-center relative overflow-hidden">
        <div className="relative h-full flex flex-col justify-between pb-16 sm:pb-8 landing-parent items-center sm:text-base w-max ">
          <div className="flex flex-col gap-28 sm:gap-5 items-center">
            <div className="relative">
              <img
                src="/images/moons.png"
                alt="decoration moons image"
                className="rotate-90 h-[100px] sm:h-[120px] opacity-50"
              />
            </div>

            {/* <h3 className="font-bold leading-none h-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]  text-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]">
          SYNCHRONIZE'25
        </h3> */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col">
                <h1 className="sm:mt-10 z-10 font-bold leading-none tracking-wider max-[370px]:h-[clamp(1.7rem,9vi+-0.6rem,7rem)] max-[370px]:text-[clamp(1.7rem,9vi+-0.6rem,7rem)] h-[clamp(1.9rem,9vi+-0.6rem,7rem)] text-[clamp(1.9rem,9vi+-0.6rem,7rem)] max-[1500px]:h-[clamp(1.9rem,9vi+-0.6rem,6rem)] max-[1500px]:text-[clamp(1.9rem,9vi+-0.6rem,6rem)]">
                  SYNCHRONIZE 3.0
                </h1>

                <div className="relative z-10 flex flex-row items-center justify-center mt-4 w-full max-w-[90%] self-end">
                  <img
                    src="/images/star.png"
                    alt="decoration star image"
                    className="w-10  sm:w-20 "
                  />

                  <div className="border-t border-primary-400 flex-1"></div>
                  <span className="ml-3 uppercase text-primary-400 text-sm sm:text-xl whitespace-nowrap">
                    ENTER THE COSMOS
                  </span>
                </div>
              </div>

              <span className="text-[#C3DB62] text-sm tracking-wider relative z-50">
                09th - 11th January 2025
              </span>
              <Link
                to="/gallery"
                className="text-sm relative z-10 underline text-white"
              >
                View Gallery
              </Link>
            </div>

            {/* Countdown Timer */}
            {/* <CountDownTimer /> */}
          </div>

          <div className="flex flex-col items-center  relative z-20">
            {/* <button className="border border-primary-400 text-sm rounded-full px-3 py-2">
              Register Now
            </button> */}
            <SlidingButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1qj8BEkXZ37PdWjDlmyRRc7lbWwpO1ACpArC1Tdb65EDATg/viewform?utm_source=website"
              primaryText="Register Now"
              secondaryText="Register Now"
            />

            <div className="mt-8 sm:mt-12 relative flex flex-col items-center">
              <div className="relative bg-[#303030] w-[2px] h-10 mb-2">
                <div className="absolute bg-[#C3DB62] w-[2px] h-1/2 animate-bounceMore"></div>
              </div>
              <span className="text-[#808080] text-xs uppercase">SCROLL</span>
            </div>
          </div>
        </div>

        {/* <Globe className="w-[450px] sm:w-[500px] overflow-hidden aspect-square absolute -right-52 sm:-right-48 top-32 sm:top-32" /> */}
        {MemoizedGlobe}
      </div>
      <img
        src="/images/saturn.webp"
        alt="planet saturn"
        loading="lazy"
        className="w-[270px] sm:w-[450px] z-[10000]  aspect-square absolute -left-20 sm:-left-36 -bottom-24 sm:-bottom-32"
      />
    </>
  );
};

export default LandingPart;
