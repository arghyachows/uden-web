import React from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'
import Layout from './components/common/layout/Layout'

const App = () => (
    <div className="app">
        <Layout />
    </div>
);

export default hot(module)(App);