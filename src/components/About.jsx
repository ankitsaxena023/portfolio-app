import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Coffe" />
          <p className="text-slate-600 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            suscipit sit neque nemo hic, placeat, eos vel odio aliquid culpa
            velit eaque earum incidunt officiis quos dolorum sunt ratione
            nostrum.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
