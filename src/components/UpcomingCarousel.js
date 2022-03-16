import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from 'react-bootstrap';
import './Upcoming.css'

function UpcomingCarousel() {

    const [launches, setLaunches] = useState([])
    const [error, setError] = useState('')
    const axios = require('axios');
    console.log(launches);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches/upcoming').then(response => {
        setLaunches(response.data)
        }).catch(error => {
        console.log(error)
        setError(error)
        });
    },[])

  return (
    <Container className='section__one'>
      {/* Primeira Seção */}
      <Container fluid className='col-md-12 section__one'>

        <Container fluid className='top mt-2'>
          <h1>Space X</h1>
        </Container>

        <Row className='section__one mt-5'>
          <h2 className='section__title'>Próximos Lançamentos</h2>
          {launches?.map((launches, i) => (
            <Container className='col-md-12 mission mt-3'>
              <div className='patch'>
                <img src={launches.links.patch.small} style={{width:'50px',height:'40px'}}/>  
              </div>

              <div className='detalhes__box'>
                <p className="titulo">{i + 1} - {launches.name}</p>
                <p className="detalhes">{launches.details}</p>
                <p className='data'>Data prevista - {launches.date_local.substring(0,10)}</p>
              </div>

            </Container>
          ))}
        </Row>
      </Container>




    </Container>
  )
}

export default UpcomingCarousel;