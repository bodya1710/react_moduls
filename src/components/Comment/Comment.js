function Comment(props) {
    const {id, name, email, body} = props;
    return(
        <div className={'comment'}>
            <h2>Id Comment: {id}</h2>
            <p>Name Comment: {name}</p>
            <p>Email Comment: {email}</p>
            <p>Body Comment: {body}</p>
        </div>
    )
}
export default Comment