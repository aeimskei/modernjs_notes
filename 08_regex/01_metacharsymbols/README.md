# RegEx Metacharacter Symbols

## Example of Literal Characters
<kbd>![alt text](img/regex00.png "screenshot")</kbd>

## Metacharacter Symbols

`^` -  means must start with, put it before the first letter
<kbd>![alt text](img/regex01.png "screenshot")</kbd>

`$` - means ends with, put it behind the last characters you want
<kbd>![alt text](img/regex02.png "screenshot")</kbd>

`^ $` -  means must begin and end with, it can be combined

```
regex = /^hello$/i
```

`.` - means matches any ONE character, only 1, not more than one

```
regex = /h.llo$/i;
```

`*` - means matches any character, 0 or more times

```
regex = /h*llo$/i;
```

`?` - means optional, like either `e` or `a` for `gray`

```
regex = /gre?a?y/i;
```

`\` escape character

```
regex = /gre?a?y\?/i;

```

Metacharacters Quick Look

<kbd>![alt text](img/metachar.png "screenshot")</kbd>

## Character Sets

Uses `[ ]` brackets. It's better thane the `?` optional one

<kbd>![alt text](img/brackets.png "screenshot")</kbd>

## Quantifiers

Use `{ }` curly braces.

<kbd>![alt text](img/braces.png "screenshot")</kbd>

## Parentheses

Use `( )` for grouping.

<kbd>![alt text](img/parentheses.png "screenshot")</kbd>

## Shorthand Character Case

<kbd>![alt text](img/shorthand.png "screenshot")</kbd>

## Assertions

Assertions are kind of like conditionals.

<kbd>![alt text](img/assertions.png "screenshot")</kbd>