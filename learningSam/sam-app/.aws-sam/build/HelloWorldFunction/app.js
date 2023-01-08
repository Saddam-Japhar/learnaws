// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const AWS = require('aws-sdk')
// Create client outside of handler to reuse
const lambda = new AWS.Lambda()
// let response;
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    // try {
    //     // const ret = await axios(url);
    //     response = {
    //         'statusCode': 200,
    //         'body': JSON.stringify({
    //             message: 'hello world',
    //             // location: ret.data.trim()
    //         })
    //     }
    // } catch (err) {
    //     console.log(err);
    //     return err;
    // }

    // return response
    console.log('## PRINTING ENVIRONMENT VARIABLES: ' + serialize(process.env))
    console.log('## PRINTING CONTEXT: ' + serialize(context))
    console.log('## PRINTING EVENT: ' + serialize(event))
    try {
       let response = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: 'hello world',
                        // location: ret.data.trim()
                    })
                }
        return response;        
    } catch(error) {
      return formatError(error)
    }
  }
  
