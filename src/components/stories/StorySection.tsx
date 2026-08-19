import { useState } from "react";
import STORIES from "../../content/STORIES.json";
import Tag from "../Tag";

interface storyType {
    title: string,
    desc: string,
    src: string,
    alt: string,
    chapters: { chapterName: string, text: string }[]
}

const StorySection = () => {
    const [activeStory, setActiveStory] = useState(STORIES[0]);
    const [chapter, setChapter] = useState(0);
    const [isIndexOpen, setIsIndexOpen] = useState(false);

    const handleStoryChange = (story: storyType) => {
        setActiveStory(story);
    }

    const ChapterBtnPrev = () => {
        return (
            <button onClick={() => setChapter(chapter - 1)} className={`w-40 sm:w-45 cursor-pointer ${chapter > 0 ? "hover:font-bold" : "pointer-events-none"}`}>
                <Tag content={<><span className="text-lg leading-0 mr-1">&larr;</span> Previous Chapter</>} color="gray" className={`text-xs sm:text-sm ${chapter <= 0 && "bg-light-gray/50 text-font-secondary/80 border-font-secondary/80"}`} />
            </button>
        )
    }

    const ChapterBtnNext = () => {
        return (
            <button onClick={() => setChapter(chapter + 1)} className={`w-40 sm:w-45 cursor-pointer ${chapter < activeStory.chapters.length - 1 ? "hover:font-bold" : "pointer-events-none"}`}>
                <Tag content={<>Next Chapter <span className="text-lg leading-0 ml-1">&rarr;</span></>} color="gray" className={`text-xs sm:text-sm ${chapter >= activeStory.chapters.length - 1 && "bg-light-gray/50 text-font-secondary/80 border-font-secondary/80"}`} />
            </button>
        )
    }

    const ChapterBtnIndex = () => {
        return (
            <div className="relative">

                <button onClick={() => setIsIndexOpen(!isIndexOpen)} className="w-40 sm:w-45 cursor-pointer hover:font-bold">
                    <Tag content="Chapter Index" color="gray" className={`text-xs sm:text-sm ${isIndexOpen && "border-b-off-white rounded-b-none"}`} />
                </button>

                {isIndexOpen &&
                    <ul className="absolute -mt-1 text-font-secondary bg-light-gray border-b border-x border-shadow rounded-b-[8px] px-2 py-4 w-full h-min">
                        <hr className="-mt-3 mb-2" />
                        {activeStory.chapters.map((c, i) =>
                            <li key={c.chapterName} className="cursor-pointer p-0.5 text-sm hover:font-bold" onClick={() => { setChapter(i); setIsIndexOpen(false); }}>
                                <p>{i + 1}. {c.chapterName}</p>
                            </li>
                        )}
                    </ul>
                }
            </div>
        )
    }

    return (
        <>
            <div className="lg:flex gap-20">

                <div className="flex gap-4 lg:flex-col justify-between lg:justify-start">
                    <ul className="bg-light-gray px-2 pt-4 pb-8 w-full lg:min-w-70 lg:w-70 h-min">
                        {STORIES.map(s =>
                            <li key={s.title} className={`cursor-pointer p-2 ${activeStory.title === s.title ? "border shadow-md" : "m-0.25"}`} onClick={() => handleStoryChange(s)}>
                                <p className="font-bold">{s.title}</p>
                                <p className="ml-4 text-sm">{s.desc}</p>
                            </li>
                        )}
                    </ul>

                    <div className="size-45 lg:h-auto lg:w-auto hidden sm:flex">
                        <img src={activeStory.src} alt={activeStory.alt} className="h-full w-full object-contain" />
                    </div>
                </div>

                <section className="text-font">
                    <div className="flex flex-wrap gap-2 justify-center mt-12 lg:mt-4">
                        <ChapterBtnPrev />
                        <ChapterBtnIndex />
                        <ChapterBtnNext />
                    </div>

                    <section className="mt-8 mb-12">
                        <div className="text-xl text-center font-bold">
                            {activeStory.title}
                            <hr />
                        </div>
                        <p className="text-center font-bold m-4">
                            Chapter {chapter + 1}: {activeStory.chapters[chapter].chapterName}
                        </p>
                        <p className="whitespace-pre-wrap">
                            {activeStory.chapters[chapter].text}
                        </p>
                    </section>

                    <div className="flex flex-wrap gap-2 justify-center">
                        <ChapterBtnPrev />
                        <ChapterBtnNext />
                    </div>
                </section>

            </div>
        </>
    )
}

export default StorySection