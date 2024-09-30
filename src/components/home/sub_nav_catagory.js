function SubNavCatagory(props){

  var index = props.catagory.indexOf("|");
  var catagory = props.catagory.substring(0, index);

  return <p className="sub_nav_text"> {catagory} </p>

}



export default SubNavCatagory;
