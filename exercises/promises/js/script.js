/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';


async function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

async function populateUserList() {
    let allUsers = await fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .catch(error => console.log(error));
    
    let allUsersDiv = document.querySelector("#users");

    for (let user of allUsers) {
        let userPara = document.createElement("p");
        userPara.classList = "p";
        userPara.innerHTML = `${user.name} (${user['email']})`;

        allUsersDiv.appendChild(userPara);
    }

}

async function populatePosts() {
    let allUsers = await fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .catch(error => console.log(error));

    let [posts, comments] = await Promise.all(
        [
            getData("https://jsonplaceholder.typicode.com/posts/"),
            getData("https://jsonplaceholder.typicode.com/comments/")
        ]
    );

    let allPostsDiv = document.querySelector("#posts");
    for (let post of posts) {
        let postPara = document.createElement("p");
        postPara.classList = "p";

        let commCount = 0;
        for (let comm of comments) {
            if (comm.postId === post.id) {
                commCount++;
            }

        }
        try {
            postPara.innerHTML = `${post.title} was written by 
            <em>${allUsers[post.userId - 1]['name']}</em> 
            and has ${commCount} comments`;
        } catch(err) {
            console.log(err);
            console.log(allUsers[post.userId]);
        }
        
        allPostsDiv.appendChild(postPara);
    }
}

async function get_individual(num, all_numbers) {

}

async function get_batch(num, all_numbers) {

}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}


window.onload = function() {
    populatePosts();
};