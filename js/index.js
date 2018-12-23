random = 0;


$(document).ready(function(){
    
    var bgcounter = 0;
    var exists = [],
    randomInt;
    // Randomly generated number.
    $(".palette").click(function(){      
        
//        random = Math.floor((Math.random() * 3) + 1);
//        console.log(random)
    // Random Non-Repeating Number Generator
    function randomBGInt() {

    if (bgcounter < 6) {
        
    
            for (var l = 0; l < 6; l++) {
                do {
                randomInt = Math.floor(Math.random() * 6 + 1);
                } while (exists[randomInt]);
                exists[randomInt] = true; {
                    bgcounter++       
                    return randomInt;
                }
            }

        } else {
            
            // Reinitialise the backgrounds to start
            bgcounter = 0;
            exists = [];
            randomInt = [];
            
            $("main").css({
            "backgroundColor": "#AF3D4E",
            "color": "white"});              
        }     
    }

        
    randomBGInt(); 
        
         console.log(randomInt);
        switch(randomInt) {
            case 1:
                $("main").css({
                "backgroundColor": "#FF80AB",
                "color": "white"});          
            break;
                
            case 2: 
                $("main").css({
                "backgroundColor": "#7b68ee",
                "color": "white"});
            break;
            
            case 3: 
                $("main").css({
                "backgroundColor": "#00B8D4",
                "color": "white"}); 
            break;
            
            case 4:
                $("main").css({
                "backgroundColor": "black",
                "color": "white"});          
            break;
                
            case 5: 
                $("main").css({
                "backgroundColor": "#004D40",
                "color": "white"});
            break;
            
            case 6: 
                $("main").css({
                "backgroundColor": "#0D47A1",
                "color": "white"}); 
            break;
        }
        
        
    });
    
    
    
});