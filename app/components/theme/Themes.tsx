import { useRoomStore } from "../../store/useRoom";
import Image from "next/image";
import img1 from "../../../public/images/img-2.jpg";
import img2 from "../../../public/images/img-3.jpg";
import img3 from "../../../public/images/img-4.jpg";
import img4 from "../../../public/images/img-5.jpg";
import img5 from "../../../public/images/img-6.jpg";
import img6 from "../../../public/images/img-7.jpg";
import img7 from "../../../public/images/img-2.jpg";
import img8 from "../../../public/images/img-2.jpg";
import img9 from "../../../public/images/img-3.jpg";
import img10 from "../../../public/images/img-4.jpg";
import img11 from "../../../public/images/img-5.jpg";
import img12 from "../../../public/images/img-6.jpg";
import theme from ".";

const themes = [
  { name: "Modern", src: img1 },
  { name: "Simple", src: img2 },
  { name: "Luxury", src: img3 },
  { name: "Futuristic", src: img4 },
  { name: "Tropical", src: img5 },
  { name: "Coastal", src: img6 },
  { name: "Vintage", src: img7 },
  { name: "Traditional", src: img8 },
  { name: "Japanese", src: img9 },
  { name: "Indian", src: img10 },
  { name: "Industrial", src: img11 },
  { name: "Minimalist", src: img12 },
];

const Themes: React.FC = () => {
  const selectedTheme = useRoomStore((state) => state.selectedTheme);
  const setSelectedTheme = useRoomStore((state) => state.setSelectedTheme);

  const handleClick = (theme: string) => {
    setSelectedTheme(theme);
    console.log(theme);
  };

  return (
    <div className="w-10/12">
      {selectedTheme && (
        <div className=" flex justify-center items-center  text-center text-md  m-4">
          Selected Theme :{" "}
          <div className="text-blue-400 ml-2 font-bold">{selectedTheme}</div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3  gap-3 m-6">
        {themes.map((theme, index) => (
          <div key={index} onClick={() => handleClick(theme.name)}>
            <Image
              src={theme.src}
              alt={theme.name}
              width={300}
              height={200}
              className="w-full h-auto rounded cursor-pointer  hover:opacity-75 hover:border-2 hover:border-blue-400"
            />
            <p
              className={`text-center mt-2 ${
                selectedTheme === theme.name ? "text-blue-400" : "text-gray-200"
              }`}
            >
              {theme.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
