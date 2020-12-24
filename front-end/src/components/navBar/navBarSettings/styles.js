import styled from 'styled-components';
import { ContainerColumn } from '../../dataGrid/index'

const SettingsContainer = styled(ContainerColumn)`
  a {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
`

export { SettingsContainer }
