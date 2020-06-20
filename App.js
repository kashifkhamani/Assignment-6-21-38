
//Assignment # 21-25   Task # 1

var first_name = prompt('Enter your first name');

var Last_name = prompt('Enter your last name');

var Full_name = first_name  + " "+ Last_name;
document.write(Full_name);



//Assignment # 21-25   Task # 2


var mobile = prompt('Enter Your Favorite Mobile Model').toUpperCase()
document.write("My Favorite Phone is : " + mobile + "<br>")

 for (var i = 0; i < mobile.length; i++)
 {

 }

document.write("Length of string: " + i + "<br>")


//Assignment # 21-25   Task # 3


var country = "Pakistani" 
var ind = country.indexOf("n")
document.write("String: " + country+ "<br>")
document.write("Index of 'n': " + ind + "<br>")



//Assignment # 21-25   Task # 4

var str = "Hello World";
document.write('String: ' + str+ "<br>")
var last_ind = str.lastIndexOf("l")
document.write("Last index of 'l': " + last_ind + "<br>")




//Assignment # 21-25   Task # 5

var coutr = "Pakistani";
document.write('String: ' + coutr+ "<br>")
var res = coutr.charAt(8)
document.write("Character at index 3: " + res +  "<br>")


//Assignment # 21-25   Task # 6

var first_name = prompt('Enter your first name')
var Last_name = prompt('Enter your last name')
var Full_name = first_name.concat(Last_name)
document.write(Full_name);



//Assignment # 21-25   Task # 7

var city = "Hyderabad"
document.write("City: " + city + "<br>")
var sli =  city.slice(6,9)
var rep = sli.replace(sli,"Islamabad")
document.write("After replacement: " + rep)



//Assignment # 21-25   Task # 8

var msg = "Ali and Sami are best friends. They play circket and football togather"
document.write(msg+"<br><br>");
var rep_all = msg.replace(/and/g,"&");
document.write("After replacement: " + rep_all)



//Assignment # 21-25   Task # 9

var numb = "472"
var int= parseInt(numb)
document.write("Value: "+numb+"<br><br>")
document.write("Type:  "+ typeof(numb) +"<br><br>")
document.write("Value: "+ numb+ "<br><br>")
document.write("Type: "+ typeof(int) +"<br><br>")



//Assignment # 21-25   Task # 10

var input = prompt('Please Enter Your Word')
document.write("User input: "+input+"<br>")
var convert_to_uppercase = input.toUpperCase()
document.write("Upper case: " + convert_to_uppercase + "<br>")



//Assignment # 21-25   Task # 11

var input = prompt('Please Enter Your Word')

document.write("User input: "+input+"<br>")
function Title_case (pr)
{
    var s = pr.toLowerCase().split(" ")

    for (var i = 0; i <s.length; i++)
    {
        s[i] = s[i][0].toUpperCase() + s[i].slice(1)

    }

    document.write(s.join(" "));
    return s;
}

 Title_case(input)




//Assignment # 21-25   Task # 12

var num = 35.36
var str = num.toString().split('.').join('')
document.write("Number: "+num+"<br>")
document.write("Result: " + str + "<br>")


//Assignment # 21-25   Task # 13

var enter = prompt('Enter Your Name')
if (enter.charCodeAt(0) <= 33 || enter.charCodeAt(0) <= 44 || enter.charCodeAt(0) <= 46 || enter.charCodeAt(0) <= 64)  
{
    alert("Please Enter a valid user name")

}
else
{
    document.write(enter)
}



//Assignment # 21-25   Task # 14

var Items= ["Cake", "cake","CAKE","apple pie","Apple Pie", "APPLE PIE","cookie","Cookie","COOKIE","chips","Chips","CHIPS","patties","Patties","PATTIES"]
var input = prompt('Welcome to ABC Bakery, what do you want to order sir / mam ?').toLowerCase();
var index;


for (var i = 0; i <Items.length; i++)
{

    index = Items.indexOf(Items[i]);


    if (input == "")
    {
        alert('Please Enter Your Item Name');



    }
    else
    {

    if (Items.includes(input))
    {
        alert(`${input} Is Available at index ${index} in Our Bakery`);



    }

    else
    {
        alert(` We Are Sorry.${input}  Is not  Available in Our Bakery`);

    }
    }
    break;
}



