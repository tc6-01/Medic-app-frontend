import { Typography } from '@mui/material';
interface PageHeaderProps {
  title: string;
  description: string;
}
function DescriptionPageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2">
        {description}
      </Typography>
    </>
  );
}

export default DescriptionPageHeader;
