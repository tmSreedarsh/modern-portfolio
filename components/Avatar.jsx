import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
        priority
      />
    </div>
  );
};

export default Avatar;
