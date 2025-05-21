import Image from "next/image";

const Grid = ({ image, text }) => {
  return (
    <div className="relative group w-[300px] h-[300px] overflow-hidden rounded-lg">
      <Image
        src={image}
        alt="grid item"
        layout="fill"
        objectFit="cover"
        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className=" z-50 absolute inset-0 bg-[#05768ae7] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex  items-center justify-center text-white text-center p-4 mx-4 ">
      {text}
    </div>
    </div>
  
  );
};

export default Grid;
