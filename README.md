# Palindrome Checker

A palindrome checker is a tool or algorithm designed to determine whether a given word, phrase, or sequence reads the same forward and backward, ignoring spaces, punctuation, and capitalization. For example, "madam" and "racecar" are palindromes because they appear the same when reversed. 


## Html Elements that are being frequently used:
### div element:-
A block-level container used to group other HTML elements together. It has no semantic meaning by default, but is often used for layout purposes or to apply styles to a section of content.

### p element:-
Represents a paragraph of text. It is a block-level element that automatically adds space before and after the text, making it ideal for separating sections of text.

### img:-
Embeds an image in a webpage. It requires the src attribute to specify the image's URL and the alt attribute to provide alternative text for accessibility.

### input:-
Creates an interactive form element that allows users to enter data. It can have various types, such as text, password, checkbox, radio, and more, defined by the type attribute.

### h1:-
Denotes the highest level of heading in an HTML document. It is used for the main title or heading, typically appearing at the top of a page or section.

### main:-
Represents the main content of a webpage. It should contain content unique to the page and should not include repeated elements like sidebars or navigation links. It is crucial for accessibility and search engine optimization (SEO).

## CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML or XML. It allows developers to control the layout, color, font, and overall visual appearance of web pages.

## Properties of CSS

### 1. color
Sets the color of the text within an element.
```
   color: var(--purple);
```
### 2. Box Model
box-sizing: Controls how the total width and height of an element is calculated (content-box, border-box).
```
   box-sizing: border-box;
```
### 3. background-color
Defines the background color of an element.
```
   background-color: var(--colorWhite);
```
### 4. padding
Controls the space inside an element, between the content and its border.
```
   padding: 20px;
```
### 5. margin
Controls the space around an element, outside of its border.
```
   margin: 0;
```
### 6. display
Specifies how an element is displayed on the page. Common values include block, inline, inline-block, and none.
```
   display: flex;
```
### 7. position
Controls the positioning method used for an element. Common values are static, relative, absolute, fixed, and sticky.
```
   position: fixed;
```
### 8. flex and flexbox properties
A powerful layout system for arranging elements in a flexible way. Key properties include flex-direction, justify-content, align-items, and flex-wrap.
```
   display: inline-flex;
```
### 9. grid and grid properties
A layout system for creating complex grid-based designs. Important properties include grid-template-columns, grid-template-rows, gap, and grid-area.
```
   grid-column-template: (4, 1fr);
```
### 10. z-index
Determines the stacking order of elements. Elements with a higher z-index appear in front of those with a lower z-index.
```
   z-index: 1;
```
### 11. box-shadow
Adds a shadow around an element's box.
```
   box-shadow: 0 0 100px var(--colorWhite);
```
### 12. :root 
It is a pseudo-class selector that targets the highest-level parent element in the document, typically the <html> element. It's commonly used to define global variables (known as CSS custom properties) that can be accessed throughout the entire stylesheet.
```
   :root {
    --colorWhite: white;
    --aliceblue: aliceblue;
    --purple: purple;
}
```
### 13. :hover
It is also a pseudo-class in CSS is used to apply styles to an element when a user hovers over it with a pointing device, such as a mouse. This is a common way to create interactive effects on websites, making elements respond visually when users interact with them.
```
   #check-btn:hover {
    background-color: brown;
    font-size: 26px;
}
```
## Palindrome checker is JavaScript-based that interacts with HTML elements to verify if a word or phrase is a palindrome.

### 1. HTML Elements Reference:
input: Captures user input from an HTML element with the ID "word-input".
button: Represents the button element with the ID "check-btn" that the user clicks to check if the input is a palindrome.
result: Displays the result of the palindrome check in the HTML element with the ID "result".

### 2. Event Listener:
An event listener is attached to the button element, listening for a click event. When the button is clicked, the following steps occur:

### 3. Empty Input Check:
If the input field is empty, an alert is triggered, asking the user to "Write something".

### 4. Palindrome Check Function:
#### a. palindromeChecker(str): 
This function checks whether the provided string str is a palindrome:
#### b. Normalization: 
The function removes any non-alphanumeric characters using a regular expression, converts the string to lowercase, and removes spaces.
#### c. Reverse Check:
The normalized string is reversed, and the function checks if the reversed string matches the original normalized string.

### 5. Display Result:
Based on the result of the palindrome check, the result element's text is updated to inform the user whether the input is a palindrome or not.

### Example Use:
i. If the user enters "A man a plan a canal Panama" and clicks the button, the script will output: "A man a plan a canal Panama is a palindrome".
ii. If the input is "hello", it will output: "hello is not a palindrome".
