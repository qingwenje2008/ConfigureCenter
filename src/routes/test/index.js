import React from 'react';
import { connect } from 'dva';
import {realQuestions} from '../../utils/question';
import styles from './index.css';
@connect(state => ({ ...state.products, ...state.test }))
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  componentDidMount(){
    console.log(realQuestions);

    // let objFilter={};
    // let questionArr=[];
    // realQuestions.forEach(element => {
    //    if(objFilter[element.title]&&element.A==objFilter[element.title].A){//重复

    //    }else{
    //      objFilter[element.title]={A:element.A};
    //      questionArr.push(element);
    //    }
    // });
    // console.log(questionArr);
    // console.log(JSON.stringify(questionArr));

  }
  filterAnswerQuestion=(e)=>{
    const str = e.target.result.replace(/\s*/g,'');
    const arr = str.split(/第\d+题得分：\d/);
    console.log(arr);
    let newArr  = arr.map(element => {
      let obj={};
      let answers=[];
      let option =[];
     const wordArr = element.split(/[A-Z]\./);
     wordArr.forEach((element,index) => {
       if(index==0){
         obj.title=element;
        
       }else{
         let word='A';
         if(element.endsWith('正确')){
          // obj[String.fromCharCode(word.charCodeAt() + index-1)]=element.substring(0,element.length-3);
          option.push(element.substring(0,element.length-3));
          answers.push(String.fromCharCode(word.charCodeAt() + index-1));
          obj.answers=answers;
        }else if(element.endsWith('错误')){
          // obj[String.fromCharCode(word.charCodeAt() + index-1)]=element.substring(0,element.length-3);
          option.push(element.substring(0,element.length-3));
        }else{
          obj[String.fromCharCode(word.charCodeAt() + index-1)]=element;
          option.push(element);
        }
       }
     });


      return {
        title:wordArr[0],
        option,
        ...obj
      };
    });
    console.log(newArr);
    console.log(JSON.stringify(newArr));
  }
  filterNormalQuestion=(e)=>{
    const str = e.target.result.replace(/\s*/g,'');
    // const str ='49.SSP引擎要求麦克风位置误差不超过？A.±0.3mmB.±1mmC.±5mmD.±10mm'
    const arr = str.split(/\d+\./);
    let newArr  = arr.map(element => {
      let obj={};
      let option = [];
     const wordArr = element.split(/[A-Z]\./);
     wordArr.forEach((element,index) => {
       if(index==0){
         obj.title=element;
       }else{
         let word='A';
        //  obj[String.fromCharCode(word.charCodeAt() + index-1)]=element;
         option.push(element);
       }
     });

      return {
        title:wordArr[0],
        option,
        ...obj
      };
    });
    //下面是去重工作
    let objFilter={};
    let questionArr=[];
    newArr.forEach(element => {
       if(objFilter[element.title]&&element.A==objFilter[element.title].A){//重复

       }else{
         objFilter[element.title]={A:element.A};
         questionArr.push(element);
       }
    });
    console.log(questionArr);
    console.log(JSON.stringify(questionArr));
  }
  onChange = (files) => {
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    const that =this;
    reader.onload = (function (theFile) {
      return function (e) {
        that.filterAnswerQuestion(e);

       
      };
    })(file);
    reader.readAsText(file);
  }
  render() {

   
    return (
      <div className={styles.examination}>
         {/* <input type="file" id="file" onChange={this.onChange} /> */}
        {realQuestions.map((item,index)=>{
          return <div  key={index}>
            <div className={styles.question}>{index+1+'，'}{item.title} <span className={styles.answers}>{item.answers&&item.answers.join()}</span></div>
            {item.option.map((val,ind)=>{
              let word = 'A';
              let wordNum = String.fromCharCode(word.charCodeAt() + ind);
              
              return  <div className={item.answers&&item.answers.indexOf(wordNum)>-1?styles.rightOption:styles.option} key={ind}>{wordNum+'，'+val}</div>;
            })}
          </div>;
        })}
     
      </div>
    );
  }
}
export default Test;

