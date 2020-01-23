const request =require ('request')

const forecast =(latitude,longitude,callback)=>{
   // const url='https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/'+latitude + ',' + longitude
    const url ='https://api.darksky.net/forecast/c50408d8e69a8e430fccce98dfb3561f/'+latitude+ ',' + longitude
    request({url:url, json:true} , (error,response) => {
       if(error){
           callback('unable to connect to weather service',undefined)
       }
       else if(response .body.error){
           callback('unable to find location',undefined)
       }
       else{
           callback(undefined,'It is currently '+ response.body.currently.temperature + ' fahrenheit. There is a '+ response.body.currently.precipProbability + '% chance of rain');
       }
    })
}

module.exports = forecast