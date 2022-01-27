
import {useLocation} from "react-router-dom";

import css from './EpisodeDetailsPage.module.css'
import {EpisodesDetails} from "../../components/EpisodesDetails/EpisodesDetails";

const EpisodeDetailsPage = () => {
    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            <div className={css.header_title_episod_details}>
                <h2>{state.name}</h2>
                <p>Episode: {state.episode}</p>
                <p>Air date: {state.air_date}</p>
            </div>
            <div className={css.wrap_episodes}>{state.characters.map((item, index )=> <EpisodesDetails key={index} episods={item}/>)}</div>

        </div>
    );
};

export {EpisodeDetailsPage};

