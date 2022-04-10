import { useState } from 'react';
import { Slide } from './RevealCore';
import { CodeSlide } from './RevealCore/CodeSlide';

function App() {

    const [count, setCount] = useState(0);

    const handleClick = () => setCount(o => o + 1);

    return (
        <>
            <Slide backgroundColor="hsl(244,50%,50%)">Slide 1</Slide>
            <Slide >Slide 2</Slide>
            <Slide>
                <Slide>Vertical Slide 1</Slide>
                <Slide>Vertical Slide 2</Slide>
                <Slide>Vertical Slide 3</Slide>
            </Slide>
            <CodeSlide
                syntax='jsx'
                syntaxHighlightColors='base16/dracula'
                codeAnimationID='react-code'
                trimLeadingSpaces
                showLineNumbers
                topComponent={<h3>Animated Code Slides</h3>}
                bottomComponent={<h6>with footer</h6>}
            >{`
            const [state, setState] = useState(0);
            `}</CodeSlide>
            <CodeSlide
                syntax='jsx'
                syntaxHighlightColors='base16/dracula'
                codeAnimationID='react-code'
                trimLeadingSpaces
                showLineNumbers
                topComponent={<h3>Animated Code Slides</h3>}
                bottomComponent={<h6>with footer</h6>}
            >{`
            const [state, setState] = useState(0);

            const handleClick = () => {
                setState(old => old + 1);
            }

            <button onClick={handleClick}>Increment Count</button>
            `}</CodeSlide>
            <Slide>
                <h2>In Action</h2>
                <h2 style={{ fontFamily: "cascadia code" }}>{count}</h2>
                <button onClick={handleClick}><span style={{ fontSize: "2rem" }}>Increment Count</span></button>
            </Slide>
        </>
    )
}

export default App
