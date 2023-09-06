import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PlateDetails from '../pages/UserPages/PlateDetails'
import AddNewPlate from '../pages/AdminPages/AddNewPlate'
import EditPlate from '../pages/AdminPages/EditPlate'

const AppRoutes = ({ isAdmin }) => {
    return (
        <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin} />} />
            <Route path="/platedetails/:id" element={<PlateDetails isAdmin={isAdmin} />} />
            <Route path="/newplate" element={<AddNewPlate isAdmin={isAdmin} />} />
            <Route path="/editplate/:id" element={<EditPlate isAdmin={isAdmin} />} />
        </Routes>
    )
}

export default AppRoutes