/* eslint-disable no-nested-ternary */
import { TableRow } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { StyledTableCell } from '../../../../components/atoms/TableComponent/StyledTableCell';
import eyeIcon from '../../../../assets/InnerPage/eyeIcon.svg';
import confirmIcon from '../../../../assets/InnerPage/confirmIcon.svg';
import cancelClassification from '../../../../assets/InnerPage/cancelClassification.svg';
import editIcon from '../../../../assets/InnerPage/editIcon.svg';
import extractionIcon from '../../../../assets/InnerPage/extractionIcon.svg';
import reviseIcon from '../../../../assets/InnerPage/reviseIcon.svg';
import ButtonOutlined from '../../../../components/atoms/Button/ButtonOutlined';
import CircularLoading from './CircularLoading';
import IconButton from '../../../../components/atoms/Button/IconButton';

export const DocumentTableRow = React.memo((props) => {
  const {
    data,
    missingData,
    missingClassify,
    missingClassifyScore,
    missingExtractionScore,
  } = props;

  const [editRow, setEditRow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [values, setValues] = useState('');

  // For Edit button
  const handleChangeTick = () => {
    setEditRow(true);
  };
  // For select dropdown
  const handleChange = (e) => {
    setValues(e.target.value);
  };
  const handleClassificationScore = () => {
    setEditRow(false);
  };
  const handleClassificationCancel = () => {
    setValues();
    setEditRow(false);
  };
  const handleConfirm = () => {
    setConfirm(true);
  };

  return (
    <TableRow>
      <StyledTableCell>
        <img src={eyeIcon} alt="view" />
      </StyledTableCell>
      <StyledTableCell>{data?.file_name || missingData}</StyledTableCell>
      <StyledTableCell>
        {editRow
          ? (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values || 'Loan Document Name'}
              onChange={handleChange}
              sx={{ height: '2em' }}
              defaultValue={{ label: 'Loan Document Name', value: 'Loan Document Name' }}
            >
              <MenuItem value="Loan Document Name" select>Loan Document Name</MenuItem>
              <MenuItem value="Employers Liability">Employers Liability</MenuItem>
              <MenuItem value="Commercial General Liability">Commercial General Liability</MenuItem>
              <MenuItem value="General Aggregate Limit">General Aggregate Limit</MenuItem>
            </Select>
          ) : values || data?.classification || missingClassify}
        {/* {data?.classification} */}
      </StyledTableCell>
      <StyledTableCell>
        <span style={{ color: data?.classification_score < 75 ? '#DE350B' : '#15284B' }}>
          {
          editRow
            ? (
              <>
                <img src={confirmIcon} alt="confirm" aria-hidden="true" onClick={handleClassificationScore} />
&nbsp;&nbsp;&nbsp;
                <img src={cancelClassification} alt="cancel" aria-hidden="true" onClick={handleClassificationCancel} />
              </>
            )
            : `${data?.classification_score}%` || <CircularLoading /> || missingClassifyScore
}
        </span>
      </StyledTableCell>
      <StyledTableCell><span className="h3Regular">{data?.extraction_score && `${data?.extraction_score || missingExtractionScore}%`}</span></StyledTableCell>
      <StyledTableCell>
        {/* only if classification > 75 and extraction > 1 */}
        {!editRow ? (data?.classification_score > 75 && data?.extraction_score > 1 && confirm)
          ? (
            <ButtonOutlined
              text="View Extraction"
              icon={extractionIcon}
              borderColor="#E1E2E2"
            />
          )
          : (
            <>
              <img src={confirmIcon} alt="confirm" aria-hidden="true" onClick={handleConfirm} />
              <img src={editIcon} alt="edit" style={{ marginLeft: '1em' }} aria-hidden="true" onClick={handleChangeTick} />
            </>
          ) : ''}
      </StyledTableCell>
      <StyledTableCell>
        <IconButton icon={reviseIcon} />
      </StyledTableCell>
    </TableRow>
  );
});
