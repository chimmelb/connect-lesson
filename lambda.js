exports.handler =  (event, context, callback) => {
    console.log(`Received ${JSON.stringify(event)}`)
    // User phone number is known at this point. 
    
    // Optional: Look into Dynamo for caller, return existing vanity numbers
    
    // TODO: Generate vanity numbers. Perhaps area code as starting point? Bonus would be an identified Contact from Connect to use their name. 
    let inputPhone = event.Details.ContactData.CustomerEndpoint.Address
    let areaCode = inputPhone.slice(-10).slice(0,3) // this is only working for US numbers
    let vanity1 = areaCode + '8675309' // this is always the #1 vanity number
    let vanity2 = areaCode + '8675310'
    let vanity3 = areaCode + '8675311'
    // TODO: Store to Dynamo. Main "key" is inputPhone
    const response = {
        phone: event.Details.ContactData.CustomerEndpoint.Address,
        vanity1: vanity1.split('').join(' '), // Connect text-to-speech needs spaces to say digits, not "Seven billion one hundred seventy eight million . . . "
        vanity2: vanity2.split('').join(' '),
        vanity3: vanity3.split('').join(' ')
    };
    console.log(`Returning ${JSON.stringify(response)}`)
    callback(null,response)
};
