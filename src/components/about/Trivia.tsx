import { useState } from "react";
import Tag from "../Tag";
import TRIVIA_QUESTIONS from "../../content/TRIVIA_QUESTIONS.json";

const resultOptions = [
    {
        text: "Great work!"
    },
    {
        text: "Good work!"
    },
    {
        text: "Okay work!"
    },
    {
        text: "Bad work!"
    }
]

const Trivia = () => {
    const triviaLen = TRIVIA_QUESTIONS.length;
    const [round, setRound] = useState(0);
    const [question, setQuestion] = useState(TRIVIA_QUESTIONS[round]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [choice, setChoice] = useState(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [scorePerc, setScorePerc] = useState(0);
    const [result, setResult] = useState(resultOptions[3]); // default set to "bad"

    const handleAnswer = (opt: any) => {
        if (opt.isAnswer) {
            setScore(score + 1);
        }
        setChoice(opt);
        setIsAnswered(true);
    }

    const handleContinue = () => {
        if (round === triviaLen - 1) {
            const sPerc = Math.trunc(score / triviaLen * 100);
            if (sPerc > 75) {
                setResult(resultOptions[0]);
            } else if (sPerc > 50) {
                setResult(resultOptions[1]);
            } else if (sPerc > 25) {
                setResult(resultOptions[2]);
            }
            // default set to "bad"

            setScorePerc(sPerc);
            setGameOver(true);
        } else {
            setQuestion(TRIVIA_QUESTIONS[round + 1]);
            setRound(round + 1);
        }
        setIsAnswered(false);
    }

    return (
        <>
            <section className="flex flex-col self-end text-sm p-6 bg-off-white rounded-[8px]">
                <div className=" w-full max-w-250 m-auto">

                    {!gameOver ?
                        <>
                            <p className="mb-6 text-lg">{question.question}</p>
                            <ul className="flex flex-col gap-2 mb-4">
                                {question.options.map((o, i) =>
                                    <button key={o.text} onClick={() => handleAnswer(o)} className={`${isAnswered && "pointer-events-none"}`}>
                                        <Tag
                                            content={o.text}
                                            color={i % 2 === 0 ? "blue" : "teal"}
                                            className={`${!isAnswered && "cursor-pointer hover:font-bold"} ${isAnswered && o.isAnswer ? "!border-[#80CB46] !bg-[#E9F6DF] !text-[#39601A]" : choice === o && "!border-[#67320B] !bg-[#F5B7A6] !text-[#67320B]"}`}
                                        />
                                    </button>
                                )}
                            </ul>

                            {isAnswered &&
                                <div>
                                    <p className="mb-2">{question.fact}</p>
                                    <button
                                        className="w-full py-2 px-3 rounded-[20px] border bg-font-secondary text-font text-center uppercase cursor-pointer"
                                        onClick={handleContinue}
                                    >
                                        Next <span className="text-xl">&rarr;</span>
                                    </button>
                                </div>
                            }

                            <p className="mt-4 text-center">Question {round + 1} of {triviaLen}</p>
                        </>

                        :

                        <>
                            <p className="mb-6 text-lg">Final Score: {scorePerc}%</p>
                            <p>{result.text}</p>
                        </>
                    }

                </div>
            </section>
        </>
    );
}

export default Trivia