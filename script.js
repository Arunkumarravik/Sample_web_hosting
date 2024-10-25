document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    const productData = {
        name: productName,
        price: productPrice
    };

    try {
        const response = await fetch('https://t4n7euvfyc.execute-api.us-east-1.amazonaws.com/practice_stage/pro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });


        if (response.ok) {
            const result = await response.json();
            const body = JSON.parse(result.body); // Parse the body to get the actual JSON object

// Now you can access the product name and price
const product_name = body.name; // Access the name
const product_price = body.price; // Access the price

console.log(product_name);
            document.getElementById('responseMessage').innerText = ' Price of '+ product_name + ' was '+ product_price;
        } else {
            document.getElementById('responseMessage').innerText = 'Error adding product.';
        }
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Network error. Please try again later.';
    }
});
