import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
   <div>application2</div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
