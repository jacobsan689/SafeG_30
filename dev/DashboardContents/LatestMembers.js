/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from "react";
import LatestMember from './LatestMember';
import {Link} from 'react-router-dom'
class LatestMembers extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ui four column stackable grid dis-table">
                    {this.props.latestUsers.map((memb, index)=>{
                        return(
                            <LatestMember key={index} memb={memb}/>
                        );
                    })}
                <div className="ui right aligned container m-xl-b"><Link to="manage-users" href="javascript:void(0)" className="text-info">VIEW
                    ALL USERS</Link></div>
            </div>
        );
    }
}
export default LatestMembers;