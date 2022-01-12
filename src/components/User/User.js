function User(props) {
    const {id, name, username} = props;
    return (
        <div className={'user'}>
            <h2>Id - {id}</h2>
            <p>Name - {name}</p>
            <p>Surname - {username}</p>
        </div>
    );
}

export default User;