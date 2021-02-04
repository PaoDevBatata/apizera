import styled from "styled-components";

export const Container = styled.body `


.bkg{
position:absolute;
width: 100%;
height: 100%;
z-index:-1;
}



.glass{
  
position:fixed;
top: 4.688vmax;
left:7.292vmax;

width: 1640px;
height: 900px;
border-radius: 0.417vmax;
z-index: 1;
background: radial-gradient(rgba(0,0,0,0.09), rgba(0,0,0,0.36));
box-shadow: 0 0.417vmax 1.667vmax 0 rgba( 0, 0, 0, 0.98 );
backdrop-filter: blur(1.25px);
display:flex;
  align-items: flex-start;
}

.img-principal{
  width: 340px;
  height: 510px;
  border-radius: 0.417vmax;
  margin-left: 150px;
  margin-top: 100px;
}
  .alinhamento{
    margin:145px;
    display:flex;
    flex-flow: row wrap;


  }
  h1{
  width: 900px;
  height: 50px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: #FFFFFF;
  }
  .info{
    height:10px;
    display:inline-flex;
    flex-flow:row wrap;

    h5{
      font-family: Roboto;
font-style: normal;
font-weight: 500;
color: #B5B5B5;
margin-right:0px;
margin-right:15px;
    }
  
  }
  .actors{
    margin-top:35px;
  
    h3{
    width: 900px;
    height: 41px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #FFFFFF;
    }
    h5{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #B5B5B5;
    }
  }
  .historia{
    margin-top: 40px;
    width: 690px;
    h2{
  width: 300px;
  height: 41px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #FFFFFF;
    }
    p{
  

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #B5B5B5;

    }
  }

.cu{
  margin-left:675px;
  margin-top: 155px;
  width:300px;
  height:70px; 
  display:flex; 
  background: linear-gradient(225deg,rgba(90, 90, 90, 0.13), rgba(0,0,0,0.16));
  box-shadow: 0 0.417vmax 1.667vmax 0 rgba( 20, 20, 20, 0.4 );
  backdrop-filter: blur(1.5px);
  align-items:center;
  border-radius: 8px;
  cursor: pointer;
  .play{
  margin-left:41px;
  width:40px;
  height:40px;
  background-repeat: no-repeat
}
.cu2{
  margin-left: 14px;
  text-align: center;
  width: 118px;
  height: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.01em;

  color: #FFFFFF;

}
}
}

 
`
