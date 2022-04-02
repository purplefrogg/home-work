import { createSlice } from '@reduxjs/toolkit'
import {kuanyshAvatar, ArstanAvatar, DiasAvatar, AibarAvatar, AzizAvatar, NurbekAvatar} from '../../images/index'
const initialState = {
  Devteam:[
      {id: 1,name: 'kuanysh', avatar: kuanyshAvatar,description:'Хей, я капитан этого судна и бравой команды. Также frontend developer и пишу код. Stack: react, redux, css, scss, html, antd. ',YO:21},
      {id: 2,name: 'Dias', avatar: DiasAvatar,description:'',YO:21},
      {id: 3,name: 'Arstan', avatar: ArstanAvatar,description:'',YO:21},
      {id: 4,name: 'Aibar', avatar: AibarAvatar,description:'',YO:21},
      {id: 5,name: 'Aziz', avatar: AzizAvatar,description:'',YO:21},
      {id: 6,name: 'Nurbek', avatar: NurbekAvatar,description:'',YO:21},
  ]
}
export const DevTeamSlice = createSlice({
    name: 'DevTeam',
    initialState,
    reducers:{}
})

export default DevTeamSlice.reducer