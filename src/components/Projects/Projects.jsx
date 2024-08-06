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
import todo from './image/todo.png'
import portfolio from './image/portfolio.png'
import landing from './image/landing.png'
import './Projects.css'

const Projects = () => {
    
  return (
<div id="portfolio">
    <div className="container">
        <div className="work-list" data-aos="fade-up">
            <div className="work">
                    <img src={portfolio}/>
                    <div className="layer" >
                        <h3>Personal Portfolio</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasingh337.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={anime}/>
                    <div className="layer">
                        <h3>Anime Website</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasanime.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={todo}/>
                    <div className="layer">
                        <h3>To-Do-List</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayas-to-do-list.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={age}/>
                    <div className="layer">
                        <h3>Age Calculator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasagecalculator.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={watch}/>
                    <div className="layer">
                        <h3>Digital Watch</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasdigitalwatch.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={bmi}/>
                    <div className="layer">
                        <h3>BMI Calculator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasbmicalculator.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={hacker}/>
                    <div className="layer">
                        <h3>Hacker Login Form</h3>
                        <p>Using HTML , CSS</p>
                        <a href="https://himalayashackerloginform.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={joke}/>
                    <div className="layer">
                        <h3>Random Joke Generator</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasrandomjokegenerator.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={rock}/>
                    <div className="layer">
                        <h3>Rock Paper Scissor</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasrockpaperscissorgame.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={tic}/>
                    <div className="layer">
                        <h3>Tic Tac Toe Game</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="#">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={landing}/>
                    <div className="layer">
                        <h3>Landing Page</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayaslandingpage.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={color}/>
                    <div className="layer">
                        <h3>Background-Color-Changer</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasbgcolorchanger.netlify.app">Link</a>
                    </div>
                </div>
                <div className="work" data-aos="fade-up">
                    <img src={guess}/>
                    <div className="layer">
                        <h3>Number Guessing Game</h3>
                        <p>Using HTML , CSS & JavaScript</p>
                        <a href="https://himalayasguessthenumbergame.netlify.app">Link</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Projects
