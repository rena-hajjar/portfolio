import React from "react";
import image from './../data/pf.png';
import Image from "next/image";
import './hero.css';

export default function Hero() {
  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
      <section className="hero--section--box">
        <div className="hero--section--content">
          <Image
            className="hero--section--image"
            src={image}
            alt="Picture of me."
            width={380}
          ></Image>
          <div className="about-me">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium eveniet voluptatem, sunt ab incidunt numquam vero ipsum
              nobis qui. Accusantium ducimus, doloremque, nam mollitia eaque
              placeat blanditiis odit facilis nihil voluptas iure nostrum a
              ratione libero itaque animi dignissimos, consequatur veniam ab
              expedita alias laudantium asperiores sint. Quos, corrupti?
              Explicabo libero fugit nobis molestiae eius consequatur cupiditate
              accusamus, rerum, suscipit neque deleniti ut. Doloremque,
              praesentium. Et labore illo enim optio praesentium. Nulla
              necessitatibus officia, voluptatibus dolores cupiditate, modi
              neque nam adipisci porro labore, at unde et exercitationem
              accusamus dignissimos atque qui? Voluptate id hic rem porro et
              magnam adipisci sint!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
