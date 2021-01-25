const expenseInput = document.querySelector('#expense');
const amountInput = document.querySelector('#amount');
const clearBtn = document.querySelector('#clear-btn');
const addBtn = document.querySelector('#add-btn');
const totalA = document.querySelector('#total');
const listAmount = document.querySelector('#list-amount');

const alertCtrl = () => {
   const alert = document.createElement('ion-alert');
   alert.cssClass = 'my-custom-class';
   alert.header = 'Invalid input Values..!';
   alert.subHeader = 'Enter valid values';
   alert.message = 'Please enter a valid Reason or Amount ';
   alert.buttons = ['OK'];
 
   document.body.appendChild(alert);
   return alert.present();
 }

let total = 0;

// listener
addBtn.addEventListener('click',() => {
   const expense = expenseInput.value;
   const amount = amountInput.value;
   //valitadion
   if(expense.trim().length <= 0 ||
      amount <=0 ||
      amount.trim().length <= 0)
      {

      // alert('Invalid Valid!');
      alertCtrl();
         
      return;
   }
   const newItem = document.createElement('ion-item');
   newItem.textContent = expense + ': € ' + amount;

   listAmount.appendChild(newItem);

   console.log('expenseInput-> ',expense);
   console.log('amountInput-> ', amount);

   total +=  +amount;

   totalA.textContent = total;

   clear();
} );


const clear = () =>{
   expenseInput.value = '';
   amountInput.value = null;

};

clearBtn.addEventListener('click', clear);

