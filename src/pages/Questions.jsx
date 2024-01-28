import { useState } from "react";
import CustomDropDown from "../components/CustomDropDown";

const Questions = () => {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tags, setTags] = useState("");

  const seeValues = () => {
    console.log(category, limit, difficulty, tags);
  };
  return (
    <section className="w-screen h-screen bg-background p-28">
      <h1 className="text-4xl font-bold text-white">
        This section is powered by{" "}
        <span className="text-Highlight">QuizAPI.</span>
      </h1>
      <div className="w-full p-2 mt-5">
        <h2 className="text-xl text-white font-bold">
          Question Paramaters{" "}
          <span className="text-Highlight text-xs font-light">
            *these parameters are optional
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-5 mt-5 place-items-center">
          <div className="flex items-center gap-2 max-w-xs">
            <p className="text-white">Category: </p>
            <CustomDropDown type="category" setValue={setCategory} />
          </div>
          <div className="flex items-center gap-2 max-w-xs">
            <p className="text-white">No. of questions: </p>
            <CustomDropDown type="limit" setValue={setLimit} />
          </div>
          <div className="flex items-center gap-2 max-w-xs">
            <p className="text-white">Difficulty: </p>
            <CustomDropDown type="difficulty" setValue={setDifficulty} />
          </div>
          <div className="flex items-center gap-2 max-w-xs">
            <p className="text-white">Tags: </p>
            <CustomDropDown type="tags" setValue={setTags} />
          </div>
        </div>

        <button
          className="p-4 bg-Highlight flex mx-auto my-5"
          onClick={seeValues}
        >
          See values
        </button>
      </div>
    </section>
  );
};

export default Questions;
