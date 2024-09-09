import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Suggested and all currencies arrays
const currenciesSuggested = [
  "Israeli New Shekel",
  "United States Dollar",
  "Pound Sterling",
  "Indian Rupee",
  "Swiss Franc",
  "Hungarian Forint",
];

const currenciesAll = [
  "Euro",
  "Argentine Peso",
  "Australian Dollar",
  "Azerbaijani Manat",
  "Bahraini Dinar",
  "Brazilian Real",
  "Bulgarian Lev",
  "Canadian Dollar",
  "Chilean Peso",
  "Chinese Yuan",
  "Colombian Peso",
  "Czech Koruna",
  "Danish Krone",
  "Egyptian Pound",
  "Fijian Dollar",
  "Georgian Lari",
  "Hong Kong Dollar",
  "Hungarian Forint",
  "Icelandic Króna",
  "Indian Rupee",
  "Israeli New Shekel",
  "Japanese Yen",
  "Jordanian Dinar",
  "Kazakhstani Tenge",
  "Kuwaiti Dinar",
  "Macanese Pataca",
  "Malaysian Ringgit",
  "Moldovan Leu",
  "Namibian Dollar",
  // Add more currencies as needed...
];

const CurrencyDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Select your currency
        <IconButton
          onClick={onClose}
          edge="start"
          style={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" gutterBottom>
          Where applicable prices will be converted to, and shown in, the
          currency that you select. The currency you pay in may differ based on
          your reservation, and a service fee may also apply.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Suggested for you
        </Typography>
        <Grid container spacing={2}>
          {currenciesSuggested.map((currency, index) => (
            <Grid item xs={4} key={index}>
              {currency}
            </Grid>
          ))}
        </Grid>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="h6" gutterBottom>
          All currencies
        </Typography>
        <Grid container spacing={2}>
          {currenciesAll.map((currency, index) => (
            <Grid item xs={4} key={index}>
              {currency}
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CurrencyDialog;
