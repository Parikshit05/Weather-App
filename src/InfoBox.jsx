import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css';

const InfoBox = ({info}) => {

    const HOT_URL = "https://imgs.search.brave.com/3zoR36ANpJwx_WzyXkyfFZ2JNz37J4KwxZPgEwEcSsw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTI0MDkyMC9waG90/by9ob3QtYXJpZC1j/bGltYXRlLWxhbmRz/Y2FwZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TnY5dFZz/ckZRMmx3SnBUZXJr/cTVnQThaUmdVSzZS/WXFsanM5WHBHVkdN/RT0";
    const COLD_URL = "https://imgs.search.brave.com/Qx2Lp14wcsphKzg7LYtZ-8oZ1hTfeSMXPdNXzU6P1bE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWct/Y2RuLnB1YmxpdmUu/b25saW5lL2ZpbHRl/cnM6Zm9ybWF0KHdl/YnApL2ZpbHRlcnM6/Zm9ybWF0KHdlYnAp/L2VuZ2xpc2gtYmV0/dGVyaW5kaWEvbWVk/aWEvbWVkaWFfZmls/ZXMvMjAyNS8xMi8x/Ny9pbmRpYW4td2lu/dGVycy0yMDI1LTEy/LTE3LTE1LTAyLTM0/LnBuZw";
    const RAINY_URL = "https://imgs.search.brave.com/uwrx4IqxMcOft1zAVUZU5Xt9xa4NqhlL-pultOPJDgo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MTM4MzM1OC9waG90/by90b3JyZW50aWFs/LXJhaW4tbW9uc29v/bi1yYWlueS1zZWFz/b24tYWhtZWRhYmFk/LWluZGlhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05WGk2/WnJFT2tqMmZhU243/Y1hicUg2c1c2a0NZ/RGRYbEMwQmJTQTJ4/YzA4PQ";

  return (
    <div className="InfoBox">
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 70 ? RAINY_URL : info.temperature > 25 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 70 ? <ThunderstormIcon /> : info.temperature > 25 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <p>Temprature = {info.temperature}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temp_min}&deg;C</p>
          <p>Max Temp = {info.temp_max}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and Feels Like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default InfoBox