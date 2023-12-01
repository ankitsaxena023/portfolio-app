import React from "react";

const SkillCard = ({ icon, text, title }) => {
  return (
    <article>
      <span>{icon}</span>
      <h2 className="font-bold mt-6">{title}</h2>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillCard;
