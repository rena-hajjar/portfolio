import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import agua from "./../../data/art_items/agua/agua.png";
import chris from "./../../data/art_items/christie_drums/chris.png";
import jim from "./../../data/art_items/jimmy/jim.png";
import orange from "./../../data/art_items/orange/orange.jpg";
import birds from "./../../data/art_items/birds.jpg";
import finger from "./../../data/art_items/finger_painting.jpg";
import ballet from "./../../data/art_items/ballet.jpg";
import flowerhead from "./../../data/art_items/flower_head.png";
import frank from "./../../data/art_items/frankenstein.png";
import oldbirds from "./../../data/art_items/old_bird.jpg";
import artclass from "./../../data/art_items/art_class.jpg";
import './ArtModal.css';

const imageList = [
  {
    id: 1,
    title: "Water Swim",
    img: agua,
  },
  {
    id: 8,
    title: "Frank",
    img: frank,
  },
  {
    id: 9,
    title: "Flower Head",
    img: flowerhead,
  },
  {
    id: 2,
    title: "Christie Drums",
    img: chris,
  },
  {
    id: 3,
    title: "JimmyH",
    img: jim,
  },
  {
    id: 4,
    title: "Art Class Perspective Paintint",
    img: artclass,
  },
  {
    id: 5,
    title: "Orange",
    img: orange,
  },
  {
    id: 6,
    title: "birds",
    img: birds,
  },
  {
    id: 7,
    title: "finger",
    img: finger,
  },
  {
    id: 10,
    title: "Ballet",
    img: ballet,
  },
  {
    id: 11,
    title: "Old Birds",
    img: oldbirds,
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
              I’ve painted in acrylic since I was 10, but my age has allowed me
              to finally delve into oils. As a perfectionist, I struggle with
              not being good at something from the get go. But this practice
              allows me to strengthen that.
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
                    sizes="28vw"
                    alt={image.title}
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