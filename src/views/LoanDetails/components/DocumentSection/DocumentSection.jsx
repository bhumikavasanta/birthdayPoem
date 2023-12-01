import {
  Table, TableBody, TableHead, TableRow, useTheme, Grid,
} from '@mui/material';
import React, { useState } from 'react';
import SectionHeader from '../../../../components/atoms/SectionHeader/SectionHeader';
import { StyledTableCell } from '../../../../components/atoms/TableComponent/StyledTableCell';
import { StyledTableContainer } from '../../../../components/atoms/TableComponent/StyledTableContainer';
import { useStyles } from '../../Styles';
import { DocumentTableRow } from './DocumentTableRow';
import eyeIcon from '../../../../assets/InnerPage/eyeIcon.svg';
import crossIcon from '../../../../assets/InnerPage/crossIcon.svg';
import settingsIcon from '../../../../assets/InnerPage/settingsIcon.svg';
import ButtonOutlined from '../../../../components/atoms/Button/ButtonOutlined';
import IconButton from '../../../../components/atoms/Button/IconButton';
import mailIcon from '../../../../assets/InnerPage/mailIcon.svg';
import ButtonFilled from '../../../../components/atoms/Button/ButtonFilled';
import CircularLoading from './CircularLoading';

export default function DocumentSection(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectFile, setSelectFile] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [missingDocSec, setmissingDocSec] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dummyData = [
    {
      file_name: 'Filename_123.pdf',
      classification: 'Loan Document Name',
      classification_score: 87,
      extraction_score: 0,
    },
    {
      file_name: 'Filename_123.pdf',
      classification: 'Employers Liability',
      classification_score: 87,
      extraction_score: 87,
    },
    {
      file_name: 'Filename_123.pdf',
      classification: 'Commercial General Liability',
      classification_score: 76,
      extraction_score: 0,
    },
  ];

  const hiddenFileInput = React.useRef(null);

  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };
  // props destructuring for upload file
  const { handleFile } = props;

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
      uploaded.push(file);
      return true;
    });
    setUploadedFiles(uploaded);
  };

  const handleUploadChange = (e) => {
    const fileUploaded = e.target.files[0];

    setSelectedFile(handleFile(fileUploaded));
    handleUploadFiles(fileUploaded);
  };
  const uploadDoc = (e) => {
    setSelectFile(true);
    setShowFile(true);
    const fileUploaded = e.target.files[0];
    setSelectedFile(fileUploaded);
  };
  const handleReturnToUpload = () => {
    setSelectFile(false);
    setShowFile(false);
    if (dummyData.extraction_score > 75) {
      setmissingDocSec(true);
    }
  };
  const handleConfirmFile = () => {
    setConfirm(true);
    setShowFile(false);
    setSelectFile(true);
    if (dummyData.extraction_score > 75) {
      setmissingDocSec(true);
    }
  };

  return (
    <div className={classes.docSectionMainDiv}>
      <SectionHeader headerText="Documents" />
      <StyledTableContainer>
        <Table
          size="small"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell><span className="h4Regular">File Name</span></StyledTableCell>
              <StyledTableCell><span className="h4Regular">Classification</span></StyledTableCell>
              <StyledTableCell>
                <span className="h4Regular">
                  Classification
                  <br />
                  Score
                </span>
              </StyledTableCell>
              <StyledTableCell>
                <span className="h4Regular">
                  Extraction
                  <br />
                  Score
                </span>
              </StyledTableCell>
              <StyledTableCell><span className="h4Regular">Action</span></StyledTableCell>
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            { dummyData && dummyData.map((data) => (
              <DocumentTableRow data={data} />
            ))}
            {/* extraction_score should be > 75. replace undefine with 75 here */}
            {!missingDocSec && dummyData?.extraction_score !== undefined
              ? (uploadedFiles.map(() => (
                <DocumentTableRow
                  missingData={selectedFile.name}
                  missingClassify="General Aggregate Limit"
                  missingClassifyScore={dummyData?.classification_score}
                  missingExtractionScore={dummyData?.extraction_score}
                />
              )))
              : ''}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {/* Missing Document section */}
      {/* extraction_score should be > 75. replace undefine with 75 here */}
      {!dummyData?.extraction_score !== undefined
        ? (
          <div className={classes.missingDocumentSec} style={{ width: '100%' }}>
            {/* Header div */}
            <div className={classes.missingDocumentHeaderDiv}>
              {/* Title div */}
              <div className={classes.missingDocumentTitle}>
                <span className="h4Medium">Missing Document</span>
                <img src={settingsIcon} alt="settings" />
              </div>
              <div className={classes.actionDiv}>
                <span className="h4Regular">Action</span>
              </div>
            </div>
            {/* Body div */}
            <div className={classes.missingDocumentBodyDiv}>
              {/* Missing type div */}
              <div className={classes.missingTypeDiv}>
                <span style={{ color: theme.palette.redDefault }} className="h3Regular">General Aggregate Limit</span>
              </div>
              {/* Upload file div */}
              {/* show extraction and classification progress after confirm */}
              {confirm && (
                <div className={classes.classificationAndExtraction}>
                  <div><CircularLoading /></div>
                  { dummyData.classification_score < 75
                    ? (<div>Classification in progress</div>)
                    : (<div>Extraction in progress</div>)}
                </div>
              )}

              {/* show upload file button */}
              {!selectFile
                ? (
                  <div className={classes.missingTypeUploadDiv} htmlFor="contained-button-file">
                    <ButtonOutlined onClick={handleUploadClick} text="Choose File" htmlFor="contained-button-file" />
                    <input
                      type="file"
                      ref={hiddenFileInput}
                      onInput={uploadDoc}
                      onChange={handleUploadChange}
                      style={{ display: 'none' }}
                      multiple
                    />
                    <span className="h4Regular" style={{ color: theme.palette.grayMid1 }}>No File Chosen</span>
                  </div>
                )
                : ''}

              {/* show selected file here */}
              {showFile
                ? (
                  <Grid container className={classes.fileNameDiv}>
                    <Grid className={classes.fileNameImgDiv}>
                      <img src={eyeIcon} alt="view" />
                    </Grid>
                    <Grid className={classes.fileName}>
                      <div>
                        {selectedFile.name}
                      </div>
                      <div className={classes.crossIcon}>
                        <img src={crossIcon} alt="cross" aria-hidden onClick={handleReturnToUpload} />
                      </div>
                    </Grid>
                    <Grid className={classes.fileNameConfirmDiv}>
                      <ButtonFilled
                        text="Confirm"
                        height="2.5rem"
                        onClick={handleConfirmFile}
                      />
                    </Grid>
                  </Grid>
                )
                : ''}

              {/* Email Div */}
              <div
                className={classes.emailDiv}
              >
                <IconButton icon={mailIcon} />
              </div>
            </div>
          </div>
        ) : ''}
    </div>
  );
}
