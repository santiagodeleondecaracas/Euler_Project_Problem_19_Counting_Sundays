/*
Problem 19: Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */
let counterOfSundays=0;	
let year=1901;
let month=0;
let endYear=2000;		
		for(let year = 1901;year<=endYear;year++){
			for(let month = 0;month<12;month++){
				if(new Date(year,month,1).getDay()==0){
                      counterOfSundays = counterOfSundays + 1; 
				};
             };
         };	
	
		
console.log("Counter Of Sundays: ",counterOfSundays);




				

		
		

		

         
			

			