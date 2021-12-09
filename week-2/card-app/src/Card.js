

// Add styling for css properties of margin, display, text-align:
// Put styling in the App.css or create a card.css and import it as a css module (Links to an external site.)
// Create props for title, subtitle, description
export default function Card(props){
    return(
        <div>
        <div class = "flexBox" style = {props.boxStyle}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
        <div class = "flexBox" style = {props.boxStyle}>
        <h3>{props.description}</h3>
        </div>
        </div>
        
    );
}

// Use these props inside Card to render text (props.title, etc.)
// Create props for CSS properties backgroundColor and width
// Use inline styling (Links to an external site.) to render each card with a color and width passed from App





// function InfoCard(props){
//     return(
//         <h1>{props.title}</h1>
//     )
// }

// export default InfoCard