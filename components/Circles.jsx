import Image from "next/image";

const Circles = ({ animated = true }) => {
  return (
    <div className={`w-[200px] xl:w-[300px] fixed -right-16 -bottom-2 mix-blend-color-dodge ${animated ? "animate-pulse" : ""} duration-75 z-10`}>
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
