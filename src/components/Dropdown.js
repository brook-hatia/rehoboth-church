export default function Dropdown(listArray, cName) {
    console.log(listArray);
    return (
        
        <div className={`${cName}`}>
            {listArray.map((item, index) => {
                return (
                    <>
                    <a key={index} href={item.path}>{item.title}</a>
                    </>
                )
            })}
        </div>
    )
}