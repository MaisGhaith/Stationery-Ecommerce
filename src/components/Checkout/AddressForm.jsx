// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import MapComponent from './MapComponent';

// export default function AddressForm() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [phoneNumberError, setPhoneNumberError] = useState(false);

//   const handlePhoneNumberChange = (event) => {
//     const number = event.target.value;
//     setPhoneNumber(number);

//     // Validate phone number using regex
//     const regex = /^(?:(?:\+|00)962|0)?7[789]\d{7}$/;
//     setPhoneNumberError(!regex.test(number));
//   };

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom sx={{ p: { xs: 2, md: 3 } }}>
//         Phone Number
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="PhoneNumber"
//             name="Phone Number"
//             label="Phone Number"
//             type="tel"
//             fullWidth
//             autoComplete="phoneNumber"
//             variant="filled"
//             error={phoneNumberError}
//             helperText={phoneNumberError ? 'Please enter a valid Jordanian phone number' : ''}
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//           />
//         </Grid>
//       </Grid>
//       <Typography variant="h6" gutterBottom sx={{ p: { xs: 2, md: 3 } }}>
//         Drop your Location
//       </Typography>
//       <MapComponent />
//     </React.Fragment>
//   );
// }


// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import MapComponent from './MapComponent';

// export default function AddressForm() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [phoneNumberError, setPhoneNumberError] = useState(false);

//   const handlePhoneNumberChange = (event) => {
//     const number = event.target.value;
//     setPhoneNumber(number);

//     // Validate phone number using regex
//     const regex = /^(?:(?:\+|00)962|0)?7[789]\d{7}$/;
//     setPhoneNumberError(!regex.test(number));
//   };
// console.log(phoneNumber)
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom sx={{ padding: { xs: 2, md: 3 } }}>
//         Phone Number
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="phoneNumber"
//             name="phoneNumber"
//             label="Phone Number"
//             type="tel"
//             fullWidth
//             autoComplete="tel"
//             variant="filled"
//             error={phoneNumberError}
//             helperText={phoneNumberError ? 'Please enter a valid Jordanian phone number' : ''}
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//           />
//         </Grid>
//       </Grid>
//       <Typography variant="h6" gutterBottom sx={{ padding: { xs: 2, md: 3 } }}>
//         Drop your Location
//       </Typography>
//       <MapComponent />
//     </React.Fragment>
//   );
// }

import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MapComponent from './MapComponent';
import { PhoneNumberContext } from './PhoneNumberContext';

export default function AddressForm() {
  const { phoneNumber, updatePhoneNumber } = useContext(PhoneNumberContext);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const number = event.target.value;
    updatePhoneNumber(number);

    // Validate phone number using regex
    const regex = /^(?:(?:\+|00)962|0)?7[789]\d{7}$/;
    setPhoneNumberError(!regex.test(number));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform additional actions with the phoneNumber value
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ padding: { xs: 2, md: 3 } }}>
        Phone Number
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            fullWidth
            autoComplete="tel"
            variant="filled"
            error={phoneNumberError}
            helperText={phoneNumberError ? 'Please enter a valid Jordanian phone number' : ''}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handleFormSubmit}>Take Input</Button>
      <Typography variant="h6" gutterBottom sx={{ padding: { xs: 2, md: 3 } }}>
        Drop your Location
      </Typography>
      <MapComponent />
    </React.Fragment>
  );
}