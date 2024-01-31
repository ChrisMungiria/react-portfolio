import { useState } from "react";
import axios from "axios";
import { Button } from "antd";

const QuestionsComponent = (props) => {
  // Used to make the request
  const { limit, category, difficulty, tags } = props;

  //   Questions state
  const [questions, setQuestions] = useState([]);
  //   Score state
  const [score, setScore] = useState(0);
  // Loading State
  const [loading, setLoading] = useState(false);
  // State to disable the answer
  const [hasUserSelected, setHasUserSelected] = useState(false);

  //   Update the score
  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserSelection(null);
    } else if (currentQuestion === questions.length - 1) {
      handleSubmit();
    }
  };

  const filteredAnswers = () => {
    const currentAnswers = questions[currentQuestion].answers;
    return Object.keys(currentAnswers)
      .filter((key) => currentAnswers[key] !== null)
      .map((key) => ({ id: key, value: currentAnswers[key] }));
  };

  //   Handle answer selection
  const setSelectedAnswer = (answerId) => () => {
    const currentCorrectAnswers = questions[currentQuestion].correct_answers;
    const currentAnswers = questions[currentQuestion].answers;
    const currentAnswer = currentAnswers[answerId];
    const currentCorrectAnswer = currentCorrectAnswers[`${answerId}_correct`];

    // User has selected an answer
    setHasUserSelected(true);
    // Check if answer is correct
    if (currentCorrectAnswer === "true") {
      //  Set the element to green
      setCorrectAnswer(answerId);
      setUserSelection(answerId);
      updateScore();
      console.log("Score: ", score);

      // Delay for a second and move to the next answer
      setTimeout(() => {
        handleNextClick();
      }, 1000);
    } else {
      //   Set answer to red
      setCorrectAnswer(null);
      setUserSelection(answerId);
      console.log("Wrong");
      // Delay for a second and move to the next answer
      setTimeout(() => {
        handleNextClick();
      }, 1000);
    }
  };

  // Fetch questions on button click
  const handleFetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://quizapi.io/api/v1/questions?apiKey=14WIAA6bSA34ZtQ6WtQsQDhVKIuIow7hXCp3Gdtj",
        {
          params: {
            limit,
            category,
            tags,
            difficulty,
            apiKey: process.env.REACT_APP_QUIZ_API_KEY,
          },
        }
      );
      console.log(response.data);
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle the end of questions
  const handleSubmit = () => {
    alert(`You scored ${score} out of ${questions.length}`);
    setQuestions([]);
    setCorrectAnswer(null);
    setUserSelection(null);
    setCurrentQuestion(0);
  };
  return (
    <div>
      {questions.length > 0 ? (
        <div className="border border-Highlight rounded-md max-w-lg my-4 flex flex-col mx-auto p-4 text-white">
          <h2 className="text-xl underline">Question {currentQuestion + 1} </h2>
          <p className="my-2">{questions[currentQuestion].question}</p>

          {filteredAnswers().map((answer) => (
            <div
              onClick={setSelectedAnswer(answer.id)}
              key={answer.id}
              disabled={hasUserSelected}
              className={`flex disabled:bg-gray-300 flex-row items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition-all
    ${userSelection === answer.id && "bg-Highlight"}
    ${
      userSelection === answer.id &&
      (userSelection === correctAnswer ? "bg-green-500" : "bg-red-500")
    }
    `}
            >
              <div className="w-2 h-2 bg-Highlight rounded-full"></div>
              <p className="">{answer.value}</p>
            </div>
          ))}

          <div className="flex items-center justify-end mt-5">
            {currentQuestion === questions.length - 1 ? (
              <button onClick={handleSubmit} className="disabled:hidden">
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                disabled={currentQuestion === questions.length - 1}
                className="disabled:hidden"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="border border-Highlight rounded-md max-w-lg my-4 flex flex-col mx-auto p-4 text-white">
          <Button
            type="text"
            className="bg-Highlight w-fit flex mx-auto text-white"
            onClick={handleFetchQuestions}
            loading={loading}
          >
            Get Questions
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionsComponent;
