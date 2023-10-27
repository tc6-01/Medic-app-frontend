import { Stack, Typography } from '@mui/material';
import { SectionProps } from "src/types/ComponentProps";


const Section = ({ title, children }: SectionProps) => {
    return (
        <Stack mt={1}>
            {/* <Divider sx={{ mb: 1 }} /> */}
            <Typography variant="h4" color="textPrimary" justifyContent={'left'}>{title}</Typography>
            {children}
        </Stack>
    )
}


export default Section
