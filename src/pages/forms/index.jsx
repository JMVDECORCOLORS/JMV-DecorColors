import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, Link, Navigate} from 'react-router-dom'
import './index.css'
import axios from 'axios';

import { createFilterOptions, Rating } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"


import $ from 'jquery';

import Logodecor from '../../assets/bgs/logodecor.png'
import LogoJmv from '../../assets/bgs/logojmv.png'

import poredby from '../../assets/bgs/bgfooter.png'
/*slide2imgs*/
import pintor from '../../assets/bgs/2model.png' 


/*slide3imgs*/




function FormJMVDecor() {
  //getName
  const[nome,setNome] = useState("")
  
  //getidade
  const[date,setDate] = useState("")
  
  //capturargeneropintor
  const [Genero, setGenero] = useState(0)

  //captur tempo de trabalho
  const [timePintor, setTimePintor] = useState(0)
  
  //fonte
  const [fonte, setFonte] = useState(null)

  //marcas
  const [checked, setChecked] = useState([]);

  //produtos
  const[produto, setProduto] = useState("")

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  //textarea
  const[textee,setText] = useState("")



  //rating starts
  const [value, setValue] = useState(null)


  //form submit
  const handleSubmit = (event) => {
    console.log("eae")
    event.preventDefault();
    console.log(nome)
    console.log(Genero)
    console.log(timePintor)
    console.log(date)
    console.log(value)
    console.log(fonte)
    console.log(checked)
    console.log(textee)
    console.log(produto)

        let formData = new FormData();
      formData.append('nome', nome)
      formData.append('Genero', Genero)
      formData.append('timePintor', timePintor)
      formData.append('date', date)
      formData.append('value', value) 
      formData.append('fonte', fonte) 
      formData.append('checked', checked) 
      formData.append('textee', textee) 
      formData.append('produto', produto) 
      //http://localhost:5555/api/postcontato
      $.ajax({
        url: 'https://jmvreformas.com.br/api/postcontato/', // caminho para o script que vai processar os dados
        type: 'POST',
        crossDomain: true,
        dataType: "json",
        data: {nome: nome, Genero: Genero,timePintor:timePintor, date: date, fonte:fonte,  checked:checked, produto:produto,textee:textee, value:value},
        success: function(response) {
            console.log(response)
       
        },
        error: function(xhr, status, error) {
            console.log("naofoi")
        }
    });
      console.log(formData)
  }
  return (
    <div className="FormJMVDecor">
        <form onSubmit={handleSubmit}>
        <Swiper spaceBetween={0} loop={false}
              allowTouchMove={false}
              navigation={{
                  nextEl: '.next',
                  prevEl: '.prev'
              }}
              modules={[Pagination, Navigation]}
              onSlideChange={console.log("foi")}
                >
                            
                <SwiperSlide>
                  <div className='slide2 slidemain'>
                    <div className='blocoSlide2'>
                        <div className='slide2primeiroinput'>
                            <p>Seu nome</p>
                            <input type="text" value={nome} onChange={texto => setNome(texto.target.value)} />
                        </div>
                        <div className='slide2segundoblocoinput'>
                            <div className='slide2segundoblocoinputleft'>
                                <p>Dt. Nascimento:</p>
                                <input type="date" value={date} onChange={texto => setDate(texto.target.value)}  />
                            </div>
                            <div className='slide2segundoblocoinputright'>
                                <p>Gênero:</p>
                                <select value={Genero} required onChange={texto => setGenero(texto.target.value)}>  
                                  <option value=""></option>
                                  <option value="Masculino">Masculino</option>
                                  <option value="Fêminino">Fêminino</option>
                                  <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </div>
                        <div className='slide3terceiroslide'>
                            <p>A quanto tempo você é pintor(a)?</p>
                            <select value={timePintor} required onChange={texto => setTimePintor(texto.target.value)}>
                              <option value=""></option>
                              <option value="menosdeumano">Menos de 1 ano</option>
                              <option value="de1a5anos">De 1 a 5 anos</option>
                              <option value="de5a10anos">de 5 a 10 anos</option>
                              <option value="amaisde10anos">A mais de 10 anos</option>
                            </select>
                        </div>
                        <div className='slide2blocoquatro'>
                            <p className='next' style={{cursor:'pointer'}}> <span>Bora pro próximo &#62;</span> </p>
                            <br />
                            <br />
                            <Link to="/"><p>&#60; Voltar</p></Link>
                        </div>
                        <img className='slide2pintor' src={pintor} alt="" />
                    </div>
                  </div>
                </SwiperSlide>   
                <SwiperSlide>
                  <div className='slide3 slidemain'>
                    <div className='blocoslide3'>
                      <p>Como você chegou até nosso WorkShop?</p>
                      <div className='contentradio'>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='socialmedia' value="Instagram"  onChange={texto => setFonte(texto.target.value)}  /> <p>Instagram</p>
                          </label>
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='socialmedia' value="Facebook"  onChange={texto => setFonte(texto.target.value)}   /> <p>Facebook</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='socialmedia' value="Loja física"  onChange={texto => setFonte(texto.target.value)} /> <p>Loja física</p>
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='socialmedia'  value="Indicacao"  onChange={texto => setFonte(texto.target.value)}/> <p>Indicação de Amigo(a)</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='socialmedia'  value="Outros"  onChange={texto => setFonte(texto.target.value)}/> <p>Outros</p> 
                          </label>
                          
                        </div>
                      </div>
                      <div className='navigationslide3'>
                        <p className='prev'>&#60; Voltar</p>
                        <p className='next'><span>Próximo &#62;</span></p>
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer>
                  </div> 

                </SwiperSlide>   
                <SwiperSlide>
                  <div className='slide4 slidemain'>
                    <div className='blocoinfoslide3'>
                      <p>
                        A partir de agora, todas as respostas
                      serão <span>anônimas!</span>  
                      <br />
                      <br />
                     <span> Não tem resposta errada! </span> Por isso,
                      seja transparente e com a maior
                      <span> sinceridade possível </span>
                       nas respostas!</p> 
                      <div className='navigationslide4'>
                        <p className='prev'>&#60; Voltar</p><p className='next'><span>Entendi!</span></p>
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer>
                  </div>  
                </SwiperSlide>   
                <SwiperSlide>
                  <div className='slide5 slidemain'>
                  <div className='blocoinfoslide5'>
                    <p>
                    Quais as marcas de tinta você
                    mais usa? (Selecione até duas opções)
                    </p>
                    <div className='radiosSlide5'>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Suvinil"/> <p>Suvinil</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Coral" /> <p>Coral</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Sherwin Williams" /> <p>Sherwin Williams</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Eucatex" /> <p>Eucatex</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Suvinil"/> <p>Suvinil</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Lukscolor" /> <p>Lukscolor</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Hidracor" /> <p>Hidracor</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Glasurite" /> <p>Glasurite</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Quartzolit" /> <p>Quartzolit</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="DecorColors" /> <p>Decor Colors</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="checkbox" className='checkbox' name='marcartintaas' onChange={handleCheck} value="Outras" /> <p>Outras</p> 
                          </label>
                          
                        </div>
                        <div className='slide5Navigation'>
                          <p className='prev'>&#60; Voltar</p> <p className='next'><span>Próximo &#62;</span></p>
                        </div>
                    </div>
                  </div>  
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer> 
                  
                  </div>
                </SwiperSlide> 
                <SwiperSlide>
                  <div className='slide6 slidemain'>
                    <div className='infobloco6'>  
                      <p>Qual produto você mais usa?
                        (Selecione até duas respostas)</p>
                      <div className='radiosbloco6'>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value='Tinta Impermeável' onChange={texto => setProduto(texto.target.value)} /> <p>Tinta impermeável</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value='Cimento Queimado' onChange={texto => setProduto(texto.target.value)} /> <p>Cimento Queimado</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value="Selante" onChange={texto => setProduto(texto.target.value)} /> <p>Selante</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value="Massa" onChange={texto => setProduto(texto.target.value)} /> <p>Massa</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value="Fundo Preparador" onChange={texto => setProduto(texto.target.value)} /> <p>Fundo Preparador</p> 
                          </label>
                          
                        </div>
                        <div className='divradio'>
                          <label>
                            <input type="radio" name='ProdutosMaisUsados' value="Cera" onChange={texto => setProduto(texto.target.value)} /> <p>Cera</p> 
                          </label>
                          
                        </div>
                      </div>
                      <div className='navigationSlide6'> 
                        <p className='prev'>&#60; Voltar</p> <p className='next'><span>Próximo &#62;</span></p>
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer>  
                  </div>  
                </SwiperSlide> 
                <SwiperSlide>
                  <div className='slide7 slidemain'>
                    <div className='blocoinfo7'>
                      <p>Qual tema você gostaria de ver
                        no nosso WorkShop?</p>
                      <textarea name="" id="" required placeholder="Ex.: Gostaria de conhecer mais sobre pintura mecanizada." onChange={texto => setText(texto.target.value)}></textarea>
                      <div className='navigationSlide6'> 
                        <p className='prev'>&#60; Voltar</p> <p className='next'><span>Próximo &#62;</span></p>
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer>   
                  </div>  
                </SwiperSlide> 
                <SwiperSlide>
                  <div className='slide8 slidemain'>
                    <div className='blocoinfoslide8'>
                      <p>Como você avaliaria este WorkShop?</p>
                      <Rating
                          name="simple-controlled"
                          value={value}
                          size='large'
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      <div className='navigationSlide6'>

                        <p className='prev'>Voltar</p>
                        <input type="submit" className='inputsub' value="Enviar!" />
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer> 
                  </div>  
                </SwiperSlide> 
                <SwiperSlide>
                  <div className='slidethanks slidemain' >
                    <div className='blocoinfoslidethanks'>
                      <p>Obrigado por participar!</p>
                      <p className='certificadotext'>
                      Fique até o final para receber
                    o seu <span>certificado DECOR COLORS</span>,
                    e lembre-se de nos seguir no insta:
                      </p>
                      <div className='linksend'>
                          <div>
                            <a href="https://www.instagram.com/jmv_reformas/">
                                <img src={LogoJmv} alt="" />
                                <p>@jmv_reformas</p>
                            </a>
                            
                          </div>
                          <div>
                              <a href="https://www.instagram.com/decorcolors.oficial/">
                                <img src={Logodecor} alt="" />
                                <p>@decorcolors.oficial</p>
                              </a>
                          </div>
                          <a href="https://www.arquelab.com.br/" className='poredbyy'>
                            <img src={poredby} alt="" />
                          </a>
                          
                      </div>
                    </div>
                    <footer className='defaultfooter'>
                      <a href="https://decorcolors.com.br/">
                        <img className='logodecor' src={Logodecor} alt="" />
                      </a>
                      <a href="https://jmvreformas.com.br/">
                        <img  className='logoDecor'  src={LogoJmv} alt="" />
                      </a>
                      
                    </footer>  
                  </div>  
                </SwiperSlide> 
                                
        </Swiper>
        </form>
    </div>
  )
}

export default FormJMVDecor