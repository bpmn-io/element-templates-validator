export const customFormatString = `
[
    {
        "$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
        "name": "Reusable Rule Template",
        "id": "io.camunda.examples.Decision",
        "description": "A reusable rule template",
        "version": 1,

        "engines": {
            "camunda": "^8.6"
        },

        "appliesTo": [
            "bpmn:Task",
            "bpmn:BusinessRuleTask"
        ],

        "elementType": {},

        "properties": [
            {
                "type": "Hidden",
                "value": "aReusableRule",
                "binding": {
                    "type": "zeebe:calledDecision",
                    "property": "decisionId"
                }
            },
            {
                "type": "Hidden",
                "value": "aResultVariable",
                "binding": {
                    "type": "zeebe:calledDecision",
                    "property": "resultVariable"
                }
            }
        ]
    }
]
`;