import { createSlice } from '@reduxjs/toolkit'
import {kuanyshAvatar, ArstanAvatar, DiasAvatar, AibarAvatar} from '../../images/index'
const initialState = {
  Devteam:[
      {name: 'kuanysh', avatar: kuanyshAvatar,description:'Хей, я капитан этого судна и бравой команды. Также frontend developer и пишу код. Stack: react, redux, css, scss, html, antd. ',YO:21},
      {name: 'Dias', avatar: DiasAvatar,description:'',YO:21},
      {name: 'Arstan', avatar: ArstanAvatar,description:'',YO:21},
      {name: 'Aibar', avatar: AibarAvatar,description:'',YO:21},
  ]
}
export const DevTeamSlice = createSlice({
    name: 'DevTeam',
    initialState,
    reducers:{}
})

export default DevTeamSlice.reducer