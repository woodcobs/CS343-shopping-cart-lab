/* define your functions here */
let currTotal = 0;
function calculateTotal(quantity, price)
{
    return quantity * price;
}

function outputCartRow(item, total)
{
    console.log(item, total);
    const {product: {title, filename, price}, quantity} = item;
    const row = `<tr>
                    <td><img src="images/${filename}"></td>
                    <td>${title}</td>
                    <td>${quantity}</td>
                    <td>${price}</td>
                    <td>${total}</td>
                </tr>`;
    document.write(row);
    currTotal += calculateTotal(quantity, price);

}

function outputTotalRow(title, quantity)
{
    const totalRow = ` <tr class="totals">
                        <td colspan="4">${title}</td>
                        <td>${quantity.toFixed(2)}</td>
                    </tr>`
    document.write(totalRow);

    
}

function outputTotals()
{
    const totals = [
        {
            title: "Subtotal",
            quantity: currTotal
        },
        {
            title: "Tax",
            quantity: currTotal * tax_rate
        },
        {
            title: "Shipping",
            quantity: currTotal > shipping_threshold ? 0 : 40
        },  
        {
            title: "Grandtotal",
            quantity: currTotal + (currTotal * tax_rate) + (currTotal > shipping_threshold ? 0 : 40)
        },       
  ];
    for (let tot of totals)
    {
        outputTotalRow(tot.title, tot.quantity)
    }
}

function outputTableBody() 
{
    for (let item of cart)
    {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
    }
}






        
