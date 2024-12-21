import useWindowResize from "./useWindowResize";

export function ResponsiveWindow()
{
    const {windowsize}=useWindowResize();
    const {height,width}=windowsize;
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Use Window Resize Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    )
}