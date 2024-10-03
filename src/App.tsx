import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainLayouts from './mainLayout/MainLayout';
import DashBoard from './pages/dashBoard/DashBoard';
import Document_Links from './pages/document-Links/Document-Links';
import FavoritePage from './pages/favorite/FavoritePage';
import FolderPage from './pages/folder/FolderPage';
import ProfilePage from './pages/profile/ProfilePage';
import RecentItemsTable from './pages/recent/RecentItemsPage';
import TagsPage from './pages/tags/TagsPage';
import TrashPage from './pages/trash/TrashPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/dashboard" element={<DashBoard />} />
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