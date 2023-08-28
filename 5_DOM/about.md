## Document Object Model (DOM)
- The **DOM** is a programming interface provided by browsers to represent web documents (HTML, XML) as a tree-like structure of objects.
- Each element in an HTML document is represented as a node in the DOM tree.
- It allows dynamic manipulation and interaction with the content and structure of web pages.

**Why Use DOM:**
- It enables developers to manipulate and update content without requiring a full page reload.
- Provides interactivity and responsiveness by responding to user actions.
- Facilitates creating and removing elements, changing styles, and handling events.
- Serves as a bridge between web content and scripts.

## Documentation Links

- **MDN DOM Introduction:**
  - [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- **MDN Event Reference:**
  - [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

- **W3Schools DOM Tutorial:**
  - [W3Schools DOM Tutorial](https://www.w3schools.com/js/js_htmldom.asp)

- **W3Schools Event Handling:**
  - [W3Schools Event Handling](https://www.w3schools.com/js/js_events.asp)
 
##

**Linking JavaScript Files and HTML Files:**
- To link a JavaScript file to an HTML file, use the `<script>` tag.
```html
<!DOCTYPE html>
<html>
<head>
  ...
</head>
<body>
  <!-- Your HTML content here -->
  <script src="script.js"></script>
</body>
</html>
```

**Targeting Elements in JS:**
- You can target elements using various methods:
  - **getElementById**: `document.getElementById("elementId")`
  - **querySelector**: `document.querySelector(".class")`
  - **querySelectorAll**: `document.querySelectorAll("tag")`

**Changing Attributes of HTML Elements:**
```javascript
const myElement = document.getElementById("myElement");
myElement.setAttribute("class", "newClass");
myElement.style.backgroundColor = "red";
```

**Creating Elements Using JS:**
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Newly created element";
document.body.appendChild(newDiv);
```

**Nodes, ParentNodes, and ChildNodes:**
- **Nodes** are individual objects in the DOM tree.
- **ParentNodes** are the elements that contain other elements.
- **ChildNodes** are the elements contained within a parent element.

**Events:**
- **Events** are actions or occurrences that happen in the browser, such as clicks, key presses, or page load.

**Using Event Handlers:**
```javascript
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  alert("Button clicked!");
});
```

**Using onClick Attributes:**
```html
<button id="myButton" onclick="showAlert()">Click Me</button>
<script>
function showAlert() {
  alert("Button clicked!");
}
</script>
```

**Event Handlers vs onClick:**
- **Event Handlers** are attached using `addEventListener` and allow for more control and flexibility.
- **onClick** is an inline event handler attribute in HTML, but it's generally better to use `addEventListener` for separation of concerns.

