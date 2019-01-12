
import React from 'react';
import styles from './head.css';
class ContentHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.contentheader}>
        <div className="breadcrumbs">{'云知声智能病历质控系统 >>>'}</div>
        <div>云知声智能病历质控系统<span>V1.0</span></div>
      </div>
    );
  }
}
export default ContentHeader;