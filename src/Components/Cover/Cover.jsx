import { Parallax } from "react-parallax";

const Cover = ({ image, txt, subtxt }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[250px] md:h-[400px] lg:h-[500px]">
        <div className="hero-overlay w-2/3 h-1/2 bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl uppercase font-bold">{txt}</h1>
            <p className="mb-5">{subtxt}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
