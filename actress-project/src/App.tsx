import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('./Layout'));
const Homepage = lazy(() => import('./Pages/HomePage'));
const PhotoPage = lazy(() => import('./Pages/PhotoPage'));
const VideoPage = lazy(() => import('./Pages/VideoPage'));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App
