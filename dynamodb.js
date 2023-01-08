// import * as AWS from "@aws-sdk/client-dynamodb";
// import {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from "./config"
// var AWS = require('aws-sdk');
// import AWS from 'aws-sdk'
// AWS.config.update({region: 'us-east-1'});
// console.log(AWS.config.region)
// const client = new AWS.DynamoDB()

var params = {
    AttributeDefinitions: [
      {
        AttributeName: 'CUSTOMER_ID',
        AttributeType: 'N'
      },
      {
        AttributeName: 'CUSTOMER_NAME',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'CUSTOMER_ID',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'CUSTOMER_NAME',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableName: 'CUSTOMER_LIST_ZAFAR',
    StreamSpecification: {
      StreamEnabled: false
    }
  };
  
// version 2 sdk
// client.createTable(params, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Table Created", data);
//     }
//   });

// tableCreation()

import { DynamoDBClient, CreateTableCommand, DeleteTableCommand, UpdateItemCommand,PutItemCommand} from "@aws-sdk/client-dynamodb";

(async () => {
    const client = new DynamoDBClient({ region: "us-east-1" });
    // const command = new ListTablesCommand({});
    const commandCreateTable = new CreateTableCommand(params);
    const commandDeleteTable = new DeleteTableCommand({TableName:"CUSTOMER_LIST_ZAFAR"});
    const docParams = {
        TableName: 'CUSTOMER_LIST_ZAFAR',
        Item: {
            CUSTOMER_ID: { N: "001" },
            CUSTOMER_NAME: { S: "Richard Roe" },
          },
      };
      const commandPutUpdateTable = new PutItemCommand(docParams);
      
    try {
      const results = await client.send(commandPutUpdateTable);
    //   console.log(results.TableNames.join("\n"));
    console.log(results);
    } catch (err) {
      console.error(err);
    }
  })();