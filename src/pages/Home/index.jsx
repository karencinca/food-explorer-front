import { useState, useEffect } from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import ScrollPlates from '../../components/ScrollPlates'
import PlatePreview from '../../components/PlatePreview'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Search from '../../assets/icons/Search'

import { api } from '../../services/api'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [plates, setPlates] = useState({ meals: [], salads: [], desserts: [] })
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  
  function handleDetails(id) {
    navigate(`/platedetails/${id}`)
  }

  useEffect(() => {
    async function fetchPlates() {

      try {
        setLoading(true)
        const response = await api.get(`plates/?searchQuery=${search.toLowerCase()}`)
        const meals = response.data.filter(plate => plate.category === "meal")
        const salads = response.data.filter(plate => plate.category === "salad")
        const desserts = response.data.filter(plate => plate.category === "dessert")
        
        setPlates({ meals, salads, desserts })

      } catch (error) {
        console.error('Error fetching dishes', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlates()
  }, [search])
  

  return (
    <Container>
      <Header
       setMenuOpen={setMenuOpen} 
      >
        <Input 
          icon={<Search />} 
          placeholder='Busque por pratos ou ingredientes'
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <div className='content'>
          <Banner />

          {loading ? <div className='loader-container'><div className='loader'></div></div> : 

          <div className='plates'>
              {
              plates.meals.length > 0 &&
                <ScrollPlates title="Refeições" >
                {
                  plates.meals.map(plate => {
                    return (       
                      <PlatePreview 
                        key={plate.id}
                        onClick={() => handleDetails(plate.id)}
                        {...plate}
                      />
                    )}
                  )
                }
            </ScrollPlates>
            }
            {
              plates.salads.length > 0 &&
                <ScrollPlates 
                  title="Saladas"
                  >
                  {
                  plates.salads.map(plate => {
                    return (       
                      <PlatePreview 
                        key={plate.id}
                        onClick={() => handleDetails(plate.id)}
                        {...plate}
                      />
                    )}
                  )}
              </ScrollPlates>
            }
            {
              plates.desserts.length > 0 && 
                <ScrollPlates 
                  title="Sobremesas"
                  >
                  {
                    plates.desserts.map(plate => {
                    return (       
                      <PlatePreview 
                        key={plate.id}
                        onClick={() => handleDetails(plate.id)}
                        {...plate}
                      />
                      )}
                    )}
                </ScrollPlates>
            }
          </div>
          }

          {(!loading && plates.meals.length < 1) &&
          (!loading && plates.salads.length < 1) &&
          (!loading && plates.desserts.length < 1) &&
            <h2 className='emptypage'>Sem pratos cadastrados.</h2>
          }
        </div>

        <Menu isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Footer />
    </Container>
  )
}

export default Home