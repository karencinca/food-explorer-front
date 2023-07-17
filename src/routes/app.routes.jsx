import { Routes, Route } from 'react-router-dom'

import Home from '../pages/UserPages/Home'
import PlateDetails from '../pages/UserPages/PlateDetails'
import AddNewPlate from '../pages/AdminPages/AddNewPlate'
import EditPlate from '../pages/AdminPages/EditPlate'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platedetails/:id" element={<PlateDetails />} />
            <Route path="/newplate" element={<AddNewPlate />} />
            <Route path="/editplate/:id" element={<EditPlate />} />
        </Routes>
    )
}

export default AppRoutes