//Assignment # 21-25   Task # 15

var input = prompt("Enter your word")
var letterNumber = /^[0-9a-zA-Z]+$/
if (input.length > 6 )
{
    alert("Only 6 Character Allowed")

}

else if (!input.match(letterNumber))
{
    alert("Special Character not Allowed ");
}


else if (!/^[^0-9].*$/.test(input)) 
{

    alert("Password should not start with number ")
}
else
{
    alert("Password Matched Successfully")
}



//Assignment # 21-25   Task # 16

var university = "University of Karachi"
var split = university.split("")

for (var i = 0; i <split.length; i++) 
{
    document.write(split[i] + "<br>")
}




//Assignment # 21-25   Task # 17

var last_char = prompt("Enter Your Name")
var sli = last_char.substr(last_char.length -1)
document.write("User input: "+last_char+"<br>")
document.write("Last character of input: "+sli+"<br>")


//Assignment # 21-25   Task # 18

var va= "The quick brown fox jump over the lazy dog"
var va_count = va.match(/the/g).length
document.write(va+"<br>")
document.write("There are " +va_count+ " Occurrence(s) of word 'the' "  + "<br>")


//Assignment # 26-30   Task # 1

var number  = prompt("Enter Your Number")
var floor   = Math.floor(number)
var round   =  Math.round(number)
var ceiling = Math.ceil(number)

document.write("number: "+number+"<br>")
document.write("round of value: "+floor+"<br>")
document.write("floor value: "+round+"<br>")
document.write("ceil value: "+ceiling+"<br>")


//Assignment # 26-30   Task # 2

var number  = prompt("Enter Your Number","-")
var floor   = Math.floor(number)
var round   =  Math.round(number)
var ceiling = Math.ceil(number)

document.write("number: "+number+"<br>")
document.write("round of value: "+floor+"<br>")
document.write("floor value: "+round+"<br>")
document.write("ceil value: "+ceiling+"<br>")


//Assignment # 26-30   Task # 3

var val = -4
var abs = Math.abs(val)
document.write("The absolute value of "+ val +" is " +" "+ abs)


//Assignment # 26-30   Task # 4

var random  =  Math.floor(Math.random()*5)
var random2 =  Math.floor(Math.random()*7)

if (random == "4" && random2 == "6")
{
    document.write("random dice value: " + random + "<br>")
    document.write("random dice value: " + random2)
}




//Assignment # 26-30   Task # 5

var rand = Math.floor(Math.random()*3)
if (rand == "2") 
{
    document.write(rand+ "<br>")
    document.write("random coin value:  "+"Heads")
}
else if(rand == "1")
{
    document.write(rand + "<br>")
    document.write("random coin value:  " +"Tails")

}


//Assignment # 26-30   Task # 6

var r = Math.floor(Math.random()*100)
document.write("random value between 1 and 100: "+r)


//Assignment # 26-30   Task # 7

  var weight = prompt("Enter Your Weight")
  var aary1 = ["kgs","kilogram",50,"50.2kgs"]
  for (var i = 0; i < aary1.length; i++) 
  {

  if (weight.includes(aary1[i])) 
  {
    alert("The Weight of user is " + weight) 
  }
 else
 {

 alert("wrong")

 }
 break
 }


//Assignment # 26-30   Task # 8

var rndom = Math.floor(Math.random()*11)
var input = parseInt(prompt('Enter a number between 1 and 10'))
if (rndom == input)
{
    alert("Congratulate the user")
}
else
{
    alert("Try again!")
}



//Assignment # 31-34   Task # 1
var Dt = new Date()
var mnth_array = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var d = Dt.toString()
var s = d.slice(0,3).toUpperCase()

document.write(Dt+"<br>")

//Assignment # 31-34   Task # 2

document.write("Current month: "+ mnth_array[Dt.getMonth()] + "<br>")

//Assignment # 31-34   Task # 3

document.write("Today is: " + s+"<br>")

//Assignment # 31-34   Task # 4

var day = Dt.getDay()
if (day== "0" || day == "6" )
{
    document.write("It's Fun day")
}

