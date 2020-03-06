import React, { useState } from "react";
import UnitedMap from "./cititesMap.png";
import Typography from "@material-ui/core/Typography";
import ChipList from "./ChipList.js";

function About(props) {
  const [currentCity, setCurrentCity] = useState({});

  const cityInfo = [
    {
      name: "Seattle",
      moved: "2019",
      companies: ["General Assembly"],
      description: "Start of my next chapter! After some mild health issues with my partner, I decided it was time to move across the country to be with them, as they already lived in Seattle. Now I'm attending the General Assembly Seattle Campus's Software Engineering Immersive. It's an intense, 12 week, 480+ hour course geared to help get me ready to be a developer in Seattle, mostly focusing on web technologies. I'm excited to learn all I can and get back out there as a Front End Developer!"
    },
    {
      name: "San Diego",
      moved: "2016",
      companies: ["Intuit"],
      description: "Sunny California and my first experience at a tech company! It was a big one too! During my fourth year at RIT, I interviewed and got a co-op position with Intuit, most well known for TurboTax. There, I was placed on a small internal team of about 6 people where I got to work on the Front End of a web app that was created for the Social Media team. I picked up a ton in the 7ish months I worked there, and got a better sense of what I wanted in my future career once I was done with school."
    },
    {
      name: "Charlottesville",
      moved: "2017",
      companies: ["WillowTree"],
      description: "I have a diploma, I managed to get a fulltime Front End Developer position, and now it's time to move away from everyone I've known to a brand new city where I only knew the people I had met during my recruitment process. To say I was both excited and nervous was an understatement. However, WillowTree ended up being the best experience I could have imaginged as a student for my first fulltime position! Everyone was extrememly welcoming, and seemed motivated towards creating great software. The only curveball I got thrown was that day one I was told there weren't any teams that needed a Front End person on it, but if I wanted, I could start learning one of the native mobile platforms we had. Since I already had a Google phone, and I had a very basic exposure to Java from my student developer position, I became an Android Developer."
    },
    {
      name: "Rochester",
      moved: "2012",
      companies: ["Rochester Institute of Technology", "RIT CAIR Lab", "GDD Labbie", "The Commons"],
      description: "Almost 18 and ready to escape my small town, I was over the moon to move to Rochester, (well, Rochester Adjacent) and start school as... a Chemical Engineering Major. Surprise! After growing up in my small town, I had next to no idea what programming was, other than what you would see hackers doing in movies. So I started in ChemE, and stuck with it for almost 2 years. During this time, I became good friends with a Game Design and Development major on my first year floor, and with a Software Engineer major who introduces me to Python.By second year, I was applying to switch to GDD and learning what I could from Codacamedy in the meantime. Eventually, my transfer was approved, I started the coursework and pretty quickly added on being a labbie for my major and working as a student developer for a professor in the Software Engineering department."
    },
    {
      name: "New Milford",
      moved: "1994",
      companies: ["New Milford High School", "Applebees"],
      description: "Where it all started. And by it, I mean me. I grew up here my whole life, was a Girl Scout, did Colorguard in high school. What can I say? It was a pretty normal childhood in a small town that I could not wait to leave. Fun fact: Kids rode their tractors to school in high school."
    }
  ];

  const setCityHandler = city => setCurrentCity(city);

  return(
    <div>
      <Typography
        align="center"
        variant="h3"
        color="primary">
          Where I've Lived
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        color="textPrimary">
          (Click One!)
        </Typography>
      <div className="mapHolder">
        <div className="locationsMap">
          <img src={UnitedMap} alt="us map" />
          {
            cityInfo.map((city, index) => (
              <Typography
                variant="subheader2"
                className="city"
                onClick={() => setCityHandler(city)}
                id={(city.name.toLocaleLowerCase()).replace(/\s/g, '-')}
                key={index}>{city.name}</Typography>
            ))
          }
        </div>
      </div>
      <div>
        {currentCity.name ? (
          <div>
          <Typography
          variant="h4"
          align="center">
            {currentCity.name}
          </Typography>
          <Typography
            variant="subtitle2"
            align="center">
            Moved to: {currentCity.moved}
          </Typography>
          <ChipList chipList={currentCity.companies} />
          <Typography 
            variant="body1"
            align="center">
              {currentCity.description}
          </Typography>
          </div>
        ):(<div></div>)}
      </div>
    </div>
  );
}

export default About;
