import React from 'react';
import { useStyles } from '../../Styles';
import ruleFlagIcon from '../../../../assets/InnerPage/ruleFlagIcon.svg';
import settingIcon from '../../../../assets/InnerPage/settingIcon.svg';
import DocDropdown from './components/DocDropdown';
import SectionHeader from '../../../../components/atoms/SectionHeader/SectionHeader';

function ComplianceRuleSection() {
  const classes = useStyles();
  return (
    <div className={classes.complianceRules}>
      {/* compliance Header */}
      <div className={classes.complianceHeader}>
        <SectionHeader
          isIconAvailable="true"
          svg={ruleFlagIcon}
          headerText="Compliance Rule"
          isButtonAvailable="true"
          isButtonIconAvailable="true"
          buttonSvg={settingIcon}
          buttonText="Compliance Setting"
        />
      </div>
      {/* document dropdown */}
      <DocDropdown
        docHeading="4 Insurance Documents"
        rule1="Employers Liability"
        rule2="Commercial General Liability"
        rule3="Workers Compensation"
        rule4="Commercial General Liability"
      />
      <DocDropdown
        docHeading="4 Loan Documents"
        rule1="Employers Liability"
        rule2="Commercial General Liability"
        rule3="Workers Compensation"
        rule4="Commercial General Liability"
      />
      <DocDropdown
        docHeading="4 Supplementary Documents"
        rule1="Employers Liability"
        rule2="Commercial General Liability"
        rule3="Workers Compensation"
        rule4="Commercial General Liability"
      />
      <DocDropdown
        docHeading="4 Coverage Limit Rules"
        rule1="General Liability >= $1,000,00.00"
        rule2="First Occurence >= $1,000.00"
        rule3="General Liability >= $1,000,00.00"
        rule4="First Occurence >= $1,000.00"
      />
      <DocDropdown
        docHeading="4 Renewal Rules"
        rule1="General Liability >= $1,000,00.00"
        rule2="First Occurence >= $1,000.00"
        rule3="General Liability >= $1,000,00.00"
        rule4="First Occurence >= $1,000.00"
      />
    </div>
  );
}

export default ComplianceRuleSection;
