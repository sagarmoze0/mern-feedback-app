import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import {toast} from 'react-toastify'

import AboutPage from './page/AboutPage'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './context/FeedbackContext'
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}


export default App