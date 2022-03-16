import './Upcoming.css'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'





function Latest() {
    const [latest, setLatest] = useState([])
    const [error, setError] = useState('')
    console.log(latest)
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches').then(response => {
            response.data.reverse()
          setLatest(response.data)
        }).catch(error => {
          console.log(error)
          setError(error)
        })

    },[])


  return (
            <Container className='col-md-12 section__one'>

            <Row className='section__one mt-5'>
            <h2 className='section__title'>Últimos Lançamentos</h2>
            {latest?.slice(2,7).map((latest, i) => (
                <Container className='col-md-12 mission mt-3'>
                <div className='patch'>
                    <img src={latest.links.patch.small} style={{width:'50px',height:'40px'}}/>  
                </div>

                <div className='detalhes__box'>
                    <p className="titulo">{i + 1} - {latest.name}</p>
                    <p className="detalhes">Númer {latest.flight_number}</p>
                    <p className='data'>Data de lançamento - {latest.date_local.substring(0,10)}</p>
                </div>

                </Container>
            ))}
            </Row>
            </Container>
  )
}

export default Latest