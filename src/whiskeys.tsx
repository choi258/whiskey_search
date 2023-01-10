import Whiskey from "./whiskey";
import * as React from 'react';
import whiskey_json from "./whiskey.json";
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';


const Search = styled('div')(({ theme }) => ({
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '50%',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Whiskeys(): JSX.Element {
    const [rows, setRows] = React.useState(whiskey_json);
    const requestSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        const filteredRows = whiskey_json.filter((row) => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        console.log(filteredRows);
        setRows(filteredRows);
    };

    return <>
        <AppBar position="static"
            sx={{

                margin: 'auto',
                maxWidth: 532,
                flexGrow: 1

            }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Search sx={{ maxWidth: 350 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(searchVal) => requestSearch(searchVal)}
                    />
                </Search>
            </Toolbar>

        </AppBar>
        {

            rows.map((whiskey) => (
                <Whiskey
                    key={whiskey.name}
                    name={whiskey.name}
                    rating={whiskey.rating}
                    price={whiskey.price}
                    cask={whiskey.cask}
                    alcohol={whiskey.alcohol}
                />
            ))
        }</>
}
