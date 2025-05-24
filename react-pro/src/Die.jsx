export default function Die({numSides=6}){
    const roll=Math.floor(Math.random()*numSides)+1;
    return(
        <div>
            <h1>{numSides}-Die roll is:{roll}</h1>
        </div>
    );
}