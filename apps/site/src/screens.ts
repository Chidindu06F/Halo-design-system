// Made by a script from the playground pages in the Figma file. Images live in public/screens.

export interface Screen {
  id: string;
  name: string;
  /** Width and height of each image, so the page keeps its space while they load. */
  desktop: [number, number];
  mobile: [number, number];
  /** Component slugs on the screen. */
  components: string[];
}

export interface App {
  id: string;
  name: string;
  screens: Screen[];
}

export const apps: App[] = [
  {
    "id": "saas",
    "name": "SaaS",
    "screens": [
      {
        "id": "saas-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1140
        ],
        "mobile": [
          375,
          2267
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "compact-button",
          "date-picker",
          "input",
          "navigation",
          "progress",
          "table",
          "text"
        ]
      },
      {
        "id": "saas-project-board",
        "name": "Project board",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1780
        ],
        "components": [
          "avatar",
          "badge",
          "breadcrumbs",
          "button",
          "card",
          "compact-button",
          "navigation",
          "tabs",
          "text"
        ]
      },
      {
        "id": "saas-task-detail-drawer",
        "name": "Task detail (drawer)",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          812
        ],
        "components": [
          "avatar",
          "badge",
          "breadcrumbs",
          "button",
          "card",
          "compact-button",
          "drawer",
          "navigation",
          "tabs",
          "text"
        ]
      },
      {
        "id": "saas-billing",
        "name": "Billing",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1597
        ],
        "components": [
          "alert",
          "breadcrumbs",
          "card",
          "navigation",
          "text"
        ]
      },
      {
        "id": "saas-sign-up",
        "name": "Sign up",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          746
        ],
        "components": [
          "button",
          "card",
          "divider",
          "input",
          "link-button",
          "social-button",
          "text"
        ]
      }
    ]
  },
  {
    "id": "banking",
    "name": "Banking",
    "screens": [
      {
        "id": "banking-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1253
        ],
        "mobile": [
          375,
          2504
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "select",
          "table",
          "text"
        ]
      },
      {
        "id": "banking-send-money",
        "name": "Send money",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1362
        ],
        "components": [
          "card",
          "navigation",
          "text"
        ]
      },
      {
        "id": "banking-card-controls",
        "name": "Card controls",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1485
        ],
        "components": [
          "badge",
          "button",
          "card",
          "navigation",
          "text"
        ]
      },
      {
        "id": "banking-savings-goal-detail",
        "name": "Savings: goal detail",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1163
        ],
        "components": [
          "badge",
          "breadcrumbs",
          "button",
          "card",
          "navigation",
          "table",
          "text"
        ]
      }
    ]
  },
  {
    "id": "sales-crm",
    "name": "Sales CRM",
    "screens": [
      {
        "id": "sales-crm-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1391
        ],
        "mobile": [
          375,
          2416
        ],
        "components": [
          "alert",
          "button",
          "card",
          "navigation",
          "select",
          "tabs",
          "text"
        ]
      },
      {
        "id": "sales-crm-deal-detail",
        "name": "Deal detail",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          2006
        ],
        "components": [
          "badge",
          "breadcrumbs",
          "button",
          "card",
          "navigation",
          "stepper",
          "tabs",
          "text",
          "textarea"
        ]
      },
      {
        "id": "sales-crm-contacts",
        "name": "Contacts",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1119
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "compact-button",
          "input",
          "navigation",
          "segmented-control",
          "table",
          "text"
        ]
      },
      {
        "id": "sales-crm-add-a-deal-drawer",
        "name": "Add a deal (drawer)",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          812
        ],
        "components": [
          "button",
          "card",
          "drawer",
          "navigation",
          "text"
        ]
      }
    ]
  },
  {
    "id": "tax",
    "name": "Tax",
    "screens": [
      {
        "id": "tax-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1120
        ],
        "mobile": [
          375,
          2348
        ],
        "components": [
          "alert",
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "select",
          "table",
          "text"
        ]
      },
      {
        "id": "tax-file-a-return-deductions",
        "name": "File a return: deductions",
        "desktop": [
          1440,
          1239
        ],
        "mobile": [
          375,
          2091
        ],
        "components": [
          "badge",
          "breadcrumbs",
          "card",
          "navigation",
          "stepper",
          "text"
        ]
      },
      {
        "id": "tax-pay-tax-receipt",
        "name": "Pay tax: receipt",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          951
        ],
        "components": [
          "card",
          "navigation",
          "qr-code"
        ]
      },
      {
        "id": "tax-receipts",
        "name": "Receipts",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1814
        ],
        "components": [
          "button",
          "card",
          "navigation",
          "tabs",
          "text"
        ]
      }
    ]
  },
  {
    "id": "creators",
    "name": "Creators",
    "screens": [
      {
        "id": "creators-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1052
        ],
        "mobile": [
          375,
          2224
        ],
        "components": [
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "table",
          "text"
        ]
      },
      {
        "id": "creators-create-a-product",
        "name": "Create a product",
        "desktop": [
          1440,
          1106
        ],
        "mobile": [
          375,
          1929
        ],
        "components": [
          "button",
          "card",
          "navigation",
          "text"
        ]
      },
      {
        "id": "creators-join-a-call-lobby",
        "name": "Join a call: lobby",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1094
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "qr-code",
          "select",
          "text"
        ]
      },
      {
        "id": "creators-payouts",
        "name": "Payouts",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1270
        ],
        "components": [
          "badge",
          "button",
          "card",
          "navigation",
          "table",
          "text"
        ]
      }
    ]
  },
  {
    "id": "healthcare",
    "name": "Healthcare",
    "screens": [
      {
        "id": "healthcare-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1114
        ],
        "mobile": [
          375,
          2188
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "select",
          "table",
          "text"
        ]
      },
      {
        "id": "healthcare-patient-record",
        "name": "Patient record",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1911
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "navigation",
          "tabs",
          "text"
        ]
      },
      {
        "id": "healthcare-prescribe",
        "name": "Prescribe",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1467
        ],
        "components": [
          "avatar",
          "badge",
          "breadcrumbs",
          "card",
          "navigation",
          "text"
        ]
      },
      {
        "id": "healthcare-billing",
        "name": "Billing",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1289
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "table",
          "text"
        ]
      }
    ]
  },
  {
    "id": "payroll",
    "name": "Payroll",
    "screens": [
      {
        "id": "payroll-home-overview",
        "name": "Home: overview",
        "desktop": [
          1440,
          1336
        ],
        "mobile": [
          375,
          2744
        ],
        "components": [
          "avatar",
          "badge",
          "button",
          "card",
          "compact-button",
          "input",
          "navigation",
          "table",
          "text"
        ]
      },
      {
        "id": "payroll-run-payroll-review",
        "name": "Run payroll: review",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1374
        ],
        "components": [
          "alert",
          "avatar",
          "badge",
          "breadcrumbs",
          "button",
          "navigation",
          "stepper",
          "table",
          "text"
        ]
      },
      {
        "id": "payroll-time-off-calendar",
        "name": "Time off: calendar",
        "desktop": [
          1440,
          1028
        ],
        "mobile": [
          375,
          1039
        ],
        "components": [
          "button",
          "event-calendar",
          "navigation",
          "tabs",
          "text"
        ]
      },
      {
        "id": "payroll-payslip",
        "name": "Payslip",
        "desktop": [
          1440,
          1024
        ],
        "mobile": [
          375,
          1250
        ],
        "components": [
          "breadcrumbs",
          "button",
          "card",
          "navigation",
          "select",
          "text"
        ]
      }
    ]
  }
];
