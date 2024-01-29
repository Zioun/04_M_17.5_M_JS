const books = ["java", "C++", "Node", "Python", "Ruby"];

const check = books.includes("javaScript");

if(check == true){
    console.log("Yes! JavaScript have.");
}else{
    books.push("JavaScript");
    console.log(books);
}