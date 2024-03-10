function sortedElements(elements) {
    elements.sort()
    return elements
}

function printedElements(elements) {
    let array = []
    let[startElement, endElement] = sortedElements(elements)
    for (let index = startElement.charCodeAt(0) + 1; index < endElement.charCodeAt(0); index++) {
        array.push(String.fromCharCode(index))
    }

    return array
}

function solve(...elements) {
    let result = printedElements(elements)
    console.log(result.join(" "));
}

solve('#',
':'
)