
import Post from "../Post/Post"

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map(item => <Post key={item.id} post={item}/>)}
        </div>
    );
};

export default Posts;