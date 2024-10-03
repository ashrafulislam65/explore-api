const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('error happened', error))
}
const loadComments2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('data load error')
    }
}