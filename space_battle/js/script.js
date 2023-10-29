class Ship {
    constructor (name,hull, firepower,accuracy){
        this.name= name;
        this.hull = hull;
        this.firepower =firepower;
        this.accuracy = accuracy;

    }
    attack(enemy){
        if (Math.random()< this.accuracy){
       //showEl.textContent ='Alien Ship attacks Earth ship back! Alien hull is $(Alien Ship[0]) .hull now.';
            console.log("hit");
            enemy.hull-=this.firepower
        }else{
            console.log("Earth ship missed");

    
     }

    }
}
const myShip= new Ship("USS", 20,5,0.7);
console.log(myShip);

const AlienShip = ['A1','A2', 'A3', 'A4', 'A5','A6']
//const enemyShips[] =new Ship('A1',2,6,3);
console.log(AlienShip);
//myShip.attack(enemyShips)

const enemyShips=[];
for (let i=0;i<6;i++){
    enemyShips[i]=new Ship(AlienShip[i], getRandomInInclusive (2,5), getRandomInInclusive(1,9), decimalRandom(0.6,0.8) )

}
console.log(enemyShips)


  function  getRandomInInclusive (min , max) {
return Math.floor(Math.random() * (max-min +1) + min);



        }

        console.log (getRandomInInclusive(3,6));


        function decimalRandom(min, max){
            return Math.random()*(max-min) + min
            }
            console.log(decimalRandom(0.6,0.8));


        myShip.attack(enemyShips)

        
        console.log(('after battle Earthship', myShip))
        console.log(('after battle Alienship', enemyShips))
        
        if (enemyShips[0].hull<=0){
            console.log('AlienShip', enemyShips[0].name, 'Demolished!!!')
        }else if(myShip.hull <=0){
            console.log('EarthShip is Destroyed' + 'Game over')
        }else{
            console.log ('attack again or win game')

             if (AlienShip [0] .hull >= 0){
                AlienShip[0].attackShip(this);

                while(myShip.hull0 &&enemyShips[0].hull<0){
                    myShip.attack(enemyship[0])
                    if(enemyShips.hull>0){
                        enemyShips.attack(myShip)
                    }
                }


            
                

            }


            
        }
        

    let response = prompt("Do you want continue?" , "Ok");
    console.log(response)
    if (response == null || response ==""){

    
    
        console.log("retreat")
    }else{
        console.log("continue")
        
    
    }
        
    enemenybtEl.addEventListener("click", game);
    

             
      

 

