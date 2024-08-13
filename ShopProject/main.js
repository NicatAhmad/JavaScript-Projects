let message =
`
Welcome Shop 
Have you MoneyCard?
1-YES
2-NO
`;

const products =[
    {
        productName : "Milk",
        price :  15
    },
    {
        productName : "Soap",
        price : 20
    },
    {
        productName: "Meat",
        price:   220
    }
]

let result = confirm(message);
let payment; 

if (result)
{
  let name = prompt("Enter Name..");
  let surName = prompt("Enter Surname..");
  
  const customer = new Customer(name , surName , result , products)
  
   payment = customer.calculate();

alert(`Customer Info : ${name} ${surName}
       Customer Pay ${payment}`);
}
else
{
   const customer = new Customer(null , null , result , products );
    payment = customer.calculate();
   alert(`Customer Pay ${payment}`);

}