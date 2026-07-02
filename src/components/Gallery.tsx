import { useState } from "react";
import IMAGE_DESC from "../content/IMAGE_DESC.json";
import Tag from "./Tag";

const Gallery = () => {
  const [name, setName] = useState(IMAGE_DESC[0].name);
  const [tags, setTags] = useState(IMAGE_DESC[0].tags);
  const [src, setSrc] = useState(IMAGE_DESC[0].src);
  const [alt, setAlt] = useState(IMAGE_DESC[0].alt);

  const handleClick = (img: any) => {
    setName(img.name);
    setSrc(img.src);
    setAlt(img.alt);
    setTags(img.tags);
  }

  return (
    <div className="flex flex-row gap-4 justify-between">
      <section className="grid grid-cols-4 sm:grid-cols-6 md:flex md:flex-wrap h-fit gap-1">
        {
          IMAGE_DESC.map((i) => (
            <img
              key={i.src}
              src={i.src}
              alt={i.alt}
              className="gallery-img size-full aspect-square md:size-24 object-cover cursor-pointer"
              onClick={() => { handleClick(i) }}
            />
          ))
        }
      </section>

      <section className="min-w-80 w-80 lg:min-w-100 lg:w-100 h-155 bg-off-white p-3 hidden md:flex flex-col shadow-md shadow-shadow">
        <div className="w-full h-fit aspect-square content-center mb-6">
          <img src={src} alt={alt} className="max-w-full max-h-full m-auto" />
        </div>

        <div className="flex flex-wrap gap-1">
          {tags.map((t: string) => <Tag key={t} content={t} />)}
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-s">{alt}</p>
        </div>
      </section>
    </div>
  );
}

export default Gallery;