import React from "react";

const HtmlToListItems = (html) => {
    const regex = /<(u|o)l>(.*?)<\/\1l>|<(h[1-3])>(.*?)<\/\3>|<(em|strong|u|p)>(.*?)<\/\5>|<a href="(.*?)">(.*?)<\/a>/g;
    const matches = html.matchAll(regex);
    let currentIndex = 0;
    const nodes = [];

    for (const match of matches) {
        const [, listType, listItems, headingType, headingText, fontStyle, fontText, tagType, tagText, href, linkText] = match;

        // Add text before the matched element
        if (match.index > currentIndex) {
            const text = html.substring(currentIndex, match.index);
            nodes.push(text);
        }

        // Add the matched element
        if (listType) {
            const isUnorderedList = listType === 'u';
            const items = listItems.split(/<li>(.*?)<\/li>/).filter(Boolean);
            const list = isUnorderedList ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{'- '}{item}</li>
                    ))}
                </ul>
            ) : (
                <ol>
                    {items.map((item, index) => (
                        <li key={index}>{'- '}{item}</li>
                    ))}
                </ol>
            );
            nodes.push(list);
        } else if (headingType) {
            const heading = React.createElement(headingType, {}, headingText);
            nodes.push(heading);
        } else if (fontStyle) {
            const font = React.createElement(fontStyle, {}, fontText);
            nodes.push(font);
        } else if (tagType === 'p') {
            const paragraph = React.createElement('p', {}, tagText);
            nodes.push(paragraph);
        } else {
            const link = React.createElement('a', { href }, linkText);
            nodes.push(link);
        }

        // Update the current index
        currentIndex = match.index + match[0].length;
    }

    // Add any remaining text
    if (currentIndex < html.length) {
        const text = html.substring(currentIndex);
        nodes.push(text);
    }

    // Wrap nodes in a div and return
    return <div>{nodes}</div>;
};

export default HtmlToListItems;
