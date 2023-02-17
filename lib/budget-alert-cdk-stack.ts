import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Budget } from './constructs/budget';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface BillingProps extends StackProps {
  budgetAmount: number,
  emailAddres: string
}

export class BudgetAlertCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BillingProps) {
    super(scope, id, props);

    new Budget(this, "Budget", {
      budgetAmount: props.budgetAmount,
      emailAddres: props.emailAddres
  })
  }
}
