// Feet to mile function  starts 

function FeetToMile( feet ) {

    if( feet<0 ) {   // Check positive or negative value 

        return " Feet Can't be a Negative Value "

    }
    else  {

        let mile = feet / 5280 ;  // main calculation 

        return mile.toFixed(4);
    }

}

console.log(FeetToMile(10));  // Provide Negative Value for Validation

// Feet to mile function  ends 



// WoodCalculator Starts 

function WoodCalculator(chair,table,bed) {

    if(chair < 0 || table < 0 || bed <0 ) {  // Check that the value is positive or Negative

          return ' Please Provide a valid value to get the correct output.You enter a Negative value ';

    }
    let chairNeedWood  = chair*1;  // Main Calculations 

    let tableNeedWood = table*3; // Main Calculations 

    let bedNeedWood = bed*5; // Main Calculations 

    return ( chairNeedWood + tableNeedWood + bedNeedWood );
}

console.log( WoodCalculator ( 12, 0, 23 ) ) ; // Provide value for checking is wright or wrong 

// WoodCalculator ends 



// BrickCalculator starts 

function BrickCalculator ( storied ) {

    if ( storied < 0 ) {  // Check that the value is positive or not.Here, Checking Validation

        return " storied can't be a Negative Value " ;

    } 

    else  {
      
        let TotalBricks;

        if ( storied < 11 ) {    // Calculation if the value is less than 11 Storied 

            let TotalFeet = storied * 15 ;

            TotalBricks = TotalFeet * 1000 ;

        }
        else if ( (storied >= 11) && (storied <= 20) ) { // Calculation if the value is greater than 10 and less than or equal 20 Storied 
           
            let remainStoried = storied - 10 ;

            TotalBricks = ( 10 * 15 * 1000 ) + ( remainStoried * 12 * 1000 ); 

           

        }

        else  {   // Calculation if the value is upto 20 Storied 

             let remainStoried = storied  - 20 ; 

             TotalBricks  = (10 * 15 * 1000 ) + ( 10 * 12 * 1000 ) + ( remainStoried * 10 * 1000 ) ; 

            
        }
        return TotalBricks ;
    }
    
}

console.log( BrickCalculator(40));

// BrickCalculator ends 



// Tiny Friends Starts 


function TinyFriends( arr ) {

    if(arr.length== 0) { // Checking that the array is empty or not 

        return 'please give a valid Array' ;

    }
    else  {

        let SmallFriends = arr[0] ;

        for(let i = 0 ;i < arr.length ;i++ ) {  // loop for the calculations

            let elements  = arr[i] ;
    
            if(elements.length < SmallFriends.length) {  // Check wheather the length is small or not 
    
                SmallFriends = arr[i];
            }
        }
    
        return SmallFriends ;

    }
}
let tinyFriends = ['NasimHossain','jhankarVai','Manik','Rasel'] ;

console.log(TinyFriends(tinyFriends ) ) ; // Passing Array with Friends Name 

// Tiny Friends Ends 