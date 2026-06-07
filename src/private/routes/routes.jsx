import { createBrowserRouter, Navigate } from 'react-router-dom';

import ExerciseSection from '../../exercises/exerciseSection.jsx';
import StudentWork from '../../exercises/lesson-10/studentWork.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/lessons/lesson-10" replace />,
  },
  {
    path: '/lessons/lesson-10/*',
    element: (
      <ExerciseSection
        title="Lesson 10"
        StudentWork={StudentWork}
        lesson="lesson-10"
      />
    ),
  },
]);

export default router;
