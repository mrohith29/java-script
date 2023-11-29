# Here are some of the most common string function in JavaScript

### 1) `charAt(index)` : Returns the character at a specific index in the string.

``` javascript
let str = "hello, World";
console.log(str.charAt(5));
```    


### 2) `charCodeAt(index)`:  Returns the Unicode code of the character at a specific index of the string.

``` javascript 
let str = "hello, world"
console.log(str.charCodeAt(5))
```

### 3) `concat(str1, str2, ...)`: concatenates two or more strings together.

```javascript
let str1 = "hello"
let str2 = "world"
console.log(str1.concat(str2));
```

### 4) `indexOf(searchValue, fromIndex)`: Returns the index of the first substring within the string, starting from the specific index.
```javascript
let str = "hello, world"
console.log(str.indexOf("world"))
```

### 5) `lastIndexOf(searchValue, fromIndex)`: Returns the index of the last occurrence of the substring within the string, starting from the specific index.
```javascript 
let str = "hello, hello, world"
console.log(str.lastIndexOf("hello"))
```

### 6) `replace(searchValue, newValue)`: Replaces all occurrences of a substring with a new substring.
```javascript
let str = "Hello, world!";
console.log(str.replace("world", "everyone")); // Output: Hello, everyone!
```

### 7) `slice(start, end)`: Extracts a portion of the string from the specified start index to the specified end index.
```javascript
let str = "Hello, world!";
console.log(str.slice(7, 11)); // Output: worl
```

### 8) `split(separator, limit)`: Splits the string into an array of substrings based on the specified separator.
```javascript
let str = "Hello, world!";
console.log(str.split(", ")); // Output: ["Hello", "world!"]
```

### 9) `toLowerCase()`: Converts the string to lowercase.
```javascript
let str = "HELLO, WORLD!";
console.log(str.toLowerCase()); // Output: hello, world!
```

### 10)  `toUpperCase()`: Converts the string to uppercase.
```javascript
let str = "hello, world!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
```
<br>
<br>


    There are many other useful string functions in javascript which are inbuilt. These are only some of the most commonly used functions. 