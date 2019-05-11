import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const SideQuestions = ({ questions }) => {
   const sidebarItems = questions.map( question => {
      return (
         <NavItem eventKey="home" key={question.id}>
            <NavIcon>
               <a className="" href={"#Question" + question.id}>{question.id}</a>
            </NavIcon>
            <NavText>
               <a className="" href={"#Question" + question.id}>{question.title}</a>
            </NavText>
         </NavItem>
      )
   })

   return (
      <SideNav className="SideNav"
         onSelect={(selected) => {
            // Add your code here
         }}
      >
         <SideNav.Toggle />
         <SideNav.Nav defaultSelected="home">
            {sidebarItems}
         </SideNav.Nav>
      </SideNav>
   )
}

export default SideQuestions;