//Assignment # 31-34   Task # 5

//Assignment # 31-34   Task # 6

var d = Dt.getTime()
var old = new Date("Jan 1, 1970")
var mn= old - Dt.getMinutes() 

document.write("Current Date: "+Dt + "<br>")

document.write("Elasped milisecond since January 1 ,1970: "+d+"<br><br>")
document.write("Elasped minutes since January 1 ,1970: " +mn +"<br>")


//Assignment # 31-34   Task # 7

var hou = Dt.getHours()
var min = Dt.getMinutes()
if (hou == 12) 
{
    document.write(hou  + min + " Its PM"+"<br>")
}
else
{
    document.write(hou > 12 ? hou - 12  + min + " PM" : + hou + ":" + min + " Its AM"+"<br>")
}


//Assignment # 31-34   Task # 8

var laterDate = new Date("Dec 31,2020")
document.write("Later Date :"+ laterDate+"<br>")


//Assignment # 31-34   Task # 9

var date = new Date("June 18,2015")
var date1 = new Date()
var numb_of_days = Math.ceil((date - date1) / 8.64e7)


document.write("On refrence date " + date + "<br>")
document.write("On refrence date " + date1 + "<br>")
document.write(numb_of_days + " days have passed since 1st Ramdan, 2015 " + "<br>")


//Assignment # 31-34   Task # 10

var old_date = new Date("Dec 5,2015")
var dt = new Date()
var sec_pass = Math.abs(Math.floor((dt.getTime() - old_date.getTime()) / 1000))
document.write("On refrence date " + old_date +"<br>")
document.write(sec_pass + " second had passed since begining of 2015 "+ "<br>")



//Assignment # 31-34   Task # 11

 var current_date = new Date("Dec 5,2015")
 current_date.setHours(23)
 current_date.setMinutes(8)
 current_date.setSeconds(16)


 document.write("current date: " + current_date+"<br>")
 document.write("1 hour ago, it was " + (current_date) +"<br>")

//Assignment # 31-34   Task # 12


 var back = new Date("Dec 5,2015")
 var b = back.getFullYear()
 var back_yEAR = b-100
 back.setHours(23)
 back.setMinutes(9)
 back.setSeconds(37)
 document.write("current date: " + back + "<br>")
 document.write("100 year back " + " Sun Dec 05 " + back_yEAR+ " 23:09:37 GMT+0500 (Pakistan Standard Time) "+ "<br>")

//Assignment # 31-34   Task # 13

var i =  parseInt(prompt("Enter your age"))
var df = new Date().getFullYear()

var birthyear = i - df
document.write("Your Age is "+i+"<br>")
document.write("Your birth year is "+birthyear+"<br>")


//Assignment # 31-34   Task # 14

document.write("K-Electric-Bill"+"<br><br>")
var customer_name = prompt("Enter Your Name").toString()
var bill_month = prompt("Enter Bill Month in Letter").toString()
var units = parseInt(prompt("Enter Number of Units"))
var charges = 16
var surcharg= 350

var netamount = units * charges 
document.write("Customer Name: "+ customer_name+"<br>")
document.write("Month: "+bill_month+"<br>")
document.write("Number of units: "+units+"<br>")
document.write("charges per unit: "+charges+"<br>")
document.write("Net Amount Payable (within Due Date): "+ netamount+"<br>")
document.write("Late Payment surcharge "+surcharg + " "+"<br>" )
document.write("Gross Amount Payable (after Due Date): "+ (surcharg+netamount) +"<br>")


//Assignment # 35-38   Task # 1

function Date_time() 
{
    var D = new Date()
    document.write(D)
}
Date_time()

//Assignment # 35-38   Task # 2

 function greeting(firstname,lastname) 
{

    document.write(firstname+ " " +lastname)
}
greeting("Ali","Khan")

//Assignment # 35-38   Task # 3

var inpt1 = parseInt(prompt("Enter Your First Number"))
var inpt2 = parseInt(prompt("Enter Your Second Number"))

function Add (numb1,numb2)
{
    document.write(numb1 + numb2)
}
Add(inpt1, inpt2)


//Assignment # 35-38   Task # 4

