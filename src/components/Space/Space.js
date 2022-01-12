import '../style/style.css'
function Space(props) {
    const {name, year, img} = props;
    return (
        <div className={'wrap_item'}>
            <div className={'item_spaces'}>
                <div className={'title_year_container'}>
                    <h2>{name}</h2>
                    <p>{year}</p>
                </div>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
}
export default Space;