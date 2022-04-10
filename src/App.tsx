import { Slide } from './RevealCore';
import { CodeSlide } from './RevealCore/CodeSlide';

function App() {
    return (
        <>
            <Slide>Slide 1</Slide>
            <Slide>Slide 2</Slide>
            <Slide>
                <Slide>Vertical Slide 1</Slide>
                <Slide>Vertical Slide 2</Slide>
                <Slide>Vertical Slide 3</Slide>
            </Slide>
            <CodeSlide
                codeAnimationID='react-code'
                trimLeadingSpaces
                showLineNumbers
                topComponent={<h3>Title</h3>}
                bottomComponent={<h6>Footer</h6>}
            >{`
            <Slide>
                <Slide>Vertical Slide 1</Slide>
                <Slide>Vertical Slide 2</Slide>
                <Slide>Vertical Slide 3</Slide>
            </Slide>
            `}</CodeSlide>
            <CodeSlide
                codeAnimationID='react-code'
                trimLeadingSpaces
                topComponent={<h3>Title</h3>}
                bottomComponent={<h6>Footer2</h6>}
            >{`
            <Slide>
                <Slide>Vertical Slide 1</Slide>
                <Slide>Vertical Slide 2</Slide>
                <Slide>Vertical Slide 3</Slide>
                <Slide>Vertical Slide 4</Slide>
            </Slide>
            `}</CodeSlide>
        </>
    )
}

export default App