function Calculater(numb1, operator,numb2)
{
    document.write(numb1, operator, numb2)
}
 Calculater(5,12)


//Assignment # 35-38   Task # 5

function squareroot(sqr)
{
    document.write("Square root is "+Math.sqrt(sqr))
}
squareroot(9)



//Assignment # 35-38   Task # 6

 function factorial(x)
  {
        if (x === 0) 
        {
            return 1
        }
        else
        {
            return x * factorial(x - 1)
        }
  }
    document.write(factorial(4))




//Assignment # 35-38   Task # 7

var inpu_t = parseInt(prompt("Enter your first number"))
var inpu_t1 = parseInt(prompt("Enter your last number"))
var arry1 =  inpu_t+inpu_t1
for (var i = 0; i <arry1.length; i++)
{

    document.write(arry[i]+"<br>")
    // document.write()


}



//Assignment # 35-38   Task # 8

var base1 = prompt("Enter Base Value")
var Perpendicular = prompt("Enter Perpendicular Value")
function angles(sidea,sideb)
{

   return Math.sqrt(Math.pow(sidea,2)+Math.pow(sideb,2))
   return Square(5)

}

function Square(numb)
{
        return numb ** 2

}

 document.write("Hypotenuse is: "+angles( base1 , Perpendicular) + "<br>")
 document.write("Square is: " + Square(5) + "<br>")


// Assignment # 35-38   Task # 9

 var w=3 ,h =4
function Area_of_Rectangle(width, Height)
{
     var A = width * Height
     return A
}
document.write("Area of rectangle "+Area_of_Rectangle(2, 4)+"<br>")
document.write("Area of rectangle by argument as variable " +Area_of_Rectangle(w, h))



//Assignment # 35-38   Task # 10

 function Palindrome(str) 
 {
     var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,)
     var count = 0
     if ((str.length) / 2 ===0 )
     {

     }
     else 
     {
         if(str.length ===1)
         {
            document.write("Entry is palindrome")
         }
         else
         {
             count = (str.length -1 ) /2 
         }
     }
     for (var i = 0; i <count.length; i++) 
     {
         if (str[i] != srt.slice(-1-x)[0])
         {
             document.write("The entry is not palindrome")
         }
     }
             document.write("The entry is palindrome" + "<br>")
 }
 Palindrome("madam") 





//Assignment # 35-38   Task # 11


 var input = 'please enter your word'

document.write("Example String: "+input+"<br>")
function Title_case (pr)
{
    var s = pr.toLowerCase().split(" ")

    for (var i = 0; i <s.length; i++)
    {
        s[i] = s[i][0].toUpperCase() + s[i].slice(1)

    }

    document.write(s.join(" "));
    return s;
}

 Title_case("Expected Output: "+input)




//Assignment # 35-38   Task # 12

function longestword(str)
{
    var arr = str.match(/\w[a-z]{0,}/gi)
    document.write("Example String: "+arr+"<br>")
    var result = arr[0]
    for (var i = 1; i < arr.length; i++)
    {
        if (result.length < arr[i].length)
        {
            result = arr[i]
        }
    } 

    return result

}
    var lng= longestword("Web Development Tutorial")
    document.write("Longest word is: "+lng)





//Assignment # 35-38   Task # 13


function occu(Occurrence) 
{
    var Occurrence=  "JSResourceS.com',''o'"
    var va_count = Occurrence.match(/o/g).length
    document.write(Occurrence+"<br>")
    document.write("There are " +va_count+ " Occurrence(s) of word 'o' "  + "<br>")
}
occu("JSResourceS.com',''o'")



//Assignment # 35-38   Task # 14


var r = 3

function p() {
    cal_Circumference()
    Calculate_Area()

}
function Circumference() {
    var radius = parseInt(r)
    if (0 < radius) {
        p("The circumference of the circle is " + radius * 2 * Math.PI)
    }
    else {
        p("Radius must be a whole number greater then 0 " + radius * 2 * Math.PI)
    }
}

function cal_Calculate_Area() {

    var radius = parseInt(r)
    if (0 < radius) {
        p("The area of the circle is " + radius * 2 * Math.PI)
    }
    else {
        p("Radius must be a whole number greater then 0 " + radius * 2 * Math.PI)
    }


}










