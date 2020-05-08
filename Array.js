const languages = ["java", "react", "javascript"];

const languages1 = new Array("java", "react", "javascript");

languages[1];

languages.push(78); // "java", "react", "javascript", 78
languages.pop(); //"java", "react", "javascript"

languages.unshift(45); // 45, "java", "react", "javascript"
languages.shift(); // "java", "react", "javascript"

languages1.slice(1, 2); // ["react", "javascript"]
languages1.splice(1, 1); // ["react"]
