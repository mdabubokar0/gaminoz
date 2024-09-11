import React from "react";
import Game from "../Games/Game";
import adventure from "../Games/adventureData.json"

const Adventurepage = () => {
  return (
    <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1440px] m-auto mt-10">
      <div className="flex flex-col items-center">
        <img src="img/cat3.png" alt="icon" className="w-[48px] h-[48px]" />
        <h3 className="text-[28px]">Adventure Games</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-0 md:gap-y-[15px] mt-10">
        {adventure.map((a) => (
          <div key={a.id}>
            <div className="flex flex-col gap-[10px]">
              <Game
                img={a.thumbnail}
                title={a.name}
                link={`/adventure/${a.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventurepage;