/* DESCRIPTION
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns 
a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) 
which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. 
Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). 
This is done by injecting script tags into the website through form fields which may contain malicious code 
(e.g. a redirection to a malicious website that steals personal information).*/

// SOLUTION
function htmlspecialchars(formData) {
    let newStr;

    newStr = formData.replace(/&/g, '\&amp;');
    newStr = newStr.replace(/</g, '\&lt;');
    newStr = newStr.replace(/>/g, '\&gt;');
    newStr = newStr.replace(/"/g, '\&quot;');

    return newStr;
}

console.log("htmlspecialchars: ", htmlspecialchars("<h2>Hello World</h2>"));
console.log("htmlspecialchars: ", htmlspecialchars("Hello, how would you & I fare?"));