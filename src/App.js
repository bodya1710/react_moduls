import {Routes, Route} from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import DetailPostsPage from "./pages/DetailPostsPage/DetailPostsPage";
import DetailUserPage from "./pages/DetailUserPage/DetailUserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import AllPostsUser from "./pages/AllPostsUser/AllPostsUser";
import AllCommentsPost from "./pages/AllCommentsPost/AllCommentsPost";

function App() {
    return (
        <div>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route index element={<HomePage/>}/>
                            <Route path={'users'} element={<UsersPage/>}>
                                <Route path={':id'} element={<DetailUserPage/>}>
                                    <Route path={'posts'} element={<AllPostsUser/>}/>
                                </Route>
                            </Route>
                            <Route path={'posts'} element={<PostsPage/>}>
                                <Route path={':id'} element={<DetailPostsPage/>}>
                                    <Route path={'comments'} element={<AllCommentsPost/>}/>
                                </Route>
                            </Route>

                            <Route path={'*'} element={<NotFoundPage/>}/>
                        </Route>
                    </Routes>
        </div>
    );
}

export default App;