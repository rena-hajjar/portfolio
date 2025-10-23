import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
// Images will be loaded from public directory
import "./ArtModal.css";

const imageList = [
  {
    id: 1,
    title: "Water Swim",
    img: "/art_items/agua/agua.png",
  },
  {
    id: 8,
    title: "Frank",
    img: "/art_items/frankenstein.png",
  },
  {
    id: 9,
    title: "Flower Head",
    img: "/art_items/flower_head.png",
  },
  {
    id: 2,
    title: "Christie Drums",
    img: "/art_items/christie_drums/chris.png",
  },
  {
    id: 3,
    title: "JimmyH",
    img: "/art_items/jimmy/jim.png",
  },
  {
    id: 4,
    title: "Art Class Perspective Paintint",
    img: "/art_items/art_class.jpg",
  },
  {
    id: 5,
    title: "Orange",
    img: "/art_items/orange/orange.jpg",
  },
  {
    id: 6,
    title: "birds",
    img: "/art_items/birds.jpg",
  },
  {
    id: 7,
    title: "finger",
    img: "/art_items/finger_painting.jpg",
  },
  {
    id: 10,
    title: "Ballet",
    img: "/art_items/ballet.jpg",
  },
  {
    id: 11,
    title: "Old Birds",
    img: "/art_items/old_bird.jpg",
  },
];

export default function ArtModal() {
  return (
    <div>
      <div className="modal-header">
        {/* <ArrowRight /> */}
        <div className="modal-title">My Art.</div>
        {/* <ArrowLeft /> */}
      </div>
      <div className="art-modal-body">
        <div className="gallery">
          <div className="art-text-body">
            I’ve painted in acrylic since I was 10, but my age has allowed me to
            finally delve into oils. As a perfectionist, I struggle with not
            being good at something from the get go. But this practice allows me
            to strengthen that.
          </div>
          <ImageList
            sx={{
              width: "inherit",
              columnCount: {
                xs: "2 !important",
                sm: "2 !important",
                md: "3 !important",
                lg: "3 !important",
                xl: "4 !important",
              },
            }}
            variant="masonry"
            gap={8}
          >
            {/* <div className="art-text">
                <div className="art-text-body">
                  I’ve painted in acrylic since I was 10, but my age has allowed
                  me to finally delve into oils. As a perfectionist, I struggle
                  with not being good at something from the get go. But this
                  practice allows me to strengthen that.
                </div>
              </div> */}
            {imageList.map((image) => (
              <ImageListItem key={image.id}>
                <Image
                  src={image.img}
                  alt={image.title}
                  width={300}
                  height={300}
                  sizes="28vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Image>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}
