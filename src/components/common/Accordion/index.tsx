import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { toLocalTimeString } from 'src/utils/time';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
    // 获取必要的文件信息
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    const file = props.props
    console.log(file)
    // 分三类详情页（当前用户拥有并未共享，当前用户共享出去，当前用户被共享）
    // 来自病历管理页（只有owner），来自共享页面（包含target，from）
    let sourceAndTarget = `病历来源 ${localStorage.getItem("userName")} 共享至 ${file.target}`
    if(file.owner != undefined){
      // 第一种
      if (file.state == "fromShared"){
        sourceAndTarget = `病历来源 ${file.owner} , 共享至 ${localStorage.getItem('userName')}`
      }else{
        sourceAndTarget = `病历来源 ${file.owner} , 暂未共享`
      }
    }else if(file.from != undefined){
      // 第三种
      sourceAndTarget = `病历来源 ${file.from}  共享至 ${localStorage.getItem('userName')}`
    }else if(file.target != undefined){
      // 第二种
      sourceAndTarget = `病历来源 ${localStorage.getItem('userName')}  共享至 ${file.target}`
    }
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>病历剩余使用次数</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {file.useLimit - file.use}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>过期时间</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {toLocalTimeString(file.expire)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>病历来源与目标用户</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {sourceAndTarget}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}