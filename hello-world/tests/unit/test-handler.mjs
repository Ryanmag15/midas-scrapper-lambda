'use strict';

import { lambdaHandler } from '../../app.mjs';
import { expect } from 'chai';
// var event, context;

const event = {
    "Records": [
      {
        "messageId": "1",
        "receiptHandle": "AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...",
        "body": "{\"Message\": \"https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31240501928075007889650090002289341512108756%7C2%7C1%7C1%7C088dcac3fd7aa5d9479932bc3e67efedd709ee41\"}",
        "attributes": {
          "ApproximateReceiveCount": "1",
          "SentTimestamp": "1594840000000",
          "SenderId": "AIDAIENQZJOLO23YVJ4VO",
          "ApproximateFirstReceiveTimestamp": "1594840000001"
        },
        "messageAttributes": {
          "AttributeOne": {
            "stringValue": "Attribute Value",
            "stringListValues": [],
            "binaryListValues": [],
            "dataType": "String"
          }
        },
        "md5OfBody": "7b270e59b47ff90a553787216d55d91d",
        "eventSource": "aws:sqs",
        "eventSourceARN": "arn:aws:sqs:us-east-1:982286361702:MidasScrapperSQS.fifo",
        // "eventSourceARN": "arn:aws:sqs:us-east-1:123456789012:MyQueue",
        "awsRegion": "us-east-1"
      }
    ]
  };

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await lambdaHandler(event);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('MessageId');
        expect(result).to.have.property('SequenceNumber');
        expect(result.MessageId).to.be.a('string');
        expect(result.SequenceNumber).to.be.a('string');
    });
});
