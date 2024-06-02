// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Layout from './pages/Layout';
// import Post from './pages/Post';
// import Resume from './pages/Resume';
// import Write from './pages/Write';
// import Header from './components/Header';
//
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Header />}>
//           <Route element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/resume" element={<Resume />} />
//           </Route>
//           <Route path="/posts/:postId" element={<Post />} />
//         </Route>
//         {/*todo (5-1) Write 추가*/}
//       </Routes>
//     </Router>
//   );
// }
//
// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient(); // 수정: 변수명과 타입을 분리
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router basename="/CNU_Blog"> {/* 수정: basename의 값에 '/' 제거 */}
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/write" element={<Write />} /> {/* 추가: Write 경로 */}
            </Route>
            <Route path="/posts/:postId" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
