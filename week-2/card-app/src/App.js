import "./Card.css"
import Card from "./Card";

const entry = 4;
const color = ["red", "orange", "yellow", "green"];

function App(){
    return(
        
      [...Array(entry)].map((e, i) => <Card
        title = {"title" + (i + 1)}
        subtitle = {"subtitle" + (i + 1)}
        description = {"description" + (i + 1)}
        boxStyle = {{backgroundColor: color[i], width: "200px"}}
      /> 
      )
    );
}

export default App;

// Create a component Card that renders a box
// Add styling for css properties of margin, display, text-align:
// Put styling in the App.css or create a card.css and import it as a css module (Links to an external site.)
// Create props for title, subtitle, description

// Use these props inside Card to render text (props.title, etc.)
// Create props for CSS properties backgroundColor and width
// Use inline styling (Links to an external site.) to render each card with a color and width passed from App

