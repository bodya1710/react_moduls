import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {CarPage, CatPage, DogPage, GirsPage, NoteBookPage} from "./pages";

function App() {
  return (
     <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'cat'} element={<CatPage/>}/>
                <Route path={'car'} element={<CarPage/>}/>
                <Route path={'dog'} element={<DogPage/>}/>
                <Route path={'girls'} element={<GirsPage/>}/>
                <Route path={'notebook'} element={<NoteBookPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
