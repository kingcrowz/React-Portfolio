import weatherAppIMG from "../images/WeatherDashboard.png"
import MovieIMG from "../images/MovieReader.png"
import recipeResidenceIMG from "../images/Recipe-Residence.png"
import GroveIMG from "../images/Grove.png"
import "../styles/project.css"
const Projects = () => {
    return (
        <div className="project">
            <div className="projectDiv">
                <h1 className="projectTitle">Recipe-Residence</h1>
                <h2 className="projectTitle"><a href="https://github.com/kingcrowz/recipe-residence" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://desolate-atoll-16678.herokuapp.com/" target="_blank">
                    <img className="projectImage" src={recipeResidenceIMG} alt="Password Generator" />
                </a>
                <h3 className="projectText">This application is a digital cookbook for users to record their own recipes, find other users' recipes, and adjust them according to your preferences.  This application was a collaboration by Zachary Zaleski, Lisa Shaffer, Rachel Chin, and Jeff Mullen.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Weather Dashboard</h1>
                <h2 className="projectTitle"><a href="https://github.com/kingcrowz/Weather-Dashboard" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://kingcrowz.github.io/Weather-Dashboard/" target="_blank">
                    <img src={weatherAppIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application makes use of a few weather APIs to gather information on a searched city for the day and a 5 day forecast.  Application also has a recent searches feature.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Movie Search</h1>
                <h2 className="projectTitle"><a href="https://github.com/lapshaffer/MovieReaderProject" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://lapshaffer.github.io/MovieReaderProject/" target="_blank">
                    <img src={MovieIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application allows users to search for movies by name or key words.  e.g. you're looking for a movie called 'frozen' but not the disney one. This application was a collaboration by Zachary Zaleski, Lisa Shaffer, and Dominick Simone. </h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Grove</h1>
                <h2 className="projectTitle"><a href="https://github.com/kingcrowz/SustainableReviewsProject" className="linkStyles" target="_blank">Github</a></h2>
                <a href="http://obscure-ocean-20287.herokuapp.com/" target="_blank">
                    <img src={GroveIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application allows for users to create an account and leave reviews for a company but on their sustainability practices.  Similar to a yelp, but not reviewing specific locations, instead the company's practices as a whole in terms of sustainability. This application was a collaboration by Zachary Zaleski, Lisa Shaffer, Rachel Chin, and Jeff Mullen.  </h3>
            </div>
        </div>
    )
}
export default Projects