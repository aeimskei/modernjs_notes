# What is the DOM?

It stands for the ```document object model```. It's bascially a structured respresentation of an HTML element. It can be thought of as a tree of nodes or elements created by the browser - node/element meaning any of the HTML tags, like the ```<body>``` tag, etc. 

We can use JavaScript to manipulate these DOM elements/nodes. The DOM is Object Oriented, meaning that each node has its own set of properties and methods that we can change, add, remove, etc.

<kbd>![alt text](img/domtree.png "screenshot")</kbd>

The browser gives us a ```window object``` and inside that, we have a ```document object``` which is at the top of the tree, the image above. It represents the loaded document or webpage. 

Then, we have a root element underneath that, which is the ```<html>``` tag/element. From there after, we have ```<head>``` and ```<body>``` tags/elements, which are actually siblings bc they're on the same level in this tree. 

Inside the ```<head>``` tag, we have things like ```<meta>``` tag, ```<title>```.
In the ```<body>``` we have our output like ```<h1>``` tags, links with ```<a>``` and HTML semantic ```<header>``` tags, ```<footer>``` tags, things like that.

If you're not too familiar with JavaScript, but you've built HTML pages with some CSS, then this diagram will look very familiar to you. With that knowledge, we'll use JavaScript to manipulate the DOM.

There are libraries like jQuery which technically makes it easier to manipulate the DOM, but it's worth knowing of to manipulate the DOM using Vanilla JavaScript, especially now with ```querySelector``` and you can do things as easily like jQuery as far as DOM selection and manipulation.

Not using jQuery makes it faster bc we don't have the overhead of the extra library.

# The Document Object

This has a ton of different methods and properties attached to it. 