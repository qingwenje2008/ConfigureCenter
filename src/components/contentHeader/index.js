
import React from 'react';
import {
    Breadcrumb
} from 'antd';

class ContentHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ margin: '16px 0' }}>
                <div className="fl bread-crumbs">云知声智能病历质控系统</div>
                <div className="fr software-copyright">云知声智能病历质控系统<span className="version">V1.0</span></div>
          </div>
          );
    }
}
export default ContentHeader;