#!/usr/bin/env node
import 'source-map-support/register';
import { App, Stack } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';

const app = new App();
const stack = new Stack(new App(), 'ReproStack');

new Table(stack, 'ReproTable', {
  partitionKey: { name: 'id', type: AttributeType.STRING },
  // timeToLiveAttribute: '_ttl', // Toggle this property on/off to cause brea
});
