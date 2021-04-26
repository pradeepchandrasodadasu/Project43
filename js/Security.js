class Security {
    constructor(){

        // code for creating and positioning the input boxes and buttons
        this.access1 = createInput("Code1");
        this.access1.position(70,400);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(70,430);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1");
        this.access2.position(400,400);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(400,430);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1");
        this.access3.position(730,400);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(730,430);
        this.button3.style('background', 'lightgrey');
        
    }
    
    display(){
        // code for what happens when the buttons are pressed
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            } else{
                this.button1.hide();
                this.access1.hide();
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            } else{
                this.button2.hide();
                this.access2.hide();
            }
        });

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++
            } else{
                this.button3.hide();
                this.access3.hide();
            }
        });

    }
}