import { Navigate, Route } from 'react-router-dom';
import Diary from '../../../libs/easy-german-lib/src/views/diary/Diary';

export const routes = [
  <Route path="/" element={<Navigate to="diary" />} />,
  <Route path="diary" element={<Diary />} />,
  <Route path="playground" element={<div>playground</div>} />,
  <Route path="rules" element={<div>rules</div>} />,
];
