import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PlateDetails from '../pages/PlateDetails'
import AddNewPlate from '../pages/AddNewPlate'
import EditPlate from '../pages/EditPlate'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platedetails/:id" element={<PlateDetails />} />
            <Route path="/newplate" element={<AddNewPlate />} />
            <Route path="/editplate/:id" element={<EditPlate />} />
        </Routes>
    )
}

export default AdminRoutes