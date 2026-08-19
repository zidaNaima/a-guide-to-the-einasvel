import { useState } from "react";
import Tag from "../Tag";
import TRIVIA_QUESTIONS from "../../content/TRIVIA_QUESTIONS";

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
    const [isHintOn, setIsHintOn] = useState(false);
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
        setIsHintOn(false);
        setIsAnswered(false);
    }

    return (
        <>
            <section className="flex flex-col self-end text-sm p-6 bg-off-white rounded-[8px]">
                <div className=" w-full max-w-250 m-auto">

                    {!gameOver ?
                        <>
                            <div className="flex justify-between">
                                <p className="text-lg">{question.question}</p>
                                <svg fill="#143C64" width="24px" height="24px" viewBox="-4 0 19 19" className="cursor-pointer text-secondary/75 hover:*:stroke-current [paint-order:stroke_fill]" onClick={() => setIsHintOn(true)}>
                                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="stroke-transparent"><path d="M10.328 6.83a5.903 5.903 0 0 1-1.439 3.64 2.874 2.874 0 0 0-.584 1v1.037a.95.95 0 0 1-.95.95h-3.71a.95.95 0 0 1-.95-.95V11.47a2.876 2.876 0 0 0-.584-1A5.903 5.903 0 0 1 .67 6.83a4.83 4.83 0 0 1 9.28-1.878 4.796 4.796 0 0 1 .38 1.88zm-.95 0a3.878 3.878 0 0 0-7.756 0c0 2.363 2.023 3.409 2.023 4.64v1.037h3.71V11.47c0-1.231 2.023-2.277 2.023-4.64zM7.83 14.572a.475.475 0 0 1-.475.476h-3.71a.475.475 0 0 1 0-.95h3.71a.475.475 0 0 1 .475.474zm-.64 1.262a.238.238 0 0 1-.078.265 2.669 2.669 0 0 1-3.274 0 .237.237 0 0 1 .145-.425h2.983a.238.238 0 0 1 .225.16z"></path></g>
                                    <path d="M10.328 6.83a5.903 5.903 0 0 1-1.439 3.64 2.874 2.874 0 0 0-.584 1v1.037a.95.95 0 0 1-.95.95h-3.71a.95.95 0 0 1-.95-.95V11.47a2.876 2.876 0 0 0-.584-1A5.903 5.903 0 0 1 .67 6.83a4.83 4.83 0 0 1 9.28-1.878 4.796 4.796 0 0 1 .38 1.88zm-.95 0a3.878 3.878 0 0 0-7.756 0c0 2.363 2.023 3.409 2.023 4.64v1.037h3.71V11.47c0-1.231 2.023-2.277 2.023-4.64zM7.83 14.572a.475.475 0 0 1-.475.476h-3.71a.475.475 0 0 1 0-.95h3.71a.475.475 0 0 1 .475.474zm-.64 1.262a.238.238 0 0 1-.078.265 2.669 2.669 0 0 1-3.274 0 .237.237 0 0 1 .145-.425h2.983a.238.238 0 0 1 .225.16z"></path>
                                </svg>
                            </div>

                            {isHintOn &&
                                <p className="link-on-light underline-link">Hint: {question.hint}</p>
                            }

                            <ul className="flex flex-col gap-2 mt-6 mb-4">
                                {question.options.map((o, i) =>
                                    <button key={o.text} onClick={() => handleAnswer(o)} className={`${isAnswered && "pointer-events-none"}`}>
                                        <Tag
                                            content={o.text}
                                            color={i % 2 === 0 ? "blue" : "teal"}
                                            className={`${!isAnswered && "cursor-pointer hover:font-bold"} ${isAnswered && o.isAnswer ? "border-[#80CB46] bg-[#E9F6DF] text-[#39601A]" : choice === o && "border-[#67320B] bg-[#F5B7A6] text-[#67320B]"}`}
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