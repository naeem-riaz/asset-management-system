import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayouts from './mainLayout/MainLayout';
import DashBoard from './pages/dashBoard/DashBoard';
import RecentItemsTable from './pages/recent/RecentItemsPage';
import TagsPage from './pages/tags/TagsPage';
import FolderPage from './pages/folder/FolderPage';
import FavoritePage from './pages/favorite/FavoritePage';
import TrashPage from './pages/trash/TrashPage';
import ProfilePage from './pages/profile/ProfilePage';
import Document_Links from './pages/document-Links/Document-Links';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<DashBoard />} />
          <Route path="/recent" element={<RecentItemsTable />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/folders" element={<FolderPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/document-links" element={<Document_Links />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;