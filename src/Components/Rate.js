import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export const Rate = ({ Data }) => {
    const [value, setValue] = React.useState(2);
    return (
        <div>
            <Box borderColor="transparent">
                <Rating
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </div>
    );
}