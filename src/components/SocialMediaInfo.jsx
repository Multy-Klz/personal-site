import React from "react";

export default function SocialMediaInfo({
  name,
  href,
  source,
  Component,
  color,
}) {
  return (
      <a href={`${href}`}>
          <div className="flex flex-row text-center justify-start content-between items-center py-1">
        <div className="h-6 w-6 flex justify-center items-center rounded">
          {Component ? (
            <Component style={{ color: color }} />
          ) : (
            <img className="max-h-12 p-1 " src={`${source}`} alt={`${name}`} />
          )}
        </div>
        <p className="">{name} </p>
    </div>
      </a>
  );
}
