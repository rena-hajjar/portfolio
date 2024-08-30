import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Image from "next/image";
import inject from "./../data/projects/injecto.png";
import fresh from "./../data/projects/freshsave.png";
import grfn from "./../data/projects/grfn.jpeg";
import Github from "../data/svgs/github";
import ReactSVG from "../data/svgs/reactjs.svg";
import OpenAI from "../data/svgs/openai.svg";
import CSS from "../data/svgs/css.svg";
import Java from "../data/svgs/java.svg";
import Typescript from "../data/svgs/typescript.svg";
import Node from '../data/svgs/nodejs.svg';
import Docker from '../data/svgs/docker.svg';
import Next from '../data/svgs/next.svg';

import {
  Button,
  createTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
} from "@mui/material";
import Linkedin from "../data/svgs/linkedin";

const projects = [
  {
    id: 1,
    title: "Fresh Save",
    about:
      "This project was built to tackle food waste in Kingston during a 48-hour sprint. It included setting up a MongoDB backend to manage inventory efficiently and integrating OpenAI's API with Python to create meal kits using food close to expiry. On the frontend, a user-friendly interface was designed with React, making it easy for nonprofits to arrange same-day pickups. The project's goals and impact were presented at the final conference, highlighting expertise in backend development, frontend design, and API integration.",
    images: [fresh, grfn, inject],
    tech: [
      <svg
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z"
          fill="#61DAFB"
        />
        <path
          d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
        <path
          d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
        <path
          d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
      </svg>,
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.1455 0.27356L52.8141 5.28569C53.414 6.21062 54.064 7.02931 54.8295 7.79175C57.074 10.0082 59.1661 12.3739 61.0916 14.8725C65.6131 20.8095 68.6629 27.4028 70.8409 34.5335C72.1471 38.8894 72.8564 43.3578 72.9095 47.8763C73.1282 61.3846 68.4973 72.9838 59.1605 82.6237C57.6417 84.1524 56.001 85.5548 54.2546 86.8171C53.3296 86.8171 52.8922 86.1078 52.511 85.4547C51.8167 84.2437 51.3547 82.9137 51.1486 81.5331C50.8205 79.8989 50.6048 78.2646 50.7111 76.5772V75.8148C50.6361 75.6523 49.8205 0.657906 50.1455 0.27356Z"
          fill="#599636"
        />
        <path
          d="M50.1455 0.10799C50.0361 -0.110744 49.9268 0.0548687 49.8174 0.161111C49.8705 1.25478 49.4893 2.22971 48.8925 3.16089C48.2363 4.08582 47.3676 4.79514 46.4958 5.55759C41.6524 9.75103 37.8401 14.8163 34.7872 20.4815C30.725 28.1059 28.6314 36.2772 28.0377 44.8797C27.7659 47.9826 29.0189 58.9318 29.997 62.0909C32.6655 70.4778 37.4589 77.5054 43.6679 83.6049C45.1927 85.0736 46.8239 86.436 48.5113 87.7453C49.0018 87.7453 49.055 87.3078 49.1675 86.9828C49.3825 86.2874 49.5465 85.5773 49.658 84.858L50.7517 76.6898L50.1455 0.10799Z"
          fill="#6CAC48"
        />
        <path
          d="M52.814 90.1357C52.9234 88.8858 53.5234 87.8484 54.1765 86.8141C53.5203 86.5422 53.0328 86.0016 52.6516 85.3986C52.3228 84.8276 52.0507 84.2258 51.8391 83.6018C51.0767 81.3145 50.9142 78.9147 50.6955 76.5774V75.1619C50.4236 75.3806 50.3673 77.2305 50.3673 77.5054C50.2083 79.9758 49.8805 82.4324 49.3862 84.858C49.2237 85.8391 49.1143 86.8172 48.5112 87.689C48.5112 87.7984 48.5112 87.9077 48.5644 88.0702C49.5455 90.9575 49.8143 93.8979 49.9799 96.8945V97.9882C49.9799 99.2943 49.9268 99.0194 51.0111 99.4568C51.4485 99.6193 51.936 99.6756 52.3735 100.001C52.7016 100.001 52.7547 99.7287 52.7547 99.5099L52.5922 97.7132V92.7011C52.5391 91.8262 52.7016 90.9575 52.8109 90.1388L52.814 90.1357Z"
          fill="#C2BFBF"
        />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="100"
        viewBox="0 0 89 100"
        fill="none"
      >
        <path
          d="M88.1749 0.000488281L80.142 89.99L44.0335 100L8.02445 90.0041L0 0.000488281H88.1749Z"
          fill="#264DE4"
        />
        <path
          d="M73.2648 84.2598L80.1295 7.35962H44.0874V92.3489L73.2648 84.2598Z"
          fill="#2965F1"
        />
        <path
          d="M18.3959 40.7407L19.3852 51.7792H44.0874V40.7407H18.3959Z"
          fill="#EBEBEB"
        />
        <path
          d="M44.0875 18.3982H44.0493H16.408L17.4114 29.4369H44.0875V18.3982Z"
          fill="#EBEBEB"
        />
        <path
          d="M44.0874 80.8935V69.4088L44.039 69.4217L31.7453 66.1021L30.9594 57.2983H24.9856H19.8784L21.4249 74.6305L44.0366 80.9077L44.0874 80.8935Z"
          fill="#EBEBEB"
        />
        <path
          d="M57.6421 51.779L56.3608 66.0952L44.0493 69.4182V80.9024L66.679 74.6306L66.845 72.7657L69.439 43.7047L69.7083 40.7406L71.7011 18.3982H44.0493V29.4369H59.6038L58.5994 40.7406H44.0493V51.779H57.6421Z"
          fill="white"
        />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="99"
        height="100"
        viewBox="0 0 99 100"
        fill="none"
      >
        <path
          d="M92.0601 40.9371C93.3101 37.4996 93.6226 34.0621 93.3101 30.6246C92.9976 27.1871 91.7476 23.7496 90.1851 20.6246C87.3726 15.9371 83.3101 12.1871 78.6226 9.99963C73.6226 7.81213 68.3101 7.18713 62.9976 8.43713C60.4976 5.93713 57.6851 3.74963 54.5601 2.18713C51.4351 0.624634 47.6851 -0.000366211 44.2476 -0.000366211C38.9351 -0.000366211 33.6226 1.56213 29.2476 4.68713C24.8726 7.81213 21.7476 12.1871 20.1851 17.1871C16.4351 18.1246 13.3101 19.6871 10.1851 21.5621C7.37257 23.7496 5.18507 26.5621 3.31007 29.3746C0.497572 34.0621 -0.439928 39.3746 0.185072 44.6871C0.810072 49.9996 2.99757 54.9996 6.43507 59.0621C5.18507 62.4996 4.87257 65.9371 5.18507 69.3746C5.49757 72.8121 6.74757 76.2496 8.31007 79.3746C11.1226 84.0621 15.1851 87.8121 19.8726 89.9996C24.8726 92.1871 30.1851 92.8121 35.4976 91.5621C37.9976 94.0621 40.8101 96.2496 43.9351 97.8121C47.0601 99.3746 50.8101 99.9996 54.2476 99.9996C59.5601 99.9996 64.8726 98.4371 69.2476 95.3121C73.6226 92.1871 76.7476 87.8121 78.3101 82.8121C81.7476 82.1871 85.1851 80.6246 87.9976 78.4371C90.8101 76.2496 93.3101 73.7496 94.8726 70.6246C97.6851 65.9371 98.6226 60.6246 97.9976 55.3121C97.3726 49.9996 95.4976 44.9996 92.0601 40.9371ZM54.5601 93.4371C49.5601 93.4371 45.8101 91.8746 42.3726 89.0621C42.3726 89.0621 42.6851 88.7496 42.9976 88.7496L62.9976 77.1871C63.6226 76.8746 63.9351 76.5621 64.2476 75.9371C64.5601 75.3121 64.5601 74.9996 64.5601 74.3746V46.2496L72.9976 51.2496V74.3746C73.3101 85.3121 64.5601 93.4371 54.5601 93.4371ZM14.2476 76.2496C12.0601 72.4996 11.1226 68.1246 12.0601 63.7496C12.0601 63.7496 12.3726 64.0621 12.6851 64.0621L32.6851 75.6246C33.3101 75.9371 33.6226 75.9371 34.2476 75.9371C34.8726 75.9371 35.4976 75.9371 35.8101 75.6246L60.1851 61.5621V71.2496L39.8726 83.1246C35.4976 85.6246 30.4976 86.2496 25.8101 84.9996C20.8101 83.7496 16.7476 80.6246 14.2476 76.2496ZM8.93507 32.8121C11.1226 29.0621 14.5601 26.2496 18.6226 24.6871V25.3121V48.4371C18.6226 49.0621 18.6226 49.6871 18.9351 49.9996C19.2476 50.6246 19.5601 50.9371 20.1851 51.2496L44.5601 65.3121L36.1226 70.3121L16.1226 58.7496C11.7476 56.2496 8.62257 52.1871 7.37257 47.4996C6.12257 42.8121 6.43507 37.1871 8.93507 32.8121ZM77.9976 48.7496L53.6226 34.6871L62.0601 29.6871L82.0601 41.2496C85.1851 43.1246 87.6851 45.6246 89.2476 48.7496C90.8101 51.8746 91.7476 55.3121 91.4351 59.0621C91.1226 62.4996 89.8726 65.9371 87.6851 68.7496C85.4976 71.5621 82.6851 73.7496 79.2476 74.9996V51.2496C79.2476 50.6246 79.2476 49.9996 78.9351 49.6871C78.9351 49.6871 78.6226 49.0621 77.9976 48.7496ZM86.4351 36.2496C86.4351 36.2496 86.1226 35.9371 85.8101 35.9371L65.8101 24.3746C65.1851 24.0621 64.8726 24.0621 64.2476 24.0621C63.6226 24.0621 62.9976 24.0621 62.6851 24.3746L38.3101 38.4371V28.7496L58.6226 16.8746C61.7476 14.9996 65.1851 14.3746 68.9351 14.3746C72.3726 14.3746 75.8101 15.6246 78.9351 17.8121C81.7476 19.9996 84.2476 22.8121 85.4976 25.9371C86.7476 29.0621 87.0601 32.8121 86.4351 36.2496ZM33.9351 53.7496L25.4976 48.7496V25.3121C25.4976 21.8746 26.4351 18.1246 28.3101 15.3121C30.1851 12.1871 32.9976 9.99963 36.1226 8.43713C39.2476 6.87463 42.9976 6.24963 46.4351 6.87463C49.8726 7.18713 53.3101 8.74963 56.1226 10.9371C56.1226 10.9371 55.8101 11.2496 55.4976 11.2496L35.4976 22.8121C34.8726 23.1246 34.5601 23.4371 34.2476 24.0621C33.9351 24.6871 33.9351 24.9996 33.9351 25.6246V53.7496ZM38.3101 43.7496L49.2476 37.4996L60.1851 43.7496V56.2496L49.2476 62.4996L38.3101 56.2496V43.7496Z"
          fill="#193718"
        />
      </svg>,
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.000488281H100V100H0V0.000488281Z" fill="#017ACB" />
        <path
          d="M48.0157 37.0317H52.8126V45.313H39.8438V82.1567L39.5 82.2505C39.0313 82.3755 32.8594 82.3755 31.5313 82.2349L30.4688 82.1411V45.313H17.5V37.0317L21.6094 36.9849C23.8594 36.9536 29.6406 36.9536 34.4532 36.9849C39.2657 37.0161 45.3594 37.0317 48.0157 37.0317ZM84.6251 78.2505C82.7189 80.2661 80.672 81.3911 77.2657 82.313C75.7813 82.7192 75.5313 82.7349 72.1876 82.7192C68.8438 82.7036 68.5782 82.7036 66.9532 82.2817C62.7501 81.2036 59.3594 79.0942 57.0469 76.1099C56.3907 75.2661 55.3126 73.5161 55.3126 73.2974C55.3126 73.2349 55.4688 73.0942 55.6719 73.0005C55.8751 72.9067 56.2969 72.6411 56.6407 72.438C56.9844 72.2349 57.6094 71.8599 58.0313 71.6411C58.4532 71.4224 59.6719 70.7036 60.7345 70.063C61.797 69.4224 62.7657 68.9067 62.8751 68.9067C62.9845 68.9067 63.1876 69.1255 63.3438 69.3911C64.2813 70.9692 66.4688 72.9849 68.0157 73.6724C68.9688 74.0786 71.0782 74.5317 72.0938 74.5317C73.0313 74.5317 74.7501 74.1255 75.672 73.7036C76.6563 73.2505 77.1564 72.7974 77.7501 71.8911C78.1564 71.2505 78.2032 71.0786 78.1876 69.8599C78.1876 68.7349 78.1251 68.4224 77.8126 67.9067C76.9376 66.4692 75.7501 65.7192 70.9376 63.5942C65.9688 61.3911 63.7345 60.0786 61.9219 58.313C60.5782 57.0005 60.3126 56.6411 59.4688 55.0005C58.3751 52.8911 58.2344 52.2036 58.2188 49.063C58.2032 46.8599 58.2501 46.1411 58.4844 45.3911C58.8126 44.2661 59.8751 42.0942 60.3594 41.5474C61.3594 40.3755 61.7188 40.0161 62.422 39.438C64.547 37.688 67.8595 36.5317 71.0313 36.4224C71.3907 36.4224 72.5782 36.4849 73.6876 36.563C76.8751 36.8286 79.047 37.6099 81.1407 39.2817C82.7189 40.5317 85.1095 43.4692 84.8751 43.8599C84.7189 44.0942 78.4845 48.2505 78.0782 48.3755C77.8282 48.4536 77.6564 48.3599 77.3126 47.9536C75.1876 45.4067 74.3282 44.8599 72.2657 44.7349C70.797 44.6411 70.0157 44.813 69.0313 45.4692C68.0001 46.1567 67.5001 47.2036 67.5001 48.6567C67.5157 50.7817 68.3282 51.7817 71.3282 53.2661C73.2657 54.2192 74.922 55.0005 75.047 55.0005C75.2345 55.0005 79.2501 57.0005 80.297 57.6255C85.172 60.4849 87.1564 63.4224 87.672 68.4849C88.047 72.2974 86.9689 75.7817 84.6251 78.2505Z"
          fill="white"
        />
      </svg>,
    ],
    ghlink: "https://github.com/SaulWolkove/QHACKS24",
    background: fresh,
  },
  {
    id: 2,
    title: "Good Reads For Nerds",
    about:
      "This project involved developing a dynamic web application with a React frontend and Spring Boot backend, integrated with MongoDB. Features were implemented to allow users to comment on and annotate individual book chapters, enhancing reading comprehension and providing a platform for sharing thoughts. The project is currently being expanded to include user accounts, authentication, and comprehensive unit testing. Future enhancements are planned to create user-driven 'book clubs' for collaborative discussions and idea sharing, imitating common social media functions.",
    images: [grfn],
    tech: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M91.0588 5.74655C89.6221 9.23928 87.7643 12.3357 85.7083 15.1101C76.642 5.8704 63.9592 -0.000366211 49.9635 -0.000366211C22.4675 -0.000366211 0 22.3432 0 49.9383C0 64.3551 6.16802 77.3353 15.9526 86.5006L17.8105 88.1603C26.4556 95.4678 37.7017 99.9018 49.9387 99.9018C76.1961 99.9018 97.8214 79.416 99.6792 53.5549C101.165 40.9959 97.3507 24.9194 91.0588 5.74655ZM23.1858 86.9217C21.7491 88.7795 19.0738 88.9777 17.216 87.541C15.3581 86.1042 15.16 83.429 16.5967 81.5711C18.0334 79.7133 20.7087 79.5151 22.5665 80.9518C24.3253 82.3886 24.6225 85.0639 23.1858 86.9217ZM90.7616 71.9847C78.4999 88.3584 52.1433 82.8097 35.3485 83.6271C35.3485 83.6271 32.3512 83.8253 29.3786 84.2464C29.3786 84.2464 30.5181 83.7262 31.9548 83.206C43.7954 79.094 49.369 78.2518 56.5774 74.5609C70.0777 67.6497 83.5532 52.5145 86.2532 36.8591C81.1008 51.8952 65.4454 64.8753 51.2268 70.1268C41.4422 73.7434 23.8299 77.2362 23.8299 77.2362L23.1115 76.8151C11.1718 70.9443 10.7507 44.9841 32.5989 36.6362C42.1853 32.9205 51.2516 34.9765 61.6555 32.5242C72.6786 29.948 85.4606 21.6992 90.5882 10.899C96.3103 28.3131 103.321 55.2889 90.7616 71.9847Z"
          fill="#6CB52D"
        />
        <path
          d="M23.1858 86.9217C21.7491 88.7795 19.0738 88.9777 17.216 87.541C15.3581 86.1042 15.16 83.4289 16.5967 81.5711C18.0334 79.7133 20.7087 79.5151 22.5666 80.9518C24.3253 82.3886 24.6226 85.0638 23.1858 86.9217Z"
          fill="#6CB52D"
        />
      </svg>,
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.1455 0.27356L52.8141 5.28569C53.414 6.21062 54.064 7.02931 54.8295 7.79175C57.074 10.0082 59.1661 12.3739 61.0916 14.8725C65.6131 20.8095 68.6629 27.4028 70.8409 34.5335C72.1471 38.8894 72.8564 43.3578 72.9095 47.8763C73.1282 61.3846 68.4973 72.9838 59.1605 82.6237C57.6417 84.1524 56.001 85.5548 54.2546 86.8171C53.3296 86.8171 52.8922 86.1078 52.511 85.4547C51.8167 84.2437 51.3547 82.9137 51.1486 81.5331C50.8205 79.8989 50.6048 78.2646 50.7111 76.5772V75.8148C50.6361 75.6523 49.8205 0.657906 50.1455 0.27356Z"
          fill="#599636"
        />
        <path
          d="M50.1455 0.10799C50.0361 -0.110744 49.9268 0.0548687 49.8174 0.161111C49.8705 1.25478 49.4893 2.22971 48.8925 3.16089C48.2363 4.08582 47.3676 4.79514 46.4958 5.55759C41.6524 9.75103 37.8401 14.8163 34.7872 20.4815C30.725 28.1059 28.6314 36.2772 28.0377 44.8797C27.7659 47.9826 29.0189 58.9318 29.997 62.0909C32.6655 70.4778 37.4589 77.5054 43.6679 83.6049C45.1927 85.0736 46.8239 86.436 48.5113 87.7453C49.0018 87.7453 49.055 87.3078 49.1675 86.9828C49.3825 86.2874 49.5465 85.5773 49.658 84.858L50.7517 76.6898L50.1455 0.10799Z"
          fill="#6CAC48"
        />
        <path
          d="M52.814 90.1357C52.9234 88.8858 53.5234 87.8484 54.1765 86.8141C53.5203 86.5422 53.0328 86.0016 52.6516 85.3986C52.3228 84.8276 52.0507 84.2258 51.8391 83.6018C51.0767 81.3145 50.9142 78.9147 50.6955 76.5774V75.1619C50.4236 75.3806 50.3673 77.2305 50.3673 77.5054C50.2083 79.9758 49.8805 82.4324 49.3862 84.858C49.2237 85.8391 49.1143 86.8172 48.5112 87.689C48.5112 87.7984 48.5112 87.9077 48.5644 88.0702C49.5455 90.9575 49.8143 93.8979 49.9799 96.8945V97.9882C49.9799 99.2943 49.9268 99.0194 51.0111 99.4568C51.4485 99.6193 51.936 99.6756 52.3735 100.001C52.7016 100.001 52.7547 99.7287 52.7547 99.5099L52.5922 97.7132V92.7011C52.5391 91.8262 52.7016 90.9575 52.8109 90.1388L52.814 90.1357Z"
          fill="#C2BFBF"
        />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="100"
        viewBox="0 0 74 100"
        fill="none"
      >
        <path
          d="M23.7526 77.3362C23.7526 77.3362 19.9313 79.5584 26.4722 80.3103C34.3966 81.2143 38.4463 81.0848 47.179 79.4319C47.179 79.4319 49.475 80.8715 52.681 82.1185C33.1052 90.5083 8.37655 81.6324 23.7526 77.3362ZM21.3605 66.3878C21.3605 66.3878 17.0745 69.5605 23.6203 70.2375C32.0852 71.1107 38.77 71.1822 50.3375 68.9548C50.3375 68.9548 51.9375 70.5768 54.4533 71.4639C30.7846 78.3849 4.42207 72.0097 21.3605 66.3878Z"
          fill="#5382A1"
        />
        <path
          d="M41.5266 47.8159C46.3503 53.3692 40.2594 58.3666 40.2594 58.3666C40.2594 58.3666 52.507 52.044 46.8822 44.1263C41.6289 36.7432 37.6 33.0742 59.4098 20.4255C59.4098 20.4255 25.1757 28.9755 41.5266 47.8156"
          fill="#E76F00"
        />
        <path
          d="M67.4175 85.4344C67.4175 85.4344 70.2454 87.7643 64.303 89.567C53.0036 92.9902 17.2732 94.0238 7.34731 89.7034C3.77937 88.1514 10.4705 85.9973 12.5752 85.545C14.7701 85.069 16.0247 85.1579 16.0247 85.1579C12.0566 82.3624 -9.62323 90.6467 5.0125 93.0188C44.9258 99.4917 77.7704 90.1044 67.4175 85.4344ZM25.5901 55.0441C25.5901 55.0441 7.41564 59.3611 19.1543 60.9284C24.1105 61.592 33.9909 61.442 43.1944 60.6707C50.7159 60.0366 58.2685 58.6873 58.2685 58.6873C58.2685 58.6873 55.6163 59.8232 53.6976 61.1333C35.2414 65.9874 -0.412529 63.7293 9.85179 58.7641C18.5324 54.5681 25.5904 55.0441 25.5904 55.0441H25.5901ZM58.1935 73.2681C76.9554 63.5188 68.2806 54.15 62.2258 55.4124C60.7417 55.721 60.0801 55.9886 60.0801 55.9886C60.0801 55.9886 60.6311 55.1258 61.6833 54.7522C73.6613 50.5409 82.8735 67.1725 57.8165 73.7595C57.8165 73.7597 58.1069 73.5003 58.1935 73.2681Z"
          fill="#5382A1"
        />
        <path
          d="M46.8822 0.000777813C46.8822 0.000777813 57.2727 10.3951 37.0272 26.3777C20.7927 39.1989 33.3252 46.5091 37.0206 54.8614C27.5441 46.3114 20.5894 38.7846 25.2553 31.7796C32.1031 21.4962 51.0743 16.5107 46.8822 0.000488281"
          fill="#E76F00"
        />
        <path
          d="M27.4338 99.6861C45.4426 100.839 73.097 99.0465 73.752 90.5253C73.752 90.5253 72.4931 93.7559 58.8687 96.3211C43.4978 99.2136 24.5401 98.876 13.296 97.0221C13.2963 97.0221 15.5978 98.9272 27.4341 99.6861"
          fill="#5382A1"
        />
      </svg>,
      <svg
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z"
          fill="#61DAFB"
        />
        <path
          d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
        <path
          d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
        <path
          d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z"
          stroke="#61DAFB"
          stroke-width="5"
        />
      </svg>,
    ],
    ghlink: "https://github.com/rena-hajjar/GoodReadsForNerds",
    background: grfn,
  },
  {
    id: 3,
    title: "Med-i Injection Simulator",
    about:
      "This project improved healthcare training methods by developing a metric-based evaluation system for lifelike clinical simulations. Optical tracking and open-source software were used to create a visual guidance tool for injections, offering real-time feedback. An OptiTrack camera and 3D-printed sensors on the needle allowed metrics to be transferred via Plus to 3D Slicer, visualizing movement on a phantom model. This enabled students to visualize the needle's movement using Slicer transforms and analyze the angle and depth of their injection practice, enhancing their accuracy and technique.",
    images: [inject],
    tech: [
      <svg
        width="513"
        height="512"
        viewBox="0 0 513 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M501.3 245.6V168.2H426.7V93.7H351.9V19L290.5 18.8L274.5 19C274.5 19 270.2 2.7 230.9 6C104.4 19 5.69995 126 5.69995 256C5.69995 394.8 118.2 507.4 257.1 507.4C386.9 507.4 493.8 409 507.1 282.7C509.3 254.7 501.3 245.6 501.3 245.6Z"
          fill="black"
        />
        <path
          d="M260.8 348.8C232.4 348.8 198.1 345.5 172.9 342.2C169.2 314.6 168.3 284.6 168.3 253C168.3 125.8 201.4 20.9 243.5 11.1C115.8 18.1 14.4 124.8 14.4 255.5C14.4 390.7 122.9 500.3 256.8 500.3C386.1 500.3 491.7 398.1 498.8 269.3C492.2 314.3 385.9 348.8 260.8 348.8Z"
          fill="#AFB8D1"
        />
        <path
          d="M424.8 339.9C423.8 340.2 422.8 340.5 421.8 340.8C394.8 412.3 332.6 466.2 258.4 485.5C259.3 485.5 260.2 485.5 261.1 485.5C317 485.5 370.7 465.4 412.2 428.9C447.5 397.8 471.5 357.1 481.3 312.4C468 322.9 449 332.2 424.8 339.9Z"
          fill="#909CAF"
        />
        <path
          d="M269.1 34.1C268.5 19.8 257.3 16.2 251.9 16C235.1 15.5 214.8 39.2 200 84.4C185 129.9 168.5 206.9 180.3 337.5L212.7 306.1C212.7 306.1 212.5 303.6 212.3 301.1C212.3 301.1 209.8 269.6 209.4 253.5C208.5 204.7 212.7 159.1 223.1 124.5C233.5 89.8 252.7 60.3 267.6 60.3C272.8 60.3 272.8 72.7 277.6 77.2L269.1 34.1Z"
          fill="#626E7F"
        />
        <path
          d="M425.8 319.6C453.7 309.8 513.2 283.2 487.9 243.6C486.4 241.2 484.5 239.1 482.2 237.4H434.8C440.7 243 443.7 248.9 443.7 254.9C443.7 269.8 425.2 283.8 391.6 294.2C358.2 304.6 313.8 310.3 266.6 310.3C248.546 310.3 230.573 308.986 212.695 306.105L180.306 337.491C196.006 339.491 233.6 343.1 265 343.1C325.5 343.1 382.6 334.7 425.8 319.6Z"
          fill="#AFB8D2"
        />
        <path
          d="M268.6 66.4C243 66.4 215.6 138.8 215.6 246.6C215.6 263.2 217.1 284.9 218.4 300.8L286.849 233.412L286.6 73.5C281.7 68.3 273.6 66.4 268.6 66.4Z"
          fill="#BCC9CB"
        />
        <path
          d="M268 306.3C253.7 306.3 223.412 303.456 218.398 300.779L284.853 235.4L434.4 235.4C438.4 239.8 440.3 246.9 440.1 253C439.683 265.726 424.671 279.089 401.2 287.5C369.88 298.724 321.01 306.3 274.2 306.3C272.2 306.3 270.2 306.3 268 306.3Z"
          fill="#E6ECED"
        />
        <path
          d="M491.236 251.351C492.277 278.282 471.392 304.015 432.558 317.127C364.674 340.125 297.597 343.958 253.316 343.05C222.955 342.445 198.847 339.621 185.129 337.604L215.087 308.654C229.208 310.571 251.601 311.983 268.446 311.983C270.766 311.983 272.884 311.983 274.801 311.882C323.318 310.571 367.801 304.115 400.179 293.726C415.31 288.884 428.12 282.328 437.299 274.662C445.873 267.399 450.815 259.532 451.017 252.37C451.219 244.402 448.495 237.543 442.846 231.995L442.443 231.591L287.106 231.692L286.804 73.2288C286.804 72.3209 286.501 71.514 285.896 70.8079C280.449 65.0585 271.573 59.8133 265.117 59.8133C250.29 59.8133 236.168 81.1973 225.375 115.089C214.28 149.989 208.127 197.095 208.127 247.831C208.127 265.685 209.842 288.481 210.75 299.98L173.731 335.687C173.731 335.687 170.913 342.716 170.402 345.169C171.714 345.471 203.89 351.927 252.811 352.935C257.048 353.036 261.183 353.036 265.42 353.036C289.83 353.036 314.139 351.523 337.641 348.598C372.138 344.261 405.122 336.897 435.786 326.508C458.279 318.842 475.427 308.755 486.623 296.449C496.508 285.556 503.171 266.582 501.222 252.057L491.236 251.351ZM441.031 252.168C440.93 256.304 437.097 261.953 430.843 267.198C422.673 274.057 411.073 280.008 397.053 284.446C365.481 294.533 321.906 300.787 274.397 302.098C256.342 302.199 234.857 301.493 223.358 300.585L284.585 241.577L437.904 241.476C440.224 244.502 441.233 247.932 441.031 252.168ZM215.087 247.831C215.087 133.043 244.338 69.7992 264.714 69.7992C269.152 69.7992 275.608 71.1105 279.642 74.6409L279.945 232.802L267.942 244.603L217.306 293.625C216.297 281.521 215.087 262.86 215.087 247.831Z"
          fill="black"
        />
        <path d="M342 28.7H277.1V93.6H342V28.7Z" fill="#F7BF21" />
        <path d="M342 103.2H277.1V168.1H342V103.2Z" fill="#129A68" />
        <path d="M416.8 103.2H351.9V168.1H416.8V103.2Z" fill="#F26B31" />
        <path d="M491.5 178.1H426.6V243H491.5V178.1Z" fill="#1F65B0" />
        <path d="M342 178.1H277.1V243H342V178.1Z" fill="#EE3128" />
        <path d="M416.8 178.1H351.9V243H416.8V178.1Z" fill="#CF582C" />
        <path
          d="M501.3 168.2H426.6V93.7H351.8V19H267.7L267.7 251V252.276L501.3 252.5V168.2ZM342 242.8H277.5V178H342V242.8ZM342 168.3H277.5V103.1H342V168.3ZM342 93.5H277.5V28.6H342V93.5ZM416.8 242.8H351.6V178H416.8V242.8ZM416.8 168.3H351.6V103.1H416.8V168.3ZM491.5 242.8H426.6V178H491.5V242.8Z"
          fill="black"
        />
      </svg>,
    ],
    // tech: ["3D Slicer", "Plus", "Optitrack"],
    ghlink: "https://github.com/rena-hajjar",
    background: inject,
  },
  // {
  //   id: 4,
  //   title: "Arduino Exploration",
  //   about: "This is an exploration into the world of hardware for me, a mostly software-oriented person.",
  //   ghlink: "",
  //   background: arduino,
  // },
  // {
  //   id: 5,
  //   title: "ASL Translator",
  //   about: "Blahhhh",
  //   ghlink: "",
  //   background: inject,
  // }
];

