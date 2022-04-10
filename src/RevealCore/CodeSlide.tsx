import Slide from "./slide";

interface CodeSlideProps {
    /**Code wrapped in template strings*/
    children: string;

    /**When the `trimLeadingSpaces` attribute is present, 
     * surrounding whitespace within the `<code>` is automatically removed.*/
    trimLeadingSpaces?: any;

    /** HTML will be escaped by default. To avoid this, add `preserveHTML`*/
    preserveHTML?: any;

    /** show line numbers in code
    * - You can enable line numbers by adding `showLineNumbers`. If you want to highlight specific lines you can provide a comma separated list of line numbers using the same attribute. 
    * > For example `showLineNumbers="3,8-10"`, lines 3 and 8-10 are highlighted
    * - You can step through multiple code highlights on the same code block. Delimit each of your highlight steps with the `|` character. For example `showLineNumbers="1|2-3|4,6-10"` will produce three steps. It will start by highlighting line 1, next step is lines 2-3, and finally line 4 and 6 through 10.
     */
    showLineNumbers?: string | boolean;

    /**You can offset the line number if you want to showcase a excerpt of a longer set of code. In the example below, we set `startLineNumbersFrom="7"` to make the line numbers start from 7. */
    startLineNumbersFrom?: string;

    /**
    * If you have HTML characters (<>) in your code you will need to escape them ($lt; $gt;).

    To avoid having to escape these characters manually, enable this option and it will be handled automatically
     */
    hasTags?: boolean;

    /** ref for section tag */
    ref?: any;

    /**Code animation id to animate between consecutive code slides */
    codeAnimationID?: string;

    /** A component to render at the top of code, such as header */
    topComponent?: HTMLElement | JSX.Element;

    /** A component to render at the bottom of code, such as footer */
    bottomComponent?: HTMLElement | JSX.Element;
}

export const CodeSlide = ({
    children,
    trimLeadingSpaces = undefined,
    preserveHTML = undefined,
    showLineNumbers = undefined,
    startLineNumbersFrom = undefined,
    hasTags = false,
    codeAnimationID = undefined,
    topComponent,
    bottomComponent,
    ref
}: CodeSlideProps) => {

    const content = hasTags
        ? <script type="text/template">{children}</script>
        : children;

    return (
        <>
            <link rel="stylesheet" href="/reveal.js/plugin/highlight/monokai.css" />
            <section
                data-auto-animate={codeAnimationID ? true : undefined}
                ref={ref}
            >
                {topComponent && topComponent}
                <pre
                    data-id={codeAnimationID}
                >
                    <code
                        data-trim={trimLeadingSpaces}
                        data-noescape={preserveHTML}
                        data-line-numbers={showLineNumbers}
                        data-ln-start-from={startLineNumbersFrom}
                    >
                        {content}
                    </code>
                </pre>
                {bottomComponent && bottomComponent}
            </section>
        </>
    )
};