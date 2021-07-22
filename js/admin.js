// let allPosts = J[]
localStorage.allPosts ? allPosts = JSON.parse(localStorage.allPosts) : allPosts = [];
// let n = 5;
// const countDown = () => {
// 	displayPosts();
// 	// if (p >= 0) {

// 	// count.innerHTML = `<p>Displaying all posts in ${p} seconds</p>`;	
// 	// } else {
// 	// 	clearInterval(countDown())
// 	// 	displayPosts();
// 	// }
// }
// // setInterval("countDown(n--)", 1000);

const displayPosts = () => {
	fullPost.style.display = 'none';
	count.style.display = 'none';
	allPost.style.display = 'block';
	allPost.innerHTML = "";
	if (allPosts.length == 0) {
		allPost.innerHTML = "<h2><b>No posts to display</b></h2>";
	} else {
		for (let i = 0; i < allPosts.length; i++) {
			allPost.innerHTML += `<div onclick="displayAll(${i})" class="animate__animated animate__slideInLeft animate__delay-slow"><p><img id='image' src="${allPosts[i].img}"></p><p>${allPosts[i].title}</p><p>${allPosts[i].body.slice(0, 20)}...<b>Read More</b></p></div>`;
		};
	}
	
	

}

const displayAll = n => {
	allPost.style.display = 'none';
	fullPost.style.display = 'block';
	fullPost.innerHTML = "";
	fullPost.innerHTML += `<button onclick="back()">back</button>`
	fullPost.innerHTML += `<div class="animate__animated animate__bounceInUp animate__delay-slow"><p><img id="fullImage" src="${allPosts[n].img}"></p><p>${allPosts[n].title}</p><p>${allPosts[n].body}</p> <button onclick="delPost(${n})">delete</button></div>`;
}

const back = () => {
	fullPost.style.display = "none";
	allPost.style.display = "block";
}

const delPost = n => {
	fullPost.style.display = "";
	allPosts.splice(n, 1);
	localStorage.allPosts = JSON.stringify(allPosts);
	displayPosts();
}
displayPosts();