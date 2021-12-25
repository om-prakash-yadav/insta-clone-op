import Post from "./Post";
const posts =[
    {
        id:'123',
        username:"Om Prakash",
        userImg:'https://raw.githubusercontent.com/om-prakash-yadav/links/main/Untitled.png',
        img:'https://images.unsplash.com/photo-1611162618758-2a29a995354b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80',
        caption:"wow 😎😎"
    },
    {
        id:'123',
        username:"Harsh Jha",
        userImg:'https://raw.githubusercontent.com/om-prakash-yadav/links/main/harsh.png',
        img:'https://images.unsplash.com/photo-1539187577537-e54cf54ae2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
        caption:"😎 awesome 😎"
    },
    {
        id:'123',
        username:"Monu Paswan",
        userImg:'https://raw.githubusercontent.com/om-prakash-yadav/links/main/monu.png',
        img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        caption:"awesome 😍😍"
    },
    {
        id:'123',
        username:"Akash Raj",
        userImg:'https://raw.githubusercontent.com/om-prakash-yadav/links/main/akashraj.png',
        img:'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
        caption:"😂😂😂😁"
    },
]

function Posts() {
    
    return (
        <div>
            {posts.map((post) => (
                <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
           
        </div>
    )
}

export default Posts
