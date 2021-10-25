let leadingTag, endingTag = false;
function checkTags (text) {
    // Using an array as a stack to store identified tag values
    let tags = [];
    let tagText, results = "";
    let textArray = Array.from(text);
    for (var i = 0; i < textArray.length; i++) {    
        // if tag is set to true, the get the last tag value to compare
        if (leadingTag) {
            tagText = getTagText(i, textArray);
            tags[tags.length] = tagText;
            leadingTag = false;
            tagText = "";
        }
        else if(endingTag){
            tagText = getTagText(i, textArray);
            textLength = tagText.length;
            i += textLength;
            lastTag = tags.pop();
            if (tagText === lastTag) {
                results += "Correctly tagged paragraph.";
            }
            else {
                // Check if there are extra tags.
                if(lastTag === undefined) {
                    results += `Expected # Found ${tagText}.`;
                }
                else {
                    results += `Expected ${lastTag} Found ${tagText}.`;
                }
            }
            endingTag = false;
        }
        else {
            if (textArray[i] === '<'){
                // Check for multiple '<' characters. Only want to include the innermost one.
                while (textArray[i + 1] == '<'){
                    i += 1;
                }
                // if the character is /, then skip it, set leading tag to true, and go to next iteration 
                if (textArray[i + 1] === '/'){
                    i += 1;
                    endingTag = true;
                    continue;
                }
                leadingTag = true;
            }
            if (textArray[i] === '>'){
                endingTag = false;
                leadingTag = false;
            }
        }
    }
    // Missing a closing tag at the end of the paragraph.
    while (tags.length > 0 && i == textArray.length){
        results += `Expected ${tags.pop()} Found #.`;
    }
    return results;
}
// Gets the tag text that appears between the characters '<' or '</' and '>'
function getTagText (i, textArray) {
    let tagText = "";
    for (var j = i; j < textArray.length; j++){
        if (textArray[j] != '>'){
            tagText += textArray[j];
        }
        else {
            return tagText;
        }
    }
    return tagText;
}
module.exports = checkTags;