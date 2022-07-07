import AutoType from "../cmps/AutoType";
import PartialType from "../cmps/PartialType";

export const formTypeValues = [
    {
      value: "withdrawal",
     label: "found withdrawal request"
    },
    { 
      value: "transferCancel",
      label: "found transfer cancel request"
    },
    { 
    value:"lifeInsurance",
    label: "Life insurance onboarding form"
  }
];

export const employeeTypes = [
    {
        value: "employee",
        label: "Employee"
    },
    {
        value: "independent",
        label: "Independent"
    }
]

export const withdrawalTypes = [
    {
        value: "full",
        label: "Full withdrawal",
        children: null
    },
    {
        value: "partial",
        label: "Partial withdrawal",
        children: <PartialType />

    },
    {
        value: "auto",
        label: "Automated monthly withdrawal",
        children: <AutoType />

    }
]

