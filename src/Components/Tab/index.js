import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import Header from '../Header/Header';
import {
  TabSign,
  Tabss,
  Papers
} from './index.styles';
function TabSignInUp(props) {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "84px auto" }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Header />
      <Papers elevation={20} style={paperStyle}>

        <Tabss
          style={{ justifyContent: "center" }}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <TabSign label="Đăng nhập" />

          <TabSign label="Đăng ký" />
        </Tabss>
        <TabPanel value={value} index={0}>
          <SignIn handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Papers>
    </>
  )
}

export default TabSignInUp;