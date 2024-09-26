import React, { useState, useRef } from 'react';
import AuthenticationModal from './AuthenticationModal';
import { Button } from '@mui/material'; // Import Button from MUI

interface OtpVerificationProps {
    open: boolean;
    handleCloseOptModal: () => void;
    handleOpenUpdatePasswordModal: () => void;
    // handleResendCode: () => void; // Add prop for resend code functionality
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
    open,
    handleCloseOptModal,
    handleOpenUpdatePasswordModal,
    // handleResendCode
}) => {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/[^0-9]/.test(value)) return; // Only allow numeric values

        const newOtp = [...otp];
        newOtp[index] = value.slice(0, 1); // Keep only one character

        if (index < 5 && value) {
            inputsRef.current[index + 1]?.focus(); // Move to the next input
        }

        setOtp(newOtp);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (index > 0 && otp[index] === '') {
                inputsRef.current[index - 1]?.focus(); // Move to the previous input
            }
        }
    };

    return (
        <AuthenticationModal
            open={open}
            onClose={handleCloseOptModal}
            imageSrc="../../../public/Imgs/OPTimg.png"
            heading="Enter OTP"
            title="Please enter the 6 digit OTP we’ve sent to your email."
            buttonText="Next"
            onButtonClick={handleOpenUpdatePasswordModal}
        >

            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            value={value}
                            maxLength={1}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={el => inputsRef.current[index] = el}
                            style={{
                                width: '40px',
                                height: '40px',
                                textAlign: 'center',
                                margin: '0 5px',
                                fontSize: '18px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        />
                    ))}
                </div>
                <Button
                    // onClick={handleResendCode}
                    variant="text"
                    color="primary"
                    style={{ marginLeft: 'auto' }} // Push the button to the right
                >
                    Didn’t Receive Code? 00:00
                </Button>
            </div>

        </AuthenticationModal>
    );
}

export default OtpVerification;
