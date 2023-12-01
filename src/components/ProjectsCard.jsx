import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorld, TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg duration-300 shadow-md hover:shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-500 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank">
            <TbWorldWww className="w-8 h-8 text-slate-600 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="w-8 h-8 text-slate-600 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
