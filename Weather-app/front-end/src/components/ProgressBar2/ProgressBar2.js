import React from 'react';

const ProgressBar2 = ({ value }) => {
  const progressBarStyle = {
    width: `${value}%`,
    height: '15px',
    backgroundColor: '#010151',
    marginBottom:'0.5rem',
    // marginLeft:'1rem',
    borderRadius:'10px',
    
    
    
  };

  return (
    <div>
      <div style={{"marginBottom":"0.5rem","border":"1px solid black","width":"11rem","height":"1.0rem","padding":"0","borderRadius":"20px","display":"flex","paddingTop":"0.0rem","paddingBottom":"0.0rem","paddingLeft":"0",rotate:"0deg",}}>

      <div style={progressBarStyle}>
      </div>
      </div>
    </div>
  );
};

export default ProgressBar2;