import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

export const TabSign = styled(Tab)`
&:focus{
    
    outline:none;
    
}

`;
export const Tabss = styled(Tabs)`
.MuiTabs-flexContainer{
    justify-content:center;
}

`;
export const Papers = styled(Paper)`

.MuiPaper-elevation1{
    box-shadow:none
}
@media screen and (max-width: 768px) {
    
 }
`;