class Currency
{
    constructor()
    {
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_64Z1BXE3IpEDS9ycgDvsFgarAN9n9ZCCXqUn3XTw&base_currency="
    }
     async exchange(amount , firstCurrency , secondCurrency)
    {
        const response =  await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();



        

        const resultValue = amount *result.data[secondCurrency];

       return resultValue;

    }
}