import React, {Component} from 'react';
import SiderLeft from '../component/MenuSider'

class Home extends Component {
    render() {
        return (
            <div>
                <SiderLeft></SiderLeft>
                <div className="homeclassright">
                    内容
                </div>

            </div>
        );
    }
}

export default Home;