export default function Projects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(1);

  function handleClose() {
    setIsDialogOpen(false);
  }

  function handleClick(projectId: number) {
    setIsDialogOpen(true);
    setCurrentProject(projectId);
    console.log(currentProject);
  }

  return (
    <>
      <div className="projects-container">
        <span className="projects-title">Projects.</span>
        <div className="project-cards-container">
          {projects.map((project) => (
            <>
              <div className="card-background">
                <motion.div
                  className="motion-card"
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: "pink",
                    backgroundSize: "cover",
                  }}
                >
                  <Image
                    src={project.background}
                    alt="project pic"
                    style={{ height: 400, width: 400 }}
                  ></Image>
                  <p className="project-card-title">{project.title}</p>
                  <Button
                    className="project-more"
                    onClick={() => handleClick(project.id)}
                    variant="contained"
                  >
                    See More
                  </Button>
                </motion.div>
              </div>
            </>
          ))}
        </div>

        <Dialog open={isDialogOpen} onClose={handleClose} maxWidth={"md"}>
          <DialogTitle className="project-title">
            {projects.find((project) => project.id === currentProject)?.title}
            <a
              href={
                projects.find((project) => project.id === currentProject)
                  ?.ghlink
              }
              target="_blank"
            >
              <div style={{ width: "48px", height: "48px" }}>
                <Github></Github>
              </div>
            </a>
          </DialogTitle>
          <DialogContent
            style={{
              background: "#E5EDE7",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="dialog">
              <div className="project-images">
                <Image
                  src={
                    projects.find((project) => project.id === currentProject)
                      ?.images[0] || fresh
                  }
                  alt="Project gallery"
                  style={{ width: "40vh", height: "40vh" }}
                ></Image>
              </div>
              <div className="project-about">
                <div className="project-summary">
                  {
                    projects.find((project) => project.id === currentProject)
                      ?.about
                  }
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-title">Tech Stack</div>
                  <div className="tech-stack">
                    {projects
                      .find((project) => project.id === currentProject)
                      ?.tech.map((item) => (
                        <div className="tech-element">{item}</div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
