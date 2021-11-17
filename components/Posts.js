import Post from "./Post";
const posts = [
  {
    id: "123",
    username: "khaledghaffarii",
    userImg:
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/p160x160/249282159_2680092105634057_110424453229605424_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=j9nDiFqILTIAX_HsLM7&_nc_ht=scontent.ftun6-1.fna&oh=b416e5fc869692b400e3eb72127a5219&oe=619849F6",
    img: "https://avatars.githubusercontent.com/u/75438046?s=400&u=4ad31515204e1d0d63e7940b107a25b85382a77c&v=4",
    caption: "SUBSCRIBE AND DESTORY THE LIKE BUTTON FOR THE YT algorithmi",
  },
  {
    id: "123",
    username: "khaledghaffarii",
    userImg:
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/p160x160/249282159_2680092105634057_110424453229605424_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=j9nDiFqILTIAX_HsLM7&_nc_ht=scontent.ftun6-1.fna&oh=b416e5fc869692b400e3eb72127a5219&oe=619849F6",
    img: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/69880944_2093001567676450_56952258482405376_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=dl66l9X-ZqYAX9Vxym7&_nc_ht=scontent.ftun4-1.fna&oh=34ece5a7d3024821919e36c469b9fb4c&oe=61BC374E",
    caption: "SUBSCRIBE AND DESTORY THE LIKE BUTTON FOR THE YT algorithmi",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            userImg={post.userImg}
            caption={post.caption}
            img={post.img}
            username={post.username}
          />
        );
      })}
     
    </div>
  );
}

export default Posts;
