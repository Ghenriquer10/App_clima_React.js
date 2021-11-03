import React, {useState, useEffect} from "react";
import {FaCloudSun, FaTemperatureHigh, FaWind, FaTint, FaCloudSunRain, FaTachometerAlt} from 'react-icons/fa'
import './body.css'
import clima from '../../assets/clima.jpg'
import api from "../../services/api";
import { toast } from 'react-toastify'


export default function Body(){

    const [cidadePadrao, setCidadePadrao] = useState({});
    const [cidade, setCidade] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function loadPage(){
            const response = await api.get(`/?city=Brasilia`)
            
            setCidadePadrao(response.data)
            console.log(response.data)
            setLoading(false)
        }
        
        loadPage()
    }, [])
    
    async function handleCity(cidade){
        const response = await api.get(`/?city=${cidade}`)
        if(cidade === ''){
            toast.error('Cidade ou estado não encontrado!')
        }else{
            if(response.data.cod === '404'){
                toast.error('Cidade ou estado não encontrado!')
                setCidade('')
            } else {
                console.log(response.data)
                setCidadePadrao(response.data)
                setCidade('')
            }
        }
    }


    if(loading){
        return(
            <div className="load">
                <h1>Carregando clima</h1>
            </div>
        )
    }

    
    return(
        <div className="card">
            <div className="clima">
                <div className="titulo-card">
                    <div className="city">
                        <h1>
                            {cidadePadrao.name}
                        </h1>
                        <FaCloudSun size={60}/> 
                    </div>
                    <div className="temp">
                        <FaTemperatureHigh size={30}/>
                        <h1>
                            {(cidadePadrao.main.temp).toFixed(0)}
                        </h1>
                    </div>
                </div>
                <div className="corpo-card">
                    <div className="dados-card">
                        <p>
                            <FaCloudSunRain size={30}/>
                            Min {(cidadePadrao.main.temp_min).toFixed(0)}°
                            Max {(cidadePadrao.main.temp_max).toFixed(0)}°
                        </p>
                        <p>
                            <FaTint size={30}/>
                            Umidade {cidadePadrao.main.humidity}%
                        </p>
                        <p>
                            <FaTachometerAlt size={30}/> 
                            Pressão {cidadePadrao.main.pressure} hPa
                        </p>
                        <p>
                            <FaWind size={30}/> 
                            {cidadePadrao.wind.speed} Km/h
                        </p>
                    </div>
                    <div className="image-card">
                        <img src={cidadePadrao.main.temp <= 15 ? "https://www.opresente.com.br/wp-content/uploads/2018/04/FRIO.jpg" : "https://veja.abril.com.br/wp-content/uploads/2018/07/saude-calor-20180115-002.jpg"} alt="clima"/>
                    </div>
                </div>
                <div className="search-city">
                    <input type="text" placeholder="Digite a cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
                    <button type="submit" onClick={ e => handleCity(cidade)}>Pesquisar</button>
                </div>
            </div>
        </div>  
    )
}