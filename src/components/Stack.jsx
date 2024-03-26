import React from "react";
export default function Stack({ href, source, name }) {
    
    return (
        <div className="flex flex-col text-xs text-center justify-center content-between p-1 items-center">
            <div className="h-16 w-14 flex justify-center items-center rounded  bg-slate-50 p-1 m-1 border-b-4 border-r-4 border-gray-400">
                <a href={`${href}`}></a><img className="max-h-12" src={`${source}`} alt={`${name}`} />
            </div>
            
            <p className="">{name} </p>
            
            
        </div>
    )
}