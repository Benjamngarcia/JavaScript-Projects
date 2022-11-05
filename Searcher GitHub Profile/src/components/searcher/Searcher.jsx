import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export function Searcher({ setInputUser, notFound }) {

    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value
        setValueInput(inputValue)
    };

    const handleSubmit = () => {
        if (valueInput.trim()) {
            setInputUser(valueInput)
        } else {
            alert('No puede dejar el buscador vacío')
        }
    };

    return (
        <Stack
            direction='row'
            sx={{
                marginTop: '30px',
                width: '80%'
            }}
        >
            {
                notFound ?
                    (
                        <TextField
                            error
                            id="outlined-error"
                            label="Error"
                            placeholder="Ingrese un usuario existente"
                            variant="outlined"
                            size="small"
                            value={valueInput}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    ) : (
                        <TextField
                            id="outlined-basic"
                            label="Usuario de GitHub"
                            placeholder="Usuario a buscar"
                            variant="outlined"
                            size="small"
                            value={valueInput}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    )
            }
            <IconButton
                onClick={handleSubmit}
                size="small"
                sx={{
                    left: '-45px'
                }}>
                <SearchIcon />
            </IconButton>
        </Stack>
    )
}    