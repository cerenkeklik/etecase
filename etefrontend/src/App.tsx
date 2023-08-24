import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import LoginOrRegister from './pages/LoginOrRegister'
import Dashboard from './pages/Dashboard'
import Companies from './pages/Companies'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginOrRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
