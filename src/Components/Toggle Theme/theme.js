import useLocalStorage from "./useLocalStorage"
import "./theme.css"
export function Theme()
{
    const [theme,setTheme]=useLocalStorage("theme","dark");
    console.log(theme);
    

    function toggleTheme()
    {
        setTheme(theme=="light"?"dark":"light")
    }
    return(
        <div className="light-dark-mode" data-theme={theme}>
            <p>Hello Folks....!!</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}