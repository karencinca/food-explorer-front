import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import MenuUser from '../../components/Menu'
import { Container } from './styles'
import Banner from '../../components/Banner'
import ScrollPlates from '../../components/ScrollPlates'
import PlatePreview from '../../components/PlatePreview'
import Header from '../../components/Header'

import { api } from '../../services/api'

const Home = ({ isAdmin }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [plates, setPlates] = useState({ meals: [], salads: [], desserts: [] })

  const navigate = useNavigate()
  
  function handleDetails(id) {
    navigate(`/platedetails/${id}`)
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get('/plates')
      const meals = response.data.filter(plate => plate.category === "meal")
      const salads = response.data.filter(plate => plate.category === "salad")
      const desserts = response.data.filter(plate => plate.category === "dessert")

      setPlates({ meals, salads, desserts })
    }

    fetchPlates()
  }, [])

  return (
    <Container>
      <Header
       setMenuOpen={setMenuOpen} 
       isAdmin={isAdmin}
       />

      <div className='content'>
          <Banner />
          <div className='plates'>
            <ScrollPlates 
            title="Refeições" 
            >
            {plates.meals.map(plate => {
              return (       
                <PlatePreview 
                  key={plate.id}
                  isAdmin={isAdmin}
                  onClick={() => handleDetails(plate.id)}
                  {...plate}
                />
              )}
              )}
            </ScrollPlates>
            <ScrollPlates 
            title="Saladas"
            >
            {plates.salads.map(plate => {
              return (       
                <PlatePreview 
                  key={plate.id}
                  isAdmin={isAdmin}
                  onClick={() => handleDetails(plate.id)}
                  {...plate}
                />
              )}
              )}
            </ScrollPlates>
            <ScrollPlates 
            title="Sobremesas"
            >
            {plates.desserts.map(plate => {
              return (       
                <PlatePreview 
                  key={plate.id}
                  isAdmin={isAdmin}
                  onClick={() => handleDetails(plate.id)}
                  {...plate}
                />
              )}
              )}
            </ScrollPlates>
          </div>
        </div>

        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Footer />
    </Container>
  )
}

export default Home