import './Weather.css';
// import ProgressBarChart from '../ProgressBarChart/ProgressBarChart.js';
import ProgressBar2 from '../ProgressBar2/ProgressBar2';

const Weather=({data})=>{
    function timestampToTime(x)
    {
        var date = new Date(x*1000)
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var formatTime = hours + ':' + minutes.toString().padStart(2,'0');
        return formatTime
    }

    var time1 = timestampToTime(data.sys.sunrise);
    var time2 = timestampToTime(data.sys.sunset);
    return (
        <div>
        
        <div class="container main-container">
            <div class="row top-row">
            {/* <!-- <div class="col col-md-1"></div> --> */}
            <div class="col col-md-6">
                <div class="row row-1">
                    <span class="patient-count">{data.city}</span>
                </div>
                <div class="row row-2">
                    <span class="forty-five-thousand">{Math.round(data.main.temp)}°C</span>
                </div>
                
               
            </div>
            <div class="col col-md-3  d-flex align-items-center flex-column justify-content-around">
                <div class="row  risk-row">
                    <span className='description'>Sky</span>
                </div>
                <div class="row">
                {/* <ProgressBarChart progress1={30} progress2={30} progress3={40} /> */}
                <span className='weather-description'>{data.weather[0].description}</span>
                </div>
            </div>
            <div class="col col-md-3 d-flex align-items-center flex-column justify-content-around">
                <div class="row w-75">
                {/* <ProgressBarChart progress1={10} progress2={50} progress3={40} /> */}
                <img alt='weather-icon' className='weather-icon'  src={`icons/${data.weather[0].icon}.png`}></img>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-4  d-flex flex-column column-1">
                <div class="box-1">
                    <div class="header-content d-flex align-items-center justify-content-start">
                        <span className='min-max-temp'>Temp</span>
                    </div>
                    <div class="sixty-three-point-seven-percent">
                        <span>
                            <span>Max. Temperature: {data.main.temp_max}°C</span>
                        </span>
                    </div>
                    <div class="point-one-september">
                        <span> 
                            <span>Min. Temperature: {data.main.temp_min}°C</span>
                        </span>
                    </div>
                </div>
                <div className="risk-adjustment d-flex justify-content-between ">
                    <div className='col-md-12' style={{textAlign:'center'}}>
                        <span class="risk">
                            Sun rise and set
                        </span>
                        <p class="dollar" style={{textAlign:'left',marginTop:'6%'}}>
                            Sun-Rise: <span>{time1}</span> UTC
                            </p>
                        <p class="five-point-four" style={{textAlign:'left',marginBottom:'4%'}}>
                            Sun-Set: <span >{time2}</span> UTC
                        </p>
                    </div>
                </div>
             </div>
            <div class="col-md-7 ">
               <div class="row justify-content-around inner-grid-row-part1">
                <div class="col-md-4  inner-grid-part1">
                    <div style={{marginBottom:"1rem"}} class="thirtyday-reAdmissions  d-flex flex-column justify-content-start">
                        <h4 class="readmission" >Wind</h4>
                        <span class="seventeen-point-8-percent ">
                            <span>Deg: {data.wind.deg}°</span>
                            </span>
                        <p class=" september-percentage">
                            <span>Speed: {data.wind.speed}m/s</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-7 ">
                    <div class="ip-visites row justify-content-around">
                        <div class=" col-md-6 ">
                            <h4 style={{marginBottom:"1rem"}} class="ip-visits">Humidity</h4>
                            <span class="forty-two">
                                {/* <span>{data.main.humidity}%</span> */}
                            </span>
                            <p class="one-point-five-september">{data.main.humidity}% <ProgressBar2 value={data.main.humidity} />
                            </p>

                        </div>
                    </div>
                </div>

                </div>
                <div class="row justify-content-around inner-grid-row-part2" style={{marginTop:"0rem", marginLeft:"0.0rem"}}>
                    <div class="hcc-gap col-md-12 d-flex justify-content-between">
                        <div className='d-flex flex-column col-md-12 align-items-center' style={{textAlign:'center'}}>
                            <span class="gap" style={{fontSize:'1.7rem', fontWeight:'bold',textAlign:'center'}}>Pressure</span>
                            <span class="sixty-four" style={{paddingBottom:'17%'}}>{data.main.pressure} hPa</span>
                        </div>
                    </div>
                    <div class="ed-visits col-md-5 border border-dark d-flex flex-column justify-content-around ">
                        <div class="row d-flex flex-column align-items-center" style={{marginBottom:'0',paddingBottom:'0'}}>
                            <span class="september w-50 text-center" style={{fontSize:'1.5rem'}}>Timezone: {data.timezone}</span>
                            <span class="potentially-avoidable text-center" style={{width:"13rem",backgroundColor:"#010151",color:"white",fontWeight:"bold",paddingBottom:'0px'}}>Visibility: {data.visibility}m</span>
                            {/* <SpeedometerProgressBar value1={50} value2={75} /> */}

                        </div>
                    </div>
               </div>
            </div>
            </div>
       
        </div>
    </div>

    );
}


export default Weather;
