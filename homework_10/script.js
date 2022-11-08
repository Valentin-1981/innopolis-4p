// var dataObj = null;

const loadPosts = async () => {
    const response = await fetch("https://reqres.in/api/users");

    const posts = await response.json();

    return posts;
};

let load = loadPosts();

console.log(load);

// let dataObj = await fetch("https://reqres.in/api/users");
// let innerData = await dataObj.json();

const Data = fetch("https://reqres.in/api/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // dataObj = data;
        console.log(data);
        // console.log(Object.entries(dataObj));
        return data;
    });

let Load = Data.then((token) => {
    return token;
});

console.log(Load);

// let innerData_2 = innerData["data"];

// console.log(innerData_2);

// let innerData_3 = Object.entries(innerData_2);
// console.log(innerData_2);

// for (let [key, value] of innerData_3) {
//     console.log(value);
// }
