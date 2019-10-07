import React, {Component} from 'react';



class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <li key={item.id}>
                                    <p>{item["name"]}</p>
                                    <p>{item["intro"]}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default List;