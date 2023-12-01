import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from '../../../Styles';
import Chip from '../../../../../components/atoms/Chip/Chip';
import tickRadio from '../../../../../assets/InnerPage/tickRadio.svg';
import warningIcon from '../../../../../assets/InnerPage/warningIcon.svg';
import flagIcon from '../../../../../assets/InnerPage/flagIcon.svg';
import flagIcon2 from '../../../../../assets/InnerPage/flagIcon2.svg';

function DocDropdown(props) {
  const {
    docHeading,
    rule1,
    rule2,
    rule3,
    rule4,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <Accordion defaultExpanded="true">
        <div style={{ borderBottom: '1px solid #D4D5D8', width: '26em' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes.dropdownHeadingAndChip}>
              <Typography>
                <div className={`${classes.docHeading} ${'h3Medium'}`}>{docHeading}</div>
              </Typography>
              <div className={classes.chipList}>
                <div className={classes.chipOne}>
                  <Chip
                    text="1 Compliant"
                    width="6em"
                    bgColor="#D4F1E8"
                    svg={tickRadio}
                    isIconAvailable="true"
                    borderColor="#24B082"
                  />
                </div>
                <div className={classes.chipTwo}>
                  <Chip
                    text="2 Warnings"
                    width="6em"
                    bgColor="#F6E2D2"
                    svg={warningIcon}
                    isIconAvailable="true"
                    borderColor="#D6792D"
                  />
                </div>
                <div className={classes.chipThree}>
                  <Chip
                    text="1 Non-Compliant"
                    width="8em"
                    bgColor="#F6E0DB"
                    svg={flagIcon}
                    isIconAvailable="true"
                    borderColor="#DE350B"
                  />
                </div>
              </div>
            </div>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography>
            <div className={`${classes.expandList} ${'h3Regular'}`}>
              <div className={classes.iconMargin}>
                <img src={tickRadio} alt="tick Icon" />
              </div>
              <div>{rule1}</div>
            </div>
            <div className={`${classes.expandList2} ${'h3Regular'}`}>
              <div className={classes.iconMargin}>
                <img src={warningIcon} alt="warning Icon" />
              </div>
              <div>{rule2}</div>
            </div>
            <div className={`${classes.expandList2} ${'h3Regular'}`}>
              <div className={classes.iconMargin}>
                <img src={flagIcon2} alt="flag Icon" />
              </div>
              <div>{rule3}</div>
            </div>
            <div className={`${classes.expandList2} ${'h3Regular'}`}>
              <div className={classes.iconMargin}>
                <img src={warningIcon} alt="warning Icon" />
              </div>
              <div>{rule4}</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DocDropdown;
