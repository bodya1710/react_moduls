import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/Layout/Layout";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage";
import {EpisodeDetailsPage} from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";

function App() {
  return (
     <div>
          <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<EpisodesPage/>}/>
                <Route path={'/details'} element={<EpisodeDetailsPage/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
