import React from 'react';
import { makeStyles } from '@mui/styles';
import SectionHeader from '../../../../components/atoms/SectionHeader/SectionHeader';
import SearchField from '../../../../components/atoms/SearchField/SearchField';
import Notes from './Notes';
import notesIcon from '../../../../assets/notes.svg';
import addIcon from '../../../../assets/add.svg';

export const useStyles = makeStyles(() => ({
  p8: {
    padding: '0.5rem',
  },
  notesSection: {
    padding: '0.5rem',
    height: '15.4rem',
    overflowY: 'auto',
  },
}));
export default function AddNotes() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.p8}>
        {/* todo - on click prop for opening add notes popup */}
        <SectionHeader headerText="Notes" isIconAvailable svg={notesIcon} isButtonAvailable isButtonIconAvailable buttonSvg={addIcon} buttonText="Add Notes" headerHeight="3em" isHeaderCount headerCount="15" />
      </div>
      <div className={classes.p8}>
        <SearchField />
      </div>
      <div className={classes.notesSection}>
        <Notes />
        <Notes />
        <Notes />
      </div>

    </>
  );
}
