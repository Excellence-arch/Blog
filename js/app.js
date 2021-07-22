if (localStorage.allPosts) {
	allPosts = JSON.parse(localStorage.allPosts);
} else {
	allPosts = [];
}

const createPost = () => {
	let post = {};
	post.title = title.value;
	post.body = postBody.value;
	post.img = postImg.value.slice(12, postImg.value.length);
	allPosts.push(post);
	localStorage.allPosts = JSON.stringify(allPosts);
	title.value = "";
	postBody.value = "";
	postImg.value = "";
}