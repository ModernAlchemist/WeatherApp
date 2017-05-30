
$(document).ready(function(){
    if(navigator.geolocation)
    {
          do
          {
                 $(".temp").html("<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/971740/Preloader_6.gif'>")
          }while(navigator.geolocation.getCurrentPosition(apiCall));
    };
});


var apiCall = function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' +lat+ '&lon=' +lon+ '&units=imperial&appid=3aae8bf126a14d5263efb9ac666436c1').done(pass).fail(failure)
}   


var pass = function(weather){   

    console.log("success");
  
    $(".temp").html(Math.round(weather.main.temp)+"° " +"<span class='change'>F</span>");
    $(".location").html(weather.name);
    $(".weather").html(weather.weather[0].main)
  
    var tempToday = Math.round(weather.main.temp);
    var weatherToday = weather.weather[0].main;
  
    
    if (weatherToday == "Rain")
    {
            $(".back").css(  "background","url(https://kimberleyvassalinsurance.files.wordpress.com/2014/04/rainwindshield.jpg) center center no-repeat fixed");
            $("body").css('background-size','cover');
    }
  
    if (weatherToday == "Clouds")
    {
            $("body").css("background",
        "url(http://www.wallpaperscharlie.com/wp-content/uploads/2016/07/Cloudy-Weather-HD-Wallpapers-9.jpg) no-repeat center center fixed");
            $("body").css('background-size','cover');
    }
    if (weatherToday == "Clear")
    {
            $("body").css('background','url(http://advisoranalyst.advisoranalystgr.netdna-cdn.com/wp-content/uploads/2015/03/ComputerDesktopWallpapersCollection965__043.jpg) no-repeat center center fixed');
            $("body").css('background-size','cover');
        
    }
    if (weatherToday == "Haze")
    {
            $("body").css("background",
        "url(http://kingofwallpapers.com/haze/haze-010.jpg) center center no-repeat fixedd")
            $("body").css('background-size','cover');
    }
    
    
    var x = 1;
    var celsius = Math.round((tempToday-32)*(5/9));
    
    $(".temp").click(function(){
            x++;
            if (x%2 == 0)
            {
                $(".temp").html(celsius + "° C");          
            }
            if (x%2 == 1)
            {
                $(".temp").html(tempToday + "° F");
            }
    });
    
};

var failure = function(){console.log("Fail")};