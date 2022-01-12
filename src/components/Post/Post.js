function Post(props) {
    const {id, title, body} = props;
    return(
        <div className={'post'}>
            <h2>Id Post: {id}</h2>
            <h2>Title Post: {title}</h2>
            <p>Body Post: {body}</p>
        </div>
    )
}
export default Post;