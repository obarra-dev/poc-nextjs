"use client";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();

  return (
    <section>
      About
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis in,
        hic sapiente assumenda asperiores ullam minus nihil rerum ipsam voluptas
        eum iure eius nulla dolore tempora aliquam dignissimos? Obcaecati,
        molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione incidunt perferendis, odio est similique repudiandae a ipsum
        laborum ullam, consectetur vitae vel accusamus alias molestiae eum
        beatae! Magnam, quod cum.
      </p>
      <button
        onClick={() => {
          alert("doing someting");
          router.push("/");
        }}
      >
        Home
      </button>
    </section>
  );
}

export default About;
