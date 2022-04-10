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

    /**This will find and highlight code inside of `<pre><code>` tags; it tries to detect the language automatically. If automatic detection doesn’t work for you, or you simply prefer to be explicit, you can specify the language manually in the using the class attribute: `html`, `js` or `java` etc*/
    syntax?: string;

    /**syntax highlight color scheme
     * list can be found at [HighlightJS github](https://github.com/highlightjs/highlight.js/tree/main/src/styles)
     * - It can be a name of a color scheme.
     * - If a colorscheme is listed insde "base16" directory, name shoule be prefixed with "base16". For example "base16/dracula"
     */
    syntaxHighlightColors?: string;
}

export const CodeSlide = ({
    children,
    trimLeadingSpaces = undefined,
    preserveHTML = undefined,
    showLineNumbers = undefined,
    startLineNumbersFrom = undefined,
    hasTags = false,
    codeAnimationID = undefined,
    topComponent = undefined,
    bottomComponent = undefined,
    syntax = undefined,
    syntaxHighlightColors = "default",
    ref
}: CodeSlideProps) => {

    const content = hasTags
        ? <script type="text/template">{children}</script>
        : children;

    return (
        <>
            {/* <link rel="stylesheet" href="/reveal.js/plugin/highlight/monokai.css" /> */}
            <link rel="stylesheet"
                href={`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/${syntaxHighlightColors}.min.css`} />
            <section
                data-auto-animate={codeAnimationID ? true : undefined}
                ref={ref}
            >
                {topComponent && topComponent}
                <pre
                    data-id={codeAnimationID}
                >
                    <code
                        className={syntax ? `language-${syntax}` : undefined}
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