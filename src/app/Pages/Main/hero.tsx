import React from "react";
import image from "../../data/grad-rena-2.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero--section--box">
      <div className="hero--section--content">
        {/* <p className="section--title">Réna Sophia Hajjar</p> */}
        <div className="hero--section--image">
          <Image src={image} alt="Picture of me." width={250}></Image>
        </div>
        <p>
          Hi. Bye. This is a section about me. It's also a sectiona about what
          the hell this website is. I hope you enjoy, and I also hope this gives
          you a small glimpse into who I am, both in my work endeavours and
          outside of them.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          eveniet voluptatem, sunt ab incidunt numquam vero ipsum nobis qui.
          Accusantium ducimus, doloremque, nam mollitia eaque placeat blanditiis
          odit facilis nihil voluptas iure nostrum a ratione libero itaque animi
          dignissimos, consequatur veniam ab expedita alias laudantium
          asperiores sint. Quos, corrupti? Explicabo libero fugit nobis
          molestiae eius consequatur cupiditate accusamus, rerum, suscipit neque
          deleniti ut. Doloremque, praesentium. Et labore illo enim optio
          praesentium. Nulla necessitatibus officia, voluptatibus dolores
          cupiditate, modi neque nam adipisci porro labore, at unde et
          exercitationem accusamus dignissimos atque qui? Voluptate id hic rem
          porro et magnam adipisci sint!
        </p>
      </div>
    </section>
  );
}
