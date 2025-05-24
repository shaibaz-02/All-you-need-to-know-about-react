export default function ColorCode({colors}){
    const lis=colors.map((color)=><li>{color}</li>);
    return(
        <div>
            <ul>{colors.map((color)=> <li style={{color:color}}>color</li>)}
            </ul>
        </div>
    );
}