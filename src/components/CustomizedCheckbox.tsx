import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 5,
    width: '20px',
    height: "20px",
    border: '1px solid #9EA6A9',
    backgroundColor: 'transparent',
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
        ...theme.applyStyles('dark', {
            background: 'rgba(57,75,89,.5)',
        }),
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
        backgroundColor: '#394b59',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
    }),
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: 'transparent',
    border: '1px solid #0071EB',
    '&::before': {
        display: 'block',
        width: '20px',
        height: "20px",
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%230071EB'/%3E%3C/svg%3E\")",
        content: '""',
    },
});


function BpCheckbox(props: CheckboxProps) {
    return (
        <Checkbox
            sx={{ '&:hover': { bgcolor: 'transparent' } }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}
export default BpCheckbox;