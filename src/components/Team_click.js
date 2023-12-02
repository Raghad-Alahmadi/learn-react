import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberInfo from './memberInfo';

class Team extends Component {
  constructor() {
    super();
    this.state = {
        memberInfo :memberInfo,
        members: [],
        i: 0,
    }
    
    this.clickEvent = this.clickEvent.bind(this)
  }


  clickEvent() {
    if (this.state.i < this.state.memberInfo.length) {
      this.state.members.push(this.state.memberInfo[this.state.i]);
      this.setState(function (prevState) {
        return { i: prevState.i + 1 };
      });
  
      this.newMembers = this.state.members.map((member) => (
        <TeamMember
          key={member.id}
          img={member.img}
          name={member.name}
          position={member.position}
          phone={member.phone}
          email={member.email}
          website={member.website}
        />
      ));
    }
  }


  render() {
    return (
        <div className="row">
            
            <button className="btn btn-primary btn-lg btn-block" 
            onClick={this.clickEvent}>Click me!</button>        
            {this.newMembers}
        </div>
    );
  }
}

export default Team;
