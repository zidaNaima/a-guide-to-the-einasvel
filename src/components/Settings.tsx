import { useState, useEffect } from "react"

const Settings = () => {
    const [isOpen, setisOpen] = useState(false);
    const [currTheme, setCurrTheme] = useState<string | null>(null);
    const [currFont, setCurrFont] = useState<string | null>(null);
    useEffect(() => {
        const initFont = localStorage.getItem('font-size') || 'default';
        setCurrFont(initFont);
        const initTheme = localStorage.getItem('theme') || 'default';
        setCurrTheme(initTheme);
    }, []);

    const handleFontChange = (fontSize: string) => {
        document.documentElement.setAttribute('data-font-size', fontSize);
        localStorage.setItem('font-size', fontSize);
        setCurrFont(fontSize);
    }

    const handleThemeChange = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setCurrTheme(theme);
    }

    interface settingsButtonProps {
        keyName: string,
        name: string
    }

    const FontButton = ({ keyName, name }: settingsButtonProps) => {
        return (
            <div onClick={() => handleFontChange(keyName)} className="block cursor-pointer">
                <input type="radio" name="fontChange" value={keyName} defaultChecked={currFont === keyName} />
                <label htmlFor={keyName} className="pl-[4px]">{name}</label>
            </div>
        )
    }

    const ThemeButton = ({ keyName, name }: settingsButtonProps) => {
        return (
            <div onClick={() => handleThemeChange(keyName)} className="block cursor-pointer">
                <input type="radio" name="themeChange" value={keyName} defaultChecked={currTheme === keyName} />
                <label htmlFor={keyName} className="pl-[4px]">{name}</label>
            </div>
        )
    }

    return (
        <>
            <img src="/settings.svg" alt="Settings" className="z-2 lg:-ml-8 size-8 mt-2.25 mr-2 cursor-pointer" onClick={() => setisOpen(true)} />

            {isOpen &&
                <div className="fixed top-0 left-0 bg-shadow/50 w-full h-full content-center z-250">
                    <div className="w-[300px] sm:w-[500px] m-auto bg-light-gray border border-font-secondary px-[24px] pt-[36px] pb-[48px]">
                        <button onClick={() => setisOpen(false)} className="w-full text-end text-red-500 text-[30px] leading-[30px] pb-[8px] cursor-pointer">&#10006;</button>

                        <div className="w-[200px] sm:w-[300px]">
                            <div className="mb-[32px]">
                                <p className="text-[20px] leading-[30px] font-bold">Font Size</p>
                                <div className="border-t border-font-secondary pl-[24px] pt-[8px] text-[18px] leading-[28px]">
                                    <FontButton keyName="default" name="Default" />
                                    <FontButton keyName="large" name="Large" />

                                </div>
                            </div>

                            <div>
                                <p className="text-[20px] leading-[30px] font-bold">Theme</p>
                                <div className="border-t border-font-secondary pl-[24px] pt-[8px] text-[18px] leading-[28px]">
                                    <ThemeButton keyName="default" name="Default" />
                                    <ThemeButton keyName="high-contrast" name="High Contrast" />
                                    <ThemeButton keyName="throwback" name="Throwback" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Settings