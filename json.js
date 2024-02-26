const user = { id: 1, name: 'gorib Amir', job: 'actor' };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/* output:
{ id: 1, name: 'gorib Amir', job: 'actor' }
{"id":1,"name":"gorib Amir","job":"actor"}
 */

/* ----------------------------------------------------- */




// 
const shop = {
    owner: 'Aliya',
    address: {
        street: 'kochu khet er goli',
        city: 'dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen: true,
    isNew: false
};
console.log(shop);
// kono object ke string a convert korar jonno JSON.stringify use korbo 
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);


// string ke object a convert korar jonno amra JSON.parse use korbo
const shopObj = JSON.parse(shopStringified);
console.log(shopObj);
