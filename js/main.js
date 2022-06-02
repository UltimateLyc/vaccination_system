/* Problematica

    Condiciones : Pertenecer a uno de los siguientes grupos y me quiero vacunar

        *Mayor de edad y vivir en el norte (ok)
        *Embarazadas mayores de edad y 9 meses de gestacion ()
        *Personas que cumplen 30 años o mas en este año ()

*/

/* ***************************** Variables ***************************** */
let full_name;
let actual_year;
let year_of_birth;
let north_contry;
let gender;
let pregnant;
let gestation;
let age;

/* ***************************** Peticion de variables ***************************** */
full_name = prompt ('Ingrese su nombre completo');

do
{
    actual_year = Number (prompt ('Ingrese el año actual'));
}
while(isNaN (actual_year)); //Mientas el valor no sea un numero este se repetira hasta ingresar un numero


do
{
    year_of_birth = Number (prompt ('Ingrese su año de nacimiento'));
}
while(isNaN (year_of_birth)); //Mientas el valor no sea un numero este se repetira hasta ingresar un numero

do 
{
    north_contry  =  prompt ('Vives en el norte del pais S/N: ');
    north_contry = north_contry.toUpperCase(); // convertimos la variable en mayuscula y la guardamos en la misma
}
while(north_contry != 'S' && north_contry != 'N' );//Utilizado para hacer que el usuario ponga las opciones que le pedimos

do
{
    gender = prompt ('Cual es tu genero M = Masculino F = Femenino');
    gender = gender.toUpperCase();// convertimos la variable en mayuscula y la guardamos en la misma
}
while(gender != 'M' && gender != 'F' );//Utilizado para hacer que el usuario ponga las opciones que le pedimos

/* ***************************** Desarrollo Logico ***************************** */

age = actual_year - year_of_birth; //Operacion para aproximar edad

if (gender === 'F')
{
    do
    {
        pregnant = prompt ('Estas embaraza S/N:');
        pregnant = pregnant.toUpperCase();
    }
    while(pregnant != 'S' && pregnant != 'N');

    if(pregnant === 'S')
    {
        do
        {
            gestation = prompt('Tienes mas de 9 semanas de gestacion S/N?');
            gestation = gestation.toUpperCase();
        }
        while(gestation != 'S' && gestation != 'N');
        
    }
    
}

if (age >= 18 && gestation === 'S' /* mayor 18 - mujer y gestacion superior >= 9 semanas */|| age >=18 && gender === 'M' /* mayor 18 - masculino */|| age >=18 && gender === 'F' && pregnant === 'N' /* mayor 18 - fem - sin embarazo */) 
{

    if(north_contry === 'S' || gestation === 'S') 
    {
        document.write('Eres un candidato apto para vacunarte (1)');
    }
    else
    {
       if(age >= 30)
       {
            document.write('Eres un candidato apto para vacunarte (2)');
       }
    }
    
}
else//Evaluamos si "age" es mayor o igual a 18, si esto no es correcto ejecuta lo que esta en los corchetes despues del "else"  
{
    document.write('Por el momento no eres candidato a vacunarte');
}