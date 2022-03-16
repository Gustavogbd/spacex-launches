import React from 'react'
import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import './Upcoming.css'
import { AiOutlineRocket } from 'react-icons/ai' 


function Upcoming() {

    const [launches, setLaunches] = useState([])
    const [latest, setLatest] = useState([])
    const [error, setError] = useState('')
    const axios = require('axios');

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches/upcoming').then(response => {
        setLaunches(response.data)
        }).catch(error => {
        console.log(error)
        setError(error)
        });
    },[])

  return (

      <Container className='col-md-12 section__one'>

        <Container fluid className='top mt-2'>
          <h1>Space X</h1>
        </Container>

        <Row className='section__one mt-5'>
          <div className='titulo__section'>Próximos Lançamentos 
          <AiOutlineRocket/>
          </div>

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
  )
}

export default Upcoming;