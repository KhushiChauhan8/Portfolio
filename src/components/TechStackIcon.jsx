// import React from 'react';

// const TechStackIcon = ({ TechStackIcon, Language }) => {
//   return (
//     <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
//       <div className="relative">
//         <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
//         <img 
//           src={TechStackIcon} 
//           alt={`${Language} icon`} 
//           className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
//         />
//       </div>
//       <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
//         {Language}
//       </span>
//     </div>
//   );
// };

// export default TechStackIcon; 
// import React from 'react';
// import { techStackData } from "../data/techstack";

// const TechStackIcon = () => {
//   return (
//     <>
//       <div className="flex flex-wrap justify-center gap-6">
//         {techStackData.map((tech) => (
//           <div
//             key={tech.id}
//             className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
//           >
//             <div className="relative">
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
//               <img
//                 src={tech.icon}
//                 alt={tech.name}
//                 className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
//               />
//             </div>
//             <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TechStackIcon;


import React from 'react';
import { techStackData } from "../data/techstack";

const TechStackIcon = () => {
  console.log("Rendering TechStackIcon:", techStackData); // Debugging ke liye

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {techStackData.map((tech, index) => (
        <div
          key={tech.id || index} // Ensure unique key
          className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
            <img
              src={tech.icon}
              alt={tech.name}
              className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
            />
          </div>
          <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackIcon;


