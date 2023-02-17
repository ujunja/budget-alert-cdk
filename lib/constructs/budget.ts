import { CfnBudget } from "aws-cdk-lib/aws-budgets";
import { Construct } from "constructs";

interface BudgetProps {
    budgetAmount: number,
    emailAddres: string
}

// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_budgets.CfnBudget.html

export class Budget extends Construct {
    constructor(scope: Construct, id: string, props: BudgetProps) {
        super(scope, id)

        new CfnBudget(this, "Budget", {
            // https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_Budget.html
            budget: {
                budgetLimit: {
                    amount:props.budgetAmount,
                    unit: "USD",
                },
                budgetName: "Monthly Budget",
                budgetType: "COST",
                // Valid Values: USAGE | COST | RI_UTILIZATION | RI_COVERAGE | SAVINGS_PLANS_UTILIZATION | SAVINGS_PLANS_COVERAGE
                timeUnit: "MONTHLY",
                // Valid Values: DAILY | MONTHLY | QUARTERLY | ANNUALLY
            },
            // https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_NotificationWithSubscribers.html
            notificationsWithSubscribers: [
                {
                    notification: {
                        threshold: 100,
                        notificationType: "ACTUAL",
                        comparisonOperator: "GREATER_THAN",
                        thresholdType: "ABSOLUTE_VALUE",
                    },
                    subscribers: [{
                        subscriptionType: "EMAIL",
                        address: props.emailAddres
                    }]                    
                }
            ]
        })
    }
}