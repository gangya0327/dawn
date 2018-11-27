import React from 'react'
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage'

import SectionOne from './SectionOne'

let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '0',
    sectionPaddingBottom: '0',
    arrowNavigation:      true
  };

export default class FullPage extends React.Component {
    render() {
        return (
            <div>
                {/* <Header>
                    <a href="#sectionOne" className="opa">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                </Header> */}
                <Footer>
                    <a href="" className="opa">Dcoumentation</a>
                    <a href="">Example Source</a>
                    <a href="">About</a>
                </Footer>
                <SectionsContainer {...options}>
                    <Section>111</Section>
                    <Section>222</Section>
                    <Section>333</Section>
                </SectionsContainer>
            </div>
        )
    }
}