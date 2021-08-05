import axios from "axios";
export default async function getData(userID) {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + userID);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID);
    console.log(users, "posts:", posts);
}