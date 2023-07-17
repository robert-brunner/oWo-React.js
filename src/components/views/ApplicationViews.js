import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beach from '../nav/Surf';
import BeachMenu from '../nav/SurfMenu';

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/*" element={<BeachMenu />} />
      <Route path="/SurfGame" element={<Beach />} />
    </Routes>
  );
}
