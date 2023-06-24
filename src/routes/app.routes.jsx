import { Routes, Route } from 'react-router-dom'

import Home from '../pages/UserPages/Home'
import PlateDetails from '../pages/UserPages/PlateDetails'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platedetails/:id" element={<PlateDetails />} />
        </Routes>
    )
}

export default AppRoutes