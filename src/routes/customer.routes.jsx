import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PlateDetails from '../pages/PlateDetails'

const CustomerRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platedetails/:id" element={<PlateDetails />} />
        </Routes>
    )
}

export default CustomerRoutes