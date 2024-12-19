export function Suggestion({data,onClick})
{
    return(
        <div className="suggestions">
           {data && data.length ? 
           data.map((item,idx)=><li key={idx} onClick={onClick} className="suggest-item">{item}</li>)
           :null}
        </div>
    )
}