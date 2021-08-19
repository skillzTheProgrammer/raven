import styled from 'styled-components/macro'
import {Link, NavLink} from 'react-router-dom'


export const RavenLink = styled(Link)`
   text-decoration: none;
   text-align:center;
   color: ${(color)=>color?color:null}
`
export const RavenNavLink = styled(NavLink)`
   text-decoration: none;
   text-align:center;
   color: ${(color)=>color?color:null}
`
export const Div = styled.div`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ ml }) => (ml ? ml : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignI }) => alignI};
  align-self: ${({ align }) => (align ? align : null)};
  justify-content: ${({ justify }) => (justify ? justify : null)};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : null)};
  box-sizing: ${({ boxSizing }) => (boxSizing ? boxSizing : null)};
  background-size: cover;
  cursor: ${({ cursor }) => (cursor ? cursor : null)};
  background-repeat: no-repeat;
  border: ${({ border }) => (border ? border : null)};
  border-radius: ${({ br }) => (br ? br : null)};
`;

export const Img = styled.img`
   width: ${({w})=>w?w:null};
   height: ${({h})=>h?h:null};
   margin: ${({m})=>m?m:null};
   padding: ${({p})=>p?p:null};
   border-radius: ${({br})=>br?br:null};
   align-self: ${({align})=>align? align: null};
`

export const Button = styled.button`
  background-color: ${({ bc }) =>
  bc ? bc : null};
  width: ${({ w }) => (w ? w : null)};
  padding: ${({ p }) => (p ? p : null)};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  border-radius: ${({ br }) => (br ? br : null)};
  outline: none;
  font-weight: ${({ fw }) => (fw ? fw : null)};
  font-size: ${({ fs }) => (fs ? fs : null)};
  display: ${({ display }) => display};
  align-items:${({ alignI }) => alignI || null};
  cursor: pointer;
  box-shadow: ${({ bs }) => (bs ? bs : null)};
  box-sizing: ${({ bSizing }) => (bSizing ? bSizing : null)};
  color: ${({ color }) => (color ? color : null)};
  margin: ${({ m }) => (m ? m : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
`;

export const RavenInput = styled.input`
  width: ${({ w }) => (w ? w : null)};
  height: ${({ h }) => (h ? h : null)};
  font-weight: ${({ fw }) => (fw ? fw : null)};
  color: ${({ color }) => (color ? color : null)};
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};
  outline: ${({ o }) => (o ? o : null)};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  padding: ${({ p }) => (p ? p : null)};
`

export const RavenP = styled.p`
  font-weight: ${({ fw }) => (fw ? fw : null)};;
  color: ${({ color }) => (color ? color : null)};
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  text-transform:${({ tr }) => (tr ? tr : null)};
  font-size:${({ fs }) => (fs ? fs : null)};
  padding: ${({ p }) => (p ? p : null)};
  text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
`;
export const RavenH = styled.h5`
  font-weight: ${({ fw }) => (fw ? fw : null)};;
  color: ${({ color }) => (color ? color : null)};
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  text-transform:${({ tr }) => (tr ? tr : null)};
  font-size:${({ fs }) => (fs ? fs : null)};
  padding: ${({ p }) => (p ? p : null)};
`;
export const HeightSpacer = styled.div`
 height: ${({h})=>h || null};
 width: ${({w})=>w || null};
`