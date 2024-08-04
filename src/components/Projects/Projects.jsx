import React from 'react'
import anime from './image/anime.png'
import age from './image/age.png'
import bmi from './image/bmi.png'
import color from './image/color.png'
import guess from './image/guess.png'
import hacker from './image/hacker.png'
import joke from './image/joke.png'
import rock from './image/rock.png'
import tic from './image/tic.png'
import watch from './image/watch (1).png'
import {useEffect} from 'react'
import Aos from 'aos'
import './Projects.css'

const Projects = () => {
    useEffect(()=>{Aos.init();

    },[])
  return (
    <div id="portfolio">
            <div class="work-list">
                <div class="work"
                data-aos="fade-up-right">
                    <img src={anime}/>
                    <div class="layer">
                        <h3>Anime Website</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasanime.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up">
                    <img src={age}/>
                    <div class="layer">
                        <h3>Age Calculator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasagecalculator.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-left">
                    <img src={watch}/>
                    <div class="layer">
                        <h3>Digital Watch</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasdigitalwatch.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-right">
                    <img src={bmi}/>
                    <div class="layer">
                        <h3>BMI Calculator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasbmicalculator.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up">
                    <img src={hacker}/>
                    <div class="layer">
                        <h3>Hacker Login Form</h3>
                        <p>Using HTML , CSS</p>
                        <a href="https://himalayashackerloginform.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-left">
                    <img src={joke}/>
                    <div class="layer">
                        <h3>Random Joke Generator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasrandomjokegenerator.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-right">
                    <img src={rock}/>
                    <div class="layer">
                        <h3>Rock Paper Scissor</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasrockpaperscissorgame.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up">
                    <img src={tic}/>
                    <div class="layer">
                        <h3>Tic Tac Toe Game</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="#">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-left">
                    <img src={color}/>
                    <div class="layer">
                        <h3>Background-Color-Changer</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasbgcolorchanger.netlify.app">Link</a>
                    </div>
                </div>
                <div class="work"
                data-aos="fade-up-right">
                    <img src={guess}/>
                    <div class="layer">
                        <h3>Number Guessing Game</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasguessthenumbergame.netlify.app">Link</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Projects
