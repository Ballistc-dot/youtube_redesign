import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:200px;
  padding: 20px 20px;
  border-right:.5px solid #263135;
  padding-bottom:50px;
  @media screen and (max-width:600px) {
    display:none;
}
`;

export const TabHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  justify-content: flex-start;
  #youtube{
    margin-left:15px;
  }
`

export const TabItensTop = styled.div`
  margin-top:25px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:flex-start;
  height: 170px;

`
export const TopBorder = styled.span`
  border-bottom:.5px solid #263135;
  width:100%;
  margin-top:40px;
`

export const TabItensTopItem = styled.span<{ active: boolean }>`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#edeeee;
  font-weight:bold;
  font-size:11pt;
  padding:5px 5px;
  #logo{
    color:${(props) => props.active ? '#9b2127' : '#cacccd'};
    margin-right:8px;
  }

`

export const TopBarMiddle = styled.div`
  margin-top:25px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:flex-start;
  height: 170px;
  #show_more{
    color:#6f7677;
    font-size:10pt;
    text-transform:uppercase;
  }
`
export const TopBarMiddleItens = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#edeeee;
  font-weight:bold;
  font-size:11pt;
  padding:5px 5px;
  #logo{
    margin-right:8px;
  }
`
export const TabSubscriptionsTitle = styled.span`
  color:#6f7677;
  font-size:8pt;
  text-transform:uppercase;
  margin-bottom:25px;

`
export const TabSubscriptions = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:25px;
`

export const TabSubscriptionsItens = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#edeeee;
  font-weight:bold;
  font-size:11pt;
  padding:5px 5px;
`

export const TabSubscriptionsImage = styled.img`
  width:25px;
  border-radius:50%;
  margin-right:18px;
`

export const TabMoreFromYtTitle = styled.span`
  color:#6f7677;
  font-size:8pt;
  text-transform:uppercase;
  margin-bottom:25px;
`
export const TabMoreFromYt = styled.div`
  display:flex;
  margin-top:30px;
  height:170px;
  flex-direction:column;
`
export const TabMoreFromYtItens = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#edeeee;
  padding:5px 5px;
  font-size:11pt;
  #logo{
    margin-right:8px;
  }
`