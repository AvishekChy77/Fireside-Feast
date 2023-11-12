import { Parallax } from "react-parallax";

const Cover = ({ image, txt, subtxt }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero  h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{txt}</h1>
            <p className="mb-5">{subtxt}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
