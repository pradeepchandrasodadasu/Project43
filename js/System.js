class System{
    constructor(){}

        // creates authenicate function 
        authenticate(actualCode,enteredCode){
            /* gives size,colour and position to text
            textSize(50);
            fill("black");
            text("code",300,300);*/

            // code to return true if correct answer entered.
            if(enteredCode === actualCode){
                return true;
            } else{
                return false;
            }
            
        }

}