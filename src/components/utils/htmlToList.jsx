const HtmlToListItems = (html) => {

    const regex = /<(u|o)l>(.*?)<\/\1l>/g;  //search for ordered & unordered lists in the text
    const match = regex.exec(html);

    if (!match) {
        return html;
    }

    //split the list items into an array
    const isUnorderedList = match[1] === 'u';
    const listItems = match[2].split(/<li>(.*?)<\/li>/).filter(Boolean);

    return (
        /*map over the array of list items and return a JSX unordered list */
        isUnorderedList ? (
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{'- '}{item}</li>
                ))}
            </ul>
        ) : (
            <ol>
                {listItems.map((item, index) => (
                    <li key={index}>{'- '}{item}</li>
                ))}
            </ol>
        )
    );
}

export default HtmlToListItems