import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayouts from './mainLayout/MainLayout';
import DashBoard from './pages/dashBoard/DashBoard';
import RecentItemsTable from './pages/recent/RecentItemsTable';
import TagsPage from './pages/tags/TagsPage';
import FolderPage from './pages/folder/FolderPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/recent" element={<RecentItemsTable />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/folders" element={<FolderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
