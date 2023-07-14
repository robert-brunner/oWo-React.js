import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beach from '../nav/Surf';

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/SurfGame" element={<Beach />} />
    </Routes>
  );
}
