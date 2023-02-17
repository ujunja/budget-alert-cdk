#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BudgetAlertCdkStack } from '../lib/budget-alert-cdk-stack';

const app = new cdk.App();
new BudgetAlertCdkStack(app, 'BudgetAlertCdkStack', {
  budgetAmount: 5,
  emailAddres: "xxxx@gmail.com",
  env: {
    account: process.env.PROD_ACCOUNT,
    region: process.env.PROD_REGION
  }
});