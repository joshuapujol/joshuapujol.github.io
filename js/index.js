random = 0;


$(document).ready(function(){
    
    
    var exists = [],
    randomInt;
    // Randomly generated number.
    $(".palette").click(function(){      
        
//        random = Math.floor((Math.random() * 3) + 1);
//        console.log(random)
    // Random Non-Repeating Number Generator
    function randomBGInt() {


        for (var l = 0; l < 6; l++) {
            do {

                randomInt = Math.floor(Math.random() * 6 + 1);
            } while (exists[randomInt]);
            exists[randomInt] = true; {
                       
                return randomInt;
                
            }
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
                "backgroundColor": "#64DD17",
                "color": "black"});
            break;
            
            case 6: 
                $("main").css({
                "backgroundColor": "#FFEA00",
                "color": "white"}); 
            break;
        }
        
        
    });
    
    
    
});