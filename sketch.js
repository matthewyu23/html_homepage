
var minu; 
function setup(){
    loadJSON("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6abf5dd1d38c46c5ab3185a7eff5b481", gotNewsData);
}

function draw(){
    if(minute() == 0){
        minu = "00";
    }
    
    if(minute() == 1){
        minu = "01";
    }
    
    if(minute() == 2){
        minu = "02";
    }
    
    if(minute() == 3){
        minu = "03";
    }
    
    if(minute() == 4){
        minu = "04";
    }
    
    if(minute() == 5){
        minu = "05";
    }
    
    if(minute() == 6){
        minu = "06";
    }
    
    if(minute() == 7){
        minu = "07";
    }
    
    if(minute() == 8){
        minu = "08";
    }
    
    if(minute() == 9){
        minu = "09";
    }
    
    if (minute()>9){
        minu = minute(); 
    }

    if(hour()<=12){
        document.getElementById("time").innerHTML = hour() + ":" + minu + " AM"
        document.getElementById("date").innerHTML = day() + "/" + month() + "/" + year()
    } else {
        document.getElementById("time").innerHTML = hour()-12 + ":" + minu + " PM"
        document.getElementById("date").innerHTML = day() + "/" + month() + "/" + year()
    }

    if(news){
        document.getElementById("newsHeading").innerHTML = news.articles[0].title
        document.getElementById("newsHeading").href = news.articles[0].url
        document.getElementById("newsBody").innerHTML = news.articles[0].description
    } else {
       
        document.getElementById("newsHeading").innerHTML = "LOADING NEWS DATA"
        
    }
}


var news; 


function gotNewsData(data) {
    news = data;
    console.log("NEWS LOADED")
}