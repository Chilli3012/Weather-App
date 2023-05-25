import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import './ForeCast.css'

const WEEK_DAY=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; 
const ForeCast=({data})=>{
    const dayInWeek=new Date().getDay();
    const forecastDays=WEEK_DAY.slice(dayInWeek,WEEK_DAY.length).concat(WEEK_DAY.slice(0, dayInWeek));
    return (
        <>
            <label className="title"></label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0,7).map((item,idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <label className="day-forecast">{forecastDays[idx]}</label>
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max-forecast">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Temperature: </label>
                                    <label style={{fontWeight:'bold'}}>{Math.round(item.main.temp)}°C</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Pressure</label>
                                    <label style={{fontWeight:'bold'}}>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Visibility: </label>
                                    <label style={{fontWeight:'bold'}}>{data.visibility}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Humidity</label>
                                    <label style={{fontWeight:'bold'}}>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Clouds</label>
                                    <label style={{fontWeight:'bold'}}>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label style={{fontWeight:'light'}}>Wind Speed: </label>
                                    <label style={{fontWeight:'bold'}}>{item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </>
    );
}



export default ForeCast;
