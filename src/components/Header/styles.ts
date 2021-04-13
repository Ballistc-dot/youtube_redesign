import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  border-bottom:.5px solid #263135;
  justify-content: space-between;
  width:100%;
`;

export const HeaderLeft = styled.div`
  display:flex;
  align-items:center;
  width: 100%;
  padding:10px 20px;
  #icon{
    color: #495157;
  }
`

export const SearchInput = styled.input`
  padding:10px 10px;
  background:none;
  border:none;
  color:#fff;
  outline: 0;
  width: 100%;
  font-weight:bold;
  font-size:12pt;
  &::placeholder{
    color: #495157;
    font-weight:bold;
  }
`

export const HeaderRight = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding: 0 20px;
`
export const HeaderRightItem = styled.div`
color:#fff;
padding:5px;
`
export const ProfileImage = styled.img`
width:35px;
border-radius:20%;
margin-left:10px;
`