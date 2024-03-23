function extract(content) {
    const contentElement = document.getElementById(content)

    const matches = contentElement.textContent.matchAll(/\(([A-Za-z ]+)\)/g);
    const result = Array
        .from(matches)
        .map(match => match[1])
        .join("; ")

    return result
} 