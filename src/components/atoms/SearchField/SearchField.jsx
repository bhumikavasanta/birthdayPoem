import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // width: '100%', // 236px
  height: '2rem', // 33.5px
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(() => ([{
  paddingLeft: '1rem', // top:0px, right:16px
  height: '2rem',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  color: '#AEB3BC',
}]));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(3.5)})`,
    [theme.breakpoints.up('sm')]: {
      // width: '100%', // 236px
    },
  },
}));

function SearchField() {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          style={{
            fontSize: '0.875rem', fontWeight: '600', color: '#616E84', border: '1px solid #E1E2E2', borderRadius: '0.3125rem',
          }}
        />
      </Search>
    </div>
  );
}

export default SearchField